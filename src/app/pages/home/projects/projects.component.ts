import { Component } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { ImageComponent } from '@shared/components/image/image.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'projects',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    ImageComponent,
    NgClass
  ],
  templateUrl: './projects.component.html',
  standalone: true
})

export class ProjectsComponent {
  projects = [
    {
      title: 'Zoom orqali ta\'lim berish',
      description: '16-avgust 2020 yildan 2023-yil Sentyabr oyigacha onlayn Zoomda ta\'lim beruvchi IT o\'quv markazi',
      status: 'finished'
    },
    {
      title: 'Backend dasturlash kursi',
      description: 'Komiljon Xamidjonov bilan 2023 - sentyabrdan 2024-Sentabr oyichaga backend dasturlash kursi bo’yicha hamkorlik',
      status: 'finished'
    },
    {
      title: 'Russ tili kursi',
      description: '2023-yil noyabrdan - Hozirga Azizbek Khabibullaev Ayti ekspert bilan frontend dasturlash kursi bo’yicha hamkorlik',
      status: 'active'
    },
    {
      title: 'Frontend dasturlash kursi',
      description: '2023-yil noyabrdan - Hozirga Azizbek Khabibullaev Ayti ekspert bilan frontend dasturlash kursi bo’yicha hamkorlik',
      status: 'active'
    },
    {
      title: 'Buxgalteriya kursi',
      description: '2024-yil may oylaridan - 2024-yil avgust oyiga Bekzod Amanov Gigant Buxgalter kompaniyasi rahbari bilan Buxgalteriya kursi bo’yicha hamkorlik',
      status: 'finished'
    },
    {
      title: 'Uzum market kursi',
      description: '2024-yil Avgust oyidan - 2024-yil Dekabr oygiacha Farhod Ruzmatov Uzumda rasmiy spiker Uzum market savdosi kursi',
      status: 'finished'
    }
  ];
  protected readonly status = status;
}
