import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slugify'
})

export class SlugifyPipe implements PipeTransform {
  transform(title: string, index: number): string {
    return title.replace(/ /gi, '-').toLowerCase() + '-' + index
  }
}
