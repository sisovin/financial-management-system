import { Request, Response } from 'express';
import { Page } from '../models/page';

export const createPage = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  try {
    const page = await Page.create({
      data: {
        title,
        content,
      },
    });

    res.status(201).json(page);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create page' });
  }
};

export const updatePage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const page = await Page.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
      },
    });

    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update page' });
  }
};

export const deletePage = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Page.delete({
      where: { id: Number(id) },
    });

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete page' });
  }
};

export const getPage = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const page = await Page.findUnique({
      where: { id: Number(id) },
    });

    if (!page) {
      return res.status(404).json({ error: 'Page not found' });
    }

    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch page' });
  }
};

export const getAllPages = async (req: Request, res: Response) => {
  try {
    const pages = await Page.findMany();

    res.status(200).json(pages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch pages' });
  }
};
