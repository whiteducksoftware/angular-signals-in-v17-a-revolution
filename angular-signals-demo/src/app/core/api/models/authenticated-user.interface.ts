import { Ability } from './abilities.interface';

export interface AuthenticatedUser {
  roles: string[];
  abilities: Ability[];
  name: string;
}
