export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import(`../pages/Home/index.vue`),
    name: 'home'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(`../pages/Register/index.vue`)
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(`../pages/Login/index.vue`)
  },
  {
    path: '/columnDetail/:id',
    name: 'columnDetail',
    component: () => import(`../pages/Column/ColumnDetail/index.vue`)
  },
  {
    path: '/createArticle',
    name: 'createArticle',
    component: () => import(`../pages/CreateArticle/index.vue`),
    meta: { requireLogin: true }
  }
]
