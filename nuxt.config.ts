const metaTitle = 'Shavet Supplies'
const metaDescription =
  'Shavet Supplies has over 30 years of experience in the poultry industry. We have been involved in all aspects of poultry production, from hatcheries to processing plants. We are committed to providing the highest quality products and services to our customers.'

const host = 'https://www.shavetsupplies.com/'
const imageProvider = 'https://res.cloudinary.com/darren-paul-photography/image/upload'
const imageHost = `${imageProvider}/v1671736024/shavet-supplies/shavet-supplies_vuv5t6.jpg`
const iconHost = `${imageProvider}/v1671736102/shavet-supplies/shavet-supplies_biflsq.ico`

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  ssr: true,
  generate: { fallback: true },
  css: ['~/assets/css/global.scss'],
  modules: ['@nuxtjs/tailwindcss', '@funken-studio/sitemap-nuxt-3'],
  publicRuntimeConfig: {
    SEND_TO_EMAIL: 'GG7ydBaNJ9Q6Wyzbch',
    EMAIL_SERVER: 'https://us-central1-email-server-fd5bb.cloudfunctions.net/app/api/send-email'
  },
  app: {
    head: {
      title: metaTitle,
      htmlAttrs: {
        lang: 'en-GB'
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: iconHost }],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: metaDescription
        },
        // canonical
        {
          hid: 'canonical',
          rel: 'canonical',
          href: host
        },
        // Schema.org markup for Google+
        {
          itemprop: 'name',
          content: metaTitle
        },
        {
          itemprop: 'description',
          content: metaDescription
        },
        {
          itemprop: 'image',
          content: imageHost
        }, // Twitter Card
        {
          name: 'twitter:title',
          content: metaTitle
        },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:image',
          content: imageHost
        }, // Open Graph data
        {
          hid: 'og:title',
          property: 'og:title',
          content: metaTitle
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: host
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: imageHost
        },
        {
          hid: 'og:image:width',
          name: 'og:image:width',
          content: '1200px'
        },
        {
          hid: 'og:image:height',
          name: 'og:image:height',
          content: '800px'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: metaDescription
        }
      ],
      noscript: [{ children: 'Javascript is required' }]
    }
  },
  sitemap: {
    hostname: host,
    gzip: true
  },
  nitro: {
    prerender: { crawlLinks: true, ignore: [] }
  },
  experimental: {
    payloadExtraction: true
  }
})
