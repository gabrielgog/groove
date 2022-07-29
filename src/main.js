import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import instance from "@/services/axios-instance";
import Vue3Transitions from "vue3-transitions";

const app = createApp(App);
app.provide("$axios", instance);

app.use(router).mount("#app");
app.use(Vue3Transitions);
