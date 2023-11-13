import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostsApiMockService } from 'src/app/core/api/mocks/blog-posts-api-mock.service';
import { BlogPost } from 'src/app/core/api/models/blog-posts.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  constructor(private readonly api: BlogPostsApiMockService) {}

  getBlogPosts(): Observable<BlogPost[]> {
    return this.api.getBlogPosts();
  }
}
