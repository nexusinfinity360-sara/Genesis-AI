import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <div className="h-screen bg-[#0f172a] text-white flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">

        <Header />

        <div className="flex-1 overflow-hidden">
          <AIChat />
        </div>

      </div>

    </div>
  );
}