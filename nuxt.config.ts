// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  components: true,
  imports: {
    dirs: ["composables"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
        compilerOptions: {
          isCustomElement: (tag) => ["iconify-icon"].includes(tag),
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },
  app: {
    head: {
      title: "DD/BB",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/icons/shape.ico",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        {
          name: "description",
          content:
            "ARCHITECTURE ¦ Art ¦ Interior design ¦ Urban planning ¦ post production",
        },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
