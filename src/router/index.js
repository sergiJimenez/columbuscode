import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import gestionExpediente from '../views/GestionExpediente.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/expediente/gestion',
            component: gestionExpediente
        }
    ]
})

export default router