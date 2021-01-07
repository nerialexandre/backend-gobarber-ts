import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../../repositories/UserRepository';
import CreateUserService from '../../services/users/CreateUserService';

class UserController {
  public async index(req: Request, res: Response) {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.getAll();
    return res.json(users);
  }

  public async create(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const result = await CreateUserService.execute({
        name,
        email,
        password,
      });

      delete result.password;

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default new UserController();
