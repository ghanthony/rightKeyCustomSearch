import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/components/menus'
import search from '@/components/search'
import help from '@/components/help'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: menus,
      children: [
        {
          path: '/search',
          component: search
        }, {
          path: '/help',
          component: help
        }]
    }
  ]
})
