import { useState } from 'react';
import { Group, Burger } from '@mantine/core';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Header() {
  const [opened, setOpened] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setOpened(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800 h-[70px]">
      <div className="container mx-auto px-4 h-full">
        <Group justify="apart" className="h-full">
          <div className="font-display font-bold text-xl cursor-pointer gradient-text" onClick={() => scrollToSection('hero')}>
            Portfolio
          </div>

          <Group gap="md" className="hidden md:flex">
            <button onClick={() => scrollToSection('about')} className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Skills
            </button>
            <button onClick={() => scrollToSection('work-history')} className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
              Contact
            </button>
            <ThemeToggle />
          </Group>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
          </div>
        </Group>
      </div>

      {/* Mobile Menu */}
      {opened && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg shadow-soft-lg p-4 flex flex-col gap-4 border-b border-neutral-200 dark:border-neutral-800">
          <button onClick={() => scrollToSection('about')} className="text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
            Skills
          </button>
          <button onClick={() => scrollToSection('work-history')} className="text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
            Experience
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-left text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
