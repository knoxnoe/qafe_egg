import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.resources('user', '/api/v1/user', controller.user)
  router.resources('question', '/api/v1/question', controller.question)
  router.post('/api/v1/question/commit', controller.question.commitAnswer)
  router.resources('record', '/api/v1/record', controller.record)

};
