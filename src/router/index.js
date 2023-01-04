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
      component: () => import('../views/links/falconProject.vue')
    },
    {
      path: '/gurmann',
      component: () => import('../views/links/gurmannAdventures.vue')
    },
    {
      path: '/whereToEatIn',
      component: () => import('../views/links/whereToEatIn.vue')
    },
  ]
})

export default router