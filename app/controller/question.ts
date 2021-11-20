import BaseController from "./baseController";
import { addDate } from '../utils/index';

const createRule = {
  type: {
    type: 'enum',
    values: ['multi', 'single'],
  },
  title: 'string',
  answer: 'string',
  op1:'string',
  op2: 'string',
  op3: 'string',
  op4: 'string',
}

const commitRule = {
  id: 'number',
  answer: 'array'
}



class QuestionController extends BaseController {


  async create() {
    const { ctx } = this;

    ctx.validate(createRule, ctx.request.body);
    const questionData = { ...ctx.request.body, ...addDate()};
    const question = await ctx.service.question.create(questionData);

    if(question) {
      this.success(question);
    }
    
  }

  async index() {
    const { ctx } = this;

    const { id } = ctx.request.query;

    const questions = await ctx.service.question.index(id);

    /**
     * {
     *  type: 'QuestionType (multi' | 'single')
     *  optional: ['', '', '', '']
     *  title: string
     * }
     */

    const res = Array.isArray(questions)
                ? questions.reduce((r, i) => [...r, {type: i.type, title: i.title, optional: [i.op1, i.op2, i.op3, i.op4]}], [])
                : this.singleRes(questions);

    if(res) {
      this.success(res);
    }
    
  }

  async commitAnswer() {
    const { ctx } = this;

    ctx.validate(commitRule, ctx.request.body);
    
    const res = await ctx.service.question.commit({...ctx.request.body})

    if(res) {
      this.success(res);
    }
  }

  singleRes(q) {
    const {id, type, title,  op1, op2, op3, op4} = q;
    return {id, type, title, optional: [op1, op2, op3, op4]}
  }
  
}

export default QuestionController;