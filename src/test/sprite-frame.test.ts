import { describe, expect, it } from "vitest";

import { getSpriteFrameIndex } from "@/lib/sprite-frame";

describe("WhatsApp storyboard frame mapping", () => {
  it("shows frame 1 at the start and frame 16 at the end", () => {
    expect(getSpriteFrameIndex(0)).toBe(0);
    expect(getSpriteFrameIndex(1)).toBe(15);
  });

  it("advances one frame at each sixteenth of scroll progress", () => {
    expect(getSpriteFrameIndex(1 / 16)).toBe(1);
  });

  it("maps reverse scroll positions back to earlier frames", () => {
    expect(getSpriteFrameIndex(0.75)).toBe(12);
    expect(getSpriteFrameIndex(0.25)).toBe(4);
  });

  it("keeps progress outside the scroll range on the first or final frame", () => {
    expect(getSpriteFrameIndex(-0.2)).toBe(0);
    expect(getSpriteFrameIndex(1.2)).toBe(15);
  });
});
