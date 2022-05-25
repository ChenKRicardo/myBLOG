import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './route'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).use(createPinia()).mount('#app')
