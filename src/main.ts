import './styles.css'
import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router/router'
import { i18n } from './locale/locale'
import { pinia } from './stores/pinia'

createApp(App)
  .use(router)
  .use(pinia)
  .use(i18n)
  .mount('#app')
