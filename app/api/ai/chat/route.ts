import { NextResponse } from "next/server";
import { openai } from "../../../lib/openai";
import { buildChatPrompt } from "../../../lib/prompts";

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          message: "OPENAI_API_KEY non trovata.",
        },
        {
          status: 500,
        }
      );
    }

    const { question } = await req.json();

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: buildChatPrompt(question),
    });

    return NextResponse.json({
      message: response.output_text,
    });
  } catch (error: any) {
    console.error("OPENAI ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        message:
          error?.message ??
          "Errore durante la richiesta AI.",
      },
      {
        status: 500,
      }
    );
  }
}