import { Injectable, Signal, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FeatureFlagsApiMockService } from '../api/mocks/feature-flags-api-mock.service';
import { FeatureFlag } from '../api/models/feature-flag.interface';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagsService {
  private featureFlags: Signal<FeatureFlag[] | undefined> = signal(undefined);

  constructor(private readonly api: FeatureFlagsApiMockService) {}

  initializeFeatureFlags() {
    this.featureFlags = toSignal(this.api.getFeatureFlags());
  }

  isFeatureEnabled(name: string) {
    return computed(
      () =>
        this.featureFlags()?.find((featureFlag) => featureFlag.name === name)
          ?.enabled ?? false
    );
  }

  areAllFeaturesEnabled(name: string[]): Signal<boolean> {
    return computed(() =>
      name.every(
        (name) =>
          this.featureFlags()?.find((feature) => feature.name === name)
            ?.enabled ?? false
      )
    );
  }

  isAtLeastOneOfTheFeaturesEnabled(name: string[]): Signal<boolean> {
    return computed(() =>
      name.some(
        (name) =>
          this.featureFlags()?.find((feature) => feature.name === name)
            ?.enabled ?? false
      )
    );
  }
}
