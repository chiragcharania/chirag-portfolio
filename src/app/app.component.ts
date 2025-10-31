import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE, ExperienceItem } from './experience.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme = (document.documentElement.getAttribute('data-theme') || 'light') as 'light' | 'dark';
  experiences: ExperienceItem[] = EXPERIENCE;
  employers = ['All', ...Array.from(new Set(EXPERIENCE.map(e => e.employer)))];
  selected = 'All';

  toggleTheme() {
    const next = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    this.theme = next;
  }

  setFilter(name: string) {
    this.selected = name;
  }

  get filtered(): ExperienceItem[] {
    if (this.selected === 'All') return this.experiences;
    return this.experiences.filter(e => e.employer === this.selected);
  }
}
