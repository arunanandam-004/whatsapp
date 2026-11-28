import { useState } from "react";
import { MessageCircle, X, Sparkles, ArrowRight, Stethoscope } from "lucide-react";

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSimulator = () => {
    setIsOpen(false);
    const el = document.getElementById("simulator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#simulator";
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 p-4 rounded-2xl bg-[#0B2D5B] border border-[#2563EB]/40 shadow-2xl shadow-[#040E1E]/80 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14B8A6]" />
              </span>
              <span className="text-xs font-bold text-white">Vabsgen Care Desk AI</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-300 space-y-2">
            <p>
              Hello! Want to see how an AI agent handles patient messages, bookings and emergencies?
            </p>
            <div className="p-2.5 rounded-xl bg-[#071D3B] border border-white/10 text-[11px] text-[#14B8A6] flex items-center gap-2">
              <Stethoscope className="w-3.5 h-3.5 shrink-0" />
              <span>Replies in seconds, 24/7</span>
            </div>
          </div>

          <button
            onClick={scrollToSimulator}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#0D9488] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#2563EB]/25"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Live Simulator -&gt;</span>
            <ArrowRight className="w-3.5 h-3.5 ml-auto" />
          </button>
        </div>
      )}

      {/* Floating Toggle Button (without fake notification badge) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#14B8A6] text-white shadow-xl shadow-[#2563EB]/35 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Open Healthcare WhatsApp AI Preview"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
}
