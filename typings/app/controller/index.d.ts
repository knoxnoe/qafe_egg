// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/baseController';
import ExportQuestion from '../../../app/controller/question';
import ExportRecord from '../../../app/controller/record';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    question: ExportQuestion;
    record: ExportRecord;
    user: ExportUser;
  }
}
