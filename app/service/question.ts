import { Service } from 'egg';

export default class Question extends Service {

  public async create(q) {
    return this.ctx.model.Question.create(q);
  }

  public async index() {
    const res = await this.ctx.model.Question.findAll()
    console.log(res)
    return res;
  }
}