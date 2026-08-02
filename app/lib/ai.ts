import type {
  AIRequest,
  AIResponse,
} from "../types/ai";

export async function explainCalculation(
  request: AIRequest
): Promise<string> {
  const response = await fetch("/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error(
      "Errore durante la richiesta AI."
    );
  }

  const result: AIResponse =
    await response.json();

  return result.message;
}