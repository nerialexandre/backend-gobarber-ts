import { Request, Response, NextFunction } from 'express';
import Jwt from '../libs/jwt';
import config from '../config/config';

export default function AuthMiddlewere(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Error('Necessario token JWT');
  }

  const [, token] = authorization.split(' ');
  Jwt.verify(token, config.jwt.secret);

  return next();
}
