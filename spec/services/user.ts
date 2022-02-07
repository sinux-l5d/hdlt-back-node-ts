import * as repo from '@repositories/user';
import { UserReqRegistration } from '@type/user/UserReqRegistration';
import { UserService } from '@services/user';

jest.mock('@repositories/user');
// Le transpileur de TS ne sait pas que jest.mock modifie repo
const mockRepo = repo as unknown as jest.Mocked<typeof repo>;

describe('User service', () => {
  it('register a user', async () => {
    const regUser: UserReqRegistration = {
      login: 'sinux',
      password: '1234',
    };

    mockRepo.addUser.mockResolvedValueOnce({
      ...regUser,
      id: '1',
      created_at: new Date(),
      updated_at: new Date(),
    });

    const newUser = await UserService.register(regUser);

    expect(mockRepo.addUser).toBeCalledWith(regUser);
    expect(mockRepo.addUser).toBeCalledTimes(1);

    expect(newUser.created_at).toBeInstanceOf(Date);
    expect(newUser.updated_at).toBeInstanceOf(Date);
    expect(newUser.login).toBe(regUser.login);
    expect(newUser.password).toBe(regUser.password);
    expect(newUser.id).toBeDefined();
  });
});
