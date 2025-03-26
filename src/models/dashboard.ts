import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Dashboard = prisma.dashboard;

export { Dashboard };
