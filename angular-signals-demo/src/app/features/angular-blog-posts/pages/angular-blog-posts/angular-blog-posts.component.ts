import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogPostsTableComponent } from '../../components/blog-posts-table/blog-posts-table.component';
import { BlogPostsService } from '../../services/blog-posts.service';
import { BlogPostsViewModel } from '../../models/blog-posts-view-model';

@Component({
  selector: 'app-angular-blog-posts',
  standalone: true,
  templateUrl: './angular-blog-posts.component.html',
  styleUrls: ['./angular-blog-posts.component.scss'],
  imports: [CommonModule, BlogPostsTableComponent],
})
export class AngularBlogPostsComponent {
  constructor(
    private readonly service: BlogPostsService,
    public readonly vm: BlogPostsViewModel
  ) {
    this.vm.blogPosts = toSignal(this.service.getBlogPosts());
  }
}
