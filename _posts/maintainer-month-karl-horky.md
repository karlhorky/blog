---
title: 'Unblocking Students, One Papercut at a Time'
excerpt: 'Small bugs in open source might seem not worth fixing, but for students, they can be real blockers. By reporting and fixing these “papercuts” in open source projects, I aim to remove barriers so students can focus on learning.'
date: '2025-05-06'
---

The following article is also published by the Open Source Initiative on OpenSource.net for Maintainer Month 2025.

---

- I'm Karl Horky (GitHub, LinkedIn)
- Technical Founder at UpLeveled (link)
- what I do (short)
  - problem
  - solution

## (Short) history + what I do now

- Perl, PHP, Python, JavaScript
- now mostly TypeScript, React, Next.js, Node.js, SQL
- interested in SQL-in-JS tooling like SafeQL, prettier-plugin-embed, Postgres.js

### UpLeveled

- built UpLeveled
  - curriculum design, teaching
  - developed Learning Management System (LMS)
  - built Preflight (link), ESLint config (link), Drone
  - intro: other open source contributions (leadup to next Papercuts section)

### Papercuts

- papercuts are small, annoying bugs
  - can include typos, documentation issues, small bugs
  - can also include security issues
- often get ignored by more experienced developers
- can block students in their projects
- by fixing these (or encouraging students to fix them), I'm unblocking students

### Contribute widely. Mostly shallow.

- "mostly shallow contributions": amount of time in the day
- superpower: matching the style and philosophy of the project, to avoid wasting time on back and forth
- networking
- get to know interesting projects
- led me to widespread contributions
  - Node.js TypeScript type stripping in node_modules
  - Postgres.js JSON/B recursive PR
  - Next.js Route Handler return types
  - SafeQL Windows support

### Don't fall in love with your solution

- not always successful
  - Prettier formatting single quotes default

## Raising all boats

- the contributions help everyone

## AI in open source

- AI is overall good
  - licensing caveats
  - AI can lead to low quality contributions aka "AI slop"
  - AI can also mean the difference between a contribution and no contribution
- AI code still needs to be reviewed

## Wishes for maintainers

- make contributions easier
  - from multiple clients (eg. GitHub web client)
  - using AI tools (provide easier interfaces to add code like .vscode/copilot-instructions.md or cursorrules/\*.mdc and MCP)
- make docs easier to understand
  - avoid jargon
  - prioritize clarity over purity + brevity
    - short explanations are often not enough for a wide audience
  - sometimes: prioritize clarity over correctness
    - sometimes, in order to be clear, you have to present a simplified version of the truth
  - don't try to avoid repetition
  - use running examples and playgrounds
