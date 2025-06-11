import { describe, it, expect, beforeAll } from 'vitest'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

describe('ESMモジュール形式', () => {
  let kaku
  let string
  let uuid
  let kakuExport

  beforeAll(async () => {
    const distPath = join(__dirname, '../../dist/index.js')
    if (!existsSync(distPath)) {
      throw new Error('Build output not found. Run "pnpm build" first.')
    }

    // ESMのdynamic importでインポート
    const module = await import('../../dist/index.js')
    kaku = module.kaku
    string = module.string
    uuid = module.uuid
    kakuExport = module
  })

  it('ESMモジュールを読み込めること', () => {
    expect(kakuExport).toBeDefined()
  })

  it('期待されるエクスポートを持つこと', () => {
    expect(typeof kakuExport).toBe('object')
    expect(typeof kaku).toBe('object')
    expect(typeof string).toBe('object')
    expect(typeof uuid).toBe('function')
  })

  describe('3つの import パターン', () => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    it('kaku.string.uuid() が動作すること', () => {
      const result = kaku.string.uuid()
      expect(typeof result).toBe('string')
      expect(result).toHaveLength(36)
      expect(result).toMatch(uuidRegex)
    })

    it('string.uuid() が動作すること', () => {
      const result = string.uuid()
      expect(typeof result).toBe('string')
      expect(result).toHaveLength(36)
      expect(result).toMatch(uuidRegex)
    })

    it('uuid() が動作すること', () => {
      const result = uuid()
      expect(typeof result).toBe('string')
      expect(result).toHaveLength(36)
      expect(result).toMatch(uuidRegex)
    })

    it('全てのパターンが同じ形式の UUID を生成すること', () => {
      const results = [
        kaku.string.uuid(),
        string.uuid(),
        uuid(),
      ]

      results.forEach(result => {
        expect(result).toMatch(uuidRegex)
      })
    })
  })

})
