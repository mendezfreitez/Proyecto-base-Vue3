import { createRouter, createWebHashHistory } from 'vue-router'
import View1 from '../views/view1.vue'
import View2 from '../views/view2.vue'
import View3 from '../views/view3.vue'
import View4 from '../views/view4.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: View1
  },
  {
    path: '/view2',
    name: 'view2',
    component: View2
  },
  {
    path: '/view3',
    name: 'view3',
    component: View3
  },
  {
    path: '/view4',
    name: 'view4',
    component: View4
  },
  {
    path: '/view5',
    name: 'view5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/view5.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
