import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogPostsTableComponent } from '../../components/blog-posts-table/blog-posts-table.component';
import { BlogPostsViewModel } from '../../models/blog-posts-view-model';

@Component({
  selector: 'app-angular-blog-posts',
  standalone: true,
  templateUrl: './angular-blog-posts.component.html',
  styleUrls: ['./angular-blog-posts.component.scss'],
  imports: [CommonModule, BlogPostsTableComponent],
})
export class AngularBlogPostsComponent {
  constructor(public readonly vm: BlogPostsViewModel) {
    this.vm.loadBlogPosts();
  }
}
