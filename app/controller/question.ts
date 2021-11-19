import BaseController from "./baseController";
import { addDate } from '../utils/index';

const createRule = {
  type:'string',
  title: 'string',
  answer: 'string',
  op1:'string',
  op2: 'string',
  op3: 'string',
  op4: 'string',
}

class QuestionController extends BaseController {


  async create() {
    const { ctx } = this;

    ctx.validate(createRule, ctx.request.body);

    const questionData = { ...ctx.request.body, ...addDate()};
    
    const question = await ctx.service.question.create(questionData);

    this.success(question);
  }

  async index() {
    const { ctx } = this;
    
    const questions = await ctx.service.question.index();
    // console.log(questions)
    this.success(questions);
  }
}

export default QuestionController;