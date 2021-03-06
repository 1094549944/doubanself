// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/reset'
import 'styles/border'
import 'styles/iconfont'
import 'babel-polyfill'
import { Button, Row, Col, Search, Swipe, SwipeItem, Lazyload, List } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload).use(List)
Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
