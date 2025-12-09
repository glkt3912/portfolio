import { Title, Text, Button, Group, Badge } from '@mantine/core';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #f8fafc 0%, #ecfeff 100%)',
      }}
    >
      {/* Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Subtle Accent Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border-2 border-accent-400"
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
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-300 rounded-xl" />
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
            <Badge
              size="lg"
              variant="light"
              color="primary"
              className="px-4 py-3 text-sm font-medium"
            >
              <motion.div
                className="flex items-center gap-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse-soft" />
                フリーランス募集中
              </motion.div>
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Title
              order={1}
              className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">
                フルスタック開発者
              </span>
            </Title>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Text
              size="xl"
              className="mb-4 text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto"
            >
              Next.js、TypeScript、モダンWeb技術を専門とする
              <br className="hidden md:block" />
              経験豊富な開発者です
            </Text>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Text
              size="md"
              className="mb-10 text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto"
            >
              高品質なWebアプリケーション開発をお手伝いします。
              クライアントのビジョンを技術で実現します。
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
                className="border-2 border-primary-300 text-primary-900 hover:bg-primary-50 hover:border-accent-500 transition-all duration-200"
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
            onClick={() => scrollToSection('about')}
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
