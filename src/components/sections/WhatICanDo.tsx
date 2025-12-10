import { Title, Text } from '@mantine/core';
import { SECTION_STYLES } from '@/styles/constants';

export default function WhatICanDo() {
  const capabilities = [
    {
      title: 'フロントエンド開発',
      description: 'React/Next.js/TypeScriptを用いたモダンなWebアプリケーション開発。レスポンシブデザイン、パフォーマンス最適化、アクセシビリティ対応。',
    },
    {
      title: 'バックエンド開発',
      description: 'Node.js/NestJS/Go/PHPでのスケーラブルなAPI設計・実装。RESTful API、GraphQL、マイクロサービスアーキテクチャ。',
    },
    {
      title: 'インフラ/DevOps',
      description: 'GCP/AWSでのクラウドインフラ構築。Docker/Kubernetes、CI/CDパイプライン構築、Infrastructure as Code（Terraform）。',
    },
    {
      title: 'データベース設計',
      description: 'PostgreSQL/MySQLを用いた効率的なスキーマ設計。パフォーマンスチューニング、インデックス最適化、トランザクション管理。',
    },
    {
      title: 'テスト自動化',
      description: 'Jest/Vitest/Puppeteerを用いた単体テスト、統合テスト、E2Eテストの実装。テスト駆動開発（TDD）の実践。',
    },
  ];

  return (
    <section id="what-i-can-do" className={SECTION_STYLES.padding.dark}>
      <div className={SECTION_STYLES.container}>
        <Title
          order={2}
          className={SECTION_STYLES.title}
        >
          できること
        </Title>

        <div className="space-y-8">
          {capabilities.map((capability) => (
            <div key={capability.title}>
              <Title
                order={3}
                className={SECTION_STYLES.subtitle}
              >
                {capability.title}
              </Title>
              <Text
                size="md"
                className={SECTION_STYLES.description}
              >
                {capability.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
