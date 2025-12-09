import { Badge, Progress, Group, Text } from '@mantine/core';
import { Skill } from '@/types';

interface SkillBadgeProps {
  skill: Skill;
  showProgress?: boolean;
}

export default function SkillBadge({ skill, showProgress = true }: SkillBadgeProps) {
  const levelPercentage = (skill.level / 5) * 100;

  if (!showProgress) {
    return (
      <Badge size="lg" variant="light">
        {skill.name}
      </Badge>
    );
  }

  return (
    <div className="w-full">
      <Group justify="apart" mb={4}>
        <Text size="sm" fw={500} className="text-neutral-900 dark:text-neutral-100">
          {skill.name}
        </Text>
        {skill.yearsExp && (
          <Text size="xs" c="dimmed" className="text-neutral-600 dark:text-neutral-400">
            {skill.yearsExp}年
          </Text>
        )}
      </Group>
      <Progress value={levelPercentage} size="sm" color="blue" className="bg-neutral-200 dark:bg-neutral-700" />
    </div>
  );
}
