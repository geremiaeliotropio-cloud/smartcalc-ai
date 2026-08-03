"use client";

import { useEffect, useRef, useState } from "react";

import ChatHistory from "../components/ai/ChatHistory";
import ChatInput from "../components/ai/ChatInput";
import TypingIndicator from "../components/ai/TypingIndicator";

import type { ChatMessage } from "../types/ai";

const STORAGE_KEY = "smartcalc-chat";

const initialMessage: ChatMessage = {
  role: "assistant",
  content:
    "👋 Ciao! Sono SmartCalc AI. Posso aiutarti con stipendi, mutui, prestiti, pensioni, IVA e finanza personale. Fai pure una domanda!",
};

export default function AIPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (typeof window === "undefined") {
      return [initialMessage];
    }

    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      return saved
        ? (JSON.parse(saved) as ChatMessage[])
        : [initialMessage];
    } catch {
      return [initialMessage];
    }
  });

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages)
    );
  }, [messages]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage() {
    const text = question.trim();

    if (!text || loading) {
      return;
    }

    const updatedMessages: ChatMessage[] = [
      ...messages,
      {
        role: "user",
        content: text,
      },
    ];

    setMessages(updatedMessages);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "❌ Si è verificato un errore durante la richiesta.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function clearConversation() {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([initialMessage]);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-5xl font-bold">
          🤖 SmartCalc AI
        </h1>

        <p className="mt-4 text-slate-400">
          Il tuo assistente intelligente per
          stipendi, mutui, prestiti, pensioni,
          IVA e finanza personale.
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={clearConversation}
            className="rounded-xl border border-red-500 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
          >
            🗑 Cancella conversazione
          </button>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="max-h-[550px] space-y-4 overflow-y-auto">
            <ChatHistory messages={messages} />

            {loading && <TypingIndicator />}

            <div ref={bottomRef} />
          </div>

          <div
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
              }
            }}
          >
            <ChatInput
              value={question}
              onChange={setQuestion}
              onSend={sendMessage}
            />
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-5 text-xl font-semibold">
            Domande suggerite
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Mi conviene una RAL di 40.000 €?",
              "Come funziona l'IRPEF?",
              "Quanto dovrei risparmiare ogni mese?",
              "Posso permettermi un mutuo da 250.000 €?",
              "Mi conviene un fondo pensione?",
              "Come posso aumentare il mio stipendio netto?",
            ].map((example) => (
              <button
                key={example}
                onClick={() => setQuestion(example)}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
              >
                {example}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}