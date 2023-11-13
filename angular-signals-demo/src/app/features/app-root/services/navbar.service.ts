import { Injectable } from '@angular/core';
import { FeatureFlagsService } from 'src/app/core/feature-flags/feature-flags.service';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private readonly featureFlagService: FeatureFlagsService) {}

  isUnfinishedFeatureEnabled() {
    return this.featureFlagService.isFeatureEnabled('unfinished-feature');
  }
}
