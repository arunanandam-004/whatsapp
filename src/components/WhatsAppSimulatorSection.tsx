import { useState, useRef, useEffect } from "react";
import {
  Send,
  Sparkles,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Bot,
  Calendar,
  HeartPulse,
  FileText,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

type ActionItem = {
  label: string;
  action: () => void;
  icon?: LucideIcon;
};

type MediaItem = {
  title?: string;
  subtitle?: string;
  badge?: string;
};

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
  actions?: ActionItem[];
  media?: MediaItem;
};

type Scenario = {
  id: string;
  name: string;
  icon: LucideIcon;
  title: string;
  agentName: string;
  avatarBg: string;
  initialMessages: Message[];
  quickPrompts: string[];
  botReplies: Record<string, { text: string; actions?: ActionItem[]; media?: MediaItem }>;
};

const SCENARIOS: Scenario[] = [
  {
    id: "booking",
    name: "Appointment Booking",
    icon: Calendar,
    title: "OPD Appointment Booking",
    agentName: "CityCare Hospital Care Desk",
    avatarBg: "from-[#2563EB] to-[#14B8A6]",
    initialMessages: [
      {
        id: "m1",
        sender: "user",
        text: "Hi, I need to see a skin specialist this week. Is anyone available?",
        time: "10:14 AM",
      },
      {
        id: "m2",
        sender: "bot",
        text: "Hello Rahul. Dr. Iyer (Dermatology) has openings on Thursday at 11:00 AM and 4:30 PM. Which would you like?",
        time: "10:14 AM",
        media: {
          title: "Dr. Iyer - Dermatology",
          subtitle: "OPD Block A, Floor 2",
          badge: "Live Availability",
        },
        actions: [
          { label: "Confirm 11:00 AM", action: () => {} },
          { label: "Confirm 4:30 PM", action: () => {} },
        ],
      },
    ],
    quickPrompts: [
      "Confirm 11:00 AM please.",
      "Can I reschedule if something comes up?",
      "Where do I go when I reach the hospital?",
    ],
    botReplies: {
      "Confirm 11:00 AM please.": {
        text: "Booked. Thursday 11:00 AM with Dr. Iyer. I have sent a confirmation with the location and will remind you 2 hours before.",
        actions: [
          { label: "Add to Calendar", action: () => {} },
          { label: "View Directions", action: () => {} },
        ],
      },
      "Can I reschedule if something comes up?": {
        text: "Of course. Reply RESCHEDULE any time and I will offer you the next available slots with Dr. Iyer.",
      },
      "Where do I go when I reach the hospital?": {
        text: "Please come to OPD Block A, 2nd floor. Registration is at the ground floor desk. I will send the map pin now.",
        actions: [{ label: "View Map", action: () => {} }],
      },
    },
  },
  {
    id: "emergency",
    name: "Emergency Escalation",
    icon: HeartPulse,
    title: "Emergency Escalation Protocol",
    agentName: "CityCare Hospital Care Desk",
    avatarBg: "from-rose-500 to-red-600",
    initialMessages: [
      {
        id: "m1",
        sender: "user",
        text: "My father suddenly has severe chest pain and is sweating a lot.",
        time: "11:52 PM",
      },
      {
        id: "m2",
        sender: "bot",
        text: "This may be an emergency. I am alerting our on-duty emergency team right now. Please do not wait for a reply. Call 108 or come to the Emergency entrance immediately.",
        time: "11:52 PM",
        media: {
          title: "Emergency Team Alerted",
          subtitle: "On-duty doctor and nurse notified",
          badge: "Escalated To Human",
        },
        actions: [
          { label: "Call Hospital Emergency", action: () => {} },
          { label: "Share Live Location", action: () => {} },
        ],
      },
    ],
    quickPrompts: [
      "We are coming now. Where is the emergency entrance?",
      "He is breathing but feels dizzy.",
      "Can a doctor call me?",
    ],
    botReplies: {
      "We are coming now. Where is the emergency entrance?": {
        text: "Emergency entrance is at Gate 2, open 24 hours. A nurse is being informed of your arrival.",
        actions: [{ label: "View Map", action: () => {} }],
      },
      "He is breathing but feels dizzy.": {
        text: "I have passed this update to the emergency doctor. Please keep him seated and calm and come in immediately.",
      },
      "Can a doctor call me?": {
        text: "A doctor from the emergency team is calling you now. Please keep your phone free.",
      },
    },
  },
  {
    id: "prescription",
    name: "Prescription on WhatsApp",
    icon: FileText,
    title: "Prescription Delivery",
    agentName: "CityCare Hospital Care Desk",
    avatarBg: "from-blue-500 to-cyan-600",
    initialMessages: [
      {
        id: "m1",
        sender: "user",
        text: "I finished my consultation. Can you send my prescription?",
        time: "1:15 PM",
      },
      {
        id: "m2",
        sender: "bot",
        text: "Yes. Dr. Meera has approved your digital prescription. Sending it securely to this number.",
        time: "1:15 PM",
        media: {
          title: "Prescription_Anita_Verma.pdf",
          subtitle: "Digitally signed by Dr. Meera",
          badge: "Doctor Approved",
        },
        actions: [{ label: "Download PDF", action: () => {} }],
      },
    ],
    quickPrompts: [
      "Can you remind me when to take the medicines?",
      "My medicine is finishing. Can I get a refill?",
      "Can my pharmacy get a copy?",
    ],
    botReplies: {
      "Can you remind me when to take the medicines?": {
        text: "Sure. I will send reminders exactly as written in your prescription. For any change, please contact Dr. Meera's team.",
      },
      "My medicine is finishing. Can I get a refill?": {
        text: "I have sent your refill request to Dr. Meera for review. You will get an update here once she responds. Refills are always approved by your doctor.",
      },
      "Can my pharmacy get a copy?": {
        text: "I can share it with a pharmacy you choose, after your confirmation. Which pharmacy should I send it to?",
      },
    },
  },
  {
    id: "followup",
    name: "Follow-up & Memory",
    icon: UserCheck,
    title: "Follow-up & Patient Memory",
    agentName: "CityCare Hospital Care Desk",
    avatarBg: "from-[#2563EB] to-[#14B8A6]",
    initialMessages: [
      {
        id: "m1",
        sender: "bot",
        text: "Good morning Suresh. It has been 3 days since your visit with Dr. Rao. How are you feeling today?",
        time: "9:00 AM",
      },
    ],
    quickPrompts: [
      "Much better, thank you.",
      "I still have some pain.",
      "Please book my next check-up.",
    ],
    botReplies: {
      "Much better, thank you.": {
        text: "Wonderful to hear. I have noted your recovery in your record. Your next review is due in 4 weeks. Shall I book it?",
      },
      "I still have some pain.": {
        text: "Thank you for telling me. I am flagging this to Dr. Rao's team now and they will contact you today.",
        media: {
          badge: "Flagged To Care Team",
        },
      },
      "Please book my next check-up.": {
        text: "Booked for your usual morning slot with Dr. Rao, next Monday 10:00 AM, as I remember you prefer mornings.",
        media: {
          badge: "Preference Remembered",
        },
      },
    },
  },
];

export function WhatsAppSimulatorSection() {
  const [activeScenarioId, setActiveScenarioId] = useState("booking");
  const currentScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0]!;

  const [messages, setMessages] = useState<Message[]>(currentScenario.initialMessages);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    setMessages(currentScenario.initialMessages);
    setIsTyping(false);
  }, [currentScenario.initialMessages]);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const predefined = currentScenario.botReplies[text];
      const replyText =
        predefined?.text ||
        "Thank you for your message. I will check this with the hospital team and respond shortly. If this is an emergency, please call the hospital emergency number now.";

      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: replyText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        ...(predefined?.actions ? { actions: predefined.actions } : {}),
        ...(predefined?.media ? { media: predefined.media } : {}),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section
      id="simulator-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/70 overflow-hidden"
    >
      <span id="simulator" className="absolute -top-24" aria-hidden="true" />
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Try The Vabsgen Healthcare Agent In Action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Choose a patient scenario or type your own message. See how the agent books
            appointments, escalates emergencies, delivers prescriptions and follows up, safely and
            in real time.
          </p>

          {/* Scenario Selector Tabs (4 Healthcare Scenarios) */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {SCENARIOS.map((sc) => {
              const Icon = sc.icon;
              const isActive = sc.id === activeScenarioId;
              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveScenarioId(sc.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#2563EB] to-[#14B8A6] text-white font-bold shadow-lg shadow-[#2563EB]/30 scale-105"
                      : "bg-[#0B2D5B]/40 hover:bg-[#0B2D5B]/80 text-slate-300 border border-white/10 hover:border-white/20"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#14B8A6]"}`} />
                  <span>{sc.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phone Shell Container */}
        <div className="max-w-md mx-auto">
          <div className="relative rounded-[40px] p-3 sm:p-4 bg-[#071D3B] border-4 border-[#0B2D5B] shadow-[0_25px_70px_rgba(0,0,0,0.85)] ring-1 ring-[#2563EB]/20">
            {/* Phone Notch / Speaker */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#0B2D5B] rounded-full z-20 flex items-center justify-center">
              <div className="w-8 h-1 bg-slate-600 rounded-full" />
            </div>

            {/* WhatsApp App Screen */}
            <div className="relative rounded-[32px] overflow-hidden bg-[#071529] flex flex-col h-[580px] sm:h-[620px] border border-white/10">
              {/* WhatsApp Chat Header */}
              <div className="px-4 pt-7 pb-3 bg-[#0B2D5B] text-white flex items-center justify-between border-b border-white/10 z-10 shadow-md">
                <div className="flex items-center gap-3">
                  <div
                    className={`relative w-10 h-10 rounded-full bg-gradient-to-tr ${currentScenario.avatarBg} flex items-center justify-center text-white shadow`}
                  >
                    <Bot className="w-5 h-5 text-white" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#14B8A6] border border-[#0B2D5B]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white leading-tight">
                      {currentScenario.agentName}
                    </span>
                    <span className="text-[11px] text-[#14B8A6] flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                      Online - AI Care Desk
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-400">
                  <Video className="w-4 h-4 hover:text-white cursor-pointer" />
                  <Phone className="w-4 h-4 hover:text-white cursor-pointer" />
                  <MoreVertical className="w-4 h-4 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Chat Message Scroll Area */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-3 bg-[radial-gradient(#0F3870_1px,transparent_1px)] [background-size:18px_18px] bg-[#071529]"
              >
                <div className="text-center my-1">
                  <span className="px-3 py-1 rounded-md bg-[#0B2D5B]/80 text-[10px] text-slate-300 font-medium tracking-wide">
                    Messages are end-to-end encrypted - Meta Cloud API
                  </span>
                </div>

                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <div
                      className={`relative px-3.5 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-md ${
                        msg.sender === "user"
                          ? "bg-[#1E293B] text-white rounded-tr-none border border-white/10"
                          : "bg-[#0F3870] text-slate-100 rounded-tl-none border border-[#2563EB]/30"
                      }`}
                    >
                      {/* Media Card if present */}
                      {msg.media && (
                        <div className="mb-2 p-2.5 rounded-xl bg-[#071D3B]/90 border border-[#2563EB]/30 flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            {msg.media.title && (
                              <span className="font-semibold text-[#14B8A6] text-[11px]">
                                {msg.media.title}
                              </span>
                            )}
                            {msg.media.badge && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#14B8A6]/20 text-[#14B8A6] font-medium border border-[#14B8A6]/30">
                                {msg.media.badge}
                              </span>
                            )}
                          </div>
                          {msg.media.subtitle && (
                            <span className="text-[10px] text-slate-300">{msg.media.subtitle}</span>
                          )}
                        </div>
                      )}

                      <p>{msg.text}</p>

                      {/* Action buttons inside WhatsApp bubble */}
                      {msg.actions && msg.actions.length > 0 && (
                        <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-col gap-1.5">
                          {msg.actions.map((act, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                handleSendMessage(act.label);
                              }}
                              className="w-full py-1.5 px-2.5 text-center text-[11px] font-semibold text-[#14B8A6] hover:text-white bg-white/5 hover:bg-[#2563EB]/30 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-white/5"
                            >
                              <span>{act.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-slate-400">
                        <span>{msg.time}</span>
                        {msg.sender === "user" && (
                          <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 mr-auto bg-[#0F3870] px-3.5 py-2.5 rounded-2xl rounded-tl-none border border-[#2563EB]/30 text-slate-300">
                    <span className="text-[11px] text-slate-300">Care Desk AI is typing</span>
                    <span className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-bounce" />
                    </span>
                  </div>
                )}
              </div>

              {/* Quick Prompts Bar */}
              <div className="p-2 bg-[#0B2D5B] border-t border-white/10 flex gap-1.5 overflow-x-auto no-scrollbar">
                {currentScenario.quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    disabled={isTyping}
                    className="whitespace-nowrap px-2.5 py-1 text-[10px] font-medium text-[#14B8A6] bg-[#071D3B] hover:bg-[#2563EB]/30 border border-[#2563EB]/30 rounded-full transition-colors cursor-pointer flex-shrink-0"
                  >
                    💬 {prompt}
                  </button>
                ))}
              </div>

              {/* WhatsApp Chat Input Box */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-2.5 bg-[#0B2D5B] flex items-center gap-2 border-t border-white/10"
              >
                <button type="button" className="text-slate-400 hover:text-white p-1">
                  <Smile className="w-4 h-4" />
                </button>
                <button type="button" className="text-slate-400 hover:text-white p-1">
                  <Paperclip className="w-4 h-4" />
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a WhatsApp message..."
                  className="flex-1 bg-[#071D3B] text-white text-xs px-3.5 py-2 rounded-xl focus:outline-none placeholder:text-slate-400 border border-white/10"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#0D9488] disabled:opacity-40 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Under the phone label */}
          <div className="mt-4 text-center">
            <p className="text-xs text-[#64748B]">
              Sample conversation, fictional data. The AI does not diagnose or give medical advice;
              clinical decisions stay with doctors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
