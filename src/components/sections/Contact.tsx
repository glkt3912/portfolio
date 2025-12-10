import { Title, Text, TextInput, Textarea, Button, Notification } from '@mantine/core';
import { IconMail, IconUser, IconSend, IconCheck, IconX } from '@tabler/icons-react';
import { useState } from 'react';
import { SECTION_STYLES, FORM_STYLES } from '@/styles/constants';

const FORM_INPUT_CLASSES = FORM_STYLES.inputClasses;

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder: string;
  required?: boolean;
  icon?: React.ReactNode;
  minRows?: number;
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

const FormField = ({
  label,
  type = 'text',
  placeholder,
  required = false,
  icon,
  minRows,
  value,
  onChange,
  disabled,
}: FormFieldProps) => {
  const commonProps = {
    label,
    placeholder,
    required,
    size: 'md' as const,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    disabled,
    classNames: FORM_INPUT_CLASSES,
  };

  if (type === 'textarea') {
    return <Textarea {...commonProps} minRows={minRows} />;
  }

  return <TextInput {...commonProps} type={type} leftSection={icon} />;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setNotification(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // レート制限エラーの場合、詳細なメッセージを表示
        if (response.status === 429) {
          const resetTime = data.resetTime ? new Date(data.resetTime).toLocaleTimeString('ja-JP') : '';
          throw new Error(
            `${data.error}${resetTime ? ` (${resetTime}以降に再試行できます)` : ''}`
          );
        }
        throw new Error(data.error || 'メール送信に失敗しました');
      }

      setNotification({
        type: 'success',
        message: 'お問い合わせを送信しました。ありがとうございます！',
      });

      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setNotification({
        type: 'error',
        message: error instanceof Error ? error.message : 'メール送信に失敗しました',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={SECTION_STYLES.padding.light}>
      <div className="container mx-auto px-4 max-w-2xl">
        <Title order={2} className={`${SECTION_STYLES.title} mb-4`}>
          お問い合わせ
        </Title>
        <Text size="md" className={`${SECTION_STYLES.description} mb-8`}>
          プロジェクトのご相談、お仕事のご依頼など、お気軽にご連絡ください。
        </Text>

        {notification && (
          <Notification
            icon={notification.type === 'success' ? <IconCheck size={18} /> : <IconX size={18} />}
            color={notification.type === 'success' ? 'teal' : 'red'}
            title={notification.type === 'success' ? '送信完了' : 'エラー'}
            onClose={() => setNotification(null)}
            className="mb-6"
          >
            {notification.message}
          </Notification>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <FormField
            label="お名前"
            placeholder="山田 太郎"
            required
            icon={<IconUser size={18} />}
            value={formData.name}
            onChange={(value) => setFormData({ ...formData, name: value })}
            disabled={loading}
          />

          <FormField
            label="メールアドレス"
            type="email"
            placeholder="example@email.com"
            required
            icon={<IconMail size={18} />}
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            disabled={loading}
          />

          <FormField
            label="件名"
            placeholder="お仕事のご依頼"
            value={formData.subject}
            onChange={(value) => setFormData({ ...formData, subject: value })}
            disabled={loading}
          />

          <FormField
            label="メッセージ"
            type="textarea"
            placeholder="お問い合わせ内容をご記入ください"
            required
            minRows={6}
            value={formData.message}
            onChange={(value) => setFormData({ ...formData, message: value })}
            disabled={loading}
          />

          <Button
            type="submit"
            size="lg"
            radius="md"
            loading={loading}
            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold transition-all duration-200 hover:shadow-lg w-full md:w-auto"
            rightSection={!loading && <IconSend size={18} />}
          >
            {loading ? '送信中...' : '送信する'}
          </Button>
        </form>

        <Text size="sm" className="text-gray-500 dark:text-gray-400 mt-6">
          ※ 送信すると、登録されたメールアドレスに通知が届きます。
        </Text>
      </div>
    </section>
  );
}
