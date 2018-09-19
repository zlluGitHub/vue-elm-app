import Vue from 'vue'
import VueRouter from 'vue-router'
import Evaluate from '../components/Evaluate'
import Order from '../components/Order'
import business from '../components/Business'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Order },
  { path: '/evaluate', component: Evaluate },
  { path: '/business', component: business }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
