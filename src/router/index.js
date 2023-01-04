import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes : [
    {
        path: '/',
        component: () => import('../views/homeVue.vue')
    },
    {
      path: '/falcon',
      component: () => import('../views/falconProject.vue')
    },
    {
      path: '/gurmann',
      component: () => import('../views/gurmannAdventures.vue')
    },
    {
      path: '/whereToEatIn',
      component: () => import('../views/whereToEatIn.vue')
    },
  ]
})

export default router