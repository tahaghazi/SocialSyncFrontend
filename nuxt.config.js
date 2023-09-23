// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],
  modules: ['nuxt-lazy-load'],
  lazyLoad: {
    // These are the default values
    images: true,
    defaultImage: '/images/default-image.png',

  },
  app: {
    head: {
      title: 'wow',
    }
  }
})
