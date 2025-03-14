import { inject, Injectable, signal } from '@angular/core';
import { SheetsService } from '@shared/services/sheets.service';
import { IVacancy } from './vacancy.interface';

@Injectable({
  providedIn: 'root',
})

export class VacanciesService {
  vacancies = signal<IVacancy[]>([]);

  private sheetsService = inject(SheetsService);

  async getVacanciesList() {
    let vacancies = await this.sheetsService.getData<IVacancy>('vacancies');
    this.vacancies.set(vacancies);
  }

  async getVacancy(vacancyId: string) {
    if (!this.vacancies().length) {
      await this.getVacanciesList();
    }

    return this.vacancies().find(v => v.id === vacancyId);
  }

  getAnotherVacancies(id: string) {
    const result: IVacancy[] = [];

    this.vacancies().forEach((vacancy) => {
      if (id !== vacancy.id && result.length < 3) {
        result.push(vacancy)
      }
    })

    return result;
  }

  generateUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
