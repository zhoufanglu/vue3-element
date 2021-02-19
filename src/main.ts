import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

/**********************element***********************/
import { ElButton, ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu } from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

// @ts-ignore
app.use(ElButton)
// @ts-ignore
app.use(ElMenu)
// @ts-ignore
app.use(ElMenuItem)
// @ts-ignore
app.use(ElMenuItemGroup)
// @ts-ignore
app.use(ElSubmenu)

//app.component(ElButton.name, ElButton)

//挂载全局实例
app.config.globalProperties.$test = 'test'

app.use(store).use(router).mount('#app')
