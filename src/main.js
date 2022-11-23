import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "vue-toastification";
import Notifications from '@kyvg/vue3-notification'

import VueCookies from 'vue-cookies'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'material-design-icons-iconfont/dist/material-design-icons.css'

const app = createApp(App)
app.use(Notifications);

app.use(VueCookies, { expire: '7d'});

app.use(store).use(router).use(Toast).mount('#app')


