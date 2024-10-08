# MDC Reproductions

This branch serves as a reproduction for rendering nested markdown content from nested `MDCRenderer` components. The initial markdown content contains MDC `page-snippet` block components that fetch additional raw markdown to be rendered in their own `MDCRenderer` component.

If there are too many `page-snippet` components (e.g. if the data in all components takes a bit to load), the parent component in `index.vue` resolves before all of the internal `page-snippet` components have finished fetching their data.

I have also added a [`/utils/serveCachedData.ts`](/utils/serveCachedData.ts) helper that caches the data after the first load so that navigating to the second page at `/second` and coming back to the home route `/` then renders the data instantly from cache. This is not relevant to the actual issue seen, but shows that once the snippet data is fetched and cached, there's no issue in rendering the nested components. You can even go multiple nesting levels deep.

When running the project, you'll observe:

1. On the homepage, if you refresh the page to load it from the server, you'll see the `Nested Content` list items only load 2-3 on the server, and then reload and fill in the other items in the client, causing a hydration error in the console.
2. Wrapping the `PageSnippet.vue` in a `ClientOnly` tag doesn't resolve the actual loading/timing issue (and the point here is to render on the server on initial load)
3. Once the data _is loaded_ you can navigate to the second page, and back to the homepage, and since the `servedCachedData` function is providing a `transform` and `getCachedData` configuration, the data is immediately available since it has already been fetched.

## Questions

**Is it possible to defer the resolution of the parent `MDCRenderer` component in `index.vue` so that it waits for all child nodes to be resolved?**

I realize there could be a performance hit here if the page were to contain ~100 separate calls for other documents. Any suggestions on optimization or alternative solutions?

## Other details

- The `/api/markdown` endpoint serves a response of `{ content: string }` of raw markdown, and adds a simulated `250ms` delay on the endpoint to simulate loading the data from a remote server.
- The `page-snippet` component passes a query param to the same `/api/markdown` endpoint so that it simply returns a single list item.
- To prevent recursion, (e.g. snippet importing itself over and over) there is a `removeInvalidSnippets` utility that processes the markdown `AST` nodes and removes any nested children of the same `tag`, as well as a regular expression that removes the `name` prop from the `PageSnippet` component inline in the raw markdown. (again, none of this impacts the reproduction as-is)

## Running the project

1. Clone the repository and check out the `chore/snippets` branch.
2. `pnpm install`
3. `pnpm dev`
