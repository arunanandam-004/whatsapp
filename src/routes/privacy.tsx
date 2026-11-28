import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PrivacyContent } from "@/components/PrivacyContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      {
        title: "VABS",
      },
      {
        name: "description",
        content:
          "How Vabsgen collects, uses, protects and shares patient and hospital data on its WhatsApp healthcare AI platform, and your privacy rights.",
      },
      {
        property: "og:title",
        content: "Vabsgen — Healthcare Privacy Policy",
      },
      {
        property: "og:description",
        content:
          "How Vabsgen collects, uses, protects and shares patient and hospital data on its WhatsApp healthcare AI platform, and your privacy rights.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/apple-touch-icon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "shortcut icon", href: "/apple-touch-icon.png" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/privacy-policy", replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#2563EB] selection:text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 shadow-2xl backdrop-blur-xl">
          <PrivacyContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
