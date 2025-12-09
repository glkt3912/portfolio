import { Title, Text } from '@mantine/core';
import { WorkHistory as WorkHistoryType } from '@/types';
import TimelineItem from '../ui/TimelineItem';

interface WorkHistoryProps {
  history: WorkHistoryType[];
}

export default function WorkHistory({ history }: WorkHistoryProps) {
  return (
    <section id="work-history" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Title order={2} size="h2" className="text-3xl md:text-4xl font-bold mb-4">
            職務経歴
          </Title>
          <Text size="lg" c="dimmed">
            これまでの経験と実績
          </Text>
        </div>

        <div className="max-w-3xl mx-auto">
          {history.map((work) => (
            <TimelineItem key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
