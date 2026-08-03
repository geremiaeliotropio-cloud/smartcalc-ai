import { NextResponse } from "next/server";

import { askOpenAI } from "../../../lib/openaiRequest";
import { buildSystemPrompt } from "../../../lib/prompts";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body.messages)) {
      return NextResponse.json(
        {
          message: "Cronologia chat non valida.",
        },
        {
          status: 400,
        }
      );
    }

    const messages: ChatMessage[] = body.messages;

    const response = await askOpenAI([
      {
        role: "system",
        content: buildSystemPrompt(),
      },
      ...messages,
    ]);

    return NextResponse.json({
      message: response,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Errore durante la richiesta AI.",
      },
      {
        status: 500,
      }
    );
  }
}