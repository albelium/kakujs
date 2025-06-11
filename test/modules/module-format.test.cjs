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

  test('3つの import パターンが利用可能であること', () => {
    // kaku.string.uuid パターン
    assert(typeof module.kaku === 'object', 'kakuオブジェクトが存在すること')
    assert(typeof module.kaku.string === 'object', 'kaku.stringオブジェクトが存在すること')
    assert(typeof module.kaku.string.uuid === 'function', 'kaku.string.uuid関数が存在すること')

    // string.uuid パターン
    assert(typeof module.string === 'object', 'stringオブジェクトが存在すること')
    assert(typeof module.string.uuid === 'function', 'string.uuid関数が存在すること')

    // uuid 直接パターン
    assert(typeof module.uuid === 'function', 'uuid関数が直接エクスポートされていること')
  })

})
