# MDC Reproductions

This branch serves as a reproduction for rendering nested markdown content from nested `MDCRenderer` components. The initial markdown content contains MDC `page-snippet` block components that fetch additional raw markdown to be rendered in their own `MDCRenderer` component.

If there are too many `page-snippet` components (e.g. if the data in all components takes a bit to load), the parent component in `index.vue` resolves before all of the internal `page-snippet` components have finished fetching their data.

I have also added a [`/utils/serveCachedData.ts`](/utils/serveCachedData.ts) helper that caches the data after the first load so that navigating to the second page at `/second` and coming back to the home route `/` then renders the data instantly from cache. This is not relevant to the actual issue seen, but shows that once the snippet data is fetched and cached, there's no issue in rendering the nested components. You can even go multiple nesting levels deep.

## Other details

- The `/api/markdown` endpoint serves a response of `{ content: string }` of raw markdown, and adds a simulated `250ms` delay on the endpoint to simulate loading the data from a remote server.
- The `page-snippet` component passes a query param to the same `/api/markdown` endpoint so that it simply returns a single list item.
- To prevent recursion, (e.g. snippet importing itself over and over) there is a `removeInvalidSnippets` utility that processes the markdown `AST` nodes and removes any nested children of the same `tag`, as well as a regular expression that removes the `name` prop from the `PageSnippet` component inline in the raw markdown. (again, none of this impacts the reproduction as-is)

## Running the project

1. Clone the repository and check out the `chore/snippets` branch.
2. `pnpm install`
3. `pnpm dev`
