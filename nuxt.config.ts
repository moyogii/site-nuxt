// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image', 'nuxt-aos', '@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      solid: ['code', 'server', 'database', 'code-branch', 'file-code', 'laptop-code', 'cloud'],
      brands: ['github', 'linkedin', 'discord', 'steam', 'linux', 'gitlab', 'microsoft', 'python', 'js', 'vuejs', 'docker', 'digital-ocean'],
    }
  }
})