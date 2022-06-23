import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import store from '@/store/store'

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

// createApp(router, App).mount('#app')

// new Vue({
//     router,
//     render: run => run(App),
// }).mount('#app')
