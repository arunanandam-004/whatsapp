import { useState } from "react";
import { MessageCircle, X, Sparkles, ArrowRight } from "lucide-react";

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSimulator = () => {
    setIsOpen(false);
    document.getElementById("simulator-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 p-4 rounded-2xl bg-zinc-900 border border-emerald-500/30 shadow-2xl shadow-emerald-950/60 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-white">Vabsgen WhatsApp AI</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-zinc-300 space-y-2">
            <p>
              👋 Hello! Want to experience how an autonomous WhatsApp AI agent handles inquiries and books appointments?
            </p>
            <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-emerald-300">
              ⚡ Typical response time: <strong>0.8 seconds</strong>
            </div>
          </div>

          <button
            onClick={scrollToSimulator}
            className="w-full py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Live Simulator</span>
            <ArrowRight className="w-3.5 h-3.5 ml-auto" />
          </button>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-400 text-zinc-950 shadow-xl shadow-emerald-500/35 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Open WhatsApp AI Agent Preview"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-200 border-2 border-zinc-950 text-[9px] font-bold text-zinc-950 items-center justify-center">
            1
          </span>
        </span>

        {isOpen ? (
          <X className="w-6 h-6 text-zinc-950" />
        ) : (
          <MessageCircle className="w-6 h-6 text-zinc-950 group-hover:rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
}
