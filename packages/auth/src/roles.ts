import { z } from 'zod'

export const RoleSchema = z.union([
  z.literal('MEMBER'),
  z.literal('ADMIN'),
  z.literal('BILLING'),
])

export type Role = z.infer<typeof RoleSchema>
