import { NextResponse } from "next/server";

import { askOpenAI } from "../../lib/openaiRequest";
import { buildSystemPrompt } from "../../lib/prompts";
import { buildCalculatorPrompt } from "../../lib/calculatorPrompts";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.calculator || !body?.data) {
      return NextResponse.json(
        {
          message: "Dati mancanti.",
        },
        {
          status: 400,
        }
      );
    }

    const prompt = buildCalculatorPrompt(
      body.calculator,
      body.data
    );

    const message = await askOpenAI([
      {
        role: "system",
        content: buildSystemPrompt(),
      },
      {
        role: "user",
        content: prompt,
      },
    ]);

    return NextResponse.json({
      message,
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