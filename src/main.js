import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import pinia from "./store.js"
import { useNavStore } from '@/stores/navStore'

const app = createApp(App)
app.use(pinia)
app.config.globalProperties.navStore = useNavStore()
app.mount('#app')
