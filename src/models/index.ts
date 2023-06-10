import { User } from "./user";
import { Link } from "./link";  
import mongoose from "mongoose";
import { MONGO_DB_URI } from "../config/serverConfig";

async function connectDB() {
    await mongoose.connect(MONGO_DB_URI as string);
}

connectDB();

export { User, Link };
