/**
 * 配列からランダムに要素を取得する
 * @param array - 取得元の配列
 * @returns ランダムに選択された要素
 * @throws 空の配列が渡された場合
 */
export function getRandomElement<T>(array: readonly T[]): T {
  if (array.length === 0) {
    throw new Error('Cannot get random element from an empty array')
  }

  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]!
}
