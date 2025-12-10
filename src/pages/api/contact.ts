import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { checkRateLimit, getClientIp } from '@/utils/rateLimit';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // レート制限チェック
  const clientIp = getClientIp(req.headers);
  const rateLimitResult = checkRateLimit(clientIp, {
    maxRequests: 5, // 1時間に5回まで
    windowMs: 60 * 60 * 1000, // 1時間
  });

  if (!rateLimitResult.success) {
    const resetDate = new Date(rateLimitResult.resetTime);
    return res.status(429).json({
      error: '送信回数が上限に達しました。しばらく経ってから再度お試しください。',
      resetTime: resetDate.toISOString(),
      limit: rateLimitResult.limit,
    });
  }

  try {
    const { name, email, subject, message } = req.body;

    // バリデーション
    if (!name || !email || !message) {
      return res.status(400).json({ error: '必須項目を入力してください' });
    }

    // メールアドレスの簡易バリデーション
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: '有効なメールアドレスを入力してください' });
    }

    // Resendでメール送信
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resendの検証済みドメイン
      to: process.env.CONTACT_EMAIL || 'contact@example.com', // 受信先メールアドレス
      replyTo: email, // 返信先を問い合わせ者のメールアドレスに設定
      subject: subject || 'ポートフォリオサイトからのお問い合わせ',
      html: `
        <h2>新しいお問い合わせがあります</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject || '(なし)'}</p>
        <hr />
        <h3>メッセージ:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return res.status(500).json({
      error: 'メール送信に失敗しました。しばらく経ってから再度お試しください。'
    });
  }
}
