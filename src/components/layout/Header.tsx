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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-neutral-100 dark:border-gray-800 h-[70px]">
      <div className="container mx-auto px-4 h-full">
        <Group justify="apart" className="h-full">
          <div className="font-display font-bold text-xl cursor-pointer gradient-text" onClick={() => scrollToSection('hero')}>
            Portfolio
          </div>

          <Group gap="md" className="hidden md:flex">
            <button onClick={() => scrollToSection('about')} className="px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
              Skills
            </button>
            <button onClick={() => scrollToSection('work-history')} className="px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
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
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-white dark:bg-gray-950 shadow-soft-lg p-4 flex flex-col gap-4 border-b border-neutral-100 dark:border-gray-800">
          <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-left px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-left px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
            Skills
          </button>
          <button onClick={() => scrollToSection('work-history')} className="text-left px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
            Experience
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
