import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import App from './App.vue'
import router from './router'

import { createOruga, Autocomplete, Field } from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next'

const app = createApp(App)
const oruga = createOruga()

app.use(oruga)
app.use(Autocomplete)
app.use(Field)
app.use(createPinia())
app.use(router)

app.mount('#app')
