import { Service } from 'egg';

export default class User extends Service {
  
  public async create(user) {
    this.ctx.model.User.create(user)
  }
}