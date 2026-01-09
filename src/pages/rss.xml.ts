import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  // Fetch all projects from both languages
  const frProjects = await getCollection('projects', ({ id }) => id.startsWith('fr/'));
  const enProjects = await getCollection('projects', ({ id }) => id.startsWith('en/'));

  // Combine and sort by date (newest first)
  const allProjects = [...frProjects, ...enProjects].sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Adrien Watrelot - Portfolio Updates',
    description: 'Latest projects and portfolio updates from Adrien Watrelot, Full-Stack Developer specializing in Vue.js, React, Laravel, and ASP.NET.',
    site: context.site!,
    items: allProjects.map((project) => {
      const lang = project.id.startsWith('fr/') ? 'fr' : 'en';
      const slug = project.slug.replace(/^(fr|en)\//, '');

      return {
        title: project.data.title,
        description: project.data.description,
        link: `/${lang}/projects/${slug}/`,
        pubDate: project.data.date,
        categories: project.data.tags,
        // Custom namespaces for additional metadata
        customData: [
          project.data.githubUrl ? `<githubUrl>${project.data.githubUrl}</githubUrl>` : '',
          project.data.demoUrl ? `<demoUrl>${project.data.demoUrl}</demoUrl>` : '',
          project.data.featured ? '<featured>true</featured>' : '',
        ].filter(Boolean).join('\n'),
      };
    }),
    customData: `<language>fr</language>
<language>en</language>
<generator>Astro</generator>`,
  });
}
