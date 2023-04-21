import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '身份证查询',
      component: HomeView
    },
    {
      path: '/bailing',
      name: '新闻',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/bailing.vue')
    },
    {
      path: '/video',
      name: '天气查询',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/video.vue')
    },
    {
      path: '/study',
      name: '二维码生成',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/study.vue')
    },
    {
  path: '/diantai',
      name: 'B站解析',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/diantai.vue')
},
    {
      path: '/newsvalue',
      name: 'newsvalue',

      component: () => import('../views/newsvalue.vue')
    }
  ]
})

export default router
