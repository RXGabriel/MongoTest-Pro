import { Schema, model, Document } from 'mongoose';

type UserType = Document & {
  email: string;
  age: number;
  interests: string[];
  name: {
    firstName: string;
    lastName?: string;
  };
};

const userSchema = new Schema<UserType>({
  email: { type: String, required: true },
  age: { type: Number, required: true },
  interests: [String],
  name: {
    firstName: { type: String, required: true },
    lastName: String,
  },
});

const UserModel = model<UserType>('User', userSchema);

export default UserModel;
