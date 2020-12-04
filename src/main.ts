import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

/**********************element***********************/
import { ElButton, ElSelect } from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

app.component(ElButton.name, ElButton)


app.use(store).use(router).mount('#app')
