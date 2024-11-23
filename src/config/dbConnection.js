import mongoose from "mongoose";

export const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(`Error while connecting to MongoDB : ${error}`);
    process.exit(1);
  }
};
