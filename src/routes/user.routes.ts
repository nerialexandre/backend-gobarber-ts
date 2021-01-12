import { Router } from 'express';
import UserController from '../controllers/users/index';

const controller = new UserController();

export default (router: Router): void => {
  router.route('/users').get(controller.index).post(controller.create);

  router.route('/recoverypass').post(controller.recoveryPass);

  router.route('/newpass').post(controller.registerNewPassword);
};
