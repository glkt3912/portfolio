import { Title, Text } from '@mantine/core';
import { Project } from '@/types';
import ProjectCard from '../ui/ProjectCard';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <Title order={2} size="h2" className="text-3xl md:text-4xl font-bold mb-4">
            プロジェクト
          </Title>
          <Text size="lg" c="dimmed">
            これまでに手がけた主要なプロジェクトをご紹介します
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
