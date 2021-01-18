import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import AppointmentRepository from '../../repositories/AppointmentsRepository';
import CreateAppointmentService from '../../services/appointments/CreateAppointmentService';
import ListAvailableTimeByProviders from '../../services/appointments/ListAvailableTimeByProviders';

class AppointmentController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      validationResult(req).throw();
      const appointmentRepository = new AppointmentRepository();

      const queryData = await matchedData(req, { locations: ['query'] });

      console.log(queryData);

      const appointments = await appointmentRepository.getAll();
      return res.status(200).json(appointments);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { provider, date } = req.body;

    const userId = req.user.id;

    const appointmentDate = parseISO(date);

    const result = await CreateAppointmentService.execute({
      date: appointmentDate,
      providerId: provider,
      userId
    });

    return res.status(200).json(result);
  }

  public async getSchanduleAvailabelity(
    req: Request,
    res: Response
  ): Promise<Response> {
    const { month, year } = req.body;

    const { providerId } = req.params;

    const result = await ListAvailableTimeByProviders.execute({
      providerId,
      month,
      year
    });

    return res.status(200).json(result);
  }
}

export default AppointmentController;
