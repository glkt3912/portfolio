import { Title } from '@mantine/core';
import { WorkHistory as WorkHistoryType } from '@/types';
import TimelineItem from '../ui/TimelineItem';
import { SECTION_STYLES } from '@/styles/constants';

interface WorkHistoryProps {
  history: WorkHistoryType[];
}

export default function WorkHistory({ history }: WorkHistoryProps) {
  return (
    <section id="work-history" className={SECTION_STYLES.padding.medium}>
      <div className={SECTION_STYLES.container}>
        <Title order={2} className={SECTION_STYLES.title}>
          職務経歴
        </Title>

        <div className="space-y-8">
          {history.map((work) => (
            <TimelineItem key={work.id} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}
