import { describe, it, expect, beforeAll } from 'vitest'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

describe('ESM モジュール形式', () => {
  let module

  beforeAll(async () => {
    const distPath = join(__dirname, '../../dist/index.js')
    if (!existsSync(distPath)) {
      throw new Error('Build output not found. Run "pnpm build" first.')
    }

    module = await import('../../dist/index.js')
  })

  it('ESM モジュールを読み込めること', () => {
    expect(module).toBeDefined()
  })

  it('期待されるエクスポートを持つこと', () => {
    expect(typeof module).toBe('object')
    expect(typeof module.kaku).toBe('object')

    // kaku オブジェクトから import
    expect(typeof module.kaku.food).toBe('object')
    expect(typeof module.kaku.food.fruit).toBe('function')

    expect(typeof module.kaku.string).toBe('object')
    expect(typeof module.kaku.string.uuid).toBe('function')

    // モジュール単位で import
    expect(typeof module.food).toBe('object')
    expect(typeof module.food.fruit).toBe('function')
    expect(typeof module.string).toBe('object')
    expect(typeof module.string.uuid).toBe('function')

    // 関数単位で import
    expect(typeof module.fruit).toBe('function')
    expect(typeof module.uuid).toBe('function')

    console.log('ESM exports:', Object.keys(module))
  })
})
