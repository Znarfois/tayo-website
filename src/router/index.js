import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WhoWeAre from '../views/WhoWeAre.vue'
import KidsForKids from '../views/KidsForKids.vue'
import ContactUs from '../views/ContactUs.vue'

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
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
