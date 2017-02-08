// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import VueRouter from 'vue-router';
import qwe from './components/test'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'
import { RadonInstall } from 'radon-ui'
 

Vue.prototype.$http = axios
Vue.use(axios)
Vue.use(RadonInstall, {
  Modal: true,
  Notification: true,
  LoadingBar: true,
  Preview: true
})

Vue.use(ElementUI)
Vue.use(VueRouter);
const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
axios.get('http://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
  {
    path: '/te', component: function (resolve) {
    require(['./components/Hello.vue'], resolve);
  }
  },
  {
    path: '/tt', component: function (resolve) {
    require(['./components/test.vue'], resolve);
  }
  },
  {
    path: '/radom', component: function (resolve) {
    require(['./components/radom.vue'], resolve);
  }
  },
 
 
  { path: '/list', name: 'list', component: resolve => require(['./components/list.vue'], resolve) }
 
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

/* eslint-disable no-new */

