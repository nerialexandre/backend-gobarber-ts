import { Router } from 'express';
import AuthMiddlewere from '../middlewares/auth';

export default (router: Router): void => {
  router.route('/').get(AuthMiddlewere, (req, res) => {
    res.send('Api GoBarber');
  });
};
