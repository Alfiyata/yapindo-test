import { createApp } from 'vue'

import './style.css'
import App from './App.vue'

// datepicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


/** Initialize App */
const app = createApp(App);

app.component('VueDatePicker', VueDatePicker);

app.mount('#app');
