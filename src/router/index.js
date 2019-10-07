import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Detail from '@/views/Beer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/beer/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
