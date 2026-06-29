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
      className={`mb-6 flex ${
        role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-2xl overflow-hidden shadow-xl ${
          role === "user"
            ? "bg-green-600 text-white"
            : "bg-[#1f2937] text-white border border-gray-700"
        }`}
      >
        {image ? (
          <div className="p-3">
            <img
              src={image}
              alt="Generated"
              className="rounded-xl w-full cursor-pointer hover:scale-[1.02] transition duration-300"
            />

            <div className="flex gap-2 mt-3">
              <a
                href={image}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
              >
                ⬇ Download
              </a>

              <a
                href={image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm"
              >
                🔍 View Full
              </a>
            </div>
          </div>
        ) : (
          <div className="p-4 leading-7">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {text || ""}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}