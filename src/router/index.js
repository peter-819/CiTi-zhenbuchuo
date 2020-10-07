import Vue from 'vue'
import Router from 'vue-router'
import ZhenBuChuo from '@/components/ZhenBuChuo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ZhenBuChuo',
      component: ZhenBuChuo
    }
  ]
})
