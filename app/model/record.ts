import { RecordSchema } from './schema/index';

export default app => {
  const Record = app.model.define('record', RecordSchema(app.Sequelize))
  
  return Record;
}