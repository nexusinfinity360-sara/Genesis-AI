"use client";

export default function Header() {
  return (
    <header className="h-16 border-b border-gray-700 bg-[#0b1220] flex items-center justify-between px-6">

      <div>
        <h1 className="text-xl font-bold text-white">
          💬 Genesis AI
        </h1>

        <p className="text-xs text-gray-400">
          Powered by Groq AI
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>

        <span className="text-sm text-green-400">
          Online
        </span>
      </div>

    </header>
  );
}