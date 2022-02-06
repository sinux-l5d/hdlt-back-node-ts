import { Schema, model } from 'mongoose';
import { Law as TLaw } from '@type/Law';

const LawSchema = new Schema<TLaw>(
  {
    id: {
      type: Number,
      unique: true,
      index: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  },
);

export const Law = model('Law', LawSchema);
