// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/baseController';
import ExportTopics from '../../../app/controller/topics';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    topics: ExportTopics;
    user: ExportUser;
  }
}
