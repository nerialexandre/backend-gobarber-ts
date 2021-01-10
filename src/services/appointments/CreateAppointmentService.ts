import { startOfHour } from 'date-fns';
import Appointment from '../../models/Appointment';
import AppointmentRepository from '../../repositories/AppointmentsRepository';

interface Request {
  date: Date;
  provider: string;
  user: string;
}

class CreateAppointmentService {
  public async execute({
    date,
    provider,
    user
  }: Request): Promise<Appointment> {
    const appointmentRepository = new AppointmentRepository();

    const appointmentDate = startOfHour(date);
    const checkAvailability = await appointmentRepository.findByDate(
      appointmentDate
    );

    if (checkAvailability) {
      throw new Error('H001');
    }

    const appointment = await appointmentRepository.create(
      provider,
      user,
      date
    );

    return appointment;
  }
}

export default new CreateAppointmentService();
