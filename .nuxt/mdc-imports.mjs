import _Highlight from '/Users/adam.dehaven/Dev/mdc-repros/node_modules/.pnpm/@nuxtjs+mdc@0.8.1/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/rehype-nuxt.js'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: _Highlight, options: {} },
}

export const highlight = {"theme":{"default":"material-theme-lighter"}}