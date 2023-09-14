import { Injectable, Signal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthenticatedUserApiMockService } from '../api/mocks/authenticated-user-api-mock.service';
import { AuthenticatedUser } from '../api/models/authenticated-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedUserService {
  private authenticatedUser: Signal<AuthenticatedUser | undefined> =
    signal(undefined);

  constructor(private readonly api: AuthenticatedUserApiMockService) {}

  initializeAuthenticatedUser() {
    this.authenticatedUser = toSignal(this.api.getAuthenticatedUser());
  }

  getAuthenticatedUserAbilities() {
    return computed(() => this.authenticatedUser()?.abilities);
  }

  isUserAuthenticated() {
    return this.authenticatedUser() !== undefined;
  }
}
