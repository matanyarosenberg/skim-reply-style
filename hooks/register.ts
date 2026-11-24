import type { EngineInterface, Register } from 'claude-code'
import type { Level } from '../types'
import { LEVELS } from './levels'

// The level lives in session state: each new session starts at L2.
const LEVEL = { plugin: 'skim-style', key: 'level' } as const

// "L1", "L2" or "L3" at the very start of a message, as a word of its own.
const PREFIX = /^\s*L([123])(?![\w])/

// Only the person's own messages set the level: typed, sent from a phone, or run with `claude -p`.
const isPersonTyped = (kind: string) => kind === 'composer' || kind === 'bridge' || kind === 'sdk'

const activeLevel = async ($: EngineInterface, text: string, kind: string): Promise<Level> => {
  const typed = isPersonTyped(kind) ? PREFIX.exec(text) : null
  if (typed) {
    const level = `L${typed[1]}` as Level
    await $.state.set(LEVEL, level)
    return level
  }
  const { value } = await $.state.get(LEVEL)
  return value ?? 'L2'
}

export const register: Register = (on) => {
  on('prompt.submit', async ($, e, next) => {
    if (e.command || e.isMeta) return next(e)

    // If the level cannot be read or stored, the message still goes through, without a level block.
    const level = await activeLevel($, e.text, e.origin.kind).catch(() => null)
    if (!level) return next(e)

    return next({ ...e, context: [...(e.context ?? []), LEVELS[level]] })
  })
}
