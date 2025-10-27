export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: readonly string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl?: string;
  featured?: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "Pacman Game",
    description: "A classic arcade game recreation built as a group project for Multimedia course. Features smooth gameplay, score tracking, and retro graphics.",
    longDescription: "This project was developed as part of a team effort for our Multimedia course. We implemented the classic Pacman game mechanics including ghost AI, power-ups, and a scoring system. The game features smooth animations, responsive controls, and maintains the nostalgic feel of the original while adding modern touches.",
    tags: ["HTML5", "CSS3", "JavaScript", "Game Dev"],
    githubUrl: "https://github.com/nrdn26/PacManGame",
    liveUrl: "https://nrdn26.github.io/PacManGame",
    featured: true,
    status: 'completed'
  },
  {
    id: 2,
    title: "Android Task Manager",
    description: "Modern Android application for efficient task management. Will feature Material Design UI, local storage, and task categorization.",
    longDescription: "An upcoming Android application designed to help users manage their daily tasks efficiently. The app will feature a clean Material Design interface, local data persistence using Room database, task categorization with custom tags, reminder notifications, and dark mode support.",
    tags: ["Kotlin", "Android", "Material Design"],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    status: 'in-progress'
  },
  {
    id: 3,
    title: "Rust System Monitor",
    description: "High-performance system monitoring tool built with Rust. Planned features include resource tracking, process management, and real-time metrics.",
    longDescription: "A command-line system monitoring tool leveraging Rust's performance and safety features. The project will include CPU and memory usage tracking, process management capabilities, network statistics, disk I/O monitoring, and a TUI (Terminal User Interface) for real-time visualization.",
    tags: ["Rust", "Systems Programming", "CLI",],
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    status: 'planned'
  }
];

export const featuredProjects = projects.filter(p => p.featured);
export const completedProjects = projects.filter(p => p.status === 'completed');
export const inProgressProjects = projects.filter(p => p.status === 'in-progress');
export const plannedProjects = projects.filter(p => p.status === 'planned');
