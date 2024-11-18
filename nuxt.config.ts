import { appDescription } from './app/constants/index';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/eslint',
  ],

  ssr: false,

  devtools: { enabled: true },

  app: {
    baseURL: '/bns-neo/',

    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/bns-neo/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/bns-neo/nuxt.svg' },
        // { rel: 'apple-touch-icon', href: '/bns-neo/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: '#222222' },
      ],
    },
  },

  css: [
    '@unocss/reset/tailwind.css',
  ],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-08-14',

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

});
