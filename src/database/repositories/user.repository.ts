import { AppDataSource } from '../dataSource';
import { UserEntity } from '../entities/user.entity';

export class UserRepository {
  private readonly repository = AppDataSource.getRepository(UserEntity);

  async findByEmail(email: string) {
    return this.repository.findOne({ where: { email } });
  }

  async findByDocument(document: string) {
    return this.repository.findOne({ where: { document } });
  }
}
