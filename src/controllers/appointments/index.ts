import { parseISO } from 'date-fns';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import AppointmentRepository from '../../repositories/AppointmentsRepository';
import CreateAppointmentService from '../../services/appointments/CreateAppointmentService';

class AppointmentController {
  public async index(req: Request, res: Response) {
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const appointments = await appointmentRepository.find();
    return res.json(appointments);
  }

  public async create(req: Request, res: Response) {
    try {
      const { provider, date } = req.body;

      const appointmentDate = parseISO(date);

      const result = await CreateAppointmentService.execute({
        provider,
        date: appointmentDate,
      });

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default new AppointmentController();
