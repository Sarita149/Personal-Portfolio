import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  scrollToProject(projectId: string): void {
    const projectElement = document.getElementById(projectId);

    if (!projectElement) {
      return;
    }

    projectElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
