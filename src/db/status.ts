import { Schema } from 'mongoose';
import { Status } from '@type/status/Status';

export const StatusSchema = new Schema<Status>(
  {
    id: {
      type: String,
      unique: true,
      index: true,
      required: true,
    },
    lawId: {
      // SHOULD BE ANOTHER COLLECTION. SEE : https://mongoosejs.com/docs/populate.html
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: true,
    },
    paye: {
      type: Boolean,
      default: false,
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
