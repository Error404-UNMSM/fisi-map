import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT ?? 5050,
  MONGODB_URL: process.env.MONGODB_URL,
};

export default config;
