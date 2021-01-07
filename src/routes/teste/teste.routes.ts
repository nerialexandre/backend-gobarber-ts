import { Router } from 'express';

export default (router: Router): void => {
  router.route('/teste').get((req, res) => {
    res.send('teste');
  });
};
