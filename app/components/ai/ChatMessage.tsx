interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function ChatMessage({
  role,
  content,
}: Props) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          rounded-2xl
          px-5
          py-4
          whitespace-pre-wrap
          break-words
          max-w-[92%]
          md:max-w-[80%]
          ${
            isUser
              ? "bg-cyan-500 text-white"
              : "bg-slate-800 text-slate-200"
          }
        `}
      >
        {content}
      </div>
    </div>
  );
}