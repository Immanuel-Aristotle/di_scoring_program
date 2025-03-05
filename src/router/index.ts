import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/Index.vue'
import nprogress from '@/utils/nprogress'
import menus from './menus'
import { useUserStore } from '@/stores/user'
// import supabase from '@/apis/supabase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      // How to secure other pages when not logged in.
      // Ref: https://medium.com/@zitko/structuring-a-vue-project-authentication-87032e5bfe16
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/onboarding/Signup.vue'),
      meta: {
        public: true,
        onlyWhenLoggedOut: true
      }
    },
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: menus
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/404',
      meta: {}
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   nprogress.start()
//   next()
// })

router.beforeEach(async (to, from, next) => {
  const isPublic = to.matched.some((record) => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(
    (record) => record.meta.onlyWhenLoggedOut
  )

  nprogress.start()

  // Move store initialization inside the guard
  const userStore = useUserStore()
  const user = userStore.user

  let isAuthenticated = true
  if (user === null) {
    isAuthenticated = false
  }

  if (!isPublic && !isAuthenticated) {
    return next('/login')
  }

  next()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
