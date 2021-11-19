import { QuestionSchema } from './schema/index';

export default app => {

  const Question = app.model.define('question', QuestionSchema(app.Sequelize), {
    timestamps: false,
    freezeTableName: true,
  })

  return Question;
}