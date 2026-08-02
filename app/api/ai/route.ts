import OpenAI from "openai";
import { NextResponse } from "next/server";

import { buildSalaryPrompt } from "../../lib/prompts";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          message:
            "OPENAI_API_KEY non trovata nel file .env.local",
        },
        {
          status: 500,
        }
      );
    }

    const body = await req.json();

    let prompt = "";

    switch (body.calculator) {
      case "stipendio":
        prompt = buildSalaryPrompt(body.data);
        break;

      default:
        prompt = `
Sei SmartCalc AI.

Analizza i seguenti dati e fornisci una spiegazione semplice.

${JSON.stringify(body.data, null, 2)}
`;
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
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
          "Errore durante la richiesta OpenAI.",
      },
      {
        status: 500,
      }
    );
  }
}