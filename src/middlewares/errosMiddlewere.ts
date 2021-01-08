import { Request, Response, NextFunction } from 'express';
import errors from '../config/errors';

const getKeyValue = <U extends keyof T, T extends object>(key: U) => (obj: T) =>
  obj[key];

interface User {
  name: string;
  age: number;
}

export default function ErrorsMiddlewere(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const user: User = {
    name: 'John Smith',
    age: 20,
  };

  const getUserName = getKeyValue<keyof User, User>('name')(user);

  console.log(getUserName);

  const { message } = err;
  const x = errors[`${message}`];
  res.status(x.httpCode).json({ message: x.response });
}
