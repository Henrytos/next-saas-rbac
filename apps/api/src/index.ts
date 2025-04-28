import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({ id: 'user-id', role: 'MEMBER' })
const project = projectSchema.parse({ id: 'project-id', ownerId: 'user-id' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeletedOtherUsers = ability.can('delete', 'User')
const userCannotDeletedOtherUsers = ability.cannot('delete', 'User')
const userCanDeleteProject = ability.can('delete', project)

console.log(userCanInviteSomeoneElse)
console.log(userCanDeletedOtherUsers)
console.log(userCannotDeletedOtherUsers)
console.log(userCanDeleteProject)
