import { Request, Response } from 'express';
import UserAuthenticationService from '../../services/authentication/UserAuthenticationService';

class AuthController {
  public async index(req: Request, res: Response): Promise<Response> {
    return res.send('index');
  }

  public async auth(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      const result = await UserAuthenticationService.execute({
        email,
        password,
      });
      if (result === null) {
        return res.status(400).json({ mensagem: 'usuario nao Autorizado' });
      }

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default AuthController;
