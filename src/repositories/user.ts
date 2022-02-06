import { User as TUser } from '@type/user/User';
import { User } from '@db/user';
import { UserReqRegistration } from '@type/user/UserReqRegistration';

/**
 *
 * @param userReg Requête pour engrestirer un utilisateur avec login/mot de passe
 * @returns Promesse d'utilisateur
 */
export const addUser = async (userReg: UserReqRegistration): Promise<TUser> => {
  const user = new User(userReg);
  const userDB = await user.save();
  return {
    id: userDB._id,
    login: userDB.login,
    password: userDB.password,
    created_at: userDB.created_at,
    updated_at: userDB.updated_at,
  };
};

export const findUserById = async (id: TUser['id']): Promise<TUser> => {
  const user = await User.findById(id).exec();
  if (!user) throw Error('User not found');
  return {
    id: user._id as string,
    login: user.login,
    password: user.password,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
};
