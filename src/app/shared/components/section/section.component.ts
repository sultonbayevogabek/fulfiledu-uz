import { Component, HostBinding, input } from '@angular/core';

@Component({
  selector: 'section-container',
  imports: [],
  templateUrl: './section.component.html',
  host: {
    class: 'block py-[20px]  800:py-[30px] 1200:py-[50px]'
  },
  standalone: true
})

export class SectionComponent {
  bgColor = input<'white' | 'gray'>('white');
  @HostBinding('class.bg-[#F6F7F9]') get bgClass() {
    return this.bgColor() === 'gray';
  }
}
