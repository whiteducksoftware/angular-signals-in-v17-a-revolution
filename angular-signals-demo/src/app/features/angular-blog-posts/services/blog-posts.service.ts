import { Injectable } from '@angular/core';
import { BlogPostsApiMockService } from 'src/app/core/api/mocks/blog-posts-api-mock.service';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  constructor(private readonly api: BlogPostsApiMockService) {}

  getBlogPosts() {
    return this.api.getBlogPosts();
  }
}
