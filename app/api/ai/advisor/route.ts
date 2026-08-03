import { NextResponse } from "next/server";

import { openai } from "@/app/lib/openai";
import { buildAdvisorPrompt } from "@/app/lib/prompts";

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

    const body = await req.json();

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: buildAdvisorPrompt(body),
    });

    return NextResponse.json({
      message: response.output_text,
    });
  } catch (error) {
    console.error("ADVISOR ERROR:", error);

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Errore durante la richiesta Advisor.",
      },
      {
        status: 500,
      }
    );
  }
}