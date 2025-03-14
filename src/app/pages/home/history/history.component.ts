import { Component } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { ImageComponent } from '@shared/components/image/image.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'history',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    ImageComponent,
    NgTemplateOutlet
  ],
  standalone: true,
  templateUrl: './history.component.html',
})

export class HistoryComponent {
  history = [
    {
      year: 2020,
      title: 'Asos solingan sanasi va asoschisi',
      description: 'Fulfil groupga 2020-yil 16-avgust kuni Suxrob Abduaxatov tomonidan asos solingan'
    },
    {
      year: 2021,
      title: 'IT ta’lim loyihasining dastlabki yillari',
      description: '2020 - 2021-yillarda Online ravishda Fulfil education online IT ta\'lim loyihasi sifatida o\'sgan. Bir vaqtda  130+ gacha o\'quvchilar o\'qishgan'
    },
    {
      year: 2022,
      title: 'Offlayn jamoaning shakllanishi',
      description: '2022-yilda offlayn jamoa tuzilib, kichik bir 15-20 kv ofisdagi xonadan, 1 kishi offlayn jamoa, Suxrob Abduaxatov tomonidan tuzilishni boshlagan'
    },
    {
      year: 2023,
      title: 'O‘sish va o‘zgarish davri',
      description: '2023-yil o\'rtalardan boshlab, o\'zgarishlar bo\'lishni boshlagan va o\'quvchilar soni 300-400+ ga yetgan'
    },
    {
      year: 2024,
      title: 'Eng yuqori o‘sish davri',
      description: '2023-yil o\'rtalardan boshlab, o\'zgarishlar bo\'lishni boshlagan va o\'quvchilar soni 300-400+ ga yetgan'
    }
  ]
}
