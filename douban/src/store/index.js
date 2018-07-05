/*
 * @Author: jiaxinying 
 * @Date: 2018-07-05 11:55:31 
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-07-05 11:56:18
 */

import Vue from 'vue'
import Vuex from 'vuex'

import list from './modules/list'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    list
  }
})
