import { Request, Response } from 'express';
import ListAllProviders from '../../services/users/ListAllProviders';

class ProviderController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const result = await ListAllProviders.execute(req.user.id);

      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default ProviderController;
