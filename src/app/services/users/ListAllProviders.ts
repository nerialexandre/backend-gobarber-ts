import User from '../../models/User';
import UserRepository from '../../repositories/UserRepository';

class ListAllProviders {
  public async execute(
    exceptionUserId: string | undefined
  ): Promise<User[] | null> {
    const userRepository = new UserRepository();

    const providers = await userRepository.getAllProvider({
      exceptionUserId
    });

    return providers;
  }
}

export default new ListAllProviders();
