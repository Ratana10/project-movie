// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/scss/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig:{
    apiBaseUrl: 'http://api.themoviedb.org/3',
    apiKey: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTdlNWExNzY4ODRjYjVlZjJlNjI3NGVkNzE4NDliNiIsInN1YiI6IjY1ZmRkZjYxMzc4MDYyMDE3YzM4NDFiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FkbX2Zcc_CLfPpTHnmHc33UA_99WUAI1Bj4FUpyRoc8',
    public:{
      imgBaseUrl: 'http://image.tmdb.org/t/p/w500'
    }
  }
})
