import { RouteRecordRaw } from 'vue-router'

// type MenuDateType = RouterOptions['routes']['0']['children']

const menus : RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Home Page',
      icon: 'menu',
      showMenu: true
    },
  },
  {
    path: '/doc',
    name: 'doc',
    component: () => import('@/views/Documents.vue'),
    meta: {
      title: '文档',
      icon: 'document',
      showMenu: false
    },
  },
  {
    path: '/curd',
    name: '增删改查',
    meta: {
      title: '增删改查',
      icon: 'document',
      showMenu: true
    },
    // component: () => import('@/views/crud/Index.vue'),
    children: [
      {
        path: '/crud/contests',
        name: 'contestList',
        component: () => import('@/views/Contests/List.vue'),
        meta: {
          title: 'Contests',
          showMenu: true
        }
      },
      {
        path: '/crud/parent_criteria',
        name: 'parentCriteriaList',
        component: () => import('@/views/Criteria/Parent.vue'),
        meta: {
          title: 'Parent Criteria',
          showMenu: true
        }
      },
      {
        path: '/crud/child_criteria',
        name: 'childCriteriaList',
        component: () => import('@/views/Criteria/Children.vue'),
        meta: {
          title: 'Child Criteria',
          showMenu: true
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: '关于',
      icon: 'about',
      showMenu: false
    }
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      title: '用户中心',
      icon: 'location',
      showMenu: true
    },
    children: [
      {
        path: '/user/list',
        name: 'userList',
        component: () => import('@/views/user/List.vue'),
        meta: {
          title: '用户列表',
          showMenu: true
        }
      },
      {
        path: '/user/portrait',
        name: 'userPortrait',
        component: () => import('@/views/user/Portrait.vue'),
        meta: {
          title: '用户画像',
          icon: 'User',
          showMenu: true
        }
      }
    ]
  },
  {
    path: '/multi',
    name: 'multi',
    meta: {
      title: 'Multi',
      icon: 'DataAnalysis',
      showMenu: true
    },
    children: [
      {
        path: '/multi/scores',
        name: 'Scores',
        component: () => import('@/views/Scores/List.vue'),
        meta: {
          title: 'Scores',
          showMenu: true
        } 
        // children: [
        //   {
        //     path: '/multi/two/list',
        //     name: 'multiTwoList',
        //     component: () => import('@/views/multi/List.vue'),
        //     meta: {
        //       title: '三级菜单',
        //       showMenu: true
        //     }
        //   }
        // ]
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      title: '管理员',
      icon: 'Avatar',
      showMenu: true
    },
    children: [
      {
        path: '/admin/list',
        name: 'adminList',
        component: () => import('@/views/admin/List.vue'),
        meta: {
          title: '管理员列表',
          showMenu: true
        }
      }
    ]
  },
  {
    path: '/sys',
    name: 'sys',
    component: () => import('@/views/Sys.vue'),
    meta: {
      title: '系统设置',
      icon: 'setting',
      showMenu: true
    }
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404.vue')
  }
]
export default menus
