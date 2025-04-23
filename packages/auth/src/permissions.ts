import { AbilityBuilder } from '@casl/ability'

import { AppAbility } from '.'
import { User } from './models/user'

type ROLE = 'ADMIN' | 'MEMBER' | 'BILLING'

type PermissionByRole = (
  user: User,
  builder: AbilityBuilder<AppAbility>
) => void

export const permissions: Record<ROLE, PermissionByRole> = {
  ADMIN(_, { can }) {
    can('manage', 'all')
  },
  MEMBER(_, { can }) {
    can('invite', 'User')
    can('create', 'Project')
  },
  BILLING() {},
}
