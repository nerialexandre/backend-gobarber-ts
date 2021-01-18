import { startOfHour, isBefore } from 'date-fns';
import Appointment from '../../models/Appointment';
import AppointmentRepository from '../../repositories/AppointmentsRepository';
import UserRepository from '../../repositories/UserRepository';

interface Request {
  date: Date;
  providerId: string;
  userId: string;
}

class CreateAppointmentService {
  public async execute({
    date,
    providerId,
    userId
  }: Request): Promise<Appointment> {
    const appointmentRepository = new AppointmentRepository();
    const userRepository = new UserRepository();

    console.log('teste');

    if (providerId === userId) {
      throw new Error('A005');
    }

    const appointmentDate = startOfHour(date);

    if (isBefore(date, new Date())) {
      throw new Error('horario já passou');
    }

    const provider = await userRepository.findOneProvider(providerId);

    if (!provider) {
      throw new Error('P002');
    }

    const checkAvailability = await appointmentRepository.findByDate({
      date: appointmentDate,
      providerId: provider.id
    });

    if (checkAvailability) {
      throw new Error('H001');
    }

    const appointment = await appointmentRepository.create(
      provider.id,
      userId,
      date
    );

    return appointment;
  }
}

export default new CreateAppointmentService();
