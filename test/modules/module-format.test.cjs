// Node.jsのtest runnerを使用
const { test, describe } = require('node:test')
const assert = require('node:assert')
const { existsSync } = require('fs')
const { join } = require('path')

describe('CommonJSモジュール形式', () => {
  let module

  test('CommonJSモジュールを読み込めること', () => {
    const distPath = join(__dirname, '../../dist/index.cjs')
    if (!existsSync(distPath)) {
      throw new Error('Build output not found. Run "pnpm build" first.')
    }

    // CommonJSのrequireでインポート
    module = require('../../dist/index.cjs')
    assert(module !== undefined, 'モジュールが読み込まれること')
  })

  test('期待されるエクスポートを持つこと', () => {
    assert(typeof module === 'object', 'モジュールはオブジェクトであること')
    assert(typeof module.kaku === 'object', 'kakuオブジェクトが存在すること')
    assert(typeof module.string === 'object', 'stringオブジェクトが存在すること')
    assert(typeof module.uuid === 'function', 'uuid関数が存在すること')
    console.log('CommonJS exports:', Object.keys(module))
  })

  describe('3つの import パターン', () => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    test('kaku.string.uuid() が動作すること', () => {
      const result = module.kaku.string.uuid()
      assert(typeof result === 'string', 'UUIDは文字列であること')
      assert(result.length === 36, 'UUIDは36文字であること')
      assert(uuidRegex.test(result), 'UUIDは正しい形式であること')
    })

    test('string.uuid() が動作すること', () => {
      const result = module.string.uuid()
      assert(typeof result === 'string', 'UUIDは文字列であること')
      assert(result.length === 36, 'UUIDは36文字であること')
      assert(uuidRegex.test(result), 'UUIDは正しい形式であること')
    })

    test('uuid() が動作すること', () => {
      const result = module.uuid()
      assert(typeof result === 'string', 'UUIDは文字列であること')
      assert(result.length === 36, 'UUIDは36文字であること')
      assert(uuidRegex.test(result), 'UUIDは正しい形式であること')
    })

    test('全てのパターンが同じ形式の UUID を生成すること', () => {
      const results = [
        module.kaku.string.uuid(),
        module.string.uuid(),
        module.uuid(),
      ]

      results.forEach(result => {
        assert(uuidRegex.test(result), 'すべてのパターンが正しいUUID形式を生成すること')
      })
    })
  })

})
