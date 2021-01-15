import { EntityRepository, Repository, getRepository } from 'typeorm';

// models
import User from '../models/User';

interface IupdatePassword {
  userId: string;
  password: string;
}

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

  public async updatePassword(data: IupdatePassword): Promise<User> {
    const user = await this.ormRepository.findOne(data.userId);

    if (!user) {
      throw new Error('nao localizado');
    }

    user.password = data.password;

    await this.ormRepository.save(user);

    return user;
  }

  public async updateProfile(
    id: string,
    name: string,
    email: string
  ): Promise<User> {
    const user = await this.ormRepository.findOne(id);

    if (!user) {
      throw new Error('nao localizado');
    }

    user.name = name;
    user.email = email;

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRepository;
