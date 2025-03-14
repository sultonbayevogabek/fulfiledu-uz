import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'image',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './image.component.html',
  host: {
    'class': 'relative block'
  },
  standalone: true
})

export class ImageComponent {
  src = input.required<string>();
}
