import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  tags?: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  selected: string = 'All';

  experiences: ExperienceItem[] = [
    {
      role: 'Senior UI Developer',
      company: 'Verizon',
      dates: '2025–Present',
      bullets: [
        'Developing and maintaining TSM Portal (customer onboarding).',
        'Building scalable, responsive UI; collaborating with ASP.NET/C# teams.',
        'Focus on accessibility and cross-browser support.'
      ],
      tags: ['Angular', 'TypeScript', 'SCSS', 'ASP.NET', 'C#']
    },
    {
      role: 'Angular Developer',
      company: 'Citi Retail Services',
      dates: '2024–2025',
      bullets: [
        'Built UI for CRS apps serving large retail partners.',
        'Created reusable components and real-time features.'
      ],
      tags: ['Angular', 'TypeScript', 'Jenkins', 'OpenShift', 'WebSockets']
    },
    {
      role: 'Software Developer',
      company: 'NYS Office of General Services',
      dates: '2022–2024',
      bullets: [
        'Developed web apps and integrated REST services.',
        'Improved UX and performance across modules.'
      ],
      tags: ['Angular', 'Node.js', 'REST', 'HTML', 'CSS']
    }
  ];

  employers: string[] = [
    'Verizon',
    'Citi Retail Services',
    'NYS Office of General Services'
  ];

  filtered: ExperienceItem[] = [...this.experiences];

  setFilter(name: string): void {
    this.selected = name;
    this.filtered =
      name === 'All'
        ? [...this.experiences]
        : this.experiences.filter(e => e.company === name);
  }
}
