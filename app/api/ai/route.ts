import OpenAI from "openai";
import { NextResponse } from "next/server";

const apiKey = process.env.OPENAI_API_KEY;

console.log(
  "OPENAI_API_KEY:",
  apiKey ? apiKey.substring(0, 15) + "..." : "NON TROVATA"
);

const client = new OpenAI({
  apiKey,
});

export async function POST(req: Request) {
  try {
    if (!apiKey) {
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

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `
Sei SmartCalc AI.

Spiega il seguente calcolo in italiano.

Calcolatore:
${body.calculator}

Dati:
${JSON.stringify(body.data, null, 2)}

La risposta deve:

- essere semplice;
- spiegare il significato dei risultati;
- spiegare tasse e contributi se presenti;
- dare alcuni consigli pratici;
- non inventare dati.
`,
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
          "Errore sconosciuto durante la richiesta OpenAI.",
      },
      {
        status: 500,
      }
    );
  }
}