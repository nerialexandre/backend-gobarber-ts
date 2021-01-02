import { startOfHour, parseISO } from 'date-fns';
import { Request, Response } from 'express';
import AppointmentRepository from '../../repositories/AppointmentsRepository';
import CreateAppointmentService from '../../services/appointments/CreateAppointmentService';

const appointmentRepository = new AppointmentRepository();
const createAppointmentService = new CreateAppointmentService(
  appointmentRepository,
);

class AppointmentController {
  public async index(req: Request, res: Response) {
    const appointments = appointmentRepository.getAll();
    return res.json(appointments);
  }

  public async create(req: Request, res: Response) {
    try {
      const { provider, date } = req.body;

      const appointmentDate = parseISO(date);

      const result = createAppointmentService.execute({
        provider,
        date: appointmentDate,
      });
      // const parsedDate = startOfHour(appointmentDate);
      // const checkAvailability = appointmentRepository.findByDate(parsedDate);

      // if (checkAvailability) {
      //   return res.status(500).json({ msg: 'horio indisponivel' });
      // }

      // const appointment = appointmentRepository.create({
      //   provider,
      //   date: parsedDate,
      // });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default new AppointmentController();
