import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const Blog = prisma.blog;

export { Blog };
