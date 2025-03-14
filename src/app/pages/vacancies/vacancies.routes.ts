import { Routes } from '@angular/router';

export const vacanciesRoutes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./vacancies.component').then(c => c.VacanciesComponent);
    },
    data: { title: 'Vakansiyalar' },
    pathMatch: 'full',
  },
  {
    path: ':vacancyId',
    loadComponent: () => {
      return import('./vacancy/vacancy.component').then(c => c.VacancyComponent);
    }
  }
];
