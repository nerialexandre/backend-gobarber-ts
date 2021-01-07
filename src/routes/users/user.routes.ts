import { Router } from 'express';
import UserController from '../../controllers/users/index';

export default (router: Router): void => {
  router.route('/users').get(UserController.index).post(UserController.create);
};
