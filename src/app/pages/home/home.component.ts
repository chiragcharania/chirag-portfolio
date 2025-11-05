import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // Smoothly scrolls down one viewport height
  scrollDown(): void {
    window.scrollTo({
      top: window.innerHeight - 120,
      behavior: 'smooth'
    });
  }

}
