import { startOfHour } from 'date-fns';
import Appointment from '../../models/Appointment';
import AppointmentRepository from '../../repositories/AppointmentsRepository';

interface Request {
  date: Date;
  provider: string;
}
class CreateAppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor(appointmentRepository: AppointmentRepository) {
    this.appointmentRepository = appointmentRepository;
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(date);
    const checkAvailability = this.appointmentRepository.findByDate(
      appointmentDate,
    );

    if (checkAvailability) {
      throw new Error('Horario Indisponivel');
    }

    const appointment = this.appointmentRepository.create({
      provider,
      date: appointmentDate,
    });
    return appointment;
  }
}

export default CreateAppointmentService;
