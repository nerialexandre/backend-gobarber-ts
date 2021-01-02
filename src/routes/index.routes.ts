import { Router } from 'express';

export default (router: Router): void => {
  router.route('/').get((req, res) => {
    res.send('hello world');
  });
};
