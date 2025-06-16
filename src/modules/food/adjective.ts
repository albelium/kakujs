import { adjective as adjectiveDefinitions } from '../../definitions/food/adjective'
import { getRandomElement } from '../../utils/array'

/**
 * ランダムな食べ物の形容詞を生成します
 *
 * @example
 * kaku.food.adjective() // 'クリーミーな'
 *
 * @since 1.0.0
 */
export function adjective(): string {
  return getRandomElement(adjectiveDefinitions)
}
