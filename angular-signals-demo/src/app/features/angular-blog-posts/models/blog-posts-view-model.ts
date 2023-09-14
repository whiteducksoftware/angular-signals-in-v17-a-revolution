import { Injectable, Signal, signal } from '@angular/core';
import { BlogPost } from 'src/app/core/api/models/blog-posts.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsViewModel {
  blogPosts: Signal<BlogPost[] | undefined> = signal(undefined);
}
