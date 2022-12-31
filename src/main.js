//ROUTER Version 
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'

//Components:
import Gurmann from '../src/views/gurmannAdventures.vue'
import WhereToEatIn from '../src/views/whereToEatIn.vue'

//Routes:
const routes = [
    {
        path:'/gurmann', component: Gurmann
    },
    {
        path:'/wheretoeatin', component: WhereToEatIn,
    }
]

//Routes Objects:
const router = createRouter({
    history: createMemoryHistory(),
    routes
})

//Vue Instance
const app = createApp(App)

app.use(router)
app.mount('#app')




//Default Version
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// createApp(App).use(router).mount('#app')