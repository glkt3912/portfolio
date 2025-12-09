import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
