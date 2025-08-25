import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<void> => {
  try {
    if (!process.env.MONGODB_URL) {
      throw new Error('MONGODB_URL is not defined in environment variables');
    }

    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection error', err);
  }
};
