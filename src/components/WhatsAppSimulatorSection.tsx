import { useState, useRef, useEffect } from "react";
import {
  MessageCircle,
  Send,
  Sparkles,
  CheckCheck,
  Phone,
  Video,
  MoreVertical,
  Paperclip,
  Smile,
  Bot,
  Building2,
  ShoppingBag,
  Stethoscope,
  Calendar,
  CreditCard,
  ExternalLink,
} from "lucide-react";

type Message = {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
  actions?: { label: string; action: () => void; icon?: any }[] | undefined;
  media?: { title: string; subtitle: string; badge?: string | undefined } | undefined;
};

type Scenario = {
  id: string;
  name: string;
  icon: any;
  title: string;
  agentName: string;
  avatarBg: string;
  initialMessages: Message[];
  quickPrompts: string[];
  botReplies: Record<string, { text: string; actions?: any[]; media?: any }>;
};

const SCENARIOS: Scenario[] = [
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    title: "Luxury Villas & Estates AI",
    agentName: "Aura Estates AI Concierge",
    avatarBg: "from-amber-400 to-emerald-600",
    initialMessages: [
      {
        id: "m1",
        sender: "user",
        text: "Hi! I saw your ad on Instagram. Do you have any 3-bedroom villas with private pools available in Palm Springs?",
        time: "10:14 AM",
      },
      {
        id: "m2",
        sender: "bot",
        text: "Hello Michael! 👋 Welcome to Aura Estates. Yes! We have 2 prime properties matching that exact description, priced between $850k and $1.2M.",
        time: "10:14 AM",
        media: {
          title: "The Oasis Villa #14",
          subtitle: "3 Beds • 3.5 Baths • 3,200 sqft • Infinity Pool",
          badge: "Virtual Tour Ready",
        },
        actions: [
          { label: "📸 Send Full Photo Deck", action: () => {} },
          { label: "📅 Book Site Tour", action: () => {} },
        ],
      },
    ],
    quickPrompts: [
      "Can we schedule a private viewing tomorrow at 2 PM?",
      "What are the HOA fees and rental yield expectations?",
      "Can you send me the floor plan PDF?",
    ],
    botReplies: {
      "Can we schedule a private viewing tomorrow at 2 PM?": {
        text: "Done! 🗓️ I have reserved tomorrow at 2:00 PM for you with our senior property specialist, Marcus. I just sent the Google Calendar invite and gate access pass to your WhatsApp!",
        actions: [
          { label: "✅ Add to Google Calendar", action: () => {} },
          { label: "📍 View Map Directions", action: () => {} },
        ],
      },
      "What are the HOA fees and rental yield expectations?": {
        text: "The monthly HOA is $280 (covers 24/7 security & landscape maintenance). Projected short-term rental yields average 12.4% annually, with high demand between October and May. Would you like our full pro-forma breakdown?",
        actions: [{ label: "📊 Send Financial Pro-Forma", action: () => {} }],
      },
      "Can you send me the floor plan PDF?": {
        text: "Here is the official architectural floor plan for Villa #14. It features high vaulted ceilings, smart home integration, and an outdoor BBQ kitchen.",
        media: {
          title: "Oasis_Villa14_Floorplan.pdf",
          subtitle: "Size: 4.2 MB • High Resolution Blueprint",
          badge: "Verified Document",
        },
        actions: [{ label: "📥 Download PDF", action: () => {} }],
      },
    },
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingBag,
    title: "Omnichannel Retail & Support AI",
    agentName: "AcroStore Instant Bot",
    avatarBg: "from-blue-500 to-indigo-600",
    initialMessages: [
      {
        id: "m1",
        sender: "user",
        text: "Where is my order #AS-8942? It was supposed to arrive today.",
        time: "02:30 PM",
      },
      {
        id: "m2",
        sender: "bot",
        text: "Hey Sarah! Let me check your shipment live in FedEx... 📦 Found it! Your package is currently on the delivery vehicle and scheduled to arrive by 4:45 PM today.",
        time: "02:30 PM",
        media: {
          title: "FedEx Tracking: #98234-7192",
          subtitle: "Status: Out for Delivery • Driver is 4 stops away",
          badge: "Live GPS",
        },
        actions: [
          { label: "📍 Live Map Tracking", action: () => {} },
          { label: "📦 Change Delivery Address", action: () => {} },
        ],
      },
    ],
    quickPrompts: [
      "Can you leave it on the back porch?",
      "I also want to exchange the shoe size from 9 to 9.5",
      "Do you have a discount code for my next order?",
    ],
    botReplies: {
      "Can you leave it on the back porch?": {
        text: "I've just added safe-drop delivery instructions directly to your driver's device: 'Leave securely on back porch behind planter.' You will receive a photo confirmation as soon as it is placed!",
      },
      "I also want to exchange the shoe size from 9 to 9.5": {
        text: "No problem at all! Size 9.5 is in stock. I just generated a pre-paid return QR code for your existing pair. Simply drop it off at any local parcel locker without printing a label!",
        actions: [{ label: "🎟️ Open Return QR Code", action: () => {} }],
      },
      "Do you have a discount code for my next order?": {
        text: "Because you're a VIP customer, here is an exclusive 15% discount code: VIP15WA. It's already applied to your cart!",
        actions: [{ label: "🛍️ Continue Shopping", action: () => {} }],
      },
    },
  },
  {
    id: "healthcare",
    name: "Clinic & Dental",
    icon: Stethoscope,
    title: "Healthcare Appointments AI",
    agentName: "PureSmile Dental AI Care",
    avatarBg: "from-teal-400 to-emerald-500",
    initialMessages: [
      {
        id: "m1",
        sender: "user",
        text: "Hi, I have a chipped tooth and sudden sensitivity. Can I get an emergency appointment with Dr. Chen tomorrow?",
        time: "08:15 PM",
      },
      {
        id: "m2",
        sender: "bot",
        text: "I'm so sorry you're in discomfort! 🦷 I'm checking Dr. Chen's live schedule. We have an emergency slot tomorrow at 11:15 AM or 3:45 PM. Which one suits you best?",
        time: "08:15 PM",
        actions: [
          { label: "⏰ Confirm 11:15 AM", action: () => {} },
          { label: "⏰ Confirm 3:45 PM", action: () => {} },
        ],
      },
    ],
    quickPrompts: [
      "Confirm 11:15 AM please. Do you accept Delta Dental?",
      "What should I do tonight for the sensitivity pain?",
      "How much will the tooth bonding cost?",
    ],
    botReplies: {
      "Confirm 11:15 AM please. Do you accept Delta Dental?": {
        text: "You are locked in for tomorrow at 11:15 AM! ✅ Yes, we are an in-network provider for Delta Dental Premier. Your checkup and X-ray will be 100% covered. We just sent your digital intake link via SMS.",
        actions: [
          { label: "📋 Complete Online Intake", action: () => {} },
          { label: "📍 Clinic Location & Parking", action: () => {} },
        ],
      },
      "What should I do tonight for the sensitivity pain?": {
        text: "Temporary relief tips from our doctors: 1) Rinse gently with warm salt water. 2) Avoid extreme hot or cold drinks. 3) An OTC anti-inflammatory like ibuprofen helps. If pain spikes significantly, reply URGENT to reach our on-call dentist.",
      },
      "How much will the tooth bonding cost?": {
        text: "Composite dental bonding typically ranges between $150 and $350 before insurance. With Delta Dental, patient co-pay is usually between $30 and $60. We'll give you an exact breakdown before any procedure!",
      },
    },
  },
];

export function WhatsAppSimulatorSection() {
  const [activeScenarioId, setActiveScenarioId] = useState("realestate");
  const currentScenario =
    SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0]!;

  const [messages, setMessages] = useState<Message[]>(
    currentScenario.initialMessages
  );
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    setMessages(currentScenario.initialMessages);
    setIsTyping(false);
  }, [activeScenarioId]);

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
      let replyText =
        predefined?.text ||
        `Thanks for asking! As an autonomous Vabsgen WhatsApp AI agent trained on your business data, I immediately handle this query, verify live database records, and execute the requested action with zero delay.`;

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
    }, 900);
  };

  return (
    <section id="simulator-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/70 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Live Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Try The Vabsgen WhatsApp Agent In Action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Select an industry scenario or send a live query. Watch how the AI understands nuances, recommends products, queries calendars, and closes customers in real time.
          </p>

          {/* Scenario Selector Tabs */}
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
                      ? "bg-emerald-500 text-zinc-950 font-bold shadow-lg shadow-emerald-500/30 scale-105"
                      : "bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 hover:border-white/20"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-zinc-950" : "text-emerald-400"}`} />
                  <span>{sc.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Phone Shell Container */}
        <div className="max-w-md mx-auto">
          <div className="relative rounded-[40px] p-3 sm:p-4 bg-zinc-900 border-4 border-zinc-700/60 shadow-[0_25px_70px_rgba(0,0,0,0.85)] ring-1 ring-emerald-500/20">
            {/* Phone Notch / Speaker */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-zinc-800 rounded-full z-20 flex items-center justify-center">
              <div className="w-8 h-1 bg-zinc-700 rounded-full" />
            </div>

            {/* WhatsApp App Screen */}
            <div className="relative rounded-[32px] overflow-hidden bg-[#0b141a] flex flex-col h-[580px] sm:h-[620px] border border-white/5">
              {/* WhatsApp Chat Header */}
              <div className="px-4 pt-7 pb-3 bg-[#1f2c34] text-white flex items-center justify-between border-b border-white/5 z-10 shadow-md">
                <div className="flex items-center gap-3">
                  <div
                    className={`relative w-10 h-10 rounded-full bg-gradient-to-tr ${currentScenario.avatarBg} flex items-center justify-center text-white shadow`}
                  >
                    <Bot className="w-5 h-5 text-zinc-950" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-zinc-900" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white leading-tight">
                      {currentScenario.agentName}
                    </span>
                    <span className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online • AI Instant Agent
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-400">
                  <Video className="w-4 h-4 hover:text-white cursor-pointer" />
                  <Phone className="w-4 h-4 hover:text-white cursor-pointer" />
                  <MoreVertical className="w-4 h-4 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Chat Message Scroll Area */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-3 bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:18px_18px] bg-[#0b141a]"
              >
                <div className="text-center my-1">
                  <span className="px-3 py-1 rounded-md bg-[#182229] text-[10px] text-zinc-400 font-medium tracking-wide uppercase">
                    🔒 Messages are end-to-end encrypted • Meta Cloud API
                  </span>
                </div>

                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user"
                        ? "ml-auto items-end"
                        : "mr-auto items-start"
                    }`}
                  >
                    <div
                      className={`relative px-3.5 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-md ${
                        msg.sender === "user"
                          ? "bg-[#005c4b] text-white rounded-tr-none"
                          : "bg-[#202c33] text-zinc-100 rounded-tl-none border border-white/5"
                      }`}
                    >
                      {/* Media Card if present */}
                      {msg.media && (
                        <div className="mb-2 p-2.5 rounded-xl bg-black/25 border border-white/10 flex flex-col gap-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-emerald-300 text-[11px]">
                              {msg.media.title}
                            </span>
                            {msg.media.badge && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-300 font-medium">
                                {msg.media.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-zinc-300">
                            {msg.media.subtitle}
                          </span>
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
                              className="w-full py-1.5 px-2.5 text-center text-[11px] font-semibold text-emerald-300 hover:text-emerald-200 bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <span>{act.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      <div className="mt-1 flex items-center justify-end gap-1 text-[9px] text-zinc-400">
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
                  <div className="flex items-center gap-2 mr-auto bg-[#202c33] px-3.5 py-2.5 rounded-2xl rounded-tl-none border border-white/5 text-zinc-400">
                    <span className="text-[11px] text-zinc-400">AI is thinking</span>
                    <span className="flex gap-1 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce" />
                    </span>
                  </div>
                )}
              </div>

              {/* Quick Prompts Bar */}
              <div className="p-2 bg-[#1f2c34] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
                {currentScenario.quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    disabled={isTyping}
                    className="whitespace-nowrap px-2.5 py-1 text-[10px] font-medium text-emerald-300 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/20 rounded-full transition-colors cursor-pointer flex-shrink-0"
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
                className="p-2.5 bg-[#202c33] flex items-center gap-2 border-t border-white/5"
              >
                <button type="button" className="text-zinc-400 hover:text-white p-1">
                  <Smile className="w-4 h-4" />
                </button>
                <button type="button" className="text-zinc-400 hover:text-white p-1">
                  <Paperclip className="w-4 h-4" />
                </button>

                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a WhatsApp message..."
                  className="flex-1 bg-[#2a3942] text-white text-xs px-3.5 py-2 rounded-xl focus:outline-none placeholder:text-zinc-500 border border-white/5"
                />

                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 text-zinc-950 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 flex-shrink-0 cursor-pointer"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
