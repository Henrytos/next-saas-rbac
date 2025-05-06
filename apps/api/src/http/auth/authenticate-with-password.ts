import { FastifyInstance } from 'fastify'
import { ZodTypeProvider } from 'fastify-type-provider-zod'
import z, { string } from 'zod'

import { prisma } from '../lib/prisma'

export async function authenticateWithPassword(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/sessions/password',
    {
      schema: {
        body: z.object({
          email: z.string().email(),
          password: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { email, password } = request.body

      const userFromEmail = prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!userFromEmail) {
        return reply.status(400).send({
          message: 'Invalid credentials.',
        })
      }
      if (userFromEmail.passwordHash === null) {
        return reply.status(400).send({
          message: 'User does not have a password, use social login.',
        })
      }
    }
  )
}
