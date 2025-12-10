// シンプルなメモリベースのレート制限
// IPアドレスごとに送信回数と時刻を記録

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// IPアドレスごとのレート制限情報を保存
const rateLimitMap = new Map<string, RateLimitEntry>();

// 古いエントリーを定期的にクリーンアップ（メモリリーク防止）
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60 * 60 * 1000); // 1時間ごとにクリーンアップ

export interface RateLimitConfig {
  maxRequests: number; // 最大リクエスト数
  windowMs: number; // 時間枠（ミリ秒）
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}

/**
 * レート制限をチェック
 * @param identifier IPアドレスまたは識別子
 * @param config レート制限設定
 * @returns レート制限結果
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = {
    maxRequests: 5, // デフォルト: 5回まで
    windowMs: 60 * 60 * 1000, // デフォルト: 1時間
  }
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // 初回リクエストまたはリセット期間を過ぎている場合
  if (!entry || now > entry.resetTime) {
    const newEntry: RateLimitEntry = {
      count: 1,
      resetTime: now + config.windowMs,
    };
    rateLimitMap.set(identifier, newEntry);

    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      resetTime: newEntry.resetTime,
    };
  }

  // リクエスト数が制限を超えている場合
  if (entry.count >= config.maxRequests) {
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // カウントを増やす
  entry.count++;
  rateLimitMap.set(identifier, entry);

  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

/**
 * リクエストからIPアドレスを取得
 * Vercel環境やプロキシ経由も考慮
 */
export function getClientIp(headers: Headers | Record<string, string | string[] | undefined>): string {
  // Headersオブジェクトの場合
  if (headers instanceof Headers) {
    return (
      headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      headers.get('x-real-ip') ||
      headers.get('cf-connecting-ip') || // Cloudflare
      'unknown'
    );
  }

  // Record型の場合
  const xForwardedFor = headers['x-forwarded-for'];
  const xRealIp = headers['x-real-ip'];
  const cfConnectingIp = headers['cf-connecting-ip'];

  if (typeof xForwardedFor === 'string') {
    return xForwardedFor.split(',')[0].trim();
  }
  if (Array.isArray(xForwardedFor) && xForwardedFor.length > 0) {
    return xForwardedFor[0].split(',')[0].trim();
  }
  if (typeof xRealIp === 'string') {
    return xRealIp;
  }
  if (typeof cfConnectingIp === 'string') {
    return cfConnectingIp;
  }

  return 'unknown';
}
