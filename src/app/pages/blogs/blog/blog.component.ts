import { Component, inject, OnInit, signal } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { Location, NgTemplateOutlet } from '@angular/common';
import { IBlog } from '../blogs.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogsService } from '../blogs.service';
import { ImageComponent } from '@shared/components/image/image.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'blog',
  imports: [
    SectionComponent,
    IconComponent,
    NgTemplateOutlet,
    RouterLink,
    ImageComponent,
    LoaderComponent
  ],
  templateUrl: './blog.component.html',
  host: {
    class: 'flex flex-col flex-grow'
  }
})

export class BlogComponent implements OnInit {
  blog = signal<IBlog>(null);

  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);
  private blogsService = inject(BlogsService);

  async ngOnInit() {
    await this.getBlog();
  }

  back() {
    this.location.back();
  }

  async getBlog() {
    const snapshot = this.activatedRoute.snapshot;
    const params = snapshot.params;
    let blogIndex = 0;
    if (params && params['blogId']) {
      blogIndex = +params['blogId'].split('-').reverse()[0] || 0;
    }
    const blog = await this.blogsService.getBlog(blogIndex);
    this.blog.set(blog);
  }
}
