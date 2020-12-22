import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

const app = createApp(App);

import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init();

app.use(router).mount('#app')
