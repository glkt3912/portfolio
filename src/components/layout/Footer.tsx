import { Group, Text } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 dark:bg-primary-900 border-t border-primary-200 dark:border-primary-700 py-8">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center gap-4">
        <Group gap="md">
          <a
            href="https://github.com/glkt3912"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-500 transition-colors"
            aria-label="GitHub"
          >
            <IconBrandGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/glkt3912"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-500 transition-colors"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="hover:text-accent-500 transition-colors"
            aria-label="Email"
          >
            <IconMail size={24} />
          </a>
        </Group>
        <Text size="sm" c="dimmed">
          © {currentYear} Portfolio. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
