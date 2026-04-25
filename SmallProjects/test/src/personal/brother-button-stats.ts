import { z } from "zod";
import type { WorkflowDefinition } from "@elevasis/sdk";
import { storage, PlatformToolError } from "@elevasis/sdk/worker";

const BUCKET = "personal";
const LOG_PATH = "brother-buttons.json";

interface LogEntry {
  timestamp: string;
  note?: string;
}

const inputSchema = z.object({});

const outputSchema = z.object({
  total: z.number(),
  today: z.number(),
  thisWeek: z.number(),
  thisMonth: z.number(),
  recent: z.array(
    z.object({ timestamp: z.string(), note: z.string().optional() }),
  ),
});

const rawLogSchema = z.object({
  entries: z.array(z.any()),
});

function startOf(unit: "day" | "week" | "month"): Date {
  const now = new Date();
  if (unit === "day") {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }
  if (unit === "week") {
    const day = now.getDay(); // 0=Sun
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - day);
  }
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

export const brotherButtonStats: WorkflowDefinition = {
  config: {
    resourceId: "brother-button-stats",
    name: "Brother Button Stats",
    type: "workflow",
    description: "Reports how many times you've pushed your brother's buttons",
    version: "1.0.0",
    status: "dev",
  },
  contract: { inputSchema, outputSchema },
  steps: {
    readLog: {
      id: "readLog",
      name: "Read Log",
      description: "Downloads the button-push log from storage",
      inputSchema,
      outputSchema: rawLogSchema,
      handler: async (_input: unknown, context) => {
        let entries: LogEntry[] = [];

        try {
          const result = await storage.download({
            bucket: BUCKET,
            path: LOG_PATH,
          });
          const text =
            typeof result.content === "string"
              ? result.content
              : result.content.toString();
          entries = JSON.parse(text) as LogEntry[];
        } catch (err) {
          if (err instanceof PlatformToolError) {
            context.logger.info("No log found — zero incidents recorded");
          } else {
            throw err;
          }
        }

        return { entries };
      },
      next: { type: "linear", target: "computeAndNotify" },
    },

    computeAndNotify: {
      id: "computeAndNotify",
      name: "Compute Stats and Notify",
      description: "Calculates totals and fires an in-app notification",
      inputSchema: rawLogSchema,
      outputSchema,
      handler: async (input: unknown) => {
        const { entries } = input as { entries: LogEntry[] };

        const dayStart = startOf("day");
        const weekStart = startOf("week");
        const monthStart = startOf("month");

        const total = entries.length;
        const today = entries.filter(
          (e) => new Date(e.timestamp) >= dayStart,
        ).length;
        const thisWeek = entries.filter(
          (e) => new Date(e.timestamp) >= weekStart,
        ).length;
        const thisMonth = entries.filter(
          (e) => new Date(e.timestamp) >= monthStart,
        ).length;
        const recent = entries.slice(-5).reverse();

        return { total, today, thisWeek, thisMonth, recent };
      },
      next: null,
    },
  },
  entryPoint: "readLog",
};
