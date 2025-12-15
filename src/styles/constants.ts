/**
 * 共通スタイリング定数
 * プロジェクト全体で使用される共通のTailwindクラス定義
 */

export const SECTION_STYLES = {
  // コンテナ
  container: 'container mx-auto px-4 max-w-4xl',
  containerWide: 'container mx-auto px-4 max-w-7xl',

  // タイトル
  title: 'text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100',
  subtitle: 'text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100',

  // テキスト
  description: 'text-gray-600 dark:text-gray-400 leading-relaxed',
  text: 'text-gray-700 dark:text-gray-300',
  textMuted: 'text-gray-500 dark:text-gray-400',

  // パディング・背景
  padding: {
    subtle: 'py-20 bg-cyan-50 dark:bg-gray-950',   // 淡いcyan背景
    medium: 'py-20 bg-cyan-100 dark:bg-gray-900',  // 中間cyan背景
  },
} as const;

export const BUTTON_STYLES = {
  // ナビゲーションボタン
  nav: 'px-4 py-2 rounded-md border-0 bg-gray-100 text-gray-900 dark:text-white dark:bg-gray-800 hover:bg-gray-200 hover:text-primary-600 dark:hover:bg-gray-700 dark:hover:text-cyan-400 transition-all font-bold',

  // プライマリボタン
  primary: 'bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-all duration-200 hover:shadow-lg',

  // アウトラインボタン
  outline: 'border-2 border-primary-300 dark:border-primary-600 text-primary-900 dark:text-primary-100 hover:bg-primary-50 dark:hover:bg-primary-800 hover:border-accent-500 transition-all duration-200',
} as const;

export const CARD_STYLES = {
  // カード基本
  base: 'bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',

  // カードタイトル
  title: 'text-neutral-900 dark:text-neutral-100',

  // カード説明
  description: 'text-neutral-600 dark:text-neutral-400',
} as const;

export const SPACING = {
  // セクション
  section: 'py-20',

  // ヘッダー
  header: 'h-[70px]',
  headerTop: 'top-[70px]',

  // マージン
  mb: {
    xs: 'mb-2',
    sm: 'mb-4',
    md: 'mb-6',
    lg: 'mb-8',
    xl: 'mb-12',
  },
} as const;

export const FORM_STYLES = {
  // フォームフィールド
  inputClasses: {
    label: 'text-gray-900 dark:text-gray-100 font-medium mb-2',
    input: 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100',
  },
} as const;
