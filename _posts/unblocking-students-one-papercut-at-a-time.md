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

I've been in open source for over 13 years, and in tech for over
20, through which I used a range of languages and technologies,
from QBasic and C to Perl, PHP, Python, Ruby on Rails and then
finally on to JavaScript.

Now I mostly work with TypeScript, React, Next.js, Node.js, SQL
and Bash.

Through my work in education, I've become interested in:

- new approaches in web frameworks like React Server Components /
  Server Actions and the Islands Architecture
- SQL-in-JS tooling like [SafeQL](https://safeql.dev/),
  [`prettier-plugin-embed`](https://github.com/Sec-ant/prettier-plugin-embed/blob/main/ConfigExamples.md),
  [Postgres.js](https://github.com/porsager/postgres)
- secure-by-default and pit-of-success approaches to building
  safe and correct software, eg. enforcement and guidance through
  linting rules and expressive and strict API design
- patterns to reduce abstraction and indirection in code

## UpLeveled and Open Source

My work at UpLeveled has focused on designing, developing and
delivering accessible curricula for both beginners and more
experienced engineers, including promoting getting involved in
open source.

As part of the curricula work, we maintain some of our own open
source projects:

- [Preflight](https://github.com/upleveled/preflight): command
  line interface for students to check their code quality
- [`eslint-config-upleveled`](https://github.com/upleveled/eslint-config-upleveled)
  and
  [`eslint-plugin-upleveled`](https://github.com/upleveled/eslint-plugin-upleveled):
  ESLint config and plugin with custom rules
- [System Setup](https://github.com/upleveled/system-setup):
  Windows, macOS and Linux setup guides
- numerous example repositories like [Examples of Broken Security
  with Next.js +
  Postgres.js](https://github.com/upleveled/security-vulnerability-examples-next-js-postgres)
  and [UpLeveled Next.js example - Winter
  2025](https://github.com/upleveled/next-js-example-winter-2025-eu)

## Papercuts

In addition to our own projects, UpLeveled also lives what we
teach and aims to be good open source citizens by contributing to
other projects when we encounter problems.

One common type of problem we encounter is the "papercut":

1. bugs or inconsistencies which appear to be minor
2. to more experienced developers, mildly annoying and not worth
   fixing
3. to students, potentially a blocker to their learning

These papercuts can include errors during setup steps,
documentation issues, small bugs, and even security issues.

By fixing these papercuts, we can help students focus on learning
and building projects, and raise all boats by contributing the
fix to everyone else.

## Upgrading

Another area of focus for UpLeveled is keeping up to date:

- we produce new versions of our curricula multiple times per
  year
- we upgrade to new versions of OSes, browsers, runtimes,
  frameworks and libraries
- we report and fix any issues we encounter during the upgrades
- we adopt new patterns and consider new tools

Some examples of issues and pull requests related to these
upgrades:

During a June 2024 iteration on our Expo / React Native lecture,
we switched the scaffolder and template we used and dropped the
obsolete config in `.npmrc`:

- [Switch to create-expo-app + blank-typescript, remove .npmrc
  cmds ](https://github.com/upleveled/system-setup/pull/79) in
  `upleveled/system-setup`

In January 2023, while adopting the Next.js App Router and
switching our material to React Server Components, we found that
Route Handlers did not have the same capabilities to check return
types using TypeScript, and contributed this feature to Next.js:

- [Add optional generic parameter to
  `NextResponse`](https://github.com/vercel/next.js/pull/47526)
  in `vercel/next.js`

More recently, a March 2025 upgrade to
`eslint-import-resolver-typescript@4.2.0` caused resolution
errors for Bun modules like `bun:test` while using
`eslint-plugin-import-x`, which I fixed with a documentation
update:

- [Document eslint-import-resolver-typescript `bun` option, fix
  ESM
  import](https://github.com/un-ts/eslint-plugin-import-x/pull/262)
  in `un-ts/eslint-plugin-import-x`

## Supporting Ecosystem Evolution

Over the long term, another goal of UpLeveled is to help evolve
the ecosystem, by extending compatibility, encouraging adoption
of new technologies and discussing new standards proposals.

Extending compatibility has included issues and pull requests
such as:

- [Node.js Type Stripping in
  `node_modules/*/*.ts`](https://github.com/nodejs/typescript/issues/14)
  in `nodejs/typescript`
- [Add nested
  transforms](https://github.com/porsager/postgres/pull/460) in
  `porsager/postgres`
- [Support for SafeQL on
  Windows](https://github.com/ts-safeql/safeql/issues/80#issuecomment-1882913207)
  in `ts-safeql/safeql`
- [Recognize referential actions as keywords in ON
  UPDATE/DELETE](https://github.com/sql-formatter-org/sql-formatter/pull/849)
  (`sql-formatter-org/sql-formatter`)

Encouraging adoption of new technologies has also ranged across
multiple topics, but a heavy focus has been ESM, including
TypeScript module resolution:

- ["module": "node16" error: `This expression is not
callable`](https://github.com/postcss/postcss/issues/1814) in
  `postcss/postcss`
- [disposable-email-domains: Use CommonJS export for "module":
  "node16"](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/64137)
  in `DefinitelyTyped/DefinitelyTyped`
- [Module not found: Fully Specified ESM Imports (with `.js`
  extension) in
  TypeScript](https://github.com/vercel/next.js/issues/41961) in
  `vercel/next.js`

While we have not yet invested the time to become deeply involved
in shaping standards by writing spec docs or becoming a champion,
we have at times added feedback in existing discussions or
contributed short proposal notes:

- [Skip parameters in function parameter
  lists](https://bsky.app/profile/karlhorky.com/post/3lomlbj5gts2m)
  on Bluesky
- [`await fetch.json(url)`
  proposal](https://x.com/karlhorky/status/1758072415114957091)
  on Twitter
- [Standard wire data format + form field error message UI for
  showing server validation errors without
  JS](https://x.com/karlhorky/status/1689254427159375873) on
  Twitter
- [Add style ordinal/cardinal to NumberFormat
  (RBNF)](https://github.com/tc39/ecma402/issues/494#issuecomment-2249792266)
  in `tc39/ecma402`

## Tips for Contributors

There are plenty of resources on how to get started to contribute
to open source, so I won't write another guide on that. But if
you're looking for a good place to start, try [How to Contribute
to Open Source by Open Source
Guides](https://opensource.guide/how-to-contribute/).

Here are my more personal anecdotes and tips for contributors:

1. Benefits of open source include the ability to:
   - learn about new technologies
   - learn how to communicate and work with others
   - network with developers in the community
   - become familiar with interesting projects
2. Start small, but contribute widely
   - to ease into open source, make small contributions - small
     contributions are also helpful for others
   - if you resolve or work around an issue others have reported,
     add your approach if it's not already there
   - if you find a small issue, report or fix it
   - get into the habit of looking through the issues and pull
     requests of projects you use - soon you will contributing to
     a wide range of projects
3. Superpower: match the style and philosophy of the project
   - read the code of the project and try to match the style
   - if there is a philosophy or goal of the project, align your
     contribution with that
   - this avoids wasting time on back and forth
4. Superpower: review your own contributions
   - read your own contributions as if you were the reviewer
   - try to find issues and fix them before submitting
   - comment on surprising or unusual parts of your contribution
5. Don't fall in love with your solution
   - be open to feedback and changes
   - acknowledge that it's possible your solution is not the best
     one, or may not be accepted at all
6. Use AI carefully in your open source contributions
   - AI can help you understand the codebase and suggest changes
     which match the style
   - review AI code carefully: AI can generate low quality code
     aka "AI slop"
   - using tools like AI can make the difference between a
     contribution and no contribution

## Wishes from Maintainers

During my time contributing to open source, I have also developed opinions on how projects can optimize their CX (Contributor Experience) for new contributors:

1. Optimize for contributions from non-desktop clients such as the GitHub web client
   - avoid requiring a local dev environment including code execution in a
     terminal, also for tests
2. Optimize for contributions from AI tools
   - encode your style and instructions for LLMs (Large Language Models) in standard locations such as
     `.vscode/copilot-instructions.md` or `cursorrules/*.mdc`
3. Simplify docs and make them easier to understand for a wide audience
   - avoid jargon
   - prioritize clarity over purity or brevity: short explanations are often not enough for a wide audience
   - don't avoid repetition: repetition can make a big difference for quickly navigating docs
   - embed running examples and playgrounds in the docs
4. Provide a bug reproduction template to reduce effort of reporting bugs
   - example: [Next.js repro template](https://codesandbox.io/p/devbox/github/vercel/next.js/tree/canary/examples/reproduction-template)
   - example: [Reproduction Template of ESLint Stylistic](https://github.com/eslint-community/eslint-stylistic-repro-template)
   - example: [GitHub template for creating a Rspack minimal reproducible example](https://github.com/web-infra-dev/rspack-repro)
   - more examples: [Awesome Open Source Automation](https://github.com/karlhorky/awesome-open-source-automation)

## Thanks

Thanks to the Open Source Initiative and Nick Vidal for
collaborating on Maintainer Month and showcasing maintainers
through this and other articles.
