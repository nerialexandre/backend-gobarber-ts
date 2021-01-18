import {
  parseISO,
  format,
  startOfMonth,
  endOfMonth,
  getDaysInMonth,
  getDate
} from 'date-fns';
import AppointmentRepository from '../../repositories/AppointmentsRepository';

interface IRequest {
  providerId: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  availability: boolean;
  year: number;
}>;

class ListAvailableTimeByProviders {
  public async execute({
    providerId,
    month,
    year
  }: IRequest): Promise<IResponse> {
    const appointmentRepository = new AppointmentRepository();
    // const userRepository = new UserRepository();

    // const teste = format(parseISO('2021-02-01'), 'MM');
    // console.log(Number(teste));

    // days with at least one schedule available
    const startDate = startOfMonth(
      parseISO(format(new Date(year, month - 1), 'yyyyMMdd'))
    );

    const endDate = endOfMonth(
      parseISO(format(new Date(year, month - 1), 'yyyyMMdd'))
    );

    const appointments = await appointmentRepository.findDaysWithScheduleAvailable(
      {
        providerId,
        startDate,
        endDate
      }
    );

    const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));

    const eachDaysArray = Array.from(
      {
        length: numberOfDaysInMonth
      },
      (_, index) => index + 1
    );

    const availability = await eachDaysArray.map(day => {
      const apppointmentsInDay = appointments.filter(appointment => {
        return getDate(appointment.date) === day;
      });

      if (apppointmentsInDay.length < 10) {
        return {
          day,
          month,
          year,
          availability: true,
          providerId,
          availableTimes: 10 - apppointmentsInDay.length
        };
      }
      return {
        day,
        month,
        year,
        availability: false,
        providerId,
        availableTimes: 10 - apppointmentsInDay.length
      };
    });

    return availability;
  }
}

export default new ListAvailableTimeByProviders();
