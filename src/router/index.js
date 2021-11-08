import { createRouter, createWebHashHistory } from 'vue-router'
import Productos from '../views/view1.vue'
import Ventas from '../views/view2.vue'
import Clientes from '../views/view3.vue'
import Repartidores from '../views/view4.vue'

const routes = [
  {
    path: '/',
    name: '',
    component: Productos
  },
  {
    path: '/ventas',
    name: 'view2',
    component: Ventas
  },
  {
    path: '/clientes',
    name: 'view3',
    component: Clientes
  },
  {
    path: '/repartidores',
    name: 'view4',
    component: Repartidores
  },
  {
    path: '/reportes',
    name: 'view5',
    component: () => import('../views/view5.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
