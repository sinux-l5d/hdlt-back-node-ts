import { Schema, model } from 'mongoose';
import { User as TUser } from '@type/user/User';
import { StatusSchema } from './status';
import { Status } from '@type/status/Status';

type TUserDB = TUser & {
  status: [Status];
};

const UserSchema = new Schema<TUserDB>(
  {
    // Ce n'est pas l'indice dans la base de donnée
    login: {
      type: String,
      // unique: true, => Not a validator !
      lowercase: true,
      trim: true,
      required: true,
    },
    password: { type: String, required: true },
    status: [StatusSchema],
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export const User = model('User', UserSchema);
