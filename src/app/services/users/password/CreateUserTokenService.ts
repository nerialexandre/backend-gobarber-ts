import { hash } from 'bcryptjs';
import ms from 'ms';
import UserToken from '../../../models/UserToken';
import UserTokenRepository from '../../../repositories/UserTokenRepository';
import RandomString from '../../../libs/randomString';

interface Request {
  userId: string;
}

class CreateUserTokenService {
  public async execute(data: Request): Promise<UserToken> {
    const userRepository = new UserTokenRepository();

    const code = RandomString.generate(4, 'numeric');

    const token = await hash(code, 8);

    const expiresIn: number = Date.now() + ms('2h');

    const { userId } = data;

    const userToken = await userRepository.create(userId, token, expiresIn);

    return userToken;
  }
}

export default new CreateUserTokenService();
