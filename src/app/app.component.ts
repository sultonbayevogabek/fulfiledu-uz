import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileMenuComponent } from './core/mobile-menu/mobile-menu.component';
import { IntroComponent } from './core/intro/intro.component';
import { FooterComponent } from './core/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MobileMenuComponent,
    IntroComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  host: {
    class: 'flex flex-col min-h-screen'
  }
})
export class AppComponent {
  title = 'fulfiledu';
}
