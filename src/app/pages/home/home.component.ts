import { Component } from '@angular/core';
import { HistoryComponent } from './history/history.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { MeetUsComponent } from './meet-us/meet-us.component';
import { VacanciesComponent } from '../vacancies/vacancies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VideosComponent } from './videos/videos.component';

@Component({
  selector: 'app-home',
  imports: [
    HistoryComponent,
    ProjectsComponent,
    TeamComponent,
    BlogsComponent,
    MeetUsComponent,
    VacanciesComponent,
    ContactUsComponent,
    VideosComponent
  ],
  templateUrl: './home.component.html',
  standalone: true
})

export class HomeComponent {
}
