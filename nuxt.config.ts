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
    // Slug lama diarahkan ke slug yang sesuai nama produk
    '/produk/simrs-erp': { redirect: { to: '/produk/simrs', statusCode: 301 } },
    '/produk/interoperabilitas-rme': { redirect: { to: '/produk/medclaim', statusCode: 301 } },
    '/produk/tele-health-smart-emergency': { redirect: { to: '/produk/medcredix', statusCode: 301 } },
    '/produk/satusehat-bpjs': { redirect: { to: '/produk/medpath', statusCode: 301 } },
    '/produk/cash-supply-chain': { redirect: { to: '/produk/medpay', statusCode: 301 } },
    '/solusi/simrs-erp': { redirect: { to: '/produk/simrs', statusCode: 301 } },
    '/solusi/interoperabilitas-rme': { redirect: { to: '/produk/medclaim', statusCode: 301 } },
    '/solusi/tele-health-smart-emergency': { redirect: { to: '/produk/medcredix', statusCode: 301 } },
    '/solusi/satusehat-bpjs': { redirect: { to: '/produk/medpath', statusCode: 301 } },
    '/solusi/cash-supply-chain': { redirect: { to: '/produk/medpay', statusCode: 301 } },
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
  