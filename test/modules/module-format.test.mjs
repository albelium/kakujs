import { describe, it, expect, beforeAll } from 'vitest'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

describe('ESMモジュール形式', () => {
  let kaku

  beforeAll(() => {
    const distPath = join(__dirname, '../../dist/index.js')
    if (!existsSync(distPath)) {
      throw new Error('Build output not found. Run "pnpm build" first.')
    }
  })

  it('ESMモジュールを読み込めること', async () => {
    // ESMのdynamic importでインポート
    kaku = await import('../../dist/index.js')
    expect(kaku).toBeDefined()
  })

  it('期待されるエクスポートを持つこと', () => {
    expect(typeof kaku).toBe('object')
    expect(typeof kaku.hello).toBe('function')
  })

  it('名前付きインポートをサポートすること', async () => {
    // 名前付きインポートのテスト
    const { hello } = await import('../../dist/index.js')
    expect(typeof hello).toBe('function')
  })

})
