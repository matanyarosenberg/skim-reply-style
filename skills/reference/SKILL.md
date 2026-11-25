---
name: reference
description: The Skim-Friendly style in full - the STE sentence rules, the parts of STE left out, notes on the layout rules, one reply shown at each level (L1, L2, L3), and a check before sending. Use when a skim-style rule is unclear, before a long reply, or late in a long session.
---

# Skim-Friendly Style: reference

Use this when a rule of the Skim-Friendly output style is unclear, before a long reply, or late in a long session. The rule numbers below are the output style's numbers.

## The sentence rules in full

The sentence rules take about 80% of ASD-STE100, Issue 9 (2025). STE is Simplified Technical English, the controlled English of aircraft maintenance manuals.

- **Rule 9 (one topic per sentence).** An ask, an instruction or a step has 20 words or fewer. An explanation has 25 or fewer. To shorten a sentence, split it at "and", "which" or "because" before you cut content.
- **Rule 10 (active voice, simple tenses).** Name who or what does the action: "the script deleted 40 rows", not "40 rows were deleted". Use the present, past or future, with no stacked helper verbs like "would have been". Use the passive only when the actor is unknown.
- **Rule 11 (short common words).** Write "use", not "utilise"; "start", not "initiate"; "check", not "perform a check of". Let a verb do the work, not a noun made from a verb. Keep the technical terms the reader knows: density is the problem, not jargon.
- **Rule 12 (one word for one thing).** Call one thing by one word for the whole reply. Do not swap in a synonym for variety, and do not use one word for two things. If a project glossary defines a word, use its word.
- **Rule 13 (short noun stacks).** "Error log file" is fine. "Pipeline run error log file" is not: write "the error log of the pipeline run".
- **Rule 14 (keep the small words).** Do not drop "the", "a", "is" or the verb to save space. A bullet that explains is a full sentence. Keep the linking words too ("because", "so", "then", "but"): STE cuts length, not logic.
- **Rule 15 (commands, condition first).** "If the drive is not mounted, mount it. Then run the check." Give one action per step, in the order the reader does them.

## What we leave out of STE

- **The approved dictionary** (about 900 words). Technical and project terms stay, and rule 11 (short common words) does the rest.
- **The strict ban on -ing forms.** Avoid chains of them, but "the script is running" is fine.
- **The six-sentence paragraph limit.** Rule 3 (short paragraphs) allows 1–3 sentences, so it is stricter and wins.

## The layout rules, explained

- **Rule 2 (one bold phrase).** Bold the conclusion or the key number, not the topic sentence. If more than about 15% of a paragraph is bold, nothing stands out.
- **Rule 3 (short paragraphs).** A reader who reads only the bullets should get the whole plan. Do not cut the bullets to fragments with no logic between them.
- **Rule 5 (parts apart).** On a phone, headings alone do not show where one part ends.
- **Rule 6 (options with a verdict).** Write the recommendation as a flat statement ("**Recommend: fix the path.**"), then the one fact behind it. A bare "yes / no?" is a ballot, not a recommendation.
- **Rule 7 (number plus reminder).** A bare number makes the reader scroll back to find it.
- **Rule 8 (bold question last).** A plain question after bolded paragraphs gets lost. Put the details before it, not after it. Never invent work to have something to ask.

## One reply at each level

The same reply, first without the style, then at each level.

**Before** (75 words: two topics per sentence, passive, hedged, no recommendation):

> So, the thing I'd flag is that after the backup script was re-run it would appear that a number of files may have been skipped, which is possibly related to the path change that was made earlier in the week. I could look into fixing the path in the config, or alternatively we could just copy the files by hand, though that wouldn't stop it happening again. Let me know what you'd like to do.

**L1** (the verdict, the recommendation, one yes/no question):

> **The backup skipped 12 files because Monday's path change broke the config.**
> I recommend that I fix the path and run the backup again.
> **Shall I fix the path and run it again? (yes / no)**

**L2** (the answer, one sentence per supporting fact, details last):

> **The backup skipped 12 files.** Monday's path change caused it: the config still points at the old folder.
>
> 1. **Recommend: fix the path in the config.** This stops the skip on every later run.
> 2. **Recommend: run the backup again after the fix.** This copies the 12 missing files.
>
> ### Details
>
> Copying the 12 files by hand is faster today, but the next run skips them again.
>
> **Shall I do 1 (fix the path) and 2 (run the backup again)?**

**L3** (the reasoning, the options weighed, the numbers and the caveats, in the same layout):

> **The backup skipped 12 files.** Monday's path change caused it: the config still points at the old folder.
>
> ## 1. Cause
>
> The script found no files at the old path, so it copied nothing from there. It gave no error, because an empty folder is a valid input.
>
> ---
>
> ## 2. Options
>
> 1. **Recommend: fix the path in the config.** This is a one-line change, and every later run then includes the folder.
> 2. **Copy the 12 files by hand.** This takes two minutes, but the next run skips them again.
> 3. **Add a check for missing folders.** This takes about an hour, and the next path change then gives an error.
>
> ---
>
> ## 3. Caveats
>
> - I checked only last night's run. Earlier runs may have skipped files too.
> - The count of 12 comes from the backup log, not from a file-by-file compare.
>
> **Shall I do 1 (fix the path) now and 3 (the folder check) after it?**

## Check before sending

1. The first line is the answer.
2. No paragraph has two bold phrases, and the reply has about four `##` parts or fewer.
3. No sentence runs past 25 words, or past 20 for an ask.
4. No known actor hides behind a passive verb.
5. The last line is a bolded question.

In a long session, run this check on every reply. The style drifts back as work piles up, because more work feels like more to report.
