import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import connect from '../views/connect.vue'


const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/connect',
      name: 'connect',
      component: connect
    }
  ]
})

export default router
