import { hash, compare } from 'bcryptjs';
import User from '../../../models/User';
import UserTokenRepository from '../../../repositories/UserTokenRepository';
import UserRepository from '../../../repositories/UserRepository';
import CreateUserTokenService from './CreateUserTokenService';

interface Request {
  email: string;
  newPassword: string;
  token: string;
}

class RegisterNewPasswordService {
  public async execute(data: Request): Promise<User> {
    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokenRepository();

    const findUser = await userRepository.findByEmail(data.email);

    if (!findUser) {
      throw new Error('email de usuario invalido');
    }

    const userToken = await userTokenRepository.getOne(data.token, findUser.id);

    if (!userToken) {
      throw new Error('usuario ouToken invalido');
    }

    if (
      !(
        compare(data.token, userToken.token) && Date.now() < userToken.expiresIn
      )
    ) {
      throw new Error('token expirou');
    }

    await userTokenRepository.delete(findUser.id);
    const hashadPassword = await hash(data.newPassword, 8);

    const result = await userRepository.updatePassword({
      password: hashadPassword,
      userId: findUser.id
    });

    await CreateUserTokenService.execute({ userId: result.id });

    return result;
  }
}

export default new RegisterNewPasswordService();
