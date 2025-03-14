import { inject, Injectable, Renderer2, RendererFactory2, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MobileMenuService {
  isMenuOpen = signal(false);
  private renderer: Renderer2;

  constructor() {
    const rendererFactory = inject(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  openMenu() {
    this.isMenuOpen.set(true);
    this.renderer.addClass(document.body, 'overflow-hidden');
  }
}
