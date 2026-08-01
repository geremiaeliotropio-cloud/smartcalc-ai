import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    message:
      `🤖 AI Demo

Hai utilizzato il calcolatore:

${body.calculator}

I dati sono stati ricevuti correttamente.

Nella prossima versione questa risposta verrà generata da OpenAI.`,
  });
}