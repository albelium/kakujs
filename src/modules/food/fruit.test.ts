import { fruit } from './fruit'
import { fruit as fruitDefinitions } from '../../definitions/fruit'

describe('fruit', () => {
  it('果物の配列から値を返すこと', () => {
    const result = fruit()
    expect(fruitDefinitions).toContain(result)
  })

  it('ランダムな果物を返すこと', () => {
    const results = new Set<string>()
    for (let i = 0; i < 100; i++) {
      results.add(fruit())
    }

    // 100回実行して複数の異なる結果が返ることを確認
    expect(results.size).toBeGreaterThan(1)
  })
})
