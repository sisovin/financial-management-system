import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const SavingGoal = prisma.savingGoal;

export { SavingGoal };
