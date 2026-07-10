import dns from "node:dns";
import mongoose from "mongoose";

// Force reliable DNS servers for Atlas SRV lookups
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("mongodb connected successfully")
  } catch (error) {
    console.error("mongodb connection failed")
    console.error(`database error: ${error}`)
  }
}

export default connectDb