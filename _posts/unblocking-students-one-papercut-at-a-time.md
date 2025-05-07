---
title: 'Unblocking Students, One Papercut at a Time'
excerpt: 'Small bugs in open source might seem not worth fixing, but for students, they can be real blockers. By reporting and fixing these “papercuts” in open source projects, I aim to remove barriers so students can focus on learning.'
date: '2025-05-06'
---

The following article is also published by the Open Source
Initiative on OpenSource.net for Maintainer Month 2025.

---

Hi, I'm Karl Horky ([GitHub](https://github.com/karlhorky),
[LinkedIn](https://www.linkedin.com/in/karlhorky/)), Technical
Founder at [UpLeveled](https://upleveled.io).

In an educational landscape of AI-generated solutions,
disconnected islands of knowledge and barriers to entry, I focus
on helping students level up by designing accessible curricula
and contributing to open source.

## Then and Now

I've been in the open source game for over 13 years, and in tech
for over 20.

I have used a range of languages and technologies, from BASIC and
C to Perl, PHP, Python, Ruby on Rails and then finally on to JavaScript.

Now I mostly work with TypeScript, React, Next.js, Node.js and
SQL.

Through my work in education, I've become interested in:

- new approaches in web frameworks like React Server Components /
  Server Actions and the Islands Architecture
- SQL-in-JS tooling like [SafeQL](https://safeql.dev/),
  [`prettier-plugin-embed`](https://github.com/Sec-ant/prettier-plugin-embed/blob/main/ConfigExamples.md),
  [Postgres.js](https://github.com/porsager/postgres)
- secure-by-default and pit-of-success approaches to building
  safe and correct software, eg. by using static analysis
- patterns to reduce abstraction and indirection in code

## UpLeveled and Open Source

My work at UpLeveled has focused on designing, developing and delivering accessible curricula for both beginners and more experienced engineers, including promoting getting involved in open source.

Our curricula are also supported by open source projects which we maintain:

- [Preflight](https://github.com/upleveled/preflight): command line interface for students to check their code quality
- [`eslint-config-upleveled`](https://github.com/upleveled/eslint-config-upleveled) and [`eslint-plugin-upleveled`](https://github.com/upleveled/eslint-plugin-upleveled): ESLint config and plugin with custom rules
- [System Setup](https://github.com/upleveled/system-setup): Windows, macOS and Linux setup guides
- numerous example repositories like [Examples of Broken Security with Next.js + Postgres.js](https://github.com/upleveled/security-vulnerability-examples-next-js-postgres) and [UpLeveled Next.js example - Winter 2025](https://github.com/upleveled/next-js-example-winter-2025-eu)

## Papercuts

In addition to our own projects, UpLeveled also lives what we teach and aims to be good open source citizens by contributing to other projects when we encounter problems.

One common type of problem we encounter is the "papercut":

1. seemingly small bugs or inconsistencies in open source projects
2. to more experienced developers, mildly annoying and not worth
   fixing
3. to students, can be a real blocker to their learning

These papercuts can include errors during setup steps, documentation issues, small bugs, and even security issues.

By fixing these papercuts, we can help students focus on learning and building projects, and raise all boats by contributing the fix to everyone else.

## Contribute widely. Mostly shallow.

TODO: Remove? I guess not, but what's the point of the section? I guess it's about telling more of my open source story (linking to the example contributions and giving tips for getting the contribution).

- "mostly shallow contributions": amount of time in the day
- superpower: matching the style and philosophy of the project,
  to avoid wasting time on back and forth
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

## AI in open source

- AI is overall good
  - licensing caveats
  - AI can lead to low quality contributions aka "AI slop"
  - AI can also mean the difference between a contribution and no
    contribution
- AI code still needs to be reviewed

## Wishes for maintainers

- make contributions easier
  - from multiple clients (eg. GitHub web client)
  - using AI tools (provide easier interfaces to add code like
    .vscode/copilot-instructions.md or cursorrules/\*.mdc and
    MCP)
- make docs easier to understand
  - avoid jargon
  - prioritize clarity over purity + brevity
    - short explanations are often not enough for a wide audience
  - sometimes: prioritize clarity over correctness
    - sometimes, in order to be clear, you have to present a
      simplified version of the truth
  - don't try to avoid repetition
  - use running examples and playgrounds

## Thanks

Thanks to the Open Source Initiative and Nick Vidal for
collaborating on Maintainer Month and showcasing maintainers
through this and other articles.
