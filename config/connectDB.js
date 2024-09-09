import mongoose from "mongoose";
import colors from "colors";

//establish connection with database

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log(`Server running on ${conn.connection.host}`.bgCyan.white);
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

export default connectDB;
