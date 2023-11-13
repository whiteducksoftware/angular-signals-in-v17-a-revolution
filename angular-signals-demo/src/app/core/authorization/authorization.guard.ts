import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { APP_ROUTES } from '../routing/app-routes.constant';
import { AuthorizationService } from './authorization.service';

// authorization check with observable-based implementation
// export const adminAreaRouteGuard: CanActivateFn = (route, state) => {
//   const service = inject(AuthorizationService);
//   const router = inject(Router);

//   return this.service
//     .canRead('admin-area')
//     .pipe(
//       map((canAccess) =>
//         canAccess ? true : this.router.parseUrl(APP_ROUTES.startpage.link)
//       )
//     );
// };

// authorization check with signal-based implementation
export const authorizationGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthorizationService);
  const router = inject(Router);

  return service.canRead(route.data?.['subject'])
    ? true
    : router.parseUrl(APP_ROUTES.startpage.link);
};
