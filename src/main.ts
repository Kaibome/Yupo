import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import routes from "./config/route";
import Vant from 'vant';
import 'vant/lib/index.css'

const app = createApp(App);
app.use(Vant);

const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现,这里使用hash模式
    history: VueRouter.createWebHashHistory(),
    routes,
})

app.use(router);
app.mount('#app')


