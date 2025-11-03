export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILLS: SkillGroup[] = [
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
