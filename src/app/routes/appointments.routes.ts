import { Router } from 'express';
import { query } from 'express-validator';
import AppointmentController from '../controllers/appointments/index';
import Custom from '../libs/customValidator';
import AuthMiddlewere from '../middlewares/auth';

const controller = new AppointmentController();

export default (router: Router): void => {
  router
    .route('/appointments')
    .get(
      AuthMiddlewere,
      [
        query('dateFrom')
          .optional({ checkFalsy: true })
          .custom(value => {
            return Custom.isDateOnly(value);
          })
          .withMessage(
            'O número da página deve ser um inteiro maior ou igual a 1'
          ),
        query('dateTo')
          .optional({ checkFalsy: true })
          .custom(value => {
            return Custom.isDateOnly(value);
          })
          .withMessage(
            'O número da página deve ser um inteiro maior ou igual a 1'
          )
      ],
      controller.getAll
    )
    .post(AuthMiddlewere, controller.create);

  router
    .route('/appointments/:providerId/schandule')
    .get(controller.getSchanduleAvailabelity);
};
