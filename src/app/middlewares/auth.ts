import { Request, Response, NextFunction } from 'express';
import Jwt from '../libs/jwt';
import config from '../../config/config';

interface Payload {
  id: string;
  name: string;
}

export default function AuthMiddlewere(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error('Necessario token JWT');
    }

    const [, token] = authorization.split(' ');

    const { id } = Jwt.decode(token) as Payload;

    req.user = {
      id
    };

    Jwt.verify(token, config.jwt.secret);

    return next();
  } catch (error) {
    throw new Error('U001');
  }
}
