import { Component, inject, OnInit, signal } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { NgTemplateOutlet } from '@angular/common';
import { ImageComponent } from '@shared/components/image/image.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { SheetsService } from '@shared/services/sheets.service';

@Component({
  selector: 'media',
  imports: [
    SectionComponent,
    NgTemplateOutlet,
    ImageComponent,
    SkeletonComponent,
  ],
  templateUrl: './media.component.html',
  standalone: true
})

export class MediaComponent implements OnInit {
  images = signal<{ image: string }[]>([]);

  private sheetsService = inject(SheetsService);


  async ngOnInit() {
    await this.getMediaImages();
  }

  async getMediaImages() {
    const response = await this.sheetsService.getData<{ image: string }>('media');
    this.images.set(response);
  }
}
