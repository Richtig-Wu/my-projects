import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import Top from '@/components/Top'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path:'/top',
      component:Top
    }
  ]
})
