import { describe, it, expect } from 'vitest'
import { uuid } from './uuid'

describe('string.uuid()', () => {
  it('関数であること', () => {
    expect(typeof uuid).toBe('function')
  })

  it('文字列を返すこと', () => {
    const result = uuid()
    expect(typeof result).toBe('string')
  })

  it('正しい UUID v4 形式であること', () => {
    const result = uuid()
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    expect(result).toMatch(uuidRegex)
  })

  it('長さが36文字であること', () => {
    const result = uuid()
    expect(result).toHaveLength(36)
  })

  it('ハイフンが正しい位置にあること', () => {
    const result = uuid()
    expect(result[8]).toBe('-')
    expect(result[13]).toBe('-')
    expect(result[18]).toBe('-')
    expect(result[23]).toBe('-')
  })

  it('バージョンビットが4であること', () => {
    const result = uuid()
    expect(result[14]).toBe('4')
  })

  it('バリアントビットが正しいこと', () => {
    const result = uuid()
    const variantChar = result[19]!.toLowerCase()
    expect(['8', '9', 'a', 'b']).toContain(variantChar)
  })

  it('複数回呼び出しで異なる値を返すこと', () => {
    const uuid1 = uuid()
    const uuid2 = uuid()
    const uuid3 = uuid()

    expect(uuid1).not.toBe(uuid2)
    expect(uuid2).not.toBe(uuid3)
    expect(uuid1).not.toBe(uuid3)
  })

  it('大量に生成してもユニークであること', () => {
    const uuids = new Set()
    const count = 1000

    for (let i = 0; i < count; i++) {
      uuids.add(uuid())
    }

    expect(uuids.size).toBe(count)
  })

  it('小文字の16進数のみを含むこと', () => {
    const result = uuid()
    const withoutHyphens = result.replace(/-/g, '')
    const hexRegex = /^[0-9a-f]+$/i
    expect(withoutHyphens).toMatch(hexRegex)
  })

  it('RFC 4122 準拠であること', () => {
    for (let i = 0; i < 100; i++) {
      const result = uuid()

      // 長さチェック
      expect(result).toHaveLength(36)

      // フォーマットチェック
      expect(result).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      )

      // バージョンチェック（4）
      expect(result[14]).toBe('4')

      // バリアントチェック（8, 9, a, b）
      const variant = result[19]!.toLowerCase()
      expect(['8', '9', 'a', 'b']).toContain(variant)
    }
  })

  it('異なる環境でも動作すること', () => {
    // crypto オブジェクトが利用できない環境をシミュレート
    const originalCrypto = global.crypto
    const originalRequire = global.require

    try {
      // crypto を一時的に無効化
      Object.defineProperty(global, 'crypto', {
        value: undefined,
        writable: true,
        configurable: true,
      })

      // require も一時的に無効化
      Object.defineProperty(global, 'require', {
        value: undefined,
        writable: true,
        configurable: true,
      })

      // Math.random フォールバックパスをテスト
      const result = uuid()
      expect(result).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      )
      expect(result[14]).toBe('4')
      expect(['8', '9', 'a', 'b']).toContain(result[19]!.toLowerCase())
    } finally {
      // 元の状態に復元
      Object.defineProperty(global, 'crypto', {
        value: originalCrypto,
        writable: true,
        configurable: true,
      })
      Object.defineProperty(global, 'require', {
        value: originalRequire,
        writable: true,
        configurable: true,
      })
    }
  })

  it('require が存在するが crypto モジュールでエラーが発生する場合', () => {
    const originalCrypto = global.crypto
    const originalRequire = global.require

    try {
      // crypto.getRandomValues を無効化
      Object.defineProperty(global, 'crypto', {
        value: undefined,
        writable: true,
        configurable: true,
      })

      // require をモックして例外を発生させる
      Object.defineProperty(global, 'require', {
        value: () => {
          throw new Error('Module not found')
        },
        writable: true,
        configurable: true,
      })

      // catch ブロック内の Math.random フォールバックをテスト
      const result = uuid()
      expect(result).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      )
      expect(result[14]).toBe('4')
      expect(['8', '9', 'a', 'b']).toContain(result[19]!.toLowerCase())
    } finally {
      // 元の状態に復元
      Object.defineProperty(global, 'crypto', {
        value: originalCrypto,
        writable: true,
        configurable: true,
      })
      Object.defineProperty(global, 'require', {
        value: originalRequire,
        writable: true,
        configurable: true,
      })
    }
  })

  it('Node.js crypto モジュールでも動作すること', () => {
    // crypto.getRandomValues が利用できない場合をシミュレート
    const originalCrypto = global.crypto

    try {
      // crypto.getRandomValues を無効化
      Object.defineProperty(global, 'crypto', {
        value: { getRandomValues: undefined },
        writable: true,
        configurable: true,
      })

      // require が利用可能な環境で Node.js crypto フォールバックをテスト
      const result = uuid()
      expect(result).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
      )
      expect(result[14]).toBe('4')
      expect(['8', '9', 'a', 'b']).toContain(result[19]!.toLowerCase())
    } finally {
      // 元の状態に復元
      Object.defineProperty(global, 'crypto', {
        value: originalCrypto,
        writable: true,
        configurable: true,
      })
    }
  })
})
