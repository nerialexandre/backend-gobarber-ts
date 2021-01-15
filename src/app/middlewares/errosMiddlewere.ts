import { Request, Response, NextFunction } from 'express';
import errors from '../../config/errors';

export default function ErrorsMiddlewere(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { message } = err;

  const error = errors.find(item => item.errorCode === message);

  if (!error) {
    res.status(500).json({
      error: 500,
      message:
        'Ocorreu um erro inesperado no servidor.Entre em contato com o responsavel'
    });
  } else {
    res.status(error.httpCode).json({ message: error });
  }
  next();
}
