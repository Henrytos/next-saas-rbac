import { z } from 'zod'

import { RoleSchema } from '../roles'

const userSchema = z.object({
  id: z.string(),
  role: RoleSchema,
})

export type User = z.infer<typeof userSchema>
