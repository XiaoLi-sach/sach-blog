import router from './router'

router.beforeEach(async (to, from, next) => {
  const token = Cookies.get('token')
  if (token) {
    if (to.path === './login') {
      next({ path: '/' })
    }
  }
})
