// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "https://oeki.ru/favicon-120.svg",
          sizes: "32x32",
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["vue3-carousel-nuxt"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
});
