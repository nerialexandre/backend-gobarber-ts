import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import AppointmentRepository from '../../repositories/AppointmentsRepository';
import CreateAppointmentService from '../../services/appointments/CreateAppointmentService';

class AppointmentController {
  public async index(req: Request, res: Response): Promise<Response> {
    const appointmentRepository = new AppointmentRepository();
    const appointments = await appointmentRepository.getAll();
    return res.json(appointments);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { user, provider, date } = req.body;

    const appointmentDate = parseISO(date);

    const result = await CreateAppointmentService.execute({
      date: appointmentDate,
      provider,
      user,
    });

    return res.status(200).json(result);
  }
}

export default AppointmentController;
