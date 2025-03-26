import { Component } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { NgTemplateOutlet } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { customOptions } from '@shared/constants/carousel';

@Component({
  selector: 'videos',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    NgTemplateOutlet,
    CarouselModule
  ],
  templateUrl: './videos.component.html',
  standalone: true
})

export class VideosComponent {
  carouselOptions = customOptions;
}
