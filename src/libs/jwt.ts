import { sign, verify, decode } from 'jsonwebtoken';

interface TokenData {
  id: string;
  name: string;
}

class Jwt {
  generate = (tokenData: TokenData, secret: string, _expiresIn: string) => {
    return sign(tokenData, secret, {
      expiresIn: _expiresIn,
    });
  };

  verify = (token: string, secret: string) => {
    try {
      verify(token, secret);
    } catch {
      throw new Error('JWT invalido');
    }
  };

  decode = (token: string) => {
    return decode(token);
  };
}

export default new Jwt();
