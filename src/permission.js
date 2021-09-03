import router from './router'
import Cookies from 'js-cookie'

router.beforeEach(async (to, from, next) => {
  const token = Cookies.get('token')
  if (token) {
    if (to.path === './login') {
      next({ path: '/' })
    } else {
      if (!store.state.authorized) {
        await store.dispatch('setAuthority')
      }
    }
  }
})
