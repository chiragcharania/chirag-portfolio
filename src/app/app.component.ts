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
  // read initial theme from <html data-theme="...">
  theme = (document.documentElement.getAttribute('data-theme') || 'light') as 'light' | 'dark';

  // Label shows the action (what will happen on click)
  get themeLabel(): string {
    return this.theme === 'light' ? 'Dark Mode' : 'Light Mode';
  }

  // Optional icon alongside text
  get themeIcon(): string {
    return this.theme === 'light' ? '🌙' : '☀️';
  }

  toggleTheme() {
    const next = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    this.theme = next;
  }
}
