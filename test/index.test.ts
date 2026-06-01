import { describe, expect, it } from 'vitest'
import cda from '../src'

describe('config factory', () => {
  it('creates a flat config composer', () => {
    expect(() => cda()).not.toThrow()
  })
})
