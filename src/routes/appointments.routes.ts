import { Router } from 'express';
import AppointmentController from '../controllers/appointments/index';

export default (router: Router): void => {
  router
    .route('/appointments')
    .get(AppointmentController.index)
    .post(AppointmentController.create);
};
