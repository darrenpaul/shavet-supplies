// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  ssr: true,
  generate: { fallback: true },
  css: ["~/assets/css/global.scss"],
  modules: ["@nuxtjs/tailwindcss"],
});
