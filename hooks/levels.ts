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
    'Keep the numbers and the trade-offs, under a "Details" heading.',
  ].join(' '),
  L3: [
    'Reply level L3 (the full case), set by the user.',
    '**Give the answer, then the reasoning, the options you weighed, the numbers and the caveats.**',
    'Give each option its cost and its gain. Add parts, not longer paragraphs.',
  ].join(' '),
}
