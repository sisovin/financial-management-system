import { Request, Response } from 'express';
import { prisma } from '../database';

export const generateReport = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const transactions = await prisma.transaction.findMany({
      where: { userId: Number(userId) },
    });

    const savingGoals = await prisma.savingGoal.findMany({
      where: { userId: Number(userId) },
    });

    const report = {
      transactions,
      savingGoals,
    };

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate report' });
  }
};

export const getDetailedReport = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const transactions = await prisma.transaction.findMany({
      where: { userId: Number(userId) },
      include: {
        category: true,
      },
    });

    const savingGoals = await prisma.savingGoal.findMany({
      where: { userId: Number(userId) },
    });

    const report = {
      transactions,
      savingGoals,
    };

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch detailed report' });
  }
};
