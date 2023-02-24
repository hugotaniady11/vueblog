import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import jQuery from 'jquery'
window.$ = jQuery

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import '@/assets/js/scripts.js'
import '@/assets/css/styles.css'

createApp(App).use(router).mount('#app')
