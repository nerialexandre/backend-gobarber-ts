import { hash, compare } from 'bcryptjs';
import User from '../../../models/User';
import UserTokenRepository from '../../../repositories/UserTokenRepository';
import UserRepository from '../../../repositories/UserRepository';
import CreateUserTokenService from './CreateUserTokenService';

interface Request {
  email: string;
  newPassword: string;
  oldPassword: string;
  id: string;
}

class RegisterNewPasswordService {
  public async execute(data: Request): Promise<User> {
    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokenRepository();
    const { id, oldPassword, newPassword } = data;

    const findUser = await userRepository.findByEmail(data.email);

    if (!findUser) {
      throw new Error('Usuario nao localizado');
    }

    const checkPassword = await compare(oldPassword, findUser.password);
    if (!checkPassword) {
      throw new Error('senha anterior invalida');
    }

    await userTokenRepository.delete(id);
    const hashadPassword = await hash(newPassword, 8);

    const result = await userRepository.updatePassword({
      userId: findUser.id,
      password: hashadPassword
    });

    await CreateUserTokenService.execute({ userId: result.id });

    return result;
  }
}

export default new RegisterNewPasswordService();
