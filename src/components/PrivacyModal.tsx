import { useEffect } from "react";
import { X, Lock } from "lucide-react";
import { PrivacyContent } from "./PrivacyContent";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-emerald-950/40 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-zinc-900/60 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <img src="/vabsgen-logo.png" alt="Vabsgen" className="h-8 w-auto object-contain" />
            <div className="h-5 w-px bg-white/15" />
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
              <Lock className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close Privacy Policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
          <PrivacyContent />
        </div>

        {/* Bottom Footer Actions */}
        <div className="px-6 py-3.5 border-t border-white/10 bg-zinc-900/40 flex items-center justify-between text-xs text-zinc-400 shrink-0">
          <span>DPDP Act 2023 Compliant • Vabsgen</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
