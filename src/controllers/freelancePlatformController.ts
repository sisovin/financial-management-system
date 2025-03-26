import { Request, Response } from 'express';
import { FreelanceProject } from '../models/freelance';

export const createFreelanceProject = async (req: Request, res: Response) => {
  const { title, description, budget, deadline } = req.body;

  try {
    const freelanceProject = await FreelanceProject.create({
      data: {
        title,
        description,
        budget,
        deadline,
        userId: req.user.id,
      },
    });

    res.status(201).json(freelanceProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create freelance project' });
  }
};

export const getFreelanceProjects = async (req: Request, res: Response) => {
  try {
    const freelanceProjects = await FreelanceProject.findMany({
      where: { userId: req.user.id },
    });

    res.status(200).json(freelanceProjects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch freelance projects' });
  }
};

export const updateFreelanceProject = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, budget, deadline } = req.body;

  try {
    const freelanceProject = await FreelanceProject.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        budget,
        deadline,
      },
    });

    res.status(200).json(freelanceProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update freelance project' });
  }
};

export const deleteFreelanceProject = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await FreelanceProject.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete freelance project' });
  }
};
