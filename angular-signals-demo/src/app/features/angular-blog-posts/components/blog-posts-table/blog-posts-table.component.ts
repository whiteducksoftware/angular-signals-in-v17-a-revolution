import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Signal,
  WritableSignal,
  computed,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { BlogPost } from 'src/app/core/api/models/blog-posts.interface';
import { AuthorizationService } from 'src/app/core/authorization/authorization.service';
import { FeatureFlagsService } from 'src/app/core/feature-flags/feature-flags.service';
import { BlogPostsViewModel } from '../../models/blog-posts-view-model';

@Component({
  selector: 'app-blog-posts-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    DialogModule,
    ToolbarModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './blog-posts-table.component.html',
  styleUrls: ['./blog-posts-table.component.scss'],
})
export class BlogPostsTableComponent {
  @Input({ required: true })
  vm!: BlogPostsViewModel;

  blogPost: BlogPost = {
    title: 'Freds new blog post',
    author: 'Fred',
    url: 'https://whiteduck.de/freds-new-blog-post',
    date: new Date(),
    keywords: ['Signals demo'],
  };

  isDialogVisible: WritableSignal<boolean> = signal(false);

  submitted: Signal<boolean> = computed(() => !this.isDialogVisible());

  areBlogPostsLoading: Signal<boolean> = computed(
    () => this.vm.blogPosts() === undefined
  );

  blogPostCount: Signal<number> = computed(
    () => this.vm.blogPosts()?.length ?? 0
  );

  canUserCreateAndIsBlogPostCountFeatureEnabled = computed(
    () => this.canCreateBlogPosts() && this.isBlogPostCountFeatureEnabled()
  );

  private canCreateBlogPosts: Signal<boolean> =
    this.authService.canCreate('angular-blog-posts');

  private isBlogPostCountFeatureEnabled: Signal<boolean> =
    this.featureFlagsService.isFeatureEnabled('blog-post-count');

  constructor(
    private readonly authService: AuthorizationService,
    private readonly featureFlagsService: FeatureFlagsService
  ) {
  }

  createBlogPost(): void {
    this.vm.blogPosts.update((blogPosts) => {
      if (blogPosts) {
        blogPosts = [...blogPosts, this.blogPost];
      } else {
        blogPosts = [this.blogPost];
      }
      return blogPosts;
    });

    this.isDialogVisible.set(false);
  }
}
