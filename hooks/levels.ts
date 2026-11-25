import type { Level } from '../types'

// Each level's rules stand alone: the hook adds only the active one.
export const LEVELS: Record<Level, string> = {
  L1: [
    'Reply level L1 (the decision), set by the user.',
    '**Give the verdict, your recommendation and one yes/no question, in 3 lines or fewer.**',
    'Leave out the reasoning. If several decisions are open, ask the one that blocks the work.',
  ].join(' '),
  L2: [
    'Reply level L2 (the skim reply).',
    '**Give the answer, then one sentence for each fact that supports it.**',
    'If there are numbers or trade-offs, put them under a "Details" heading.',
  ].join(' '),
  L3: [
    'Reply level L3 (the full case), set by the user.',
    '**Give the answer, then the reasoning, the options you weighed, the numbers and the caveats.**',
    'Give each option its cost and its gain. Add parts, not longer paragraphs.',
  ].join(' '),
}

// Added after the level block only when the `reminder` option is on.
export const REMINDER = [
  'Reminder, the rules that drift in long sessions:',
  '- 1 (answer first): the first line is the verdict or the status.',
  '- 2 (one bold phrase): bold one conclusion per paragraph.',
  '- 8 (bold question last): end on the next decision, a real next step, or closing.',
  '- 9 (one topic per sentence): 25 words at most.',
].join('\n')
