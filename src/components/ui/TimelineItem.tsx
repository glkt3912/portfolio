import { Text, Badge, Group, List } from '@mantine/core';
import { WorkHistory } from '@/types';

interface TimelineItemProps {
  work: WorkHistory;
}

export default function TimelineItem({ work }: TimelineItemProps) {
  const formatPeriod = (start: string, end: string | 'present') => {
    const startDate = new Date(start).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
    });
    const endDate = end === 'present' ? '現在' : new Date(end).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
    });
    return `${startDate} - ${endDate}`;
  };

  return (
    <div className="relative pl-8 pb-8 border-l-2 border-blue-500 dark:border-blue-400 last:pb-0">
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>

      <div className="mb-2">
        <Text fw={600} size="lg">
          {work.position}
        </Text>
        <Text fw={500} c="dimmed">
          {work.company}
        </Text>
        <Text size="sm" c="dimmed">
          {formatPeriod(work.period.start, work.period.end)} • {work.location}
        </Text>
      </div>

      <Text size="sm" className="mb-3">
        {work.description}
      </Text>

      <div className="mb-3">
        <Text size="sm" fw={500} className="mb-2">
          主な実績:
        </Text>
        <List size="sm" spacing="xs">
          {work.achievements.map((achievement, index) => (
            <List.Item key={index}>{achievement}</List.Item>
          ))}
        </List>
      </div>

      <Group gap="xs">
        {work.technologies.map((tech) => (
          <Badge key={tech} size="sm" variant="light">
            {tech}
          </Badge>
        ))}
      </Group>
    </div>
  );
}
