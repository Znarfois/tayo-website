import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import WhoWeAre from '../views/WhoWeAre.vue'
import WWA_KidsForKids from '../views/WWA_KidsForKids.vue'
import WWA_Habilin from '../views/WWA_Habilin.vue'
import WWA_Retaso from '../views/WWA_Retaso.vue'
import WWA_Kamalayan from '../views/WWA_Kamalayan.vue'
import Services from '../views/Services.vue'
import Smart from '../views/Template_Smart'

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
    path: '/whoweare/kidsforkids',
    name: 'WWA_KidsForKids',
    component: WWA_KidsForKids
  },
  {
    path: '/whoweare/retaso',
    name: 'WWA_Retaso',
    component: WWA_Retaso
  },
  {
    path: '/whoweare/kamalayan',
    name: 'WWA_Kamalayan',
    component: WWA_Kamalayan
  },
  {
    path: '/whoweare/habilin',
    name: 'WWA_Habilin',
    component: WWA_Habilin
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/projects/smart',
    name: 'Smart',
    component: Smart,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
