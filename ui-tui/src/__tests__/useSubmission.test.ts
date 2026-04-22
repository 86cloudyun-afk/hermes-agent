import { describe, expect, it } from 'vitest'

import { shouldAutoSubmitSlashCompletion } from '../app/useSubmission.js'

describe('shouldAutoSubmitSlashCompletion', () => {
  it('auto-submits slash completions that only add trailing whitespace', () => {
    expect(shouldAutoSubmitSlashCompletion('/model', '/model ')).toBe(true)
  })

  it('does not auto-submit when the completion changes the actual command text', () => {
    expect(shouldAutoSubmitSlashCompletion('/mod', '/model ')).toBe(false)
  })

  it('does not auto-submit non-slash completions', () => {
    expect(shouldAutoSubmitSlashCompletion('hello', 'hello ')).toBe(false)
  })
})
