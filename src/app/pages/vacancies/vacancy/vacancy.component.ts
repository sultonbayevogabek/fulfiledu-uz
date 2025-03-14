import { Component, inject, OnInit, signal } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { Location, NgTemplateOutlet } from '@angular/common';
import { IVacancy } from '../vacancy.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VacanciesService } from '../vacancies.service';
import { ImageComponent } from '@shared/components/image/image.component';
import { VacancyCardComponent } from '../vacancy-card/vacancy-card.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';

@Component({
  selector: 'vacancy',
  imports: [
    SectionComponent,
    IconComponent,
    NgTemplateOutlet,
    RouterLink,
    ImageComponent,
    VacancyCardComponent,
    LoaderComponent,
    CustomButtonComponent
  ],
  templateUrl: './vacancy.component.html',
  host: {
    class: 'flex flex-col flex-grow'
  }
})

export class VacancyComponent implements OnInit {
  vacancy = signal<IVacancy>(null);
  anotherVacancies = signal<IVacancy[]>([]);

  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);
  private vacanciesService = inject(VacanciesService);

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      if (params && params['vacancyId']) {
        await this.getVacancy(params['vacancyId']);
      }
    });
  }

  back() {
    this.location.back();
  }

  async getVacancy(vacancyId: string) {
    const vacancy = await this.vacanciesService.getVacancy(vacancyId);
    this.vacancy.set({
      ...vacancy,
      offersList: vacancy.offers.split('||'),
      requirementsList: vacancy.requirements.split('||')
    });
    this.getAnotherVacancies(vacancyId);
  }

  getAnotherVacancies(vacancyId: string) {
    const anotherVacancies = this.vacanciesService.getAnotherVacancies(vacancyId);
    this.anotherVacancies.set(anotherVacancies);
  }
}
