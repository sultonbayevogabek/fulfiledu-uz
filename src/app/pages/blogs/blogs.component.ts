import { Component, computed, inject, input, OnInit } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { NgTemplateOutlet } from '@angular/common';
import { ImageComponent } from '@shared/components/image/image.component';
import { BlogsService } from './blogs.service';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { RouterLink } from '@angular/router';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { customOptions } from '@shared/constants/carousel';

@Component({
  selector: 'blogs',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    CustomButtonComponent,
    NgTemplateOutlet,
    ImageComponent,
    SkeletonComponent,
    RouterLink,
    SlugifyPipe,
    CarouselModule
  ],
  templateUrl: './blogs.component.html',
  standalone: true
})

export class BlogsComponent implements OnInit {
  page = input('blog');
  blogs = computed(() => {
    if (this.page() === 'blog') {
      return this.blogsService.blogs();
    }
    return this.blogsService.blogs().slice(0, 4);
  });
  carouselOptions = customOptions;

  private blogsService = inject(BlogsService);

  async ngOnInit() {
    await this.getBlogsList();
  }

  async getBlogsList() {
    await this.blogsService.getBlogsList();
  }
}
