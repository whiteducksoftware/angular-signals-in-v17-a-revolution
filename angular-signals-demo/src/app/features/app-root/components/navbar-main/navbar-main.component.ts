import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { APP_ROUTES } from 'src/app/core/routing/app-routes.constant';
import { FeatureFlagsService } from 'src/app/core/feature-flags/feature-flags.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar-main',
  standalone: true,
  imports: [CommonModule, MenubarModule, AvatarModule],
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss'],
})
export class NavbarMainComponent {
  private readonly isUnfinishedFeatureEnabled =
    this.service.isUnfinishedFeatureEnabled();

  constructor(private readonly service: NavbarService) {}

  readonly items = [
    {
      label: APP_ROUTES.startpage.label,
      icon: 'pi pi-fw pi-home',
      routerLink: [APP_ROUTES.startpage.link],
    },
    {
      label: APP_ROUTES.angularBlogPosts.label,
      icon: 'pi pi-fw pi-info',
      routerLink: [APP_ROUTES.angularBlogPosts.link],
    },
    {
      label: APP_ROUTES.unfinishedFeature.label,
      icon: 'pi pi-fw pi-question',
      routerLink: [APP_ROUTES.unfinishedFeature.link],
      disabled: !this.isUnfinishedFeatureEnabled(),
    },
    {
      label: APP_ROUTES.adminArea.label,
      icon: 'pi pi-fw pi-cog',
      routerLink: [APP_ROUTES.adminArea.link],
    },
  ];
}
