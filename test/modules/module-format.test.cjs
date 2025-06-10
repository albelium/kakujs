// Node.jsのtest runnerを使用
const { test, describe } = require('node:test')
const assert = require('node:assert')
const { existsSync } = require('fs')
const { join } = require('path')

describe('CommonJSモジュール形式', () => {
  let kaku

  test('CommonJSモジュールを読み込めること', () => {
    const distPath = join(__dirname, '../../dist/index.cjs')
    if (!existsSync(distPath)) {
      throw new Error('Build output not found. Run "pnpm build" first.')
    }

    // CommonJSのrequireでインポート
    kaku = require('../../dist/index.cjs')
    assert(kaku !== undefined, 'モジュールが読み込まれること')
  })

  test('期待されるエクスポートを持つこと', () => {
    assert(typeof kaku === 'object', 'モジュールはオブジェクトであること')
    assert(typeof kaku.hello === 'function', 'helloは関数であること')
    assert(typeof kaku.version === 'string', 'versionは文字列であること')
    console.log('CommonJS exports:', Object.keys(kaku))
  })

  test('ESモジュールのプロパティを持たないこと', () => {
    // CommonJSモジュールには__esmプロパティがないことを確認
    assert(kaku.__esModule === undefined, '__esModuleプロパティが存在しないこと')
  })

  test('hello関数が正しく動作すること', () => {
    const result = kaku.hello('World')
    assert(typeof result === 'string', 'hello()は文字列を返すこと')
    assert(result.includes('World'), '結果に入力した名前が含まれること')
    assert(result.includes('Hello'), '結果に"Hello"が含まれること')
    console.log('CommonJS hello result:', result)
  })
})
