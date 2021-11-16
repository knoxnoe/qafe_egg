// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCcJj from '../../../app/model/cc_jj';
import ExportChoiceQuestion from '../../../app/model/choice_question';
import ExportLastOnes from '../../../app/model/last_ones';
import ExportUser from '../../../app/model/user';
import ExportSchemaIndex from '../../../app/model/schema/index';

declare module 'egg' {
  interface IModel {
    CcJj: ReturnType<typeof ExportCcJj>;
    ChoiceQuestion: ReturnType<typeof ExportChoiceQuestion>;
    LastOnes: ReturnType<typeof ExportLastOnes>;
    User: ReturnType<typeof ExportUser>;
    Schema: {
      Index: ReturnType<typeof ExportSchemaIndex>;
    }
  }
}
