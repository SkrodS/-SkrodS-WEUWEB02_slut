import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import VueWriter from "vue-writer";
import VueGoogleMaps from "@fawmi/vue-google-maps";

createApp(App)
  .use(VueWriter)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyAd0288DMJuS3rNCRZaWJA3RNGP3kh1JCE",
      language: "se",
    },
  })
  .mount("#app");
