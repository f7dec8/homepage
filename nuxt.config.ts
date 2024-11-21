import { resolve } from 'node:path';
import { appDescription } from './app/constants';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],

  ssr: false,

  devtools: { enabled: true },

  app: {
    baseURL: '/homepage/',

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/homepage/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/homepage/nuxt.svg' },
        // { rel: 'apple-touch-icon', href: '/homepage/apple-touch-icon.png' },
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

  content: {
    experimental: {
      clientDB: true,
    },
    sources: {
      content: {
        driver: 'fs',
        base: resolve(__dirname, 'app/content'),
      },
    },
  },

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
