/**
 * ランダムな UUID v4 を生成します
 *
 * UUID v4 は完全にランダムな値で構成され、'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx' の形式で生成されます。
 * RFC 4122 の仕様に従い、バージョンビット（4）とバリアントビット（8, 9, A, B のいずれか）が正しく設定されます。
 *
 * @example
 * kaku.string.uuid() // '550e8400-e29b-41d4-a716-446655440000'
 *
 * @see https://tools.ietf.org/html/rfc4122 RFC 4122 仕様
 *
 * @since 1.0.0
 */
export function uuid(): string {
  // crypto.getRandomValues を使用してセキュアなランダム値を生成
  const randomBytes = new Uint8Array(16)

  // Node.js 環境での crypto.getRandomValues サポート
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    crypto.getRandomValues(randomBytes)
  } else if (typeof require !== 'undefined') {
    // Node.js の crypto モジュール使用（CJS/ESM 両対応）
    try {
      const nodeCrypto = eval('require')('crypto')
      const nodeRandomBytes = nodeCrypto.randomBytes(16)
      randomBytes.set(nodeRandomBytes)
    } catch {
      // フォールバック: Math.random() を使用（テスト環境等）
      for (let i = 0; i < 16; i++) {
        randomBytes[i] = Math.floor(Math.random() * 256)
      }
    }
  } else {
    // フォールバック: Math.random() を使用
    for (let i = 0; i < 16; i++) {
      randomBytes[i] = Math.floor(Math.random() * 256)
    }
  }

  // バージョンビットを設定 (4)
  randomBytes[6] = (randomBytes[6]! & 0x0f) | 0x40

  // バリアントビットを設定 (10xxxxxx)
  randomBytes[8] = (randomBytes[8]! & 0x3f) | 0x80

  // UUID 文字列に変換
  const hex = Array.from(randomBytes)
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

  return [
    hex.slice(0, 8),
    hex.slice(8, 12),
    hex.slice(12, 16),
    hex.slice(16, 20),
    hex.slice(20, 32),
  ].join('-')
}
