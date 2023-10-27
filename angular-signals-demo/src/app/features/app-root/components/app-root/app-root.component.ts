import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticatedUserService } from 'src/app/core/authentication/authenticated-user.service';
import { FeatureFlagsService } from 'src/app/core/feature-flags/feature-flags.service';
import { NavbarMainComponent } from '../navbar-main/navbar-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarMainComponent],
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.scss'],
})
export class AppRootComponent {
  title = 'angular-signals-in-v16';

  constructor(
    private readonly authenticatedUserService: AuthenticatedUserService,
    private readonly featureFlagsService: FeatureFlagsService
  ) {
    this.authenticatedUserService.initializeAuthenticatedUser();
    this.featureFlagsService.initializeFeatureFlags();
  }
}
