export const SPRITE_FRAME_COUNT = 16;

export function getSpriteFrameIndex(progress: number): number {
  const boundedProgress = Number.isFinite(progress) ? Math.min(1, Math.max(0, progress)) : 0;

  return Math.min(SPRITE_FRAME_COUNT - 1, Math.floor(boundedProgress * SPRITE_FRAME_COUNT));
}
