import { Service } from 'egg';

export default class User extends Service {
  
  public async create(user) {
    return this.ctx.model.User.create(user)
  }

  // public async index() {
  //   this.ctx.model.User.get()
  // }
  public async show(id) {
    const user = await this.ctx.service.user.find(id)
    console.log(user)
    if(!user) {
      this.ctx.throw(404, 'user not found')
    }
    return user
  }

  public async index() {
    return this.ctx.model.User.findAll()
  }

  public findById(id) {
    return this.ctx.model.User.findById(id)
  }


  async find(id) {
    return this.ctx.model.User.findById(id)
  }
}