import { createRouter, createWebHashHistory } from 'vue-router'
import Productos from '../views/view1.vue'
import Ventas from '../views/view2.vue'
import Clientes from '../views/view3.vue'
import Repartidores from '../views/view4.vue'
import Login from '../layouts/login.vue'
import MainLayout from '../layouts/main.vue'

const routes = [
  {
    path: '/main',
    name: '',
    component: MainLayout,
    children: [
      {
        path: '/productos',
        name: '',
        component: Productos,
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
  },
  {
    path: '/login',
    name: '',
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  
  if(to.path !== '/login' && !localStorage.getItem('token')) {
    next({path:'/login'});
    alert("No estas logueado!");
  }
  else if(to.path === '/login' && localStorage.getItem('token')) {
    next({path: from.path});
  }
  else next();
})

export default router
