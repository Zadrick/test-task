import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Главная',
    component: ()=> import('@/views/Home.vue')
  },
  {
    path: '/app',
    name: 'Сайт',
    component: ()=> import('@/views/App.vue')
  },
  {
    path: '/requests',
    name: 'Заявки',
    component: ()=> import('@/views/Requests.vue')
  },
  {
    path: '/options',
    name: 'Настройки',
    component: ()=> import('@/views/Options.vue')
  },
  {
    path: '/users',
    name: 'Пользователи',
    component: ()=> import('@/views/Users.vue')
  },
  {
    path: '/users-groups',
    name: 'Группы пользователей',
    component: ()=> import('@/views/UsersGroups.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
