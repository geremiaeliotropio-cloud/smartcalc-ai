import { NextResponse } from "next/server";

import { askOpenAI } from "../../lib/openaiRequest";
import { buildSalaryPrompt } from "../../lib/prompts";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body?.data) {
      return NextResponse.json(
        {
          message: "Dati mancanti.",
        },
        {
          status: 400,
        }
      );
    }

    const message = await askOpenAI([
      {
        role: "system",
        content:
          "Sei SmartCalc AI, consulente esperto di finanza personale, stipendi, mutui, prestiti e fiscalità italiana.",
      },
      {
        role: "user",
        content: buildSalaryPrompt(body.data),
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