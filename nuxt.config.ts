// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  devServer: {
    port: 3002,
  },
  modules: ["nuxt-mapbox"],
  mapbox: {
    accessToken: "xxx",
  },
});
