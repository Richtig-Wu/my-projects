import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Index from '@/pages/Index'
// 本院动态
import Vip from '@/pages/Vip'
// 健康资讯
import Sort from '@/pages/Sort'
// 医院公告
import Cart from '@/pages/Cart'
// 在线查询
import Me from '@/pages/Me'
// todolist
import Todo from '@/pages/todulis'

``
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path:'/vip', component:Vip },
    { path:'/sort', component:Sort},
    { path:'/cart', component:Cart},
    { path:'/me', component:Me},
    { path:'/todo',component:Todo}
  ]
})
