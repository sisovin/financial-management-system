import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const softDelete = async (model: any, id: number) => {
  try {
    await model.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  } catch (error) {
    throw new Error('Error performing soft delete');
  }
};

export const restore = async (model: any, id: number) => {
  try {
    await model.update({
      where: { id },
      data: { deletedAt: null },
    });
  } catch (error) {
    throw new Error('Error restoring soft deleted record');
  }
};
