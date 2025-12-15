import { Title, Text, Button, Group } from '@mantine/core';
import { IconBrandGithub, IconMail, IconArrowDown } from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20"
        style={{
          backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-accent-400 dark:border-accent-600"
          style={{ borderRadius: '12px' }}
          animate={{
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-300 dark:bg-accent-700 rounded-xl" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-100 dark:bg-green-900/30 border-2 border-green-500 dark:border-green-400">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2.5 h-2.5 bg-green-500 dark:bg-green-400 rounded-full block" />
              </motion.div>
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                案件募集中
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Title
              order={1}
              className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-neutral-900 dark:text-neutral-100"
            >
              <span className="gradient-text">
                成果にコミットする
                <br className="hidden md:block" />
                バックエンドエンジニア
              </span>
            </Title>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Text
              size="lg"
              className="mb-10 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed"
            >
              マイクロサービス設計、AI機能統合、DevOpsまで幅広く対応。
              <br className="hidden md:block" />
              要件定義、設計、実装、運用改善まで一貫して対応します。
            </Text>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Group justify="center" gap="md" className="mb-16">
              <Button
                size="lg"
                radius="md"
                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-all duration-200 hover:shadow-lg"
                leftSection={<IconMail size={20} />}
                onClick={() => scrollToSection('contact')}
              >
                お問い合わせ
              </Button>
              <Button
                size="lg"
                radius="md"
                variant="outline"
                className="border-2 border-primary-300 dark:border-primary-600 text-primary-900 dark:text-primary-100 hover:bg-primary-50 dark:hover:bg-primary-800 hover:border-accent-500 transition-all duration-200"
                leftSection={<IconBrandGithub size={20} />}
                component="a"
                href="https://github.com/glkt3912"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            </Group>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection('what-i-can-do')}
          >
            <Text size="sm" className="text-neutral-500 dark:text-neutral-400 mb-2">
              スクロールして詳細を見る
            </Text>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <IconArrowDown size={24} className="text-primary-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
