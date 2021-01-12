import { EntityRepository, Repository, getRepository } from 'typeorm';

// models
import UserToken from '../models/UserToken';

@EntityRepository(UserToken)
class UserTokenRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  public async getAll(): Promise<UserToken[] | null> {
    const users = await this.ormRepository.find();
    return users;
  }

  public async getOne(
    token: string,
    userId: string
  ): Promise<UserToken | undefined> {
    const users = await this.ormRepository.findOne({
      where: {
        token,
        userId
      }
    });
    return users;
  }

  public async create(
    userId: string,
    token: string,
    expiresIn: number
  ): Promise<UserToken> {
    const user = await this.ormRepository.create({ userId, token, expiresIn });

    await this.ormRepository.save(user);

    return user;
  }

  public async delete(userId: string): Promise<void> {
    const a = await this.ormRepository.findOne({
      where: {
        userId
      }
    });

    if (a) {
      await this.ormRepository.delete(a.id);
    }
  }
}

export default UserTokenRepository;
