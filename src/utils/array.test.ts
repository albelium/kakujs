import { describe, it, expect } from 'vitest'
import { getRandomElement } from './array'

describe('getRandomElement', () => {
  it('配列から要素を返すこと', () => {
    const array = [1, 2, 3, 4, 5]
    const result = getRandomElement(array)
    expect(array).toContain(result)
  })

  it('単一要素の配列から要素を返すこと', () => {
    const array = ['only']
    const result = getRandomElement(array)
    expect(result).toBe('only')
  })

  it('異なる型の配列でも動作すること', () => {
    const stringArray = ['a', 'b', 'c']
    const result = getRandomElement(stringArray)
    expect(stringArray).toContain(result)

    const objectArray = [{ id: 1 }, { id: 2 }, { id: 3 }]
    const objectResult = getRandomElement(objectArray)
    expect(objectArray).toContain(objectResult)
  })

  it('空の配列でエラーをスローすること', () => {
    const emptyArray: number[] = []
    expect(() => getRandomElement(emptyArray)).toThrowError(
      'Cannot get random element from an empty array',
    )
  })

  it('ランダム性を確認すること', () => {
    const array = [1, 2, 3, 4, 5]
    const results = new Set<number>()

    // 100回実行して複数の異なる結果が得られることを確認
    for (let i = 0; i < 100; i++) {
      results.add(getRandomElement(array))
    }

    // 少なくとも2つ以上の異なる結果が得られることを期待
    expect(results.size).toBeGreaterThanOrEqual(2)
  })
})
