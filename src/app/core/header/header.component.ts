import { Component, inject } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import menu from '@shared/constants/menu';
import { MobileMenuService } from '../mobile-menu/mobile-menu.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'site-header',
  imports: [
    ImageComponent,
    RouterLink,
    CustomButtonComponent,
    IconComponent,
    IconComponent,
    NgTemplateOutlet
  ],
  templateUrl: './header.component.html',
  standalone: true
})

export class HeaderComponent {
  menu = menu;
  private mobileMenuService = inject(MobileMenuService);

  openMobileMenu() {
    this.mobileMenuService.openMenu();
  }
}
