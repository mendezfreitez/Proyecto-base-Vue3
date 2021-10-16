import { createApp } from 'vue'
import './assets/css/styles.css'
import App from './App.vue'
import router from './router'
import store from './store'
createApp(App).use(router).use(store).mount('#app')
