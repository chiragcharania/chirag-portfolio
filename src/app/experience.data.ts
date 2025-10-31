export type ExperienceItem = {
  employer: string;
  title: string;
  when: string;
  tags: string[];
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    employer: "Verizon",
    title: "Senior UI Developer",
    when: "2025 – Present",
    tags: ["Angular", "TypeScript", "SCSS", "ASP.NET", "C#"],
    bullets: [
      "Developing and maintaining TSM-Portal (customer onboarding).",
      "Building scalable, responsive UI; collaborating with ASP.NET/C# teams.",
      "Focus on accessibility and cross-browser support."
    ]
  },
  {
    employer: "Citi Retail Services",
    title: "Angular Developer",
    when: "2024 – 2025",
    tags: ["Angular", "TypeScript", "Jenkins", "OpenShift", "WebSockets"],
    bullets: [
      "Built UI for CRS apps serving large retail partners.",
      "Created reusable components and real-time features."
    ]
  },
  {
    employer: "NYS Office of General Services",
    title: "Software Developer",
    when: "2022 – 2024",
    tags: ["Angular", "Node.js", "REST", "HTML", "CSS"],
    bullets: [
      "Developed web apps and integrated REST services.",
      "Improved UX and performance across modules."
    ]
  }
];
