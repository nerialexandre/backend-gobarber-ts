import { EntityRepository, Repository, getRepository } from 'typeorm';

// models
import User from '../models/User';

@EntityRepository(User)
class UserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async getAll(): Promise<User[] | null> {
    const users = await this.ormRepository.find();
    return users;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const findUser = await this.ormRepository.findOne({
      where: { email }
    });

    return findUser || null;
  }

  public async create(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    const user = await this.ormRepository.create({ name, email, password });

    await this.ormRepository.save(user);

    return user;
  }

  public async updatePassword(
    userId: string,
    email: string,
    password: string
  ): Promise<User> {
    const user = await this.ormRepository.findOne(userId);

    if (!user) {
      throw new Error('nao localizado');
    }

    user.password = password;

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRepository;
