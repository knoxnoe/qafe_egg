import { QuestionSchema } from './schema'

export default app => {

  const ChoiceQuestion = app.model.define('choicequestion', QuestionSchema(app.Sequelize))

  return ChoiceQuestion;
}