"use client";

import { useState, useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hi 👋 How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "⚠️ Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full">

      <div className="flex-1 overflow-y-auto p-5">

        {messages.map((msg, index) => (
          <ChatBubble
            key={index}
            role={msg.role}
            text={msg.text}
          />
        ))}

        {loading && (
          <ChatBubble
            role="ai"
            text="🤖 Thinking..."
          />
        )}

        <div ref={chatEndRef} />

      </div>

      <div className="border-t border-gray-700 p-4 flex gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask Genesis AI anything..."
          className="flex-1 rounded-xl bg-gray-900 p-3 outline-none text-white"
        />

        <button
          onClick={sendMessage}
          className="rounded-xl bg-green-500 px-5 hover:bg-green-600 transition"
        >
          Send
        </button>

      </div>

    </div>
  );
}