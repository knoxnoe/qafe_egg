

export default app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;
  const CcJj = app.model.define('cc_jj', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  })

  return CcJj;
}