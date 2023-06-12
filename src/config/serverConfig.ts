import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_DB_URI = process.env.MONGO_DB_URI;
export const SALT_ROUND = process.env.SALT_ROUND;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;