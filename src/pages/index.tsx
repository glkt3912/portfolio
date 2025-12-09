import type { GetStaticProps } from 'next';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import WorkHistory from '@/components/sections/WorkHistory';
import CTA from '@/components/sections/CTA';
import { Project, SkillCategory, WorkHistory as WorkHistoryType } from '@/types';

// Import data files
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import workHistoryData from '@/data/workHistory.json';

interface HomeProps {
  projects: Project[];
  skills: SkillCategory[];
  workHistory: WorkHistoryType[];
}

export default function Home({ projects, skills, workHistory }: HomeProps) {
  return (
    <Layout>
      <Hero />
      <Projects projects={projects} />
      <Skills skills={skills.categories} />
      <WorkHistory history={workHistory} />
      <CTA />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      projects: projectsData as Project[],
      skills: skillsData as { categories: SkillCategory[] },
      workHistory: workHistoryData as WorkHistoryType[],
    },
    revalidate: 3600, // ISR: Regenerate every hour
  };
};
