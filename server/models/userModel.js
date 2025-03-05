import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name field is required'],
      minLength: [3, 'Name length must have at least 3 characters'],
      maxLength: [50, 'Name length must not exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email field is required'],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password filed is required'],
      minLength: [6, 'Password must have at least 6 characters'],
    },
    phone_number: {
      type: String,
      required: [true, 'Phone number field is required'],
      minLength: 10,
      maxLength: 13,
    },
    address: {
      type: String,
      required: [true, 'Address field is required'],
      minLength: [10, 'Address length must have at least 10 characters'],
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
