import { Title } from '@mantine/core';
import { Project } from '@/types';
import ProjectCard from '../ui/ProjectCard';
import { SECTION_STYLES } from '@/styles/constants';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className={SECTION_STYLES.padding.dark}>
      <div className={SECTION_STYLES.container}>
        <Title order={2} className={SECTION_STYLES.title}>
          プロジェクト
        </Title>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
