"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  role: "user" | "ai";
  text?: string;
  image?: string;
};

export default function ChatBubble({
  role,
  text,
  image,
}: Props) {
  return (
    <div
      className={`mb-5 flex ${
        role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-2xl rounded-2xl px-4 py-3 shadow-lg ${
          role === "user"
            ? "bg-green-600 text-white"
            : "bg-gray-800 text-white"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt="Generated Image"
            className="rounded-xl max-w-full"
          />
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {text || ""}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}