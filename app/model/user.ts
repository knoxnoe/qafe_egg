'use strict';
import { UserSchema } from './schema'

export default app => {

  const User = app.model.define('user', UserSchema(app.Sequelize), {
    timestamps: false, // 去掉模型默认的createAt updateAt
    freezeTableName: true, // 使用自定义表名
  });
  
  // 定义原子操作

  return User;
};