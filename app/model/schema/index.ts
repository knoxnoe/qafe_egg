export const UserSchema = (Sequelize) => {

  const { STRING, INTEGER, DATE } = Sequelize;

  return {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  }
}

export const QuestionSchema = (Sequelize) => {

  const { STRING, INTEGER, DATE } = Sequelize;

  return {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true},
    type: STRING(30),
    title: STRING(255),
    answer: STRING(255),
    created_at: DATE,
    updated_at: DATE,
  }
}

export const RecordSchema = (Sequelize) => {
  
  const { INTEGER, DATE } = Sequelize;

  return {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uid: INTEGER,
    qid: INTEGER,
    created_at: DATE,
  }
}