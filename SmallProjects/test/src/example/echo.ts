import type { WorkflowDefinition } from '@elevasis/sdk'
import { z } from 'zod'

const echoInput = z.object({ message: z.string() })
const echoOutput = z.object({ echo: z.string() })
type EchoInput = z.infer<typeof echoInput>

export const echo: WorkflowDefinition = {
  config: {
    resourceId: 'echo',
    name: 'Echo',
    type: 'workflow',
    description: 'Echoes the input message back',
    version: '1.0.0',
    status: 'dev',
  },
  contract: {
    inputSchema: echoInput,
    outputSchema: echoOutput,
  },
  steps: {
    echo: {
      id: 'echo',
      name: 'Echo Message',
      description: 'Returns the input message',
      handler: async (input) => {
        const { message } = input as EchoInput
        return { echo: message }
      },
      inputSchema: echoInput,
      outputSchema: echoOutput,
      next: null,
    },
  },
  entryPoint: 'echo',
}
