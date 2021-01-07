import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
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
    user,
  }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentRepository);
    const appointmentDate = startOfHour(date);
    const checkAvailability = await appointmentRepository.findByDate(
      appointmentDate,
    );

    if (checkAvailability) {
      throw new Error('Horario Indisponivel');
    }

    const appointment = appointmentRepository.create({
      providerId: provider,
      userId: user,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default new CreateAppointmentService();
