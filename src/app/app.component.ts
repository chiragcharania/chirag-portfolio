import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // --- Theme handling --------------------------------------------------------
  theme = (document.documentElement.getAttribute('data-theme') || 'light') as
    | 'light'
    | 'dark';

  get themeLabel(): string {
    return this.theme === 'light' ? 'Dark mode' : 'Light mode';
  }

  get themeIcon(): string {
    return this.theme === 'light' ? '🌙' : '☀️';
  }

  toggleTheme() {
    const html = document.documentElement;
    const next = this.theme === 'light' ? 'dark' : 'light';

    // smooth transition effect
    html.classList.add('theme-transition');
    window.setTimeout(() => html.classList.remove('theme-transition'), 250);

    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    this.theme = next;
  }

  // --- Footer data -----------------------------------------------------------
  now = new Date();
  lastUpdated = this.now; // replace with fixed date if desired

  // --- Helpers ---------------------------------------------------------------
  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
