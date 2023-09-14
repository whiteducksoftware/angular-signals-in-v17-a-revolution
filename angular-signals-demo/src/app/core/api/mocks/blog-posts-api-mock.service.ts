import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { BlogPost } from '../models/blog-posts.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsApiMockService {
  constructor(private readonly http: HttpClient) {}

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http
      .get<BlogPost[]>('assets/mocks/blog-posts-mock.json')
      .pipe(delay(3000));
  }
}
