import type { ChatMessage } from "../../types/ai";

interface Props {
  messages: ChatMessage[];
}

import ChatMessageComponent from "./ChatMessage";

export default function ChatHistory({
  messages,
}: Props) {
  return (
    <div className="space-y-4">
      {messages.map((message, index) => (
        <ChatMessageComponent
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}
    </div>
  );
}