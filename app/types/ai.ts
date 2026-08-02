export interface AIRequest {
  calculator: string;
  data: Record<string, unknown>;
}

export interface AIResponse {
  message: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}