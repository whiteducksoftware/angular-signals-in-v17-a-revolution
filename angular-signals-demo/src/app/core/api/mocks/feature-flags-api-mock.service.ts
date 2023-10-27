import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { FeatureFlag } from '../models/feature-flag.interface';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsApiMockService {
  constructor(private readonly http: HttpClient) {}

  getFeatureFlags(): Observable<FeatureFlag[]> {
    return this.http
      .get<FeatureFlag[]>('assets/mocks/feature-flags-mock.json')
      .pipe(delay(100));
  }
}
