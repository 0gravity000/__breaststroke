import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

createApp(App).use(store).use(router).mount('#app')
//createApp(App).use(store).use(router).use(axios).mount('#app')
