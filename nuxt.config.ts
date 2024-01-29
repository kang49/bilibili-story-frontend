// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  experimental: {
    payloadExtraction: false,
  },
  components: {
    dirs: ["~/components"],
  },
  css: ['~/assets/styles.css'],
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.15.0/css/all.css' },
      ],
      title: 'Bilibili Story Sharing',
      meta: [
        { hid: 'description', name: 'description', content: 'Share anime from Bilibili to social | instagram | facebook story.' },
        { hid: 'keywords', name: 'keywords', content: 'Share Bilibili, Share anime, anime, Bilibili, Share anime to instragram, แชร์อนิเมะลงไอจี, แชร์อนิเมะ, แชร์ bilibili, แชร์อนิเมะแบบ apple music' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { hid: 'content-type', httpEquiv: 'Content-Type', content: 'text/html; charset=utf-8' },
        { hid: 'language', name: 'language', content: 'English' },
        { hid: 'revisit-after', name: 'revisit-after', content: '7 days' },
        { hid: 'author', name: 'author', content: 'Kankawee Aramrak' },
      ],
      script: [],
    }
  }
})