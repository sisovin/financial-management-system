import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Page = prisma.page;

export { Page };
