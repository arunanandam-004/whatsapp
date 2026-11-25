import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Bot,
  CheckCheck,
  MessageCircle,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Star,
  ChevronDown,
  User,
} from "lucide-react";

import { getSpriteFrameIndex, SPRITE_FRAME_COUNT } from "@/lib/sprite-frame";

type WhatsAppAutomationSectionProps = {
  spriteSrc: string;
};

// Rich, dynamic dialogues and status tags for every single frame from 1 to 16
const FRAME_STORIES = [
  {
    frame: 1,
    action: "Sleeping Zzz • 2:47 AM",
    desc: "Awaiting customer message while human staff is asleep",
    customer: {
      msg: "Hi! We need an urgent consultation for our team tomorrow. Do you have any slots open?",
      status: "Sent from Instagram Ad • 2:47 AM",
      time: "2:47 AM",
    },
    ai: {
      title: "Agent on Standby (24/7 Monitoring)",
      msg: "⚡ Inbound lead detected from social campaign. Waking up autonomous agent instance in 120ms...",
      badge: "Webhook Received",
      status: "Triggered in 0.12s",
    },
  },
  {
    frame: 2,
    action: "Awakening • Inbound Alert",
    desc: "New high-intent lead detected from social ads",
    customer: {
      msg: "Our budget is around $2,000 and we have 4 members needing onboarding.",
      status: "Delivered to WhatsApp Cloud API",
      time: "2:47 AM",
    },
    ai: {
      title: "Awakening & Intent Extraction",
      msg: "🧠 Parsing requirements: Team Size = 4 | Budget = $2,000 | Intent = Fast Track Onboarding.",
      badge: "Lead Qualified: High-Ticket",
      status: "Intent Confirmed (99.8%)",
    },
  },
  {
    frame: 3,
    action: "Analyzing Query Context",
    desc: "Instant intent parsing in under 0.4 seconds",
    customer: {
      msg: "Looking for someone who specializes in enterprise systems and CRM sync.",
      status: "Active in WhatsApp conversation",
      time: "2:47 AM",
    },
    ai: {
      title: "Knowledge Base RAG Search",
      msg: "🔍 Searching vector memory across company PDFs, website, and case studies for Enterprise Tier.",
      badge: "Matching Knowledge: 100%",
      status: "Vector Search: 34ms",
    },
  },
  {
    frame: 4,
    action: "Reading Requirements",
    desc: "Checking inventory, rates, and live database",
    customer: {
      msg: "Prefer afternoon slots after 2:00 PM tomorrow if possible!",
      status: "Typing preferences...",
      time: "2:47 AM",
    },
    ai: {
      title: "Live Calendar Inventory Query",
      msg: "📅 Querying Google Calendar & HubSpot for tomorrow afternoon availability between 2:00 PM and 5:00 PM.",
      badge: "Found: 2:30 PM & 4:00 PM",
      status: "Google Calendar Live Sync",
    },
  },
  {
    frame: 5,
    action: "Checking Availability",
    desc: "Syncing Google Calendar & CRM in real time",
    customer: {
      msg: "Awaiting response... (Waited only 0.6 seconds)",
      status: "Customer is eagerly looking at screen",
      time: "2:47 AM",
    },
    ai: {
      title: "Autonomous Response Composition",
      msg: "Hello Alex! 👋 Absolutely. We specialize in enterprise onboarding for teams of 4. We have tomorrow at 2:30 PM or 4:00 PM open with Marcus.",
      badge: "First Reply in < 800ms",
      status: "Double Blue Ticks • Read",
    },
  },
  {
    frame: 6,
    action: "High-Ticket Lead Matched",
    desc: "Qualified prospect with confirmed budget",
    customer: {
      msg: "Wow, you replied in 1 second! 2:30 PM sounds perfect for us.",
      status: "Impressed by instant speed",
      time: "2:48 AM",
    },
    ai: {
      title: "Slot Reservation & Lock",
      msg: "🎉 Excellent! I am holding the 2:30 PM slot for 10 minutes while we confirm your project details.",
      badge: "Slot Temporarily Reserved",
      status: "Reserved on Calendar",
    },
  },
  {
    frame: 7,
    action: "Generating Proposal",
    desc: "Drafting human-like empathetic response",
    customer: {
      msg: "Should I send our project brief now?",
      status: "Ready to proceed immediately",
      time: "2:48 AM",
    },
    ai: {
      title: "Proposal Recommendation Engine",
      msg: "Yes please! You can attach the PDF here or reply with 2 bullet points. Our Growth Plan ($1,490) covers all 4 seats.",
      badge: "Tier: Growth Autopilot",
      status: "Quote Generated",
    },
  },
  {
    frame: 8,
    action: "Instant Dispatch",
    desc: "Sending official WhatsApp message with slot options",
    customer: {
      msg: "📄 Attached: Q3_Enterprise_Brief.pdf (1.2 MB)",
      status: "Document uploaded via WhatsApp",
      time: "2:48 AM",
    },
    ai: {
      title: "Instant PDF Parsing & Summary",
      msg: "Got it! I just reviewed your brief. All 4 members will be onboarded on our accelerated 2-week track.",
      badge: "PDF Analyzed in 420ms",
      status: "OCR & Summary Complete",
    },
  },
  {
    frame: 9,
    action: "Syncing Team Schedule",
    desc: "Reserving 2:30 PM appointment slot automatically",
    customer: {
      msg: "What is the next step to confirm everything?",
      status: "High purchase readiness",
      time: "2:48 AM",
    },
    ai: {
      title: "Calendar Confirmation & Invites",
      msg: "✅ You are officially booked for tomorrow at 2:30 PM! Google Meet link has been added to your calendar invite.",
      badge: "Google Calendar Invites Sent",
      status: "Attendees: Alex + Marcus",
    },
  },
  {
    frame: 10,
    action: "Calendar Confirmed",
    desc: "Meeting invite delivered directly inside chat",
    customer: {
      msg: "Received the Google Calendar invite on my phone! That was seamless.",
      status: "Calendar invitation accepted",
      time: "2:49 AM",
    },
    ai: {
      title: "CRM Pipeline Auto-Update",
      msg: "🔄 Lead status automatically transitioned to 'Opportunity Won - Pending Deposit' in HubSpot CRM.",
      badge: "HubSpot & Salesforce Synced",
      status: "Deal Value: $1,490",
    },
  },
  {
    frame: 11,
    action: "Customer Delighted",
    desc: "Instant 1-second response impresses the prospect",
    customer: {
      msg: "How do we settle the onboarding deposit?",
      status: "Asking for payment link",
      time: "2:49 AM",
    },
    ai: {
      title: "Secure Stripe Link Generation",
      msg: "Here is your encrypted Stripe checkout link: wa.me/pay/onboard-9821. Supports Apple Pay, Visa, and Wire Transfer.",
      badge: "Stripe Payment Link Active",
      status: "SSL 256-bit Encrypted",
    },
  },
  {
    frame: 12,
    action: "Proposal Accepted",
    desc: "Customer agrees and requests payment details",
    customer: {
      msg: "Opening Apple Pay now on my phone...",
      status: "Processing secure checkout",
      time: "2:49 AM",
    },
    ai: {
      title: "Stripe Webhook Listener Active",
      msg: "⏳ Monitoring Stripe webhook event: payment_intent.succeeded for customer Alex...",
      badge: "Awaiting Webhook Ping",
      status: "Live Webhook Polling",
    },
  },
  {
    frame: 13,
    action: "Payment Link Sent",
    desc: "Secure Stripe & WhatsApp Pay checkout generated",
    customer: {
      msg: "Payment completed! Receipt received in my email.",
      status: "Deposit Paid: $1,490.00",
      time: "2:50 AM",
    },
    ai: {
      title: "Deposit Captured & Receipt Generated",
      msg: "Payment confirmed! 👍 Your invoice #INV-4921 has been marked PAID and emailed to accounting.",
      badge: "Deposit Paid: $1,490.00",
      status: "Stripe Webhook Verified",
    },
  },
  {
    frame: 14,
    action: "Deposit Paid ($1,490)",
    desc: "Payment confirmed, invoice automatically filed",
    customer: {
      msg: "I cannot believe we did all of this at 2:50 AM directly inside WhatsApp!",
      status: "Customer is blown away",
      time: "2:50 AM",
    },
    ai: {
      title: "Welcome Kit & Day 1 Hand-Off",
      msg: "That's the power of 24/7 AI! 😉 Here is your Day 1 Preparation Kit. Our senior director Marcus will meet you at 2:30 PM.",
      badge: "Onboarding Kit Delivered",
      status: "Auto-Assigned to Marcus",
    },
  },
  {
    frame: 15,
    action: "5-Star Customer Review",
    desc: "'Fastest and best service ever!'",
    customer: {
      msg: "Giving you guys 5 stars! Best experience with any SaaS company ever ⭐⭐⭐⭐⭐",
      status: "NPS Rating: 10 / 10",
      time: "2:50 AM",
    },
    ai: {
      title: "CSAT Capture & Review Logging",
      msg: "Thank you so much Alex! We appreciate the love. Have a wonderful rest of your night!",
      badge: "NPS: 10/10 Promoted",
      status: "Logged in CSAT Dashboard",
    },
  },
  {
    frame: 16,
    action: "Autopilot Sale Closed! 💚",
    desc: "Zero human effort, high revenue generated 24/7",
    customer: {
      msg: "See you tomorrow at 2:30 PM! 💚",
      status: "Converted VIP Customer",
      time: "2:51 AM",
    },
    ai: {
      title: "Autopilot Conversion Completed! 🏆",
      msg: "Sale closed with zero human delay. 4.8x faster conversion, happy customer, revenue in the bank 24/7.",
      badge: "100% Autopilot Success",
      status: "Deal Closed in 4 Minutes",
    },
  },
];

export function WhatsAppAutomationSection({
  spriteSrc,
}: WhatsAppAutomationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const currentFrameRef = useRef(0);

  const [frameIndex, setFrameIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const [spriteReady, setSpriteReady] = useState(false);

  // Fast direct 2D canvas draw — ZERO layout thrashing (no getBoundingClientRect on scroll)
  const drawFrame = useCallback((frame: number) => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const cols = 4;
    const rows = 4;
    const cellW = img.naturalWidth / cols;
    const cellH = img.naturalHeight / rows;

    const col = frame % cols;
    const row = Math.floor(frame / cols);

    const sx = col * cellW;
    const sy = row * cellH;

    ctx.drawImage(
      img,
      sx,
      sy,
      cellW,
      cellH,
      0,
      0,
      canvas.width,
      canvas.height
    );
  }, []);

  // Resize canvas ONCE on mount or window resize only
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Preload storyboard image
  useEffect(() => {
    let disposed = false;

    const img = new Image();
    img.decoding = "async";
    img.src = spriteSrc;

    const handleLoaded = () => {
      if (disposed) return;
      imageRef.current = img;
      setSpriteReady(true);
      updateCanvasSize();
    };

    if (img.complete && img.naturalWidth > 0) {
      handleLoaded();
    } else {
      img.onload = handleLoaded;
      img.onerror = () => {
        if (spriteSrc.endsWith(".jpg")) {
          img.src = "/whatsapp_robot_celebration_storyboard.png";
        } else {
          if (!disposed) setSpriteReady(false);
        }
      };
    }

    return () => {
      disposed = true;
      img.onload = null;
      img.onerror = null;
    };
  }, [spriteSrc, updateCanvasSize]);

  // Handle window resize
  useEffect(() => {
    window.addEventListener("resize", updateCanvasSize, { passive: true });
    return () => window.removeEventListener("resize", updateCanvasSize);
  }, [updateCanvasSize]);

  // GSAP ScrollTrigger setup — lightweight, zero layout reflows
  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    gsap.registerPlugin(ScrollTrigger);

    const trigger = ScrollTrigger.create({
      trigger: section,
      pin: stage,
      start: "top top",
      end: () => `+=${Math.round(window.innerHeight * 2.2)}`,
      scrub: 0.25,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const nextFrame = getSpriteFrameIndex(self.progress);
        if (nextFrame !== currentFrameRef.current) {
          currentFrameRef.current = nextFrame;
          drawFrame(nextFrame);
          setFrameIndex(nextFrame);
          setPhase(Math.min(4, Math.floor(self.progress * 5)));
        }
      },
    });

    ScrollTrigger.refresh();

    return () => {
      trigger.kill(true);
    };
  }, [drawFrame]);

  const currentStory = FRAME_STORIES[frameIndex] || FRAME_STORIES[0]!;

  const spriteStyle = {
    "--wa-sprite-image": `url("${spriteSrc}")`,
    "--wa-frame-x": `${((frameIndex % 4) / 3) * 100}%`,
    "--wa-frame-y": `${(Math.floor(frameIndex / 4) / 3) * 100}%`,
  } as CSSProperties;

  return (
    <section id="story-section" ref={sectionRef} className="wa-page" data-phase={phase}>
      <div className="wa-lighting" aria-hidden="true" />
      <div ref={stageRef} className="wa-stage">
        <div className="wa-stage-shell">
          {/* Hero Copy */}
          <header className="wa-copy">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles size={12} aria-hidden="true" />
              <span>Scroll Down to Watch the AI Agent in Action</span>
            </div>
            <h1 className="!text-3xl sm:!text-5xl lg:!text-6xl font-black font-display tracking-tight text-white leading-[1.08]">
              <span>Automate Your WhatsApp.</span>
              <span className="wa-heading-accent text-emerald-400">
                Close Deals On Autopilot.
              </span>
            </h1>
            <p className="wa-description !text-zinc-300 !text-sm sm:!text-base max-w-2xl mx-auto mt-2">
              As you scroll, watch our AI robot detect inbound leads at 2 AM, answer complex questions, schedule calendar appointments, and capture payments.
            </p>

            {/* Quick Hero Action Buttons */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#simulator-section"
                className="px-6 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-zinc-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Try Live Simulator</span>
                <ArrowRight size={15} />
              </a>
              <a
                href="#pricing-section"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/10 transition-all hover:border-white/20"
              >
                View Plans & Pricing
              </a>
            </div>
          </header>

          {/* Central Sprite Scene & Big WhatsApp Dynamic Cards */}
          <div className="wa-scene">
            <div className="wa-orbit wa-orbit--outer" aria-hidden="true" />
            <div className="wa-orbit wa-orbit--inner" aria-hidden="true" />
            <span className="wa-scene-spark wa-scene-spark--one" aria-hidden="true">
              <Sparkles size={18} />
            </span>
            <span className="wa-scene-spark wa-scene-spark--two" aria-hidden="true">
              <Zap size={16} />
            </span>

            {/* BIG Story Card Left (Customer Perspective) */}
            <div className="hidden lg:flex absolute left-2 xl:left-6 2xl:left-10 top-1/2 -translate-y-1/2 w-96 xl:w-[440px] 2xl:w-[480px] flex-col gap-3 pointer-events-none transition-all duration-300 z-10">
              <div className="p-6 xl:p-7 rounded-3xl bg-zinc-900/95 border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl ring-1 ring-white/10">
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-zinc-800 border border-white/15 flex items-center justify-center text-zinc-200 font-bold text-sm shadow">
                      <User size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-white text-base block leading-tight">
                        Alex (Inbound Lead)
                      </span>
                      <span className="text-xs text-zinc-400">
                        {currentStory.customer.status}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono font-medium">
                    {currentStory.customer.time}
                  </span>
                </div>

                {/* WhatsApp Chat Bubble */}
                <div className="relative p-5 rounded-2xl rounded-tl-none bg-[#202c33] text-white text-base sm:text-lg xl:text-xl font-medium leading-relaxed shadow-lg border border-white/10">
                  <p>{currentStory.customer.msg}</p>
                  <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-zinc-400">
                    <span>{currentStory.customer.time}</span>
                    <CheckCheck size={16} className="text-sky-400" />
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-emerald-400 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    Story Step {frameIndex + 1} of 16
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    Customer Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Central Animated Robot Canvas with instant CSS sprite base */}
            <div
              className={`wa-robot-art${spriteReady ? " is-ready" : ""}`}
              role="img"
              aria-label={`WhatsApp robot frame ${frameIndex + 1} of ${SPRITE_FRAME_COUNT}`}
            >
              <div className="wa-sprite-frame" style={spriteStyle} />
              <canvas
                ref={canvasRef}
                className="relative z-10 w-full h-full object-contain block"
              />
            </div>

            {/* BIG Story Card Right (AI Agent Perspective) */}
            <div className="hidden lg:flex absolute right-2 xl:right-6 2xl:right-10 top-1/2 -translate-y-1/2 w-96 xl:w-[440px] 2xl:w-[480px] flex-col gap-3 pointer-events-none transition-all duration-300 z-10">
              <div className="p-6 xl:p-7 rounded-3xl bg-zinc-900/95 border-2 border-emerald-500/50 shadow-[0_25px_60px_rgba(16,185,129,0.25)] backdrop-blur-2xl ring-1 ring-emerald-500/30">
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-zinc-950 font-bold text-sm shadow-md shadow-emerald-500/40">
                      <Bot size={19} />
                    </div>
                    <div>
                      <span className="font-bold text-emerald-300 text-base flex items-center gap-1.5 leading-tight">
                        Vabsgen WhatsApp Agent
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </span>
                      <span className="text-xs text-zinc-400">
                        {currentStory.ai.status}
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    {currentStory.ai.badge}
                  </span>
                </div>

                {/* WhatsApp Chat Bubble (AI Green) */}
                <div className="relative p-5 rounded-2xl rounded-tr-none bg-[#005c4b] text-white text-base sm:text-lg xl:text-xl font-medium leading-relaxed shadow-xl">
                  <div className="text-xs sm:text-sm font-bold text-emerald-200 mb-1.5 uppercase tracking-wide">
                    {currentStory.ai.title}
                  </div>
                  <p>{currentStory.ai.msg}</p>
                  <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-emerald-200">
                    <span>2:47 AM</span>
                    <CheckCheck size={16} className="text-sky-300" />
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-zinc-300 truncate max-w-[260px]">
                    Action: <strong className="text-emerald-300">{currentStory.action}</strong>
                  </span>
                  <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
                    24/7 Autopilot
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Dynamic Card (Unified and Big) */}
            <div className="lg:hidden absolute bottom-1 left-2 right-2 p-4 sm:p-5 rounded-2xl bg-zinc-900/95 border-2 border-emerald-500/40 shadow-2xl backdrop-blur-xl pointer-events-none z-10">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-xs sm:text-sm">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Frame {frameIndex + 1}/16: {currentStory.action}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                  {currentStory.ai.badge}
                </span>
              </div>
              <div className="text-sm sm:text-base text-white leading-relaxed font-medium line-clamp-3">
                💬 {currentStory.ai.msg}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
