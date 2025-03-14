import { Routes } from '@angular/router';

export const blogsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./blogs.component').then(c => c.BlogsComponent);
    },
    data: { title: 'Blog va yangiliklar' },
    pathMatch: 'full',
  },
  {
    path: ':blogId',
    loadComponent: () => {
      return import('./blog/blog.component').then(c => c.BlogComponent);
    }
  }
];
