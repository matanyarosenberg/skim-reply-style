import { expect, test } from 'claude-code/testing'

// In each test, the first hook stands for the engine: it hands back what reached it.
const typed = { kind: 'composer' } as const
const say = (text: string) => ({ text, origin: typed }) as never

test('a message with no level gets L2', async ($, on) => {
  on('prompt.submit', (_, e) => ({ text: e.text, context: e.context }))
  const r = await $.prompt.submit(say('what is left?'))
  expect(r.context?.at(-1)).toMatch(/^Reply level L2/)
})

test('L1 sets the level, and it stays for later messages', async ($, on) => {
  on('prompt.submit', (_, e) => ({ text: e.text, context: e.context }))
  const first = await $.prompt.submit(say('L1 should it persist?'))
  expect(first.context?.at(-1)).toMatch(/^Reply level L1/)
  const later = await $.prompt.submit(say('why?'))
  expect(later.context?.at(-1)).toMatch(/^Reply level L1/)
})

test('L3 replaces L1', async ($, on) => {
  on('prompt.submit', (_, e) => ({ text: e.text, context: e.context }))
  await $.prompt.submit(say('L1 first'))
  const r = await $.prompt.submit(say('L3 same question'))
  expect(r.context?.at(-1)).toMatch(/^Reply level L3/)
})

test('a word that only starts with L1 sets nothing', async ($, on) => {
  on('prompt.submit', (_, e) => ({ text: e.text, context: e.context }))
  const r = await $.prompt.submit(say('L1x is a label'))
  expect(r.context?.at(-1)).toMatch(/^Reply level L2/)
})

test('another session that starts a message with L1 sets nothing', async ($, on) => {
  on('prompt.submit', (_, e) => ({ text: e.text, context: e.context }))
  const r = await $.prompt.submit({ text: 'L1 from a peer', origin: { kind: 'peer' } } as never)
  expect(r.context?.at(-1)).toMatch(/^Reply level L2/)
})
