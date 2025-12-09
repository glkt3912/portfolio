import { memo } from 'react';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card
        shadow="soft"
        padding="lg"
        radius="card"
        withBorder
        className="h-full flex flex-col border border-primary-200 dark:border-primary-700 bg-white dark:bg-primary-800 hover:shadow-card-hover transition-all duration-300"
      >
        {/* Image Section with Hover Effect */}
        <Card.Section className="relative overflow-hidden">
          <motion.div
            className="relative h-48 bg-neutral-200 dark:bg-neutral-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                h={192}
                fit="cover"
                className="transition-transform duration-300"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-neutral-400">
                No Image
              </div>
            )}

            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <Badge
                  variant="filled"
                  className="gradient-bg text-white"
                  size="sm"
                >
                  注目
                </Badge>
              </div>
            )}
          </motion.div>
        </Card.Section>

        {/* Content */}
        <div className="flex-grow mt-4">
          <Text fw={700} size="lg" className="mb-2 text-neutral-900 dark:text-neutral-100">
            {project.title}
          </Text>
          <Text size="sm" c="dimmed" className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.description}
          </Text>

          {/* Metrics */}
          {project.metrics && (
            <Group gap="md" className="mb-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="flex flex-col">
                  <Text size="xs" c="dimmed" className="uppercase tracking-wide mb-1">
                    {key}
                  </Text>
                  <Text size="sm" fw={600} className="text-primary-600 dark:text-primary-400">
                    {value}
                  </Text>
                </div>
              ))}
            </Group>
          )}

          {/* Technology Tags */}
          <Group gap="xs" className="mb-4 flex-wrap">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="light"
                color="primary"
                size="sm"
                className="font-medium"
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge
                variant="light"
                color="primary"
                size="sm"
                className="font-medium"
              >
                +{project.technologies.length - 4}
              </Badge>
            )}
          </Group>
        </div>

        {/* Action Buttons */}
        <Group gap="sm" className="mt-auto">
          {project.githubUrl && (
            <Button
              variant="outline"
              className="flex-1 border-2 border-primary-300 dark:border-primary-600 text-primary-900 dark:text-primary-50 hover:bg-primary-50 dark:hover:bg-primary-700 transition-all font-semibold"
              leftSection={<IconBrandGithub size={16} />}
              component="a"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              radius="md"
            >
              GitHub
            </Button>
          )}
          {project.liveUrl && (
            <Button
              className="flex-1 bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-all"
              leftSection={<IconExternalLink size={16} />}
              component="a"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              radius="md"
            >
              Demo
            </Button>
          )}
        </Group>
      </Card>
    </motion.div>
  );
});

export default ProjectCard;
