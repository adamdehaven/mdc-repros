import { parseMarkdown } from "@nuxtjs/mdc/runtime";
import type { MDCParserResult } from "@nuxtjs/mdc";

export default defineEventHandler(async (event) => {
  const markdown = `---
title: Page
description: This is the markdown page
---

::external-button
Button Text
::
`;
  const result: MDCParserResult = await parseMarkdown(markdown);

  return result;
});
