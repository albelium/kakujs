import { describe, it, expect } from 'vitest'
import { uuid } from './uuid'

describe('string.uuid()', () => {
  it('正しい UUID v4 形式であること', () => {
    const result = uuid()
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    expect(result).toMatch(uuidRegex)
  })

  it('複数回呼び出しで異なる値を返すこと', () => {
    const uuid1 = uuid()
    const uuid2 = uuid()
    const uuid3 = uuid()

    expect(uuid1).not.toBe(uuid2)
    expect(uuid2).not.toBe(uuid3)
    expect(uuid1).not.toBe(uuid3)
  })
})
