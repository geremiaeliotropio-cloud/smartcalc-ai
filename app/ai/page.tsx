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
  const [messages, setMessages] = useState<ChatMessage[]>([
    initialMessage,
  ]);

  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    setMounted(true);

    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        setMessages(JSON.parse(saved));
      }
    } catch {
      // ignora eventuali dati non validi
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(messages)
    );
  }, [messages, mounted]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
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
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-bold sm:text-5xl">
          🤖 SmartCalc AI
        </h1>

        <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base">
          Il tuo assistente intelligente per stipendi,
          mutui, prestiti, pensioni, IVA e finanza
          personale.
        </p>

        <div className="mt-6">
          <button
            type="button"
            onClick={clearConversation}
            className="w-full rounded-xl border border-red-500 px-4 py-3 text-red-400 transition hover:bg-red-500 hover:text-white sm:ml-auto sm:block sm:w-auto"
          >
            🗑 Cancella conversazione
          </button>
        </div>

        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-4 sm:mt-10 sm:p-6">
          <div className="max-h-[60vh] space-y-4 overflow-y-auto sm:max-h-[550px]">
            <ChatHistory messages={messages} />

            {loading && <TypingIndicator />}

            <div ref={bottomRef} />
          </div>

          <ChatInput
            value={question}
            onChange={setQuestion}
            onSend={sendMessage}
          />
        </div>

        <div className="mt-8 sm:mt-10">
          <h2 className="mb-4 text-lg font-semibold sm:mb-5 sm:text-xl">
            Domande suggerite
          </h2>

          <div className="flex flex-wrap gap-2 sm:gap-3">
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
                type="button"
                onClick={() => setQuestion(example)}
                className="rounded-full border border-slate-700 px-3 py-2 text-xs transition hover:border-cyan-400 hover:text-cyan-400 sm:px-4 sm:text-sm"
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