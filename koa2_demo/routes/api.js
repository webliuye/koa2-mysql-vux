const router = require('koa-router')()

router.prefix('/api')

const UserController = require('../controllers/user')

router.get('/', async (ctx, next) => {
  ctx.body = 'hello'
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.post('/register', UserController.create)

router.get('/login', UserController.login)

module.exports = router
