import { Request, Response } from 'express';
import UserRepository from '../../repositories/UserRepository';
import CreateUserService from '../../services/users/CreateUserService';
import SendCodeRecoveryPassword from '../../services/users/password/SendCodeRecoveryPassword';
import RegisterNewPasswordService from '../../services/users/password/RegisterNewPasswordService';

interface User {
  name: string;
  email: string;
  password?: string;
}

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const userRepository = new UserRepository();
    const users = await userRepository.getAll();
    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;

      const result: User = await CreateUserService.execute({
        name,
        email,
        password
      });

      delete result.password;

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  public async recoveryPass(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body;
      await SendCodeRecoveryPassword.execute({
        email
      });
      return res.status(200).json({ teste: 'ok' });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  public async registerNewPassword(
    req: Request,
    res: Response
  ): Promise<Response> {
    try {
      const { email, newPassword, token } = req.body;

      const result = await RegisterNewPasswordService.execute({
        email,
        newPassword,
        token
      });
      return res.status(200).json({ user: result });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default UserController;
