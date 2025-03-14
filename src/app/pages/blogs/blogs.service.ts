import { inject, Injectable, signal } from '@angular/core';
import { SheetsService } from '@shared/services/sheets.service';
import { IBlog } from './blogs.interface';

@Injectable({
  providedIn: 'root',
})

export class BlogsService {
  blogs = signal<IBlog[]>([])

  private sheetsService = inject(SheetsService);

  async getBlogsList() {
    const blogs = await this.sheetsService.getData<IBlog>('blog');
    this.blogs.set(blogs);
  }

  async getBlog(index: number) {
    if (!this.blogs().length) {
      await this.getBlogsList();
    }

    if (index > this.blogs().length - 1) {
      return this.blogs()[0];
    }

    return this.blogs()[index];
  }
}
