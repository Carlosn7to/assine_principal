import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueAxios from "vue-axios";
import axios from 'axios';


createApp(App).use(router).use(VueAxios, axios).mount('#app')
