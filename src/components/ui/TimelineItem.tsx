import { Text, Badge, Group } from '@mantine/core';
import { WorkHistory } from '@/types';

interface TimelineItemProps {
  work: WorkHistory;
}

// メトリクスを抽出する関数
const extractMetrics = (text: string): string[] => {
  const metrics: string[] = [];

  // パターン1: "XX%削減" のような形式
  const percentagePattern = /(\d+%[^\s、。）]*)/g;
  const percentages = text.match(percentagePattern);
  if (percentages) metrics.push(...percentages);

  // パターン2: "X,XXX行" のような形式
  const linesPattern = /(\d{1,3}(?:,\d{3})*行[^\s、。）]*)/g;
  const lines = text.match(linesPattern);
  if (lines) metrics.push(...lines);

  // パターン3: "XXXテスト" のような形式
  const testsPattern = /(\d+テスト[^\s、。）]*)/g;
  const tests = text.match(testsPattern);
  if (tests) metrics.push(...tests);

  return metrics;
};

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
        <Text fw={600} size="lg" className="text-neutral-900 dark:text-neutral-100">
          {work.position}
        </Text>
        <Text fw={500} c="dimmed" className="text-neutral-600 dark:text-neutral-400">
          {work.company}
        </Text>
        <Text size="sm" c="dimmed" className="text-neutral-600 dark:text-neutral-400">
          {formatPeriod(work.period.start, work.period.end)} • {work.location}
        </Text>
      </div>

      <Text size="sm" className="mb-3 text-neutral-700 dark:text-neutral-300">
        {work.description}
      </Text>

      <div className="mb-3">
        <Text size="sm" fw={500} className="mb-3 text-neutral-900 dark:text-neutral-100">
          主な実績:
        </Text>
        <div className="space-y-4">
          {work.achievements.map((achievement, index) => {
            const metrics = extractMetrics(achievement);
            return (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 border-l-4 border-accent-500">
                <Text size="sm" className="text-neutral-800 dark:text-neutral-200 mb-2 leading-relaxed">
                  {achievement}
                </Text>
                {metrics.length > 0 && (
                  <Group gap="xs" className="mt-2">
                    {metrics.map((metric, idx) => (
                      <Badge
                        key={idx}
                        size="sm"
                        variant="filled"
                        className="bg-accent-500 dark:bg-accent-600 text-white font-semibold"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </Group>
                )}
              </div>
            );
          })}
        </div>
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
