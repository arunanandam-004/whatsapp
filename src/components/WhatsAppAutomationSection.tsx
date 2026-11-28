import { useEffect, useRef, useState, useCallback, type CSSProperties } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bot, CheckCheck, Sparkles, Zap, ArrowRight, User } from "lucide-react";

import { getSpriteFrameIndex, SPRITE_FRAME_COUNT } from "@/lib/sprite-frame";

type WhatsAppAutomationSectionProps = {
  spriteSrc: string;
};

// Rich, dynamic dialogues and status tags for every single frame from 1 to 16
const FRAME_STORIES = [
  {
    frame: 1,
    action: "Standing by - 2:47 AM",
    desc: "Awaiting patient inquiry while hospital front desk is closed",
    customer: {
      msg: "Hello, I have had fever and cough for 3 days. Can I see a doctor tomorrow?",
      status: "Sent via WhatsApp",
      time: "2:47 AM",
      date: "",
    },
    ai: {
      title: "Agent on Standby (24/7)",
      msg: "Message received after hours. Waking the care agent instantly.",
      badge: "Message Received",
      status: "Responded in under a second",
    },
  },
  {
    frame: 2,
    action: "Awakening - New Patient Message",
    desc: "Existing patient returning with clinical history",
    customer: {
      msg: "I am Ananya Rao. I visited Dr. Mehta last month for my asthma.",
      status: "Delivered",
      time: "2:47 AM",
      date: "",
    },
    ai: {
      title: "Patient Memory Recall",
      msg: "Welcome back, Ananya. I found your record: last visit with Dr. Mehta (Pulmonology), noted asthma. Loading your preferences.",
      badge: "Patient Memory Loaded",
      status: "Record matched",
    },
  },
  {
    frame: 3,
    action: "Analyzing Symptoms Safely",
    desc: "Screening symptoms within clinical safety guardrails",
    customer: {
      msg: "I also get some wheezing at night.",
      status: "Typing",
      time: "2:47 AM",
      date: "",
    },
    ai: {
      title: "Safety Check",
      msg: "Checking for emergency signs. None detected, so I am arranging a regular visit. If breathing becomes difficult, I will alert the on-duty doctor immediately.",
      badge: "Safety Check Passed",
      status: "Escalation rules active",
    },
  },
  {
    frame: 4,
    action: "Reading Preferences",
    desc: "Checking morning OPD availability in hospital calendar",
    customer: {
      msg: "Morning slot would be best for me.",
      status: "Sharing preferences",
      time: "2:47 AM",
      date: "",
    },
    ai: {
      title: "Live Doctor Schedule Check",
      msg: "Checking Dr. Mehta's schedule for tomorrow morning in the hospital calendar.",
      badge: "Slots Found: 10:30 & 11:15 AM",
      status: "Live calendar sync",
    },
  },
  {
    frame: 5,
    action: "Checking Availability",
    desc: "Delivering real-time doctor availability options",
    customer: {
      msg: "Waiting for a reply...",
      status: "Looking at screen",
      time: "2:47 AM",
      date: "",
    },
    ai: {
      title: "Composing Reply",
      msg: "Hello Ananya. Dr. Mehta has 10:30 AM or 11:15 AM tomorrow. Which works for you?",
      badge: "First Reply in Seconds",
      status: "Delivered and Read",
    },
  },
  {
    frame: 6,
    action: "Slot Matched",
    desc: "Holding consultation slot while patient confirms",
    customer: {
      msg: "10:30 AM works. Thank you for replying so fast!",
      status: "Relieved",
      time: "2:48 AM",
      date: "",
    },
    ai: {
      title: "Slot Reserved",
      msg: "Holding the 10:30 AM slot for you while I confirm the details.",
      badge: "Slot Temporarily Held",
      status: "Reserved on calendar",
    },
  },
  {
    frame: 7,
    action: "Preparing Visit Checklist",
    desc: "Sharing pre-visit preparation instructions",
    customer: {
      msg: "Do I need to bring anything?",
      status: "Ready to proceed",
      time: "2:48 AM",
      date: "",
    },
    ai: {
      title: "Pre-Visit Guidance",
      msg: "Please bring a photo ID and any earlier reports. You can share them here on WhatsApp right now.",
      badge: "Visit Checklist Sent",
      status: "Hospital instructions used",
    },
  },
  {
    frame: 8,
    action: "Report Received",
    desc: "Receiving prior medical reports under controlled access",
    customer: {
      msg: "Attached: Chest_Xray_Oct.pdf",
      status: "Document uploaded",
      time: "2:48 AM",
      date: "",
    },
    ai: {
      title: "Secure Report Handling",
      msg: "Report received and attached to your record for Dr. Mehta. Only authorised staff can view it.",
      badge: "Report Added to Record",
      status: "Access controlled",
    },
  },
  {
    frame: 9,
    action: "Syncing Schedule",
    desc: "Confirming appointment in OPD schedule",
    customer: {
      msg: "Is my appointment confirmed?",
      status: "Waiting for confirmation",
      time: "2:48 AM",
      date: "",
    },
    ai: {
      title: "Appointment Confirmation",
      msg: "Confirmed. Tomorrow at 10:30 AM with Dr. Mehta, OPD Block B. A reminder will arrive 2 hours before.",
      badge: "Appointment Booked",
      status: "Reminder scheduled",
    },
  },
  {
    frame: 10,
    action: "Booking Confirmed",
    desc: "Synchronizing front desk and doctor's roster",
    customer: {
      msg: "Got the confirmation and the location pin. Very smooth.",
      status: "Appointment confirmed",
      time: "2:49 AM",
      date: "",
    },
    ai: {
      title: "Hospital System Updated",
      msg: "Your appointment is now visible to the front desk and the doctor's schedule.",
      badge: "Hospital System Synced",
      status: "Front desk notified",
    },
  },
  {
    frame: 11,
    action: "Prescription Ready",
    desc: "Doctor finishes consultation and digitally authorizes prescription",
    customer: {
      msg: "Dr. Mehta just finished. Can I get my prescription here?",
      status: "After consultation",
      time: "12:40 PM",
      date: "Next day",
    },
    ai: {
      title: "Doctor-Approved Prescription",
      msg: "Dr. Mehta has approved your digital prescription. Sending it now.",
      badge: "Doctor Approved",
      status: "Digitally signed",
    },
  },
  {
    frame: 12,
    action: "Prescription Delivered",
    desc: "Sending doctor-authorized prescription PDF via WhatsApp",
    customer: {
      msg: "Opening it now.",
      status: "Viewing prescription",
      time: "12:41 PM",
      date: "",
    },
    ai: {
      title: "Prescription Sent on WhatsApp",
      msg: "Here is your prescription PDF from Dr. Mehta. The medicines and instructions are exactly as written by your doctor.",
      badge: "Prescription Sent",
      status: "Delivered securely",
    },
  },
  {
    frame: 13,
    action: "Reminders Set",
    desc: "Scheduling medicine reminders according to doctor's prescription",
    customer: {
      msg: "Can you remind me when to take the medicines?",
      status: "Asking for reminders",
      time: "12:42 PM",
      date: "",
    },
    ai: {
      title: "Medication Reminders",
      msg: "Done. I will remind you as per the schedule your doctor wrote. For any change in medicines, please contact Dr. Mehta's team.",
      badge: "Reminders Set",
      status: "Follows doctor's instructions",
    },
  },
  {
    frame: 14,
    action: "Follow-up Check-in",
    desc: "Automated 3-day post-visit recovery check-in",
    customer: {
      msg: "Fever is gone. Wheezing is a little better.",
      status: "Replied to follow-up",
      time: "9:02 AM",
      date: "Day 3",
    },
    ai: {
      title: "Automatic Follow-up",
      msg: "Good morning Ananya. How are your fever and wheezing today? (Sent automatically 3 days after your visit.)",
      badge: "Follow-up Logged",
      status: "Response saved to record",
    },
  },
  {
    frame: 15,
    action: "Remembering Preferences",
    desc: "Booking review appointment matching patient's habitual slot",
    customer: {
      msg: "Please book a review next week.",
      status: "Requesting review",
      time: "9:03 AM",
      date: "",
    },
    ai: {
      title: "Review Booking With Memory",
      msg: "Booked with Dr. Mehta, next Tuesday 10:30 AM, same morning slot as you prefer.",
      badge: "Preference Remembered",
      status: "Appointment booked",
    },
  },
  {
    frame: 16,
    action: "Care Journey Completed",
    desc: "Full cycle handled seamlessly under hospital oversight",
    customer: {
      msg: "Thank you, this was so easy.",
      status: "Patient reassured",
      time: "9:04 AM",
      date: "",
    },
    ai: {
      title: "Care Journey Completed",
      msg: "Booking, records, prescription and follow-up, all on WhatsApp, with doctors and staff in control and your data protected.",
      badge: "Care Completed",
      status: "Handled with human oversight",
    },
  },
];

export function WhatsAppAutomationSection({ spriteSrc }: WhatsAppAutomationSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const currentFrameRef = useRef(0);

  const [frameIndex, setFrameIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const [spriteReady, setSpriteReady] = useState(false);

  // Fast direct 2D canvas draw with high-quality smoothing
  const drawFrame = useCallback((frame: number) => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const cols = 4;
    const rows = 4;
    const cellW = img.naturalWidth / cols;
    const cellH = img.naturalHeight / rows;

    const col = frame % cols;
    const row = Math.floor(frame / cols);

    const sx = col * cellW;
    const sy = row * cellH;

    ctx.drawImage(img, sx, sy, cellW, cellH, 0, 0, canvas.width, canvas.height);
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
    }

    return () => {
      disposed = true;
      img.onload = null;
    };
  }, [spriteSrc, updateCanvasSize]);

  // Handle window resize cleanly
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        updateCanvasSize();
      }, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateCanvasSize]);

  // Setup GSAP ScrollTrigger tween for silky smooth, inertia-damped frame scrubbing
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;

    // Responsive scroll distance: ~2800px on desktop, ~2000px on mobile for relaxed, controllable pace
    const isMobile = window.innerWidth < 768;
    const scrollDistance = isMobile ? 2000 : 2800;

    const proxy = { progress: 0 };

    const tween = gsap.to(proxy, {
      progress: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: stage,
        pinSpacing: true,
        scrub: 0.6, // Inertia damping for buttery-smooth mouse wheel & trackpad motion
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
      onUpdate: () => {
        const nextFrame = getSpriteFrameIndex(proxy.progress);
        if (nextFrame !== currentFrameRef.current) {
          currentFrameRef.current = nextFrame;
          drawFrame(nextFrame);
          setFrameIndex(nextFrame);
          setPhase(Math.min(4, Math.floor(proxy.progress * 5)));
        }
      },
    });

    ScrollTrigger.refresh();

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Sparkles size={12} aria-hidden="true" />
              <span>Scroll down to watch the AI agent care for a patient</span>
            </div>
            <h1 className="!text-3xl sm:!text-5xl lg:!text-6xl font-black font-display tracking-tight text-white leading-[1.08]">
              <span>Every Patient Message Answered.</span>{" "}
              <span className="wa-heading-accent text-[#14B8A6]">Care That Never Sleeps.</span>
            </h1>
            <p className="wa-description !text-slate-300 !text-sm sm:!text-base max-w-2xl mx-auto mt-2">
              As you scroll, watch our AI agent receive a patient&apos;s WhatsApp message at 2 AM,
              recall their history, book the right doctor, send a doctor-approved prescription and
              follow up after the visit, with your staff always in control.
            </p>

            {/* Quick Hero Action Button */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#simulator"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#0D9488] text-white font-bold text-sm shadow-lg shadow-[#2563EB]/25 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Try Live Simulator -&gt;</span>
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

            {/* BIG Story Card Left (Patient Perspective) */}
            <div className="hidden lg:flex absolute left-2 xl:left-6 2xl:left-10 top-1/2 -translate-y-1/2 w-96 xl:w-[440px] 2xl:w-[480px] flex-col gap-3 pointer-events-none z-10">
              <div className="p-6 xl:p-7 rounded-3xl bg-[#0B2D5B]/90 border-2 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl ring-1 ring-white/10 transition-colors duration-200">
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#071D3B] border border-white/15 flex items-center justify-center text-slate-200 font-bold text-sm shadow">
                      <User size={18} />
                    </div>
                    <div>
                      <span className="font-bold text-white text-base block leading-tight">
                        Ananya (Patient)
                      </span>
                      <span className="text-xs text-slate-300">{currentStory.customer.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-slate-300 font-mono font-medium">
                    {currentStory.customer.date && (
                      <span className="mr-1.5 text-slate-300 text-[11px] font-sans">
                        ({currentStory.customer.date})
                      </span>
                    )}
                    <span>{currentStory.customer.time}</span>
                  </div>
                </div>

                {/* WhatsApp Chat Bubble */}
                <div className="relative p-5 rounded-2xl rounded-tl-none bg-[#1E293B] text-white text-base sm:text-lg xl:text-xl font-medium leading-relaxed shadow-lg border border-white/10 min-h-[110px] flex flex-col justify-between">
                  <p>{currentStory.customer.msg}</p>
                  <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-slate-300">
                    {currentStory.customer.date && (
                      <span className="text-[11px] mr-1">{currentStory.customer.date},</span>
                    )}
                    <span>{currentStory.customer.time}</span>
                    <CheckCheck size={16} className="text-sky-400" />
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-[#14B8A6] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-pulse" />
                    Story Step {frameIndex + 1} of 16
                  </span>
                  <span className="text-xs text-slate-300 font-medium">Patient Experience</span>
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

            {/* BIG Story Card Right (AI Healthcare Agent Perspective) */}
            <div className="hidden lg:flex absolute right-2 xl:right-6 2xl:right-10 top-1/2 -translate-y-1/2 w-96 xl:w-[440px] 2xl:w-[480px] flex-col gap-3 pointer-events-none z-10">
              <div className="p-6 xl:p-7 rounded-3xl bg-[#0B2D5B]/95 border-2 border-[#14B8A6]/50 shadow-[0_25px_60px_rgba(20,184,166,0.25)] backdrop-blur-2xl ring-1 ring-[#14B8A6]/30 transition-colors duration-200">
                <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#14B8A6] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-[#2563EB]/40">
                      <Bot size={19} />
                    </div>
                    <div>
                      <span className="font-bold text-[#14B8A6] text-base flex items-center gap-1.5 leading-tight">
                        Vabsgen WhatsApp Agent
                        <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                      </span>
                      <span className="text-xs text-slate-300">{currentStory.ai.status}</span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-[#14B8A6]/20 text-[#14B8A6] border border-[#14B8A6]/40">
                    {currentStory.ai.badge}
                  </span>
                </div>

                {/* WhatsApp Chat Bubble (AI Green) */}
                <div className="relative p-5 rounded-2xl rounded-tr-none bg-[#0F3870] border border-[#2563EB]/30 text-white text-base sm:text-lg xl:text-xl font-medium leading-relaxed shadow-xl min-h-[130px] flex flex-col justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#14B8A6] mb-1.5 uppercase tracking-wide">
                      {currentStory.ai.title}
                    </div>
                    <p>{currentStory.ai.msg}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-teal-200">
                    {currentStory.customer.date && (
                      <span className="text-[11px] mr-1 opacity-80">
                        {currentStory.customer.date},
                      </span>
                    )}
                    <span>{currentStory.customer.time}</span>
                    <CheckCheck size={16} className="text-sky-300" />
                  </div>
                </div>

                <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-slate-300 truncate max-w-[260px]">
                    Action: <strong className="text-[#14B8A6]">{currentStory.action}</strong>
                  </span>
                  <span className="text-[#14B8A6] font-bold text-xs uppercase tracking-wider">
                    24/7 Care Desk
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile / Tablet Dynamic Card */}
            <div className="lg:hidden absolute bottom-1 left-2 right-2 p-4 sm:p-5 rounded-2xl bg-[#0B2D5B]/95 border-2 border-[#14B8A6]/40 shadow-2xl backdrop-blur-xl pointer-events-none z-10">
              <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10 text-xs sm:text-sm">
                <span className="font-bold text-[#14B8A6] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                  Frame {frameIndex + 1}/16: {currentStory.action}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#14B8A6]/20 text-[#14B8A6]">
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
