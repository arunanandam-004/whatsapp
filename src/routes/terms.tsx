import { useEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { TermsContent } from "@/components/TermsContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      {
        title: "VABS",
      },
      {
        name: "description",
        content:
          "Terms governing hospitals' and clinics' use of the Vabsgen WhatsApp AI healthcare platform.",
      },
      {
        property: "og:title",
        content: "Vabsgen — Terms & Conditions",
      },
      {
        property: "og:description",
        content:
          "Terms governing hospitals' and clinics' use of the Vabsgen WhatsApp AI healthcare platform.",
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
  component: TermsPage,
});

function TermsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/terms-and-conditions", replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#2563EB] selection:text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 shadow-2xl backdrop-blur-xl">
          <TermsContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
