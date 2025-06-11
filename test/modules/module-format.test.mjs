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

  it('3つの import パターンが利用可能であること', () => {
    // kaku.string.uuid パターン
    expect(typeof kaku).toBe('object')
    expect(typeof kaku.string).toBe('object')
    expect(typeof kaku.string.uuid).toBe('function')

    // string.uuid パターン
    expect(typeof string).toBe('object')
    expect(typeof string.uuid).toBe('function')

    // uuid 直接パターン
    expect(typeof uuid).toBe('function')
  })

})
