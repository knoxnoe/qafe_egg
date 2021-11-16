export default app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;
  const LastOne = app.model.define('last_ones', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  })

  return LastOne;
}