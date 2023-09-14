import { Routes } from '@angular/router';
import { authorizationGuard } from '../authorization/authorization.guard';
import { featureFlagsGuard } from '../feature-flags/feature-flags.guard';
import { APP_ROUTES } from './app-routes.constant';
import { FEATURE_FLAGS } from '../feature-flags/feature-flags.constant';
import { SUBJECTS } from '../authorization/subjects.constant';

export const routes: Routes = [
  {
    path: APP_ROUTES.startpage.path,
    loadComponent: () =>
      import(
        '../../features/app-root/pages/startpage/startpage.component'
      ).then((module) => module.StartpageComponent),
    canActivate: [],
    data: { subject: SUBJECTS.startpage },
  },
  {
    path: APP_ROUTES.angularBlogPosts.path,
    loadChildren: () =>
      import('../../features/angular-blog-posts/angular-blog-posts.routes'),
    canActivate: [authorizationGuard, featureFlagsGuard],
    data: {
      subject: SUBJECTS.angularBlogPosts,
      featureFlags: [FEATURE_FLAGS.angularBlogPosts],
    },
  },
  {
    path: APP_ROUTES.unfinishedFeature.path,
    loadChildren: () =>
      import('../../features/unfinished-feature/unfinished-feature.routes'),
    canActivate: [authorizationGuard, featureFlagsGuard],
    data: {
      subject: SUBJECTS.unfinishedFeature,
      featureFlags: [FEATURE_FLAGS.unfinishedFeature],
    },
  },
  {
    path: APP_ROUTES.adminArea.path,
    loadChildren: () => import('../../features/admin-area/admin-area.routes'),
    canActivate: [authorizationGuard],
    data: { subject: SUBJECTS.adminArea },
  },
];
