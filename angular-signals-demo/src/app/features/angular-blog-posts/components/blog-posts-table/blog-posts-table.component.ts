import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  computed
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { BlogPostsViewModel } from '../../models/blog-posts-view-model';

@Component({
  selector: 'app-blog-posts-table',
  standalone: true,
  imports: [CommonModule, TableModule, TagModule],
  templateUrl: './blog-posts-table.component.html',
  styleUrls: ['./blog-posts-table.component.scss'],
})
export class BlogPostsTableComponent {
  @Input({ required: true })
  vm!: BlogPostsViewModel;

  areBlogPostsLoading = computed(() => this.vm.blogPosts() === undefined);
  blogPostCount = computed(() => this.vm.blogPosts()?.length ?? 0);
}
