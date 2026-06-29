"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  role: "user" | "ai";
  text: string;
};

export default function ChatBubble({ role, text }: Props) {
  const isUser = role === "user";
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div
      className={`flex items-start gap-3 mb-5 ${
        isUser ? "flex-row-reverse" : ""
      }`}
    >
      {/* Avatar */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold ${
          isUser ? "bg-blue-600" : "bg-green-600"
        }`}
      >
        {isUser ? "👤" : "🤖"}
      </div>

      {/* Message */}
      <div className="relative max-w-[75%]">

        <button
          onClick={copyText}
          className="absolute -top-3 right-0 text-xs bg-gray-700 px-2 py-1 rounded hover:bg-gray-600"
        >
          {copied ? "✅" : "📋"}
        </button>

        <div
          className={`rounded-2xl px-4 py-3 shadow-lg ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-white"
          }`}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {text}
          </ReactMarkdown>
        </div>

      </div>
    </div>
  );
}