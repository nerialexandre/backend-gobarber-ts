import { compare } from 'bcryptjs';
import UserRepository from '../../repositories/UserRepository';
import User from '../../models/User';
import Jwt from '../../libs/jwt';
import config from '../../../config/config';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class UserAuthenticationService {
  public async execute({ email, password }: Request): Promise<Response> {
    const userRepository = new UserRepository();

    const findUser = await userRepository.findByEmail(email);

    if (!findUser) {
      throw new Error('Email ou senha invalido');
    }
    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword) {
      throw new Error('Email ou senha invalido');
    }

    const token = Jwt.generate(
      {
        id: findUser.id,
        name: findUser.name
      },
      config.jwt.secret,
      config.jwt.expiresIn
    );

    return {
      user: findUser,
      token
    };
  }
}

export default new UserAuthenticationService();
