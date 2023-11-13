import { Injectable, WritableSignal, signal } from '@angular/core';
import { BlogPost } from 'src/app/core/api/models/blog-posts.interface';
import { BlogPostsService } from '../services/blog-posts.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsViewModel {
  public blogPosts: WritableSignal<BlogPost[] | undefined> = signal(undefined);

  constructor(private readonly service: BlogPostsService) {}

  loadBlogPosts() {
    this.service
      .getBlogPosts()
      .pipe(takeUntilDestroyed())
      .subscribe((blogPosts) => this.blogPosts.set(blogPosts));
  }
}
