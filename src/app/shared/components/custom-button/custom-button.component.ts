import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'custom-button',
  imports: [
    NgClass
  ],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  standalone: true
})

export class CustomButtonComponent {
  classes = input('');
  type = input<'white' | 'green'>('green');
  text = input.required<string>();
  phone = input<string>(null);

  onBtnClick() {
    if (this.phone()) {
      window.location.href = 'tel:' + this.phone();
    }
  }
}
