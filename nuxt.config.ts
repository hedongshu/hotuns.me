// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "Hotuns's Blog",
      titleTemplate: "%s - Hotuns's Blog",
      meta: [{ name: "description", content: "Hotuns's awesome blog" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  typescript: {
    strict: true,
    shim: false,
  },

  nitro: {
    // preset: "cloudflare_pages",
    // prerender: {
    //   crawlLinks: true,
    //   routes: ["/"],
    // },
  },

  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "light",
  },

  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtjs/fontaine",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],

  content: {
    highlight: {
      theme: "dracula",
    },
  },
});
