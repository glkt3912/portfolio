import { ActionIcon } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function ThemeToggle() {
  const { isDark, toggle, mounted } = useDarkMode();

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <ActionIcon
        size="lg"
        variant="subtle"
        aria-label="Toggle theme"
        className="opacity-0"
        disabled
      >
        <IconSun size={20} />
      </ActionIcon>
    );
  }

  return (
    <ActionIcon
      onClick={toggle}
      size="lg"
      variant="subtle"
      color={isDark ? 'yellow' : 'primary'}
      aria-label="Toggle theme"
      className="hover:bg-primary-100 dark:hover:bg-neutral-800 transition-colors"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <IconMoon size={20} className="text-yellow-400" />
        ) : (
          <IconSun size={20} className="text-primary-600" />
        )}
      </motion.div>
    </ActionIcon>
  );
}
