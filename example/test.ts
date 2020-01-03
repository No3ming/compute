import Vue, {CreateElement, VNode} from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import routes from './routes/index'

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
Vue.use(VueRouter)
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

