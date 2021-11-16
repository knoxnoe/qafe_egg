import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.resources('topics', '/api/v2/topics', controller.topics)


  router.resources('user', '/api/v1/user', controller.user)
};
