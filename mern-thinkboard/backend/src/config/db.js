import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Connected Succesfully");
  } catch (error) {
    console.error("Error connecting to MonogoDB", error);
    process.exit(1); // exit with failure
  }
};

export default connectDB;
