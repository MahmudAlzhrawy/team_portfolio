import mongoose from "mongoose";

const uri = process.env.URI;
if (!uri) {
  throw new Error("Connection string not specified");
}
export async function connectToDb() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri!);
      console.log("Connected to the database");
    } else {
      console.log("Already connected to the database");
    }
  } catch (error) {
    console.error(`Failed to connect to the database: ${error}`);
    process.exit(1);
  }
}
