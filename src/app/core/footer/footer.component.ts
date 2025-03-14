import { Component } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { RouterLink } from '@angular/router';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'site-footer',
  imports: [
    ImageComponent,
    RouterLink,
    IconComponent
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  host: {
    class: 'block py-5 bg-[#00393B]'
  },
})

export class FooterComponent {
}
