import Vue from 'vue'
import Router from 'vue-router'

import { constantRoutes } from './routes'
Vue.use(Router)

export default new Router({
  routes: constantRoutes,
  scrollBehavior: () => ({ y: 0 })
})
