import { adjective } from './adjective'
import { adjective as adjectiveDefinitions } from '../../definitions/food/adjective'

describe('adjective', () => {
  it('形容詞の配列から値を返すこと', () => {
    const result = adjective()
    expect(adjectiveDefinitions).toContain(result)
  })

  it('ランダムな形容詞を返すこと', () => {
    const results = new Set<string>()
    for (let i = 0; i < 100; i++) {
      results.add(adjective())
    }

    // 100回実行して複数の異なる結果が返ることを確認
    expect(results.size).toBeGreaterThan(1)
  })
})