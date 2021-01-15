import { Router } from 'express';
import AuthController from '../controllers/auth/index';

const controller = new AuthController();

export default (router: Router): void => {
  router.route('/auth').get(controller.index).post(controller.auth);
};
