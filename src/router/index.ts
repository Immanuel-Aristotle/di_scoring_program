import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/Index.vue'
import nprogress from '@/utils/nprogress'
import menus from './menus'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue')
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
import supabase from '@/apis/supabase';

router.beforeEach(async (to, from, next) => {
  nprogress.start();

  const {
    data: { user }, error
  } = await supabase.auth.getUser();

  let isAuthenticated = true;
  if (user == null) {
    isAuthenticated = false;
  }

  if (
    // make sure the user is authenticated
    !isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return next({ name: 'Login' });
  }

  // Proceed with the navigation after the check
  next();
});


router.afterEach(() => {
  nprogress.done()
})

export default router
