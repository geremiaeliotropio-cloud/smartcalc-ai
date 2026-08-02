import ChatMessage from "./ChatMessage";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

interface Props {
  messages: Message[];
}

export default function ChatHistory({
  messages,
}: Props) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}
    </div>
  );
}