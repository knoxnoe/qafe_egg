// app/controller/topics.js
import BaseController from './baseController';

// defining the rule of request parameters
const createRule = {};
const getRule = {
  id: 'string'
}

class TopicController extends BaseController {

  // post
  async create() {
    const ctx = this.ctx;
    // validate the `ctx.request.body` with the expected format
    // status = 422 exception will be thrown if not passing the parameter validation
    ctx.validate(createRule, ctx.request.body);
    // call service to create a topic
    //const id = await ctx.service.topics.create(ctx.request.body);
    // configure the response body and status code
    ctx.body = {
      topic_id: 12,
    };
    ctx.status = 201;
  }

  // get
  async index() {
    const ctx = this.ctx;
    // console.log(ctx)
    ctx.validate(getRule, ctx.query)
    //const id = 1

    //const res = await ctx.model.User.findByPk(id)
    const res1 = await ctx.model.LastOnes.findByPk(1)
    
    this.success({res1})
  }

  // update
  async update() {
    const { ctx } = this;
    const id = ctx.params.id;

    await ctx.service.topics.update(Object.assign({ id }, ctx.request.body));
    ctx.status = 204;
  }
}

export default TopicController;