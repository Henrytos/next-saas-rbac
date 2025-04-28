import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ id: '1', role: 'MEMBER' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeletedOtherUsers = ability.can('delete', 'User')
const userCannotDeletedOtherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse)
console.log(userCanDeletedOtherUsers)
console.log(userCannotDeletedOtherUsers)
