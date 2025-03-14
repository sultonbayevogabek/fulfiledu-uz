import { Component, computed, inject, input, OnInit } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { NgTemplateOutlet } from '@angular/common';
import { VacanciesService } from './vacancies.service';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { RouterLink } from '@angular/router';
import { VacancyCardComponent } from './vacancy-card/vacancy-card.component';

@Component({
  selector: 'vacancies',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    CustomButtonComponent,
    NgTemplateOutlet,
    SkeletonComponent,
    RouterLink,
    VacancyCardComponent
  ],
  templateUrl: './vacancies.component.html',
  standalone: true
})

export class VacanciesComponent implements OnInit {
  page = input('blog');
  vacancies = computed(() => {
    if (this.page() === 'blog') {
      return this.vacanciesService.vacancies();
    }
    return this.vacanciesService.vacancies().slice(0, 4);
  });

  private vacanciesService = inject(VacanciesService);

  async ngOnInit() {
    await this.getVacanciesList();
  }

  async getVacanciesList() {
    await this.vacanciesService.getVacanciesList();
  }
}
