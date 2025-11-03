import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS, SkillGroup } from '../../skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: SkillGroup[] = SKILLS;
}
