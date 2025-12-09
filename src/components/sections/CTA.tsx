import { Title, Text, Button, Group } from '@mantine/core';
import { IconMail, IconBrandGithub, IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Subtle Accent Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-accent-300 dark:bg-accent-400 rounded-xl"
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-amber-300 dark:bg-amber-400 rounded-lg" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 border border-accent-500 dark:border-accent-400 rounded-md text-accent-600 dark:text-accent-300 text-sm font-semibold uppercase tracking-wider">
              プロジェクトをお探しですか？
            </span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Title
              order={2}
              className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight"
            >
              一緒に素晴らしいものを
              <br />
              作りましょう
            </Title>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Text
              size="lg"
              className="text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
            >
              あなたのアイデアを実現するお手伝いをします。
              <br className="hidden md:block" />
              高品質で革新的なソリューションを一緒に作り上げましょう。
            </Text>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Group justify="center" gap="md">
              <Button
                size="lg"
                radius="md"
                className="bg-accent-500 text-white font-semibold hover:bg-accent-600 transition-all duration-200 hover:shadow-lg"
                leftSection={<IconMail size={20} />}
                rightSection={<IconArrowRight size={18} />}
                onClick={() => scrollToSection('contact')}
              >
                お問い合わせ
              </Button>
              <Button
                size="lg"
                radius="md"
                variant="outline"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-all duration-200 font-semibold"
                leftSection={<IconBrandGithub size={20} />}
                component="a"
                href="https://github.com/glkt3912"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub で見る
              </Button>
            </Group>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 pt-12 border-t border-gray-300 dark:border-accent-400/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'プロジェクト完了', value: '50+' },
                { label: '満足度', value: '100%' },
                { label: '技術スタック', value: '20+' },
                { label: '経験年数', value: '5+' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-5xl font-bold text-accent-600 dark:text-accent-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-semibold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
