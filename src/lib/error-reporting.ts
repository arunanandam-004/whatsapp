type ErrorOptions = {
  boundary?: string;
  source?: string;
  timestamp?: number;
};

export function reportRuntimeError(
  error: unknown,
  context: Record<string, unknown> = {}
) {
  if (import.meta.env.DEV) {
    console.error("[Runtime Error]", error, context);
  }
}
