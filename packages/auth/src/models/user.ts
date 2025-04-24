import { z } from 'zod'

import { RoleSchema } from '../roles'

const userSchema = z.object({
  role: RoleSchema,
})

export type User = z.infer<typeof userSchema>
