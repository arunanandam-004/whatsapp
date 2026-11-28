import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { Route as PrivacyPolicyRoute } from "@/routes/privacy-policy";
import { Route as TermsRoute } from "@/routes/terms-and-conditions";
import { Route as IndexRoute } from "@/routes/index";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches /privacy-policy for the healthcare privacy policy", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/privacy-policy");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches /terms-and-conditions for the healthcare terms and conditions", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/terms-and-conditions");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("ensures all routes have consistent Vabsgen branding and favicon links", () => {
    const privacyHead = PrivacyPolicyRoute.options.head?.({} as never);
    const termsHead = TermsRoute.options.head?.({} as never);
    const indexHead = IndexRoute.options.head?.({} as never);

    // Title branding checks
    const privacyTitle = privacyHead?.meta?.find((m: { title?: string }) => "title" in m) as
      { title?: string } | undefined;
    const termsTitle = termsHead?.meta?.find((m: { title?: string }) => "title" in m) as
      { title?: string } | undefined;
    const indexTitle = indexHead?.meta?.find((m: { title?: string }) => "title" in m) as
      { title?: string } | undefined;

    expect(privacyTitle?.title).toBe("VABS");
    expect(termsTitle?.title).toBe("VABS");
    expect(indexTitle?.title).toBe("VABS");

    // Favicon links checks
    const hasFaviconLink = (links?: Array<{ rel?: string; href?: string }>) =>
      links?.some(
        (l) => (l.rel === "icon" || l.rel === "shortcut icon") && l.href === "/favicon.ico",
      );

    expect(hasFaviconLink(privacyHead?.links)).toBe(true);
    expect(hasFaviconLink(termsHead?.links)).toBe(true);
    expect(hasFaviconLink(indexHead?.links)).toBe(true);
  });
});
