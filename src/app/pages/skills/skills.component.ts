import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  groups = [
    {
      title: 'Frameworks & Libraries',
      items: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'HTML5', 'SCSS']
    },
    {
      title: 'Tools & Platforms',
      items: ['Git', 'GitHub Actions', 'Jenkins', 'OpenShift', 'REST APIs']
    },
    {
      title: 'Testing & Quality',
      items: ['Jasmine', 'Karma', 'ESLint', 'Prettier']
    },
    {
      title: 'Design & UX',
      items: ['Responsive UI', 'Accessibility (ARIA)', 'Cross-browser']
    }
  ];
}
