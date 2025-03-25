import dotenv from 'dotenv';
import Redis from 'ioredis';

dotenv.config();

const redisClient = new Redis(process.env.REDIS_URL);

export default {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  redisClient,
};
