import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/careercraft`);
    console.log(`database connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`database disconnected : ${error.message}`);
    process.exit(1);
  }
};
