import mongoose from 'mongoose';
import { MONGO_URI } from '../config/env.js';

if (!MONGO_URI) {
  throw new Error('MongoDB connection string not found in .env file!');
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log(`Database connection established!`);
  } catch (error) {
    console.error('Error connecting to database: ', error);
    process.exit(1);
  }
};

export default connectDB;
