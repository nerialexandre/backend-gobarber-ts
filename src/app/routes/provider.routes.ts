import { Router } from 'express';
import UserController from '../controllers/users/index';

const controller = new UserController();

export default (router: Router): void => {
  router.route('/providers').get(controller.index);

  router.route('/provider/:id').post(controller.create);

  router.route('/provider/:id/schedule').post(controller.create);
};
