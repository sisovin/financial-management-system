import { Request, Response } from 'express';
import { SavingGoal } from '../models/savingGoal';

export const createSavingGoal = async (req: Request, res: Response) => {
  const { goalAmount, targetDate } = req.body;

  try {
    const savingGoal = await SavingGoal.create({
      data: {
        goalAmount,
        targetDate,
      },
    });

    res.status(201).json(savingGoal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create saving goal' });
  }
};

export const updateSavingGoal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { goalAmount, targetDate } = req.body;

  try {
    const savingGoal = await SavingGoal.update({
      where: { id: Number(id) },
      data: {
        goalAmount,
        targetDate,
      },
    });

    res.status(200).json(savingGoal);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update saving goal' });
  }
};

export const deleteSavingGoal = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await SavingGoal.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete saving goal' });
  }
};
