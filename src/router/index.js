import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination',
      name: 'destination',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DestinationView.vue'),
    },
    {
      path: '/crew',
      name: 'crew',
      component: () => import('../views/CrewView.vue'),
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../views/TechnologyView.vue'),
    },
  ],
})

export default router
