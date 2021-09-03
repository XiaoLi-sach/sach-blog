import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '/@/views/login/index.vue'
import Dashboard from '/@/views/dashboard/index.vue'
import NotFound from '/@/views/404.vue'

import Layout from '/@/layout/index.vue'
/*
 *
 * */

const contextRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    redirect: '/login',
    component: Login
  },
  // to children
  {
    path: '/dashboard',
    component: Layout,
    name: 'dashboard',
    children: [
      // 首页
      {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: { title: '首页' }
      }
    ]
  },
  // for 401 page
  // for 404 page
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: contextRoutes
})

export default router
