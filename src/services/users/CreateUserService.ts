import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';
import UserRepository from '../../repositories/UserRepository';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const checkAvailability = await userRepository.findByEmail(email);

    if (checkAvailability) {
      throw new Error('Já existe usuario com esse email cadastrado');
    }

    const hashadPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashadPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default new CreateUserService();
