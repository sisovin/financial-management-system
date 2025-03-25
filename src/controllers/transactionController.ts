import { Request, Response } from 'express';
import { Transaction } from '../models/transaction';
import { prisma } from '../database';

export const createTransaction = async (req: Request, res: Response) => {
  const { type, amount, description, date } = req.body;

  try {
    const transaction = await prisma.transaction.create({
      data: {
        type,
        amount,
        description,
        date,
        userId: req.user.id,
      },
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create transaction' });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { type, amount, description, date } = req.body;

  try {
    const transaction = await prisma.transaction.update({
      where: { id: Number(id) },
      data: {
        type,
        amount,
        description,
        date,
      },
    });

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update transaction' });
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await prisma.transaction.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete transaction' });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await prisma.transaction.findMany({
      where: { userId: req.user.id },
    });

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};
