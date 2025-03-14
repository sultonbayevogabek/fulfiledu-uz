import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Maqsadimiz, ilm orqali insonlar hayotini o\'zgartirish!' }
  },
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blogs/blogs.routes').then(r => r.blogsRoutes)
  },
  {
    path: 'vacancies',
    loadChildren: () => import('./pages/vacancies/vacancies.routes').then(r => r.vacanciesRoutes)
  },
  {
    path: 'media',
    loadComponent: () => {
      return import('./pages/media/media.component').then(c => c.MediaComponent);
    },
    data: { title: 'Biz bilan yaqindan tanishing' }
  },
];
