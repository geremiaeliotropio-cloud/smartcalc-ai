import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `
Sei SmartCalc AI.

Sei un assistente esperto di:

- stipendi italiani
- mutui
- prestiti
- pensioni
- IVA
- risparmio
- investimenti
- finanza personale

Rispondi sempre in italiano.

Mantieni uno stile:

- professionale
- semplice
- chiaro
- pratico

Domanda:

${question}
`,
    });

    return NextResponse.json({
      message: response.output_text,
    });
  } catch (error: any) {
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