// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/baseController';
import ExportHome from '../../../app/controller/home';
import ExportTopics from '../../../app/controller/topics';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    home: ExportHome;
    topics: ExportTopics;
  }
}
