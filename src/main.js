//ROUTER Version 
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

//Routes:
const routes = [
    {
        path:'/falcon',
        name: 'falconProject',
        component: () => import('../src/views/falconProject.vue')
    },
    {
        path:'/gurmann',
        name: 'gurmann',
        component: () => import('../src/views/gurmannAdventures.vue')
    },
    {
        path:'/wheretoeatin',
        name: "wheretoeatin",
        component: () => import('../src/views/whereToEatIn.vue')
    }
]

//Routes Objects:
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//Vue Instance
const app = createApp(App)

app.use(router)
app.mount('#app')