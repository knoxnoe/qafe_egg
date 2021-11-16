// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportQuestion from '../../../app/model/question';
import ExportRecord from '../../../app/model/record';
import ExportUser from '../../../app/model/user';
import ExportSchemaIndex from '../../../app/model/schema/index';

declare module 'egg' {
  interface IModel {
    Question: ReturnType<typeof ExportQuestion>;
    Record: ReturnType<typeof ExportRecord>;
    User: ReturnType<typeof ExportUser>;
    Schema: {
      Index: ReturnType<typeof ExportSchemaIndex>;
    }
  }
}
