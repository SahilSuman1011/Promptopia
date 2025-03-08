import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    const options = {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Conditional auth: only add if provided
      ...(process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD && {
        auth: {
          username: process.env.MONGODB_USERNAME,
          password: process.env.MONGODB_PASSWORD,
        },
      }),
    };

    await mongoose.connect(process.env.MONGODB_URI, options);
    isConnected = true;
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error; // rethrow so callers can handle errors if needed
  }
};