import { EntityRepository, Repository } from 'typeorm';

// models
import User from '../models/User';

@EntityRepository(User)
class UserRepository extends Repository<User> {
  public async getAll(): Promise<User[] | null> {
    const users = await this.find();
    return users;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const findUser = await this.findOne({
      where: { email },
    });

    return findUser || null;
  }
}

export default UserRepository;
