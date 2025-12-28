import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Index from '@/views/Index.vue'
import NewsDetail from "@/views/NewsDetail.vue";
import TNews from "@/views/TNews.vue";
import CarNews from "@/views/CarNews.vue";
import FinanceNews from "@/views/FinanceNews.vue";
import FenleiNews from "@/views/FenleiNews.vue";
import EnvironmentalConsulting from "@/views/EnvironmentalConsulting.vue";
import EsportsConsulting from "@/views/EsportsConsulting.vue";
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/TNews',
    name: 'TNews',
    component: TNews
  },
  {
    path: '/CarNews',
    name: 'CarNews',
    component: CarNews
  },
  {
    path: '/FinanceNews',
    name: 'FinanceNews',
    component: FinanceNews
  },
  {
    path: '/FenleiNews',
    name: 'FenleiNews',
    component: FenleiNews
  },
  {
    path: '/EnvironmentalConsulting',
    name: 'EnvironmentalConsulting',
    component: EnvironmentalConsulting
  },
  {
    path: '/EsportsConsulting',
    name: 'EsportsConsulting',
    component: EsportsConsulting
  },
  {
    path: '/NewsDetail',
    name: 'NewsDetail',
    component: NewsDetail
  },
  {
    path:'/home',
    name:'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
