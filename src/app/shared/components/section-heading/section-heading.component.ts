import { Component, input } from '@angular/core';

@Component({
  selector: 'section-heading',
  imports: [],
  templateUrl: './section-heading.component.html',
  standalone: true
})
export class SectionHeadingComponent {
  heading = input.required<string>();
  description = input<string>();
}
