import type { WorkflowDefinition } from '@elevasis/sdk'
import { StepType } from '@elevasis/sdk'
import { platform } from '@elevasis/sdk/worker'
import { z } from 'zod'

const GOOGLE_REVIEW_LINK = 'https://g.page/r/CbxE-B-vjlwBEBE/review'

const input = z.object({
  clientName: z.string().describe('First name of the client'),
  clientEmail: z.string().email().describe('Email address of the client'),
})

const output = z.object({
  sent: z.boolean(),
  message: z.string(),
})

type Input = z.infer<typeof input>

export const naildItReviewRequest: WorkflowDefinition = {
  config: {
    resourceId: 'naild-it-review-request',
    name: "Nail'd It Review Request",
    type: 'workflow',
    description: "Sends a Google review request email to a client after their appointment at Nail'd It! Spa",
    version: '1.0.0',
    status: 'dev',
  },
  contract: { inputSchema: input, outputSchema: output },
  steps: {
    'send-review-email': {
      id: 'send-review-email',
      name: 'Send Review Request Email',
      description: 'Sends a warm thank-you email with a direct Google review link',
      handler: async (rawInput) => {
        const { clientName, clientEmail } = rawInput as Input

        await platform.call({
          tool: 'gmail',
          method: 'sendEmail',
          credential: 'naild-it-gmail',
          params: {
            to: clientEmail,
            subject: `Thank you for visiting Nail'd It! Spa 💅`,
            body: `
<div style="font-family: Georgia, serif; max-width: 500px; margin: 0 auto; padding: 32px; color: #3a2a22;">

  <p style="font-size: 18px; font-weight: bold; color: #C4714F;">Hi ${clientName}!</p>

  <p>Thank you so much for coming in today. It was a pleasure having you at Nail'd It! Spa and we hope you're loving your nails! 💕</p>

  <p>If you have a moment, we'd really appreciate it if you could leave us a quick Google review. It means the world to us and helps other clients find us.</p>

  <div style="text-align: center; margin: 32px 0;">
    <a href="${GOOGLE_REVIEW_LINK}"
       style="background: #C4714F; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-size: 16px; font-weight: bold;">
      Leave a Google Review ⭐
    </a>
  </div>

  <p>It only takes 30 seconds and we read every single one. 🙏</p>

  <p>See you next time!<br/>
  <strong>Dalena & the Nail'd It! Spa team</strong><br/>
  7443 W Cerritos Ave, Stanton CA<br/>
  (714) 947-0303</p>

</div>
            `.trim(),
          },
        })

        return {
          sent: true,
          message: `Review request sent to ${clientName} at ${clientEmail}`,
        }
      },
      inputSchema: input,
      outputSchema: output,
      next: null,
    },
  },
  entryPoint: 'send-review-email',
}
