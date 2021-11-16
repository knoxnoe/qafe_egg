export const UserSchema = (Sequelize) => {

  const { STRING, INTEGER, DATE } = Sequelize;

  return {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(30), allowNull: false, },
    age: { type: INTEGER, allowNull: false, },
    created_at:{ type:  DATE, allowNull: false, }, 
    updated_at: { type:  DATE, allowNull: false, },
  }
}

export const QuestionSchema = (Sequelize) => {
  const { STRING, INTEGER } = Sequelize;

  return {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(30),
    answer: STRING(30),
  }
}