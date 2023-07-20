// plugins/vuetify.js
import { createVuetify } from "vuetify";

import colors from "vuetify/lib/util/colors";

// colors

const myTheme = {
  variables: {},
  dark: false,
  colors: {
    background: "#f8f8f8",
    surface: "#FFFFFF",
    primary2: "#AE152D",
    secondary2: "#111111",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
  },
};

// export

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,

    theme: {
      defaultTheme: "myTheme",
      themes: {
        myTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
