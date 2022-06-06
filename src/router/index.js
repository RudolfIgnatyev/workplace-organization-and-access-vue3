import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import RequestForRoomAccess from '../components/RequestForRoomAccess.vue'
import RequestForProvisionOfAW from '../components/RequestForProvisionOfAW.vue'
import RequestForEmployeeAccessToIR from '../components/RequestForEmployeeAccessToIR.vue'
import RequestForProvideEmployeeWithOfficeSupplies from '../components/RequestForProvideEmployeeWithOfficeSupplies.vue'
import RequestForApplicationForInclusionInOrder from '../components/RequestForApplicationForInclusionInOrder.vue'
import RequestForBriefings from '../components/RequestForBriefings'
import AuthorizeForm from '../components/AuthorizeForm.vue'
import EditAccount from '../components/EditAccount.vue'
import store from '@/store'

const routes = [
  {
    path: '/home-page',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/authorize-form',
    name: 'AuthorizeForm',
    component: AuthorizeForm
  },
  {
    path: '/edit-account',
    name: 'EditAccount',
    component: EditAccount
  },
  {
    path: '/request-for-room-access',
    name: 'RequestForRoomAccess',
    component: RequestForRoomAccess
  },
  {
    path: '/request-for-provision-of-aw',
    name: 'RequestForProvisionOfAW',
    component: RequestForProvisionOfAW
  },
  {
    path: '/request-for-employee-access-to-ir',
    name: 'RequestForEmployeeAccessToIR',
    component: RequestForEmployeeAccessToIR
  },
  {
    path: '/request-for-provide-employee-with-office-supplies',
    name: 'RequestForProvideEmployeeWithOfficeSupplies',
    component: RequestForProvideEmployeeWithOfficeSupplies
  },
  {
    path: '/request-for-application-for-inclusion-in-order',
    name: 'RequestForApplicationForInclusionInOrder',
    component: RequestForApplicationForInclusionInOrder
  },
  {
    path: '/request-for-briefings',
    name: 'RequestForBriefings',
    component: RequestForBriefings
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home-page'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'hash'
})

router.beforeEach((to) => {
  const authStatus = store.getters['employee/getAuthStatus']
  if (authStatus === 0 && to.name !== 'AuthorizeForm') {
    return { name: 'AuthorizeForm' }
  }
})

export default router
