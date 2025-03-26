import { Request, Response } from 'express';
import { Job } from '../models/job';

export const createJob = async (req: Request, res: Response) => {
  const { title, description, budget, deadline } = req.body;

  try {
    const job = await Job.create({
      data: {
        title,
        description,
        budget,
        deadline,
        employerId: req.user.id,
      },
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job' });
  }
};

export const updateJob = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, budget, deadline } = req.body;

  try {
    const job = await Job.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        budget,
        deadline,
      },
    });

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update job' });
  }
};

export const deleteJob = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Job.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete job' });
  }
};

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.findMany();

    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

export const getJobById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const job = await Job.findUnique({
      where: { id: Number(id) },
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch job' });
  }
};
