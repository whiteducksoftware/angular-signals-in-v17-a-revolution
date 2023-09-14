import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_ROUTES } from '../routing/app-routes.constant';
import { FeatureFlagsService } from './feature-flags.service';

export const featureFlagsGuard: CanActivateFn = (route, state) => {
  const service = inject(FeatureFlagsService);
  const router = inject(Router);

  const featureFlags: string[] = route.data?.['featureFlags']; // data is passed as array from data parameter

  // If flag is not defined, allow access
  if (featureFlags === null || featureFlags === undefined) {
    return true;
  }

  const areAllFeatureFlagsEnabled: boolean = featureFlags.every((flag) =>
    service.isFeatureEnabled(flag)()
  );

  return areAllFeatureFlagsEnabled
    ? true
    : router.parseUrl(APP_ROUTES.startpage.link);
};
