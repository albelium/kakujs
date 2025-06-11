import { describe, it, expect } from 'vitest'
import { string } from './index'

describe('KakuJS', () => {
  it('定義されていること', () => {
    expect(true).toBe(true)
  })

  describe('string モジュール', () => {
    it('string オブジェクトが定義されていること', () => {
      expect(typeof string).toBe('object')
      expect(string).toBeDefined()
    })

    it('uuid 関数が存在すること', () => {
      expect(typeof string.uuid).toBe('function')
    })

    it('string.uuid() が正しく動作すること', () => {
      const result = string.uuid()
      expect(typeof result).toBe('string')
      expect(result).toHaveLength(36)
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
      expect(result).toMatch(uuidRegex)
    })
  })
})
