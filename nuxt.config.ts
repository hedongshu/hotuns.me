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

  sitemap: {
    strictNuxtContentPaths: true,
  },

  site: {
    url: "https://hotuns.me",
    identity: {
      type: "Person",
    },
    twitter: "@qdnvubp",
  },

  typescript: {
    strict: true,
    shim: false,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
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
    "nuxt-og-image",
    "@nuxt/content",
    "@nuxtjs/robots",
    "@nuxtseo/module",
    "@nuxtjs/fontaine",
    "@nuxtjs/color-mode",
    "nuxt-simple-sitemap",
    "@nuxtjs/tailwindcss",
  ],

  content: {
    highlight: {
      theme: "dracula",
    },
  },
});
