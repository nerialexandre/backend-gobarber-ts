import { hash } from 'bcryptjs';
import User from '../../models/User';
import UserRepository from '../../repositories/UserRepository';
import CreateUserTokenService from './password/CreateUserTokenService';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const userRepository = new UserRepository();
    const checkAvailability = await userRepository.findByEmail(email);

    if (checkAvailability) {
      throw new Error('Já existe usuario com esse email cadastrado');
    }

    const hashadPassword = await hash(password, 8);

    const user = await userRepository.create(name, email, hashadPassword);

    const userId = user.id;

    await CreateUserTokenService.execute({
      userId
    });

    return user;
  }
}

export default new CreateUserService();
