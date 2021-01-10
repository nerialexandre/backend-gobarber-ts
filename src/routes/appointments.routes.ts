import { Router } from 'express';
import AppointmentController from '../controllers/appointments/index';

const controller = new AppointmentController();

export default (router: Router): void => {
  router.route('/appointments').get(controller.index).post(controller.create);
};
