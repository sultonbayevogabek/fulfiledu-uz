import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'skeleton',
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './skeleton.component.html',
})

export class SkeletonComponent {
  count = input<number>(4);
  type = input.required<
    'members' | 'blog' | 'vacancies' | 'meet-us' | 'media'
  >();
  readonly Array = Array;
}
