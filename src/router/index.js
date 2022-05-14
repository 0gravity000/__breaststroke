import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyExperiment01 from '../components/MyExperiment01'
import MyExperiment02 from '../components/MyExperiment02'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/my-experiment-01',
    name: 'my-experiment-01',
    component: MyExperiment01
  },
  {
    path: '/my-experiment-02',
    name: 'my-experiment-02',
    component: MyExperiment02
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
