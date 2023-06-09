import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

const app = createApp(App);

app.config.globalProperties.$filters={
    buyutFiltre(title){
        return title.toUpperCase();
    }
}

app.use(router);

app.mount("#app");