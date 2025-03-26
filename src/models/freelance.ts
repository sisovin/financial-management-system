import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const FreelanceProject = prisma.freelanceProject;

export { FreelanceProject };
