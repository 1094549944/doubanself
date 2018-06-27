/*
 * @Author: jiaxinying
 * @Date: 2018-06-22 17:35:00
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2018-06-27 17:36:04
 */

'use strict'
import Error403 from 'pages/error403'
import Error404 from 'pages/error404'
import Error500 from 'pages/error500'
import IndexHome from 'pages/index'

import Search from 'pages/search'

export const constantRoutes = [{
  path: '/',
  redirect: '/IndexHome',
  component: IndexHome
}, {
  path: '/403',
  name: 'Error403',
  component: Error403
}, {
  path: '/404',
  name: 'Error404',
  component: Error404
}, {
  path: '/500',
  name: 'Error500',
  component: Error500
},
{
  path: '/IndexHome',
  name: 'IndexHome',
  component: IndexHome
}, {
  path: '/Search',
  name: 'Search',
  component: Search
}, {
  path: '*',
  redirect: '/404',
  component: Error403
}]
