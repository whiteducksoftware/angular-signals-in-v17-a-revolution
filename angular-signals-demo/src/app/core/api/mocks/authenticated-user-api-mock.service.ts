import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { AuthenticatedUser } from '../models/authenticated-user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedUserApiMockService {
  constructor(private readonly http: HttpClient) {}

  getAuthenticatedUser(): Observable<AuthenticatedUser> {
    return this.http.get<AuthenticatedUser>(
      'assets/mocks/authenticated-user-mock.json'
    );
  }
}
