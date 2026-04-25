import type { WorkflowDefinition } from '@elevasis/sdk'
import { StepType } from '@elevasis/sdk'
import { platform } from '@elevasis/sdk/worker'
import { llm } from '@elevasis/sdk/worker'
import { z } from 'zod'

const input = z.object({
  timeRange: z.enum(['1h', '24h', '7d']).default('24h').describe('Time window for status data'),
})

const statusData = z.object({
  raw: z.unknown().describe('Raw status overview from platform'),
})

const output = z.object({
  raw: z.unknown().describe('Raw status overview from platform'),
  summary: z.string().describe('Natural language status summary'),
})

type Input = z.infer<typeof input>

export const platformStatus: WorkflowDefinition = {
  config: {
    resourceId: 'platform-status',
    name: 'Platform Status',
    type: 'workflow',
    description: 'Gathers cross-system platform status and compiles a natural language summary',
    version: '1.0.0',
    status: 'dev',
  },
  contract: { inputSchema: input, outputSchema: output },
  steps: {
    'gather-status': {
      id: 'gather-status',
      name: 'Gather Status',
      description: 'Queries platform status overview (executions, pending items, schedules, credentials)',
      handler: async (rawInput) => {
        const { timeRange } = rawInput as Input
        const raw = await platform.call({
          tool: 'status',
          method: 'overview',
          params: { timeRange },
        })
        return { raw }
      },
      inputSchema: input,
      outputSchema: statusData,
      next: { type: StepType.LINEAR, target: 'compile-report' },
    },
    'compile-report': {
      id: 'compile-report',
      name: 'Compile Report',
      description: 'Generates a natural language summary from raw status data',
      handler: async (rawInput) => {
        const { raw } = rawInput as z.infer<typeof statusData>
        const result = await llm.generate({
          provider: 'google',
          model: 'gemini-3-flash-preview',
          messages: [
            {
              role: 'user',
              content: [
                'Summarize this platform status overview in 3-5 concise bullet points.',
                'Focus on: execution health, pending items needing attention, upcoming schedules, and credential coverage.',
                'Be specific with numbers. Flag any issues.',
                '',
                JSON.stringify(raw, null, 2),
              ].join('\n'),
            },
          ],
          responseSchema: {
            type: 'object',
            properties: {
              summary: { type: 'string', description: 'Natural language status summary with bullet points' },
            },
            required: ['summary'],
          },
          temperature: 0,
        })
        const summary = (result as any)?.summary ?? String(result)
        return { raw, summary }
      },
      inputSchema: statusData,
      outputSchema: output,
      next: null,
    },
  },
  entryPoint: 'gather-status',
}
