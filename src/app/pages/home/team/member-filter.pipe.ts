import { IMember } from './member.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberFilter',
  standalone: true,
})

export class MemberFilterPipe implements PipeTransform {
  transform(members: IMember[], department: string): IMember[] {
    return members.filter(member => member.department === department);
  }
}
