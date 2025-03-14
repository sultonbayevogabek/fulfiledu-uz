import { Component, input } from '@angular/core';
import { IVacancy } from '../vacancy.interface';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'vacancy-card',
  imports: [
    CustomButtonComponent,
    RouterLink,
    NgClass
  ],
  templateUrl: './vacancy-card.component.html',
})
export class VacancyCardComponent {
  bgColor = input<'white' | 'gray'>('gray');
  vacancy = input<IVacancy>(null);
}
