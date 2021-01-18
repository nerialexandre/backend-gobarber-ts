import { EntityRepository, Repository, getRepository, Between } from 'typeorm';

// models
import Appointment from '../models/Appointment';

interface findByDate {
  date: Date;
  providerId: string;
}

interface IfindDaysWithScheduleAvailable {
  startDate: Date;
  endDate: Date;
  providerId: string;
}

@EntityRepository(Appointment)
class AppointmentRepository {
  private ormRepository: Repository<Appointment>;

  constructor() {
    this.ormRepository = getRepository(Appointment);
  }

  public async getAll(): Promise<Appointment[] | null> {
    const appointments = await this.ormRepository.find();
    return appointments;
  }

  public async findByDate(data: findByDate): Promise<Appointment | null> {
    const { date, providerId } = data;
    const findAppointment = await this.ormRepository.findOne({
      where: {
        date,
        providerId
      }
    });

    return findAppointment || null;
  }

  public async findDaysWithScheduleAvailable(
    data: IfindDaysWithScheduleAvailable
  ): Promise<Appointment[]> {
    const { startDate, endDate, providerId } = data;
    const findAppointment = await this.ormRepository.find({
      where: {
        providerId,
        date: Between(startDate, endDate)
      }
    });

    return findAppointment;
  }

  public async create(
    providerId: string,
    userId: string,
    date: Date
  ): Promise<Appointment> {
    const appointment = this.ormRepository.create({
      providerId,
      userId,
      date
    });

    if (!appointment) {
      throw new Error('A001');
    }

    await this.ormRepository.save(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
