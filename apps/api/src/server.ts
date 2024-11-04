import { ability } from '@saas/auth'

const userCanInviteElse = ability.can('invite', 'User')

console.log(userCanInviteElse)
