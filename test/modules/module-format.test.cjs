const { test, describe } = require('node:test')
const assert = require('node:assert')
const { existsSync } = require('fs')
const { join } = require('path')

describe('CommonJS モジュール形式', () => {
  let module

  test('CommonJS モジュールを読み込めること', () => {
    const distPath = join(__dirname, '../../dist/index.cjs')
    if (!existsSync(distPath)) {
      throw new Error('Build output not found. Run "pnpm build" first.')
    }

    module = require('../../dist/index.cjs')
    assert(module !== undefined, 'モジュールが読み込まれること')
  })

  test('期待されるエクスポートを持つこと', () => {
    assert(typeof module === 'object', 'モジュールはオブジェクトであること')
    assert(typeof module.kaku === 'object', 'kaku オブジェクトが存在すること')

    // kaku オブジェクトから import
    assert(typeof module.kaku.food === 'object', 'kaku.food オブジェクトが存在すること')
    assert(typeof module.kaku.food.fruit === 'function', 'kaku.food.fruit 関数が存在すること')

    assert(typeof module.kaku.string === 'object', 'kaku.string オブジェクトが存在すること')
    assert(typeof module.kaku.string.uuid === 'function', 'kaku.string.uuid 関数が存在すること')

    // モジュール単位で import
    assert(typeof module.food === 'object', 'food オブジェクトが存在すること')
    assert(typeof module.food.fruit === 'function', 'food.fruit 関数が存在すること')
    assert(typeof module.string === 'object', 'string オブジェクトが存在すること')
    assert(typeof module.string.uuid === 'function', 'string.uuid 関数が存在すること')

    // 関数単位で import
    assert(typeof module.fruit === 'function', 'fruit 関数が存在すること')
    assert(typeof module.uuid === 'function', 'uuid 関数が存在すること')

    console.log('CommonJS exports:', Object.keys(module))
  })
})
