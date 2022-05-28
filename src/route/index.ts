import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useUserStroe } from '@/stroe/user'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStroe()
  const user = userStore.user.islogin

  if (to.meta.requireLogin && !user) {
    next('/login')
  } else if (to.path === '/login' && user) {
    next('/home')
  } else {
    next()
  }
})
export default router
