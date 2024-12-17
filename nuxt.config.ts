// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/mdc"],
  mdc: {
    highlight: {
      theme: {
        default: "material-theme-lighter",
      },
    },
    components: {
      map: {
        ExternalButton: 'KButton', // Register the global component as 'KButton'
      }
    }
  },
  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      autoSubfolderIndex: false, // Set to false to match Cloudflare route matching rules: https://nuxt.com/deploy/cloudflare
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
});
