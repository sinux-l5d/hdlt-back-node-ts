import { User } from '@type/user/User';
import { UserReqRegistration } from '@type/user/UserReqRegistration';
import * as repo from '@repositories/user';

export class UserService {
  public static async register(user: UserReqRegistration): Promise<User> {
    return await repo.addUser(user);
  }

  public static async getById(id: User['id']): Promise<User | null> {
    try {
      const user = await repo.findUserById(id);
      return user;
    } catch (e) {
      return null;
    }
  }
}
