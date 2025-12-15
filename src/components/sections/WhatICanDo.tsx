import { Title, Text } from '@mantine/core';
import { SECTION_STYLES } from '@/styles/constants';

export default function WhatICanDo() {
  const capabilities = [
    {
      title: 'バックエンド開発・マイクロサービス設計',
      description: 'NestJS/TypeScript/PHP での REST API 設計・実装。マイクロサービス2つを0→1で構築した実績あり。技術スタック統一プロジェクトでScala → TypeScript段階的マイグレーションを推進。40,000行超のコード実装、600+テストケースで品質担保。',
    },
    {
      title: 'AI/LLM統合開発',
      description: 'OpenAI GPT-4o/5を活用した機能実装。画像解析、チャット、提案生成、タイトル自動生成など。要件定義から実装までフルサイクルで対応可能。',
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      description: 'GCP (Cloud Run/Functions/Storage) のインフラ構築。Terraformによるインフラコード化、GitHub ActionsでのCI/CD構築。デプロイ時間83%削減（30分→5分）の実績。',
    },
    {
      title: 'セキュリティ・品質向上',
      description: 'Helmet.js、Throttlerによるセキュリティ対策（XSS・CSRF・レート制限）。Dependabotで脆弱性監視を自動化。テスト駆動開発（TDD）推進でカバレッジ0%→72%を実現。',
    },
    {
      title: 'データ駆動UX改善',
      description: 'Google Analytics等のデータ分析から課題を特定し、施策を実装。離脱率20%削減、応募率10%向上、サポート問い合わせ40%削減の実績。',
    },
    {
      title: 'フルサイクル開発・0→1プロジェクトリード',
      description: 'ステークホルダーヒアリングから要件定義、仕様書作成、DB/API設計、実装まで一貫して担当。AI会話履歴機能をフルサイクルで開発し、API呼び出し66%削減、フロントエンド実装負担70%削減を実現。7ヶ月間の単独プロジェクト推進経験あり。',
    },
  ];

  return (
    <section id="what-i-can-do" className={SECTION_STYLES.padding.subtle}>
      <div className={SECTION_STYLES.container}>
        <Title
          order={2}
          className={SECTION_STYLES.title}
        >
          できること
        </Title>

        <div className="space-y-8">
          {capabilities.map((capability) => (
            <div key={capability.title} className="border-l-4 border-accent-500 pl-6 py-2">
              <Title
                order={3}
                className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100"
              >
                {capability.title}
              </Title>
              <Text
                size="md"
                className="text-gray-900 dark:text-gray-300 leading-relaxed"
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
