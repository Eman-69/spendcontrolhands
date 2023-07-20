// https://nuxt.com/docs/api/configuration/nuxt-config
import { TRUE } from "sass";
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  app: {
    head: {
      title: "My Awesome App",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: "https://awesome-lib.js" },
        
        //<script src="https://kit.fontawesome.com/1c9ad4b785.js" crossorigin="anonymous"></script>
        {src:"https://kit.fontawesome.com/1c9ad4b785.js"}
      ],
      link: [
        //<link rel="preconnect" href="https://fonts.googleapis.com">
        {rel:"preconnect",href:"https://fonts.googleapis.com"},
        {rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},
        {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&display=swap"},
        //<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        //<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&display=swap" rel="stylesheet">
        //font-awesome
        // ===== Boxicons CSS =====
        { href:"https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css",rel:"stylesheet" } 
        // { rel: "stylesheet", href: "https://awesome-lib.css" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ":root { color: black }" },
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: "JavaScript is required" },
      ],
    },
  },
  css: [
    "@/assets/css/style.css",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  modules: [
    async (options, nuxt: any) => {
      nuxt.hooks.hook("vite:extendConfig", (config: any) =>
        config.plugins.push(vuetify())
      );
    },
    "@nuxt/image-edge",
    "@hypernym/nuxt-anime",
    "@hypernym/nuxt-anime",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
