const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user_info', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'username'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'email'
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password'
    }
  })
}
