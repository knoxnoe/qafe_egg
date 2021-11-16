'use strict';
import { UserSchema } from './schema'

export default app => {

  const User = app.model.define('user', UserSchema(app.Sequelize));
  
  // 定义原子操作

  return User;
};