const jwt = require('jsonwebtoken')

const priCert = 'zidingyidetoken'

async function verifyToken(ctx, next) {
  const dataString = ctx.header.authorization
  try {
    const dataArr = dataString.split(' ')
    const token = dataArr[1]

    let playload = await jwt.verify(token, priCert)
    const { data } = playload
    if (data === 'createToken') {
      ctx.status = 200 //这里非常重要，只有设置了status，koa-router才识别请求正确继续进入路由
      await next()
    }
  } catch (error) {
    ctx.body = {
      error: {
        type: 'LOGIN_FAILED',
        message: '未知'
      }
    }
  }
}
module.exports = { verifyToken }
