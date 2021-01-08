import { Router } from 'express';
import AuthController from '../controllers/auth/index';

export default (router: Router): void => {
  router.route('/auth').get(AuthController.index).post(AuthController.auth);
};
