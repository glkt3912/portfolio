import { Title, Text } from '@mantine/core';
import { SkillCategory } from '@/types';
import { SECTION_STYLES } from '@/styles/constants';

interface SkillsProps {
  skills: SkillCategory[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className={SECTION_STYLES.padding.light}>
      <div className={SECTION_STYLES.container}>
        <Title order={2} className={SECTION_STYLES.title}>
          技術スタック
        </Title>

        <div className="space-y-8">
          {skills.map((category) => (
            <div key={category.name}>
              <Title
                order={3}
                className={SECTION_STYLES.subtitle}
              >
                {category.name}
              </Title>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-md"
                  >
                    <Text
                      size="sm"
                      className="text-gray-900 dark:text-gray-100 font-medium"
                    >
                      {skill.name}
                    </Text>
                    {skill.yearsExp && (
                      <Text
                        size="xs"
                        className="text-gray-600 dark:text-gray-400"
                      >
                        ({skill.yearsExp}年)
                      </Text>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
