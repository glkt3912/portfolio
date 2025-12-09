import { Title, Text, Card } from '@mantine/core';
import { SkillCategory } from '@/types';
import SkillBadge from '../ui/SkillBadge';

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <Title order={2} size="h2" className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            スキル・技術スタック
          </Title>
          <Text size="lg" c="dimmed" className="text-neutral-600 dark:text-neutral-400">
            習得している技術と経験年数
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <Card
              key={category.name}
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              className="bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
            >
              <Text fw={600} size="lg" className="mb-4 text-neutral-900 dark:text-neutral-100">
                {category.name}
              </Text>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
