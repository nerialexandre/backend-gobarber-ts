import User from '../../models/User';
import UserRepository from '../../repositories/UserRepository';

interface Request {
  id: string;
  name: string;
  email: string;
}

class UpdateProfileService {
  public async execute({ id, name, email }: Request): Promise<User> {
    const userRepository = new UserRepository();
    const findeUserbyEmail = await userRepository.findByEmail(email);

    if (findeUserbyEmail && findeUserbyEmail.id !== id) {
      throw new Error('email ja esta sendo utilizado por outro usuario');
    }

    const user = await userRepository.updateProfile(id, name, email);

    return user;
  }
}

export default new UpdateProfileService();
