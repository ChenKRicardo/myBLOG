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
    path: '/columnList',
    name: 'columnList',
    component: () => import(`../pages/ColumnList/index.vue`),
    children: [
      {
        path: 'columnDeatil/:id',
        name: 'columnDeatil',
        component: () => import(`../pages/ColumnList/ColumnDetail/index.vue`)
      }
    ]
  }
]
