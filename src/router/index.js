// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Home from '../components/Home.vue'
// import Register from '../components/Registration.vue'
import ImpactForm from "../components/ImpactForm.vue";
import CsrEprForm from "../components/CsrEprForm.vue";
import Recycler from "../components/Recycler.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   component: Register
  // },
  {
    path: "/register-impact",
    name: "ImpactForm",
    component: ImpactForm,
  },
  {
    path: "/register-csr-epr",
    name: "CsrEprForm",
    component: CsrEprForm,
  },
  {
    path: "/register-recycler",
    name: "Recycler",
    component: Recycler,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Handle hash scrolling for sections on home page
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // Small delay to ensure content is rendered
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80 // Offset for fixed header
          })
        }, 100)
      })
    } else {
      return { top: 0 }
    }
  }
})

export default router

