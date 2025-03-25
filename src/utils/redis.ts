import Redis from 'ioredis';
import config from '../config';

const redisClient = new Redis(config.redisClient);

export const setCache = async (key: string, value: string, expiry: number) => {
  await redisClient.set(key, value, 'EX', expiry);
};

export const getCache = async (key: string) => {
  const value = await redisClient.get(key);
  return value;
};

export const deleteCache = async (key: string) => {
  await redisClient.del(key);
};

export default redisClient;
