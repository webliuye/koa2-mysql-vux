const UserModel = require('../modules/user')

class userController {
  static async create(ctx) {
    let req = ctx.request.body
    if (req.username && req.password && req.email) {
      ctx.response.status = 200
      try {
        const haveSameName = await UserModel.checkUserName(req.username)
        if (!haveSameName) {
          const ret = await UserModel.createUser(req)
          const data = await UserModel.getUser(ret.user_id)
          ctx.body = {
            code: 200,
            message: '注册成功',
            data
          }
        } else {
          ctx.body = {
            code: 414,
            message: '用户名已存在,请重新输入用户名'
          }
        }
      } catch (err) {
        ctx.body = {
          code: 413,
          message: '注册失败',
          data: err
        }
      }
    } else {
      ctx.body = {
        code: 416,
        message: '参数不全'
      }
    }
  }

  static async detail(ctx) {
    let req = ctx.request.body
    if (req.user_id) {
      ctx.response.status = 200
      try {
        const ret = await UserModel.getUser(req.user_id)

        ctx.body = {
          code: 200,
          message: '查询成功',
          data: ret
        }
      } catch (err) {
        ctx.body = {
          code: 412,
          message: '查询失败',
          data: err
        }
      }
    } else {
      ctx.body = {
        code: 416,
        message: '参数不全'
      }
    }
  }
  static async login(ctx) {
    let req = ctx.query
    ctx.response.status = 200
    if (req.username && req.password) {
      try {
        const ret = await UserModel.checkUserName(req.username)
        if (!ret || (ret && ret.password !== req.password)) {
          ctx.body = {
            code: 416,
            message: '用户名或密码错误'
          }
        } else {
          ctx.body = {
            code: 200,
            message: '查询成功',
            data: ret
          }
        }
      } catch (err) {
        ctx.body = {
          code: 412,
          message: '登录失败',
          data: err
        }
      }
    } else {
      ctx.body = {
        code: 416,
        message: '参数不全',
        data: ctx
      }
    }
  }
}
module.exports = userController
