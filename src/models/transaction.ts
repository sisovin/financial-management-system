import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Transaction = prisma.transaction;

export { Transaction };
