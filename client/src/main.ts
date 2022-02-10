import { createApp } from 'vue'
import App from './App.vue'

export const eventBus = createApp(App)

createApp(App).mount('#app')