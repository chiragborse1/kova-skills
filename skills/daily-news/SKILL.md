---
name: daily-news
description: "Sends top 5 news headlines every morning. Use when user asks for news briefing or when cron triggers at 8am."
cron: "0 8 * * *"
---

# Daily News Briefing

Fetch and deliver the top 5 most important news headlines from today.

## When to Run
- Every morning at 8am automatically
- When user asks "what's the news today" or "give me a news briefing"

## How to Run
1. Search for "top news headlines today"
2. Pick the 5 most important stories across different topics
3. Format as a numbered list: **Headline** — one sentence summary
4. Send to the user's connected channel

## Output Format
```
📰 Daily News Briefing — [Date]

1. **Headline here** — Brief summary in one sentence.
2. **Headline here** — Brief summary in one sentence.
3. **Headline here** — Brief summary in one sentence.
4. **Headline here** — Brief summary in one sentence.
5. **Headline here** — Brief summary in one sentence.
```