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
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replaceAll('x', () => Math.floor(Math.random() * 16).toString(16))
    .replaceAll('y', () => [8, 9, 0xa, 0xb][Math.floor(Math.random() * 4)]!.toString(16))
}
