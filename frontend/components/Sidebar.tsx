"use client";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#111827] border-r border-gray-700 flex flex-col">

      <div className="p-5">
        <button className="w-full rounded-xl bg-green-500 hover:bg-green-600 py-3 font-semibold transition">
          + New Chat
        </button>
      </div>

      <div className="px-3 space-y-2 flex-1">

        <button className="w-full rounded-xl bg-gray-800 hover:bg-gray-700 p-3 text-left transition">
          💬 Today's Chat
        </button>

        <button className="w-full rounded-xl hover:bg-gray-800 p-3 text-left transition">
          🚀 AI Project
        </button>

        <button className="w-full rounded-xl hover:bg-gray-800 p-3 text-left transition">
          🖼️ Image Ideas
        </button>

      </div>

      <div className="border-t border-gray-700 p-4 text-center text-gray-400 text-sm">
        Genesis AI v1.0
      </div>

    </aside>
  );
}