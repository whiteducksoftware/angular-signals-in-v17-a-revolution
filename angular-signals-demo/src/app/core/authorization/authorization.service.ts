import { Injectable, Signal, computed } from '@angular/core';
import { createMongoAbility } from '@casl/ability';
import { Ability } from '../api/models/abilities.interface';
import { AuthenticatedUserService } from '../authentication/authenticated-user.service';
import { ACTIONS, Actions } from './actions.constant';
import { Subjects } from './subjects.constant';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private readonly userAbilities: Signal<Ability[] | undefined>;
  private readonly permissions = computed(() =>
    createMongoAbility(this.userAbilities())
  );

  constructor(
    private readonly authenticatedUserService: AuthenticatedUserService
  ) {
    this.userAbilities =
      this.authenticatedUserService.getAuthenticatedUserAbilities();
  }

  canManage(subject: Subjects) {
    return this.hasPermissionTo(ACTIONS.MANAGE, subject);
  }

  canCreate(subject: Subjects) {
    return this.hasPermissionTo(ACTIONS.CREATE, subject);
  }

  canRead(subject: Subjects) {
    return this.hasPermissionTo(ACTIONS.READ, subject);
  }

  canUpdate(subject: Subjects) {
    return this.hasPermissionTo(ACTIONS.UPDATE, subject);
  }

  canDelete(subject: Subjects) {
    return this.hasPermissionTo(ACTIONS.DELETE, subject);
  }

  private hasPermissionTo(action: Actions, subject: Subjects) {
    return this.permissions().can(action, subject);
  }
}
