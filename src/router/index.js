import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Index from '@/pages/Index'
// 会员杂锦
import Vip from '@/pages/Vip'
// 分类
import Sort from '@/pages/Sort'
// 购物车
import Cart from '@/pages/Cart'
// 我的
import Me from '@/pages/Me'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Index },
    { path:'/vip', component:Vip },
    { path:'/sort', component:Sort},
    { path:'/cart', component:Cart},
    { path:'/me', component:Me}
  ]
})
