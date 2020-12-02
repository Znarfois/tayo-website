import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WhoWeAre from '../views/WhoWeAre.vue'
import KidsForKids from '../views/KidsForKids.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'WhoWeAre',
    component: WhoWeAre
  },
  {
    path: '/projects/kidsforkids',
    name: 'KidsForKids',
    component: KidsForKids
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
