import { describe, it, expect } from 'vitest'
import { hello } from './index'

describe('KakuJS', () => {
  it('定義されていること', () => {
    expect(true).toBe(true)
  })

  describe('hello関数', () => {
    it('関数であること', () => {
      expect(typeof hello).toBe('function')
    })

    it('挨拶文字列を返すこと', () => {
      const result = hello('World')
      expect(typeof result).toBe('string')
      expect(result).toContain('Hello')
      expect(result).toContain('World')
    })

    it('異なる名前でも正しく動作すること', () => {
      expect(hello('Alice')).toContain('Alice')
      expect(hello('Bob')).toContain('Bob')
      expect(hello('日本語')).toContain('日本語')
    })
  })
})
