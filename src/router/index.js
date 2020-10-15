// previously was
// import Router from 'vue-router'
import {
  createRouter,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      path: '/',
      component: () => import('@/views/TOC.vue')
    },
    {
      path: '/HelloWorld',
      component: () => import('@/views/HelloWorld.vue')
    }, {
      path: '/CompositionAPI',
      component: () => import('@/views/CompositionAPI.vue')
    },
  ],
})

export default router