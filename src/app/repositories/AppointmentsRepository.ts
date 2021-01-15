import { EntityRepository, Repository, getRepository } from 'typeorm';

// models
import Appointment from '../models/Appointment';

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

  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date }
    });

    return findAppointment || null;
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
