import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private router = inject(Router);

  goToSkillsCard(): void {
    this.router.navigate(['/skills']);
  }

  onCardKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.goToSkillsCard();
    }
  }

  openExternal(url: string, e?: MouseEvent): void {
    if (e) e.stopPropagation();
    window.open(url, '_blank', 'noopener');
  }

  scrollDown(): void {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
}

