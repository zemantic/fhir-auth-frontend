import { createApp } from "vue";
import { createPinia } from "pinia";
import { VanillaComponents } from "@flavorly/vanilla-components";
import { Plugin } from "@flavorly/vanilla-components";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);
app.use(VanillaComponents, {});

app.mount("#app");
