// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { siteConfig } from './site.config'

const isDevelopment = process.env.NODE_ENV === 'development'
console.log('isDevelopment', isDevelopment)

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@sidebase/nuxt-auth',
    '@pinia/nuxt',
    '@bg-dev/nuxt-naiveui'
  ],
  auth: {
    provider: {
      type: 'refresh'
    }
  },
  app: {
    rootId: 'nuxt-root',
    head: {
      link: [
        { rel: 'icon', type: 'image/x.icon', href: 'favicon.ico' }
      ],
      meta: [
        { name: 'description', content: siteConfig.description },
        { name: 'author', content: siteConfig.author },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }
      ],
      noscript: [{ children: 'JavaScript is required' }],
      htmlAttrs: {
        lang: siteConfig.lang
      },
      bodyAttrs: {
        class: 'font-sans'
      }
    }
  },
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      },
      preload: ['diff', 'json', 'js', 'ts', 'css', 'shell', 'html', 'md', 'yaml']
    },
    // @ts-ignore
    sources: {
      content: {
        driver: 'fs',
        prefix: '', // All contents inside this source will be prefixed with `/docs`
        base: resolve(__dirname, 'content')
      }
      // content: isDevelopment ? {
      //   driver: 'fs',
      //   prefix: '', // All contents inside this source will be prefixed with `/docs`
      //   base: resolve(__dirname, 'github-static-file')
      // } : undefined,
      // github: isDevelopment ? undefined : {
      //   prefix: '', // Prefix for routes used to query contents
      //   driver: 'github', // Driver used to fetch contents (view unstorage documentation)
      //   repo: 'hedongshu/static-file',
      //   branch: 'main',
      //   ignores: ['README.md'],
      //   dir: '' // Directory where contents are located. It could be a subdirectory of the repository.
      //   // Imagine you have a blog inside your content folder. You can set this option to `content/blog` with the prefix option to `/blog` to avoid conflicts with local files.
      // }
    }
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/global.scss',
    '@/assets/styles/theme.css',
    '@/assets/styles/transition.css',
    '@/assets/styles/markdown.scss'
  ],
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },
  typescript: {
    shim: false
  }
})
