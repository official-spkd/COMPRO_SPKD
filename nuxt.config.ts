import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: { lang: 'id' },
      titleTemplate: '%s | SPKD',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  fonts: {
   // Seluruh situs memakai Inter (lihat --font-sans di main.css)
   families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800, 900] },
     ],
   },
  // Halaman produk dipindah dari /solusi ke /produk; tautan lama tetap diarahkan
  routeRules: {
    '/solusi': { redirect: { to: '/produk', statusCode: 301 } },
    '/solusi/**': { redirect: { to: '/produk/**', statusCode: 301 } },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/fonts','@nuxt/icon'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://127.0.0.1:8000/api',
      turnstileSiteKey: '0x4AAAAAAFO4sn1YbJKX4rHf',
    },
  },
})
  