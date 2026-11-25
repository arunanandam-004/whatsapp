import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { WhatsAppAutomationSection } from "@/components/WhatsAppAutomationSection";
import { WhatsAppSimulatorSection } from "@/components/WhatsAppSimulatorSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MetricsSection } from "@/components/MetricsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { FloatingChatWidget } from "@/components/FloatingChatWidget";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Vabsgen WhatsApp Agent — Autonomous WhatsApp AI for Growing Businesses",
      },
      {
        name: "description",
        content:
          "Deploy Vabsgen's intelligent 24/7 WhatsApp AI agent that converses, qualifies leads, schedules calendar appointments, and closes revenue on autopilot.",
      },
      {
        property: "og:title",
        content:
          "Vabsgen WhatsApp Agent — Autonomous WhatsApp AI for Growing Businesses",
      },
      {
        property: "og:description",
        content:
          "Deploy Vabsgen's intelligent 24/7 WhatsApp AI agent that converses, qualifies leads, schedules calendar appointments, and closes revenue on autopilot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "512x512" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "shortcut icon", href: "/favicon.ico" },
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
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      {/* Navigation */}
      <Navbar />

      {/* Optimized Pinned Scroll-Controlled Storyboard Hero Section */}
      <WhatsAppAutomationSection spriteSrc="/whatsapp_robot_celebration_storyboard.jpg" />

      {/* Interactive Hands-On WhatsApp Simulator */}
      <WhatsAppSimulatorSection />

      {/* Core AI Capabilities */}
      <FeaturesSection />

      {/* 3-Step Setup Process */}
      <HowItWorksSection />

      {/* Business Impact & ROI Statistics */}
      <MetricsSection />

      {/* Social Proof & Case Studies */}
      <TestimonialsSection />

      {/* Transparent Pricing Table */}
      <PricingSection />

      {/* FAQs */}
      <FaqSection />

      {/* Final Conversion CTA */}
      <CtaSection />

      {/* Comprehensive Enterprise Footer */}
      <Footer />

      {/* Sticky Floating WhatsApp Widget */}
      <FloatingChatWidget />
    </div>
  );
}
