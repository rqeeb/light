import mongoose from "mongoose";
import {ENV} from "./env.js";
import dns from "dns";

dns.setServers(["1.1.1.1" || "8.8.8.8"]);


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("DB Connected.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
