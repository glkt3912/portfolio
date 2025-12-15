import { useState } from 'react';
import { Group, Burger } from '@mantine/core';
import ThemeToggle from '@/components/ui/ThemeToggle';

const NAV_ITEMS = [
  { id: 'what-i-can-do', label: 'What I Can Do' },
  { id: 'work-history', label: 'Work History' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const;

interface NavButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const NavButton = ({ onClick, children, className = '' }: NavButtonProps) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold ${className}`}
  >
    {children}
  </button>
);

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

          {/* Desktop Navigation */}
          <Group gap="md" className="hidden md:flex">
            {NAV_ITEMS.map((item) => (
              <NavButton key={item.id} onClick={() => scrollToSection(item.id)}>
                {item.label}
              </NavButton>
            ))}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
          </Group>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
          </div>
        </Group>
      </div>

      {/* Mobile Menu */}
      {opened && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-white dark:bg-gray-950 shadow-soft-lg p-4 flex flex-col gap-4 border-b border-neutral-100 dark:border-gray-800">
          {NAV_ITEMS.map((item) => (
            <NavButton
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left"
            >
              {item.label}
            </NavButton>
          ))}
        </div>
      )}
    </header>
  );
}
