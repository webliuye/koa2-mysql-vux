const db = require('../config/db') // 引入配置文件
const Sequelize = db.sequelize
const User = Sequelize.import('../schema/user') // 引入文章数据表模型文件
User.sync({ force: false }) // 自动创建表 (加force:true, 会先删掉表后再建表)

class UserModel {
  static async createUser(data) {
    return await User.create(data)
  }
  static async getUser(id) {
    return await User.findOne({
      where: { user_id: id }
    })
  }
  static async checkUserName(username) {
    const data = await User.findOne({
      where: { username }
    })
    return data || null
  }
}

module.exports = UserModel
