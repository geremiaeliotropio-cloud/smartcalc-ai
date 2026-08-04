import ChatMessage from "./ChatMessage";

import type { ChatMessage as ChatMessageType } from "../../types/ai";

interface Props {
  messages: ChatMessageType[];
}

export default function ChatHistory({
  messages,
}: Props) {
  return (
    <>
      {messages.map((message, index) => (
        <ChatMessage
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}
    </>
  );
}