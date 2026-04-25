import { z } from "zod";
import type { WorkflowDefinition } from "@elevasis/sdk";
import { storage, PlatformToolError } from "@elevasis/sdk/worker";

const BUCKET = "personal";
const LOG_PATH = "brother-buttons.json";

interface LogEntry {
  timestamp: string;
  note?: string;
}

const inputSchema = z.object({
  note: z.string().optional(),
});

const outputSchema = z.object({
  total: z.number(),
  timestamp: z.string(),
});

const readLogSchema = z.object({
  entries: z.array(z.any()),
  note: z.string().optional(),
});

const appendSchema = z.object({
  entries: z.array(z.any()),
  newEntry: z.object({ timestamp: z.string(), note: z.string().optional() }),
});

export const logBrotherButton: WorkflowDefinition = {
  config: {
    resourceId: "log-brother-button",
    name: "Log Brother Button",
    type: "workflow",
    description: "Records one instance of pushing your brother's buttons",
    version: "1.0.0",
    status: "dev",
  },
  contract: { inputSchema, outputSchema },
  steps: {
    readLog: {
      id: "readLog",
      name: "Read Log",
      description: "Downloads the existing button-push log from storage",
      inputSchema,
      outputSchema: readLogSchema,
      handler: async (input: unknown, context) => {
        const { note } = input as z.infer<typeof inputSchema>;
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
            context.logger.info("No existing log found, starting fresh");
          } else {
            throw err;
          }
        }

        return { entries, note };
      },
      next: { type: "linear", target: "appendAndSave" },
    },

    appendAndSave: {
      id: "appendAndSave",
      name: "Append and Save",
      description: "Appends the new entry and re-uploads the log",
      inputSchema: readLogSchema,
      outputSchema: appendSchema,
      handler: async (input: unknown, context) => {
        const { entries, note } = input as {
          entries: LogEntry[];
          note?: string;
        };

        const newEntry: LogEntry = {
          timestamp: new Date().toISOString(),
          ...(note ? { note } : {}),
        };

        const updated = [...entries, newEntry];

        await storage.upload({
          bucket: BUCKET,
          path: LOG_PATH,
          content: JSON.stringify(updated, null, 2),
          contentType: "application/json",
        });

        context.logger.info(`Log saved — total: ${updated.length}`);
        return { entries: updated, newEntry };
      },
      next: { type: "linear", target: "notify" },
    },

    notify: {
      id: "notify",
      name: "Notify",
      description: "Returns the running total",
      inputSchema: appendSchema,
      outputSchema,
      handler: async (input: unknown, context) => {
        const { entries, newEntry } = input as {
          entries: LogEntry[];
          newEntry: LogEntry;
        };
        const total = entries.length;
        const noteText = newEntry.note ? ` — "${newEntry.note}"` : "";

        context.logger.info(`Button pushed! Total: ${total}${noteText}`);

        return { total, timestamp: newEntry.timestamp };
      },
      next: null,
    },
  },
  entryPoint: "readLog",
};
