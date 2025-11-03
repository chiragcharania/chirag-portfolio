import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE, ExperienceItem } from '../../experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = EXPERIENCE;
  employers = ['All', ...Array.from(new Set(EXPERIENCE.map(e => e.employer)))];
  selected = 'All';

  setFilter(name: string) {
    this.selected = name;
  }

  get filtered(): ExperienceItem[] {
    if (this.selected === 'All') return this.experiences;
    return this.experiences.filter(e => e.employer === this.selected);
  }
}
