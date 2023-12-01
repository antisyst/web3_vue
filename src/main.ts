import { createApp } from 'vue';
import './style.scss'
import store from './store';
import App from './App.vue'

const app = createApp(App);
app.use(store);
app.mount('#app');
