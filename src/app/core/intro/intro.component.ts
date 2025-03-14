import { Component, HostBinding, inject, OnInit, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'intro',
  imports: [
    HeaderComponent
  ],
  standalone: true,
  templateUrl: './intro.component.html',
  host: {
    'class': 'block bg-[#00393B] bg-center bg-cover'
  }
})

export class IntroComponent implements OnInit {
  @HostBinding('style.backgroundImage') get background() {
    return this.heading() ? 'url(/images/intro/background.jpg)' : 'none';
  }

  heading = signal<string>(null);

  private router = inject(Router);

  ngOnInit(): void {
    this.setHeading();
  }

  setHeading() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        if (event.snapshot.data && event.snapshot.data['title']) {
          this.heading.set(event.snapshot.data['title']);
          return;
        }
        this.heading.set(null);
      }
    });
  }
}
