import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Job = prisma.job;

export { Job };
