import { Component } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'videos',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    NgTemplateOutlet,
  ],
  templateUrl: './videos.component.html',
  standalone: true
})

export class VideosComponent {

}
