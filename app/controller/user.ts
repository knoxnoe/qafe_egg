import BaseController from "./baseController";

const createRule = {
  name: 'string',
  age: 'integer'
}

class UserController extends BaseController {
  async create() {
    const ctx = this.ctx;

    ctx.validate(createRule, ctx.request.body)

    const date = new Date();
    
    const userData = {...ctx.request.body, created_at: date, updated_at:date}

    const user = await ctx.service.user.create(userData);

    this.success(user)
  }

  async index() {
    const { ctx } = this;
    
    const users = await ctx.service.user.index();

    this.success(users)
  }


  async show() {
    console.log(this.ctx.params)
    const { ctx } = this;
  
    const { id } = ctx.params;

    const user = await ctx.service.user.show(id)

    this.success(user)
  }
}

export default UserController