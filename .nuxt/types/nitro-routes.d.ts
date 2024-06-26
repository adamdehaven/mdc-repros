// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/document': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/document').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.10.3_typescript@5.4.5_vite@5.1.5_vue-tsc@2.0.21/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_mdc/highlight': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxtjs+mdc@0.8.1/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/event-handler').default>>>>
    }
  }
}
export {}