export interface Skill {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'soft';
}

export const skills: Skill[] = [
  // Frontend
  { name: 'Vue.js', icon: '/assets/icons/skills/vuedotjs.svg', category: 'frontend' },
  { name: 'React', icon: '/assets/icons/skills/react.svg', category: 'frontend' },
  { name: 'Next.js', icon: '/assets/icons/skills/nextdotjs.svg', category: 'frontend' },
  { name: 'TypeScript', icon: '/assets/icons/skills/typescript.svg', category: 'frontend' },
  { name: 'Astro', icon: '/assets/icons/skills/astro.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '/assets/icons/skills/tailwindcss.svg', category: 'frontend' },
  { name: 'Bootstrap', icon: '/assets/icons/skills/bootstrap.svg', category: 'frontend' },
  { name: 'Vite', icon: '/assets/icons/skills/vite.svg', category: 'frontend' },

  // Backend
  { name: 'ASP.NET Core', icon: '/assets/icons/skills/dotnet.svg', category: 'backend' },
  { name: 'C#', icon: '/assets/icons/skills/csharp.svg', category: 'backend' },
  { name: 'NestJS', icon: '/assets/icons/skills/nestjs.svg', category: 'backend' },
  { name: 'Node.js', icon: '/assets/icons/skills/nodedotjs.svg', category: 'backend' },
  { name: 'Laravel', icon: '/assets/icons/skills/laravel.svg', category: 'backend' },
  { name: 'PHP', icon: '/assets/icons/skills/php.svg', category: 'backend' },

  // Database
  { name: 'PostgreSQL', icon: '/assets/icons/skills/postgresql.svg', category: 'database' },
  { name: 'MySQL', icon: '/assets/icons/skills/mysql.svg', category: 'database' },
  { name: 'SQLite', icon: '/assets/icons/skills/sqlite.svg', category: 'database' },

  // Tools & DevOps
  { name: 'Git', icon: '/assets/icons/skills/git.svg', category: 'tools' },
  { name: 'Docker', icon: '/assets/icons/skills/docker.svg', category: 'tools' },
  { name: 'GitLab CI/CD', icon: '/assets/icons/skills/gitlab.svg', category: 'tools' },
  { name: 'GitHub', icon: '/assets/icons/skills/github.svg', category: 'tools' },
  { name: 'pnpm', icon: '/assets/icons/skills/pnpm.svg', category: 'tools' },
  { name: 'Jest', icon: '/assets/icons/skills/jest.svg', category: 'tools' },
  { name: 'REST APIs', icon: '/assets/icons/skills/swagger.svg', category: 'tools' },

  // Soft skills (no icons)
  { name: 'Problem Solving', category: 'soft' },
  { name: 'Teamwork', category: 'soft' },
  { name: 'Communication', category: 'soft' },
  { name: 'Continuous Learning', category: 'soft' },
  { name: 'Project Management', category: 'soft' },
];

export const skillsFr: Skill[] = [
  // Frontend
  { name: 'Vue.js', icon: '/assets/icons/skills/vuedotjs.svg', category: 'frontend' },
  { name: 'React', icon: '/assets/icons/skills/react.svg', category: 'frontend' },
  { name: 'Next.js', icon: '/assets/icons/skills/nextdotjs.svg', category: 'frontend' },
  { name: 'TypeScript', icon: '/assets/icons/skills/typescript.svg', category: 'frontend' },
  { name: 'Astro', icon: '/assets/icons/skills/astro.svg', category: 'frontend' },
  { name: 'Tailwind CSS', icon: '/assets/icons/skills/tailwindcss.svg', category: 'frontend' },
  { name: 'Bootstrap', icon: '/assets/icons/skills/bootstrap.svg', category: 'frontend' },
  { name: 'Vite', icon: '/assets/icons/skills/vite.svg', category: 'frontend' },

  // Backend
  { name: 'ASP.NET Core', icon: '/assets/icons/skills/dotnet.svg', category: 'backend' },
  { name: 'C#', icon: '/assets/icons/skills/csharp.svg', category: 'backend' },
  { name: 'NestJS', icon: '/assets/icons/skills/nestjs.svg', category: 'backend' },
  { name: 'Node.js', icon: '/assets/icons/skills/nodedotjs.svg', category: 'backend' },
  { name: 'Laravel', icon: '/assets/icons/skills/laravel.svg', category: 'backend' },
  { name: 'PHP', icon: '/assets/icons/skills/php.svg', category: 'backend' },

  // Database
  { name: 'PostgreSQL', icon: '/assets/icons/skills/postgresql.svg', category: 'database' },
  { name: 'MySQL', icon: '/assets/icons/skills/mysql.svg', category: 'database' },
  { name: 'SQLite', icon: '/assets/icons/skills/sqlite.svg', category: 'database' },

  // Tools & DevOps
  { name: 'Git', icon: '/assets/icons/skills/git.svg', category: 'tools' },
  { name: 'Docker', icon: '/assets/icons/skills/docker.svg', category: 'tools' },
  { name: 'GitLab CI/CD', icon: '/assets/icons/skills/gitlab.svg', category: 'tools' },
  { name: 'GitHub', icon: '/assets/icons/skills/github.svg', category: 'tools' },
  { name: 'pnpm', icon: '/assets/icons/skills/pnpm.svg', category: 'tools' },
  { name: 'Jest', icon: '/assets/icons/skills/jest.svg', category: 'tools' },
  { name: 'REST APIs', icon: '/assets/icons/skills/swagger.svg', category: 'tools' },

  // Soft skills (no icons)
  { name: 'Résolution de problèmes', category: 'soft' },
  { name: "Travail d'équipe", category: 'soft' },
  { name: 'Communication', category: 'soft' },
  { name: 'Apprentissage continu', category: 'soft' },
  { name: 'Gestion de projet', category: 'soft' },
];
