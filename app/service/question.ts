import { Service } from 'egg';

export default class Question extends Service {

  public async create(q) {
    return this.ctx.model.Question.create(q);
  }

  public async index(id) {
    if(id) {
      return this.ctx.model.Question.findByPk(id)
    }
    return this.ctx.model.Question.findAll()
  }

  public async commit({id, answer}) {
    console.log(id, answer)

    const flag = await this.ctx.model.Question.findByPk(id);

    if(!flag) return "不存在question id"

    const res = flag.answer.substring(1, flag.answer.length).split(',').every(i => answer.includes(i))

    return {flag: res}
  }
}