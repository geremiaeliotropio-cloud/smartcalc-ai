import { openai } from "./openai";

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function askOpenAI(
  messages: ChatMessage[]
): Promise<string> {
  const response =
    await openai.chat.completions.create({
      model: "gpt-4.1-mini",
      messages,
    });

  return (
    response.choices[0].message.content ?? ""
  ).trim();
}

export async function askOpenAIJson<T>(
  prompt: string
): Promise<T> {
  const response = await askOpenAI([
    {
      role: "user",
      content: prompt,
    },
  ]);

  try {
    return JSON.parse(response) as T;
  } catch {
    throw new Error(
      "OpenAI ha restituito un JSON non valido."
    );
  }
}