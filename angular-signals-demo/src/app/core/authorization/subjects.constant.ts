export type Subjects = typeof SUBJECTS[keyof typeof SUBJECTS];

export const SUBJECTS = {
  startpage: 'startpage',
  angularBlogPosts: 'angular-blog-posts',
  unfinishedFeature: 'unfinished-feature',
  adminArea: 'admin-area',
} as const;
