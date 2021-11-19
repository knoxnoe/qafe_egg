import { QuestionSchema } from './schema/index';

export default app => {

  const Question = app.model.define('question', QuestionSchema(app.Sequelize), {
    timestamps: false, // 去掉模型默认的createAt updateAt
    freezeTableName: true, // 使用自定义表名
  })

  return Question;
}