import type { GetStaticProps } from 'next';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import WhatICanDo from '@/components/sections/WhatICanDo';
import WorkHistory from '@/components/sections/WorkHistory';
import Skills from '@/components/sections/Skills';
// import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import { Project, SkillCategory, WorkHistory as WorkHistoryType } from '@/types';

// Import data files
import projectsData from '@/data/projects.json';
import skillsData from '@/data/skills.json';
import workHistoryData from '@/data/workHistory.json';

interface HomeProps {
  projects: Project[];
  skills: { categories: SkillCategory[] };
  workHistory: WorkHistoryType[];
}

export default function Home({ skills, workHistory }: HomeProps) {
  return (
    <Layout>
      <Hero />
      <WhatICanDo />
      <WorkHistory history={workHistory} />
      <Skills skills={skills.categories} />
      {/* <Projects projects={projects} /> */}
      <Contact />
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
