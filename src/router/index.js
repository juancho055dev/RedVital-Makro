import { createRouter, createWebHistory } from 'vue-router'
import { useUiStore } from '../store/ui'
import Home from '../views/Home.vue'
import Login from '../components/Logins/Login.vue'
import Sign_In from '../components/Logins/SignIn.vue'
import { useStoreAuth } from '../Firebase/auth'
import AccountView from '../views/AccountView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import CheckoutMobileView from '../views/Checkout/CheckoutMobileView.vue'
import LoginSingupView from '../views/Login&SingupView.vue'
import CheckoutPayment from '../views/Checkout/CheckoutPayment.vue'
import Dashboard from '../views/Dashboard/Dashboard.vue'
import Welcome from '../views/Welcome.vue'


// Definir las rutas
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  
  { path: '/home',
     component: Home,
     children: [
      {
        path:'',
        name: 'Dashboard',
        component: Dashboard
      }
     ]
     },
  
  {
    path: '/welcome',
    component: Welcome,
  },
  {  
    path:'/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: Sign_In
  },

  {
    path: '/Account',
    component:AccountView,
    meta:{requiresAuth:true}
  },
  {
    path:'/Checkout',
    component:CheckoutMobileView,
    children:[
          {
            path:'Payments',
            component:CheckoutPayment
        },
        {
          path:'',
          component: () => import('../views/Checkout/TempShipping.vue')
        }
      ]
  },
  {
    path:'/Ofertas',
    name: 'Ofertas',
    component: () => import('../views/Favoritos/favoritos.vue'),
  },
  {
    path:'/Accounts',
    component:LoginSingupView,
  },

  {
    path: '/items/:id',
    name: 'ItemDetalle',
    component: () => import('../views/ItemsDetails/ItemsDetails.vue'),
    props:true
  },
  {
    path:'/:catchAll(.*)*',name:'NotFound' ,component:NotFoundView,
  }
]

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 🌈 View Transition al cambiar de ruta
router.beforeEach((to, from, next) => {
  if (!document.startViewTransition) {
    next()
    return
  }

  // Iniciar la transición nativa del navegador
  document.startViewTransition(() => {
    next()
  })
})

router.beforeEach((to, from, next) => {
  const ui = useUiStore()
  ui.showLoader()  // 🔥 Activa el loader
  next()
})

router.beforeEach((to, from, next) => {
  const auth = useStoreAuth()

  if (to.meta.requiresAuth && !auth.user && !auth.isGuest) {
    next("/Login")
  } else {
    next()
  }
})

router.afterEach(() => {
  const ui = useUiStore()
  setTimeout(() => {
    ui.hideLoader()  // 🔥 Desactiva el loader
  }, 500) // le damos medio segundo de gracia para que se vea más suave
})





export default router