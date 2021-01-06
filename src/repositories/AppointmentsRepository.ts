import { EntityRepository, Repository } from 'typeorm';

// models
import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
  // public async getAll(): Promise<Appointment[] | null> {
  //   const appointments = await this.find();

  //   return appointments;
  // }

  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentRepository;
