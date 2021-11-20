import BaseController from "./baseController";
import { addDate } from '../utils/index';

const createRule = {
  name: 'string',
  age: 'integer'
}

class UserController extends BaseController {

  // post
  async create() {
    const ctx = this.ctx;

    ctx.validate(createRule, ctx.request.body)

    const userData = {...ctx.request.body, ...addDate()}

    const user = await ctx.service.user.create(userData);

    this.success(user)
  }

  // get
  async index() {
    const { ctx } = this;

    const { id } = ctx.request.query;
    
    const users = await ctx.service.user.index(id);

    this.success(users)
  }


}

export default UserController