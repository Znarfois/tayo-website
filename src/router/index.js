import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/Home.vue')
const WhoWeAre = () => import('../views/WhoWeAre.vue')
const WWA_KidsForKids = () => import('../views/WWA_KidsForKids.vue')
const WWA_Habilin = () => import('../views/WWA_Habilin.vue')
const WWA_Retaso = () => import('../views/WWA_Retaso.vue')
const WWA_Kamalayan = () => import('../views/WWA_Kamalayan.vue')
const ContactUs = () => import('../views/ContactUs.vue')
const Portfolio = () => import('../views/Portfolio.vue')
const Services = () => import('../views/Services.vue')
const Projects = () => import('../views/Projects.vue')
const ProjectTemplate = () => import('../views/ProjectTemplate.vue')

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
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/projects/:subsidiary/:project_id',
    name: 'ProjectTemplate',
    component: ProjectTemplate,

  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  }
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
