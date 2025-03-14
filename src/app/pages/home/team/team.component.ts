import { Component, inject, OnInit, signal } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { SheetsService } from '@shared/services/sheets.service';
import { IMember } from './member.interface';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { NgTemplateOutlet } from '@angular/common';
import { MemberFilterPipe } from './member-filter.pipe';
import { ImageComponent } from '@shared/components/image/image.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';

@Component({
  selector: 'team',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    CustomButtonComponent,
    NgTemplateOutlet,
    MemberFilterPipe,
    ImageComponent,
    SkeletonComponent
  ],
  templateUrl: './team.component.html',
  standalone: true
})

export class TeamComponent implements OnInit {
  departments = signal<string[]>([]);
  selectedDepartment = signal<string>(null);
  members = signal<IMember[]>([]);

  private sheetsService = inject(SheetsService);

  async ngOnInit() {
    await this.getTeamMembers();
  }

  async getTeamMembers() {
    const members = await this.sheetsService.getData<IMember>('team');
    this.members.set(members);

    this.getDepartments();
  }

  getDepartments() {
    const departments = new Set();
    this.members().forEach(member => {
      departments.add(member.department);
    });
    this.departments.set(Array.from(departments) as string[]);
    this.selectedDepartment.set(this.departments()[0]);
  }

  selectDepartment(department: string) {
    this.selectedDepartment.set(department);
  }
}
