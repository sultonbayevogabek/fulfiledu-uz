import { Component, computed, inject, model } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import menu from '@shared/constants/menu';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { MobileMenuService } from './mobile-menu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mobile-menu',
  imports: [
    ImageComponent,
    CustomButtonComponent,
    RouterLink
  ],
  templateUrl: './mobile-menu.component.html',
  standalone: true
})

export class MobileMenuComponent {
  menu = menu;
  isMenuOpen = computed(() => this.mobileMenuService.isMenuOpen());
  private mobileMenuService = inject(MobileMenuService);

  closeMenu() {
    this.mobileMenuService.closeMenu();
  }
}
