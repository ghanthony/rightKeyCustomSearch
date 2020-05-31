import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/components/menus'
import search from '@/components/search'
import help from '@/components/help'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: menus,
      children: [
        {
          path: '',
          component: search
        }, {
          path: '/help',
          component: help
        }, {
          path: '/about',
          component: about
        }]
    }
  ]
})
