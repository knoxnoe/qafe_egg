import { RecordSchema } from './schema/index';

export default app => {
  const Record = app.model.define('record', RecordSchema(app.Sequelize), {
    timestamps: false, // 去掉模型默认的createAt updateAt
    freezeTableName: true, // 使用自定义表名
  })
  
  return Record;
}