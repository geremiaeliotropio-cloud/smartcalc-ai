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
    let message = "Errore durante la richiesta AI.";

    try {
      const error = await response.json();

      if (
        error &&
        typeof error.message === "string"
      ) {
        message = error.message;
      }
    } catch {
      // Nessun body JSON disponibile
    }

    throw new Error(message);
  }

  const result: AIResponse =
    await response.json();

  return result.message;
}