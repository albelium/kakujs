import { fruit as fruitDefinitions } from '../../definitions/fruit'
import { getRandomElement } from '../../utils/array'

/**
 * ランダムな果物名を生成します
 *
 * @example
 * kaku.food.fruit() // 'りんご'
 *
 * @since 1.0.0
 */
export function fruit(): string {
  return getRandomElement(fruitDefinitions)
}
