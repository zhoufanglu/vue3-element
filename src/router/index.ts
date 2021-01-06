import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import element from "@v/element.vue"
const Home = ()=> import('@v/Home.vue')
//const Demo = ()=> import('@v/demo.vue')
const Demo2 = ()=> import('@v/demo2.vue')
const Repositories = ()=> import('@v/Repositories.vue')
const lifeCycle = ()=> import('@v/lifeCycle.vue')
const watch = ()=> import('@v/watch.vue')
const computed = ()=> import('@v/computed.vue')
const countTest = ()=> import('@v/countTest.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/element',
    name: 'element',
    component: element
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
/*  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },*/
  {
    path: '/demo2',
    name: 'ref,reactive',
    component: Demo2
  },
  {
    path: '/Repositories',
    name: 'Repositories',
    component: Repositories
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: lifeCycle
  },
  {
    path: '/watch',
    name: 'watch',
    component: watch
  },
  {
    path: '/computed',
    name: 'computed',
    component: computed
  },
  {
    path: '/countTest',
    name: 'countTest',
    component: countTest
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
