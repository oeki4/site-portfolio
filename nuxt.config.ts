// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["vue3-carousel-nuxt"],
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
});
