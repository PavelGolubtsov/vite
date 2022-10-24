import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // разделение кода на уровне маршрута
      // this generates a separate chunk (About.[hash].js) for this route
      // это генерирует отдельный кусок (About.[hash].js) для этого маршрута
      // which is lazy-loaded when the route is visited.
      // который лениво загружается при посещении маршрута.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/lessons',
      name: 'lessons',
      component: () => import('../views/LessonsView.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('../views/VuexView.vue')
    },
  ]
})

export default router
