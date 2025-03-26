import { Request, Response } from 'express';
import { Dashboard } from '../models/dashboard';

export const getUserDashboard = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const dashboard = await Dashboard.findUnique({
      where: { userId },
    });

    if (!dashboard) {
      return res.status(404).json({ message: 'Dashboard not found' });
    }

    res.status(200).json(dashboard);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard', error });
  }
};

export const updateUserDashboard = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const { widgets } = req.body;

    const dashboard = await Dashboard.update({
      where: { userId },
      data: { widgets },
    });

    res.status(200).json(dashboard);
  } catch (error) {
    res.status(500).json({ message: 'Error updating dashboard', error });
  }
};
