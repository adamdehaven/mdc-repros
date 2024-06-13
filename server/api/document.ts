import { parseMarkdown } from "@nuxtjs/mdc/runtime";
import type { MDCParserResult } from "@nuxtjs/mdc";

export default defineEventHandler(async (event) => {
  const markdown = `---
title: Page
description: This is the markdown page
---

# Markdown Content

\`\`\`typescript
const name: string = 'Marty McFly'
\`\`\`
`;
  const result: MDCParserResult = await parseMarkdown(markdown);

  return result;
});
