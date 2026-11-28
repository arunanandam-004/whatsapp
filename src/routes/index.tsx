import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { WhatsAppAutomationSection } from "@/components/WhatsAppAutomationSection";
import { WhatsAppSimulatorSection } from "@/components/WhatsAppSimulatorSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { DataSecurityBand } from "@/components/DataSecurityBand";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { FloatingChatWidget } from "@/components/FloatingChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "VABS",
      },
      {
        name: "description",
        content:
          "Vabsgen is a 24/7 WhatsApp AI agent for hospitals and clinics: appointment booking, patient follow-up, emergency escalation, WhatsApp prescriptions and patient memory, with secure data and staff control.",
      },
      {
        property: "og:title",
        content: "VABS",
      },
      {
        property: "og:description",
        content:
          "Vabsgen is a 24/7 WhatsApp AI agent for hospitals and clinics: appointment booking, patient follow-up, emergency escalation, WhatsApp prescriptions and patient memory, with secure data and staff control.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/apple-touch-icon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "shortcut icon", href: "/apple-touch-icon.png" },
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "preload",
        as: "image",
        href: "/whatsapp_robot_celebration_storyboard.jpg",
        type: "image/jpeg",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#071D3B] text-white selection:bg-[#2563EB] selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Pinned Scroll-Controlled Storyboard Hero Section */}
      <WhatsAppAutomationSection spriteSrc="/whatsapp_robot_celebration_storyboard.jpg" />

      {/* Interactive Hands-On WhatsApp Healthcare Simulator */}
      <WhatsAppSimulatorSection />

      {/* Core Healthcare AI Capabilities (8 Features) */}
      <FeaturesSection />

      {/* Data Security & Privacy Control Band for Hospitals */}
      <DataSecurityBand />

      {/* Structured Hospital Onboarding Process */}
      <HowItWorksSection />

      {/* Hospital Buyer FAQs */}
      <FaqSection />

      {/* Final CTA: Book a Demo */}
      <CtaSection />

      {/* Hospital Compliance Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Widget */}
      <FloatingChatWidget />
    </div>
  );
}
