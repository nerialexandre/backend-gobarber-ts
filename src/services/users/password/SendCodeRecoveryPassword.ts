import { hash } from 'bcryptjs';
import ms from 'ms';
import UserRepository from '../../../repositories/UserRepository';
import UserTokenRepository from '../../../repositories/UserTokenRepository';
import RandomString from '../../../libs/randomString';
import mail from '../../../libs/mail';

interface Request {
  email: string;
}

class SendCodeRecoveryPassword {
  public async execute(data: Request): Promise<void> {
    const userRepository = new UserRepository();
    const userTokenRepository = new UserTokenRepository();

    const { email } = data;

    const findUser = await userRepository.findByEmail(email);

    if (!findUser) {
      throw new Error('U002');
    }
    const userId = findUser.id;

    await userTokenRepository.delete(userId);

    const code = RandomString.generate(4, 'numeric');

    const token = await hash(code, 8);

    const expiresIn: number = Date.now() + ms('24h');

    const userToken = await userTokenRepository.create(
      userId,
      token,
      expiresIn
    );

    const info = await mail.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: `${findUser.name}, <${findUser.email}>`, // list of receivers
      subject: 'Hello ✔', // Subject line
      text: `Seu codigo para recuperacao de senha é ${userToken.token}`, // plain text
      html: '<b>Hello world?</b>' // html body
    });
  }
}

export default new SendCodeRecoveryPassword();
