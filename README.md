# Skim-Friendly Style

Claude's replies for a reader who skims. Each reply starts with the answer, uses short plain sentences and one bold phrase per paragraph, and ends on a bolded question.

## Three levels

Start a message with L1, L2 or L3 to set how much goes into a reply. The level stays until you type another one. It lasts for one session: each new session starts at L2.

- **L1, the decision:** the verdict, a recommendation and one yes/no question, in 3 lines or fewer.
- **L2, the skim reply (the default):** the answer, one sentence for each supporting fact, and the numbers under a "Details" heading.
- **L3, the full case:** the reasoning, the options weighed with their cost and gain, the numbers and the caveats.

At every level, errors, failing test output, security warnings, confirmations before a destructive action and anything you ask to see keep their full content.

## What the plugin holds

- **The output style "Skim-Friendly"** (about 315 words). It loads with every reply and keeps Claude Code's coding instructions.
- **A hook** that reads L1, L2 or L3 at the start of your message. It adds only the active level's rules (30 to 40 words) to each message.
- **The skill `skim-style:reference`** (about 1,100 words): the full sentence rules and one reply shown at each level. Claude loads it only when it needs it.

## Install

At the prompt of a Claude Code session, type:

```
/plugin install skim-style --marketplace matanyarosenberg/skim-reply-style
```

Answer `y` to add the marketplace, then pick a scope. From a shell, the same step is:

```
claude plugin install skim-style --marketplace matanyarosenberg/skim-reply-style
```

The style starts with your next session.

While the plugin is on, Skim-Friendly is your output style, in place of any other one (for example Concise). To go back, turn the plugin off in `/plugin`.

## Update

To get the newest version, run these two commands from a shell, then start a new session:

```
claude plugin marketplace update skim-style
claude plugin update skim-style@skim-style
```

## Where the sentence rules come from

The sentence rules take about 80% of ASD-STE100, Issue 9 (2025): Simplified Technical English, the controlled English of aircraft maintenance manuals. They leave out its approved dictionary, its ban on -ing forms and its six-sentence paragraph limit.
