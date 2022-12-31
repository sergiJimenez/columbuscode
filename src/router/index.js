// import { createRouter, createWebHashHistory } from 'vue-router'

import FalconProject from '../views/falconProject.vue'
import GurmannAdventures from '../views/gurmannAdventures.vue'
import WhereToEatIn from '../views/whereToEatIn.vue'

const routes = [
  {
    path: '/falconProject',
    name: 'falconProject',
    component: FalconProject
  },
  {
    path: '/gurmannAdventures',
    name: 'gurmannAdventures',
    component: GurmannAdventures
  },
  {
    path: '/whereToEatIn',
    name: 'whereToEatIn',
    component: WhereToEatIn
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router