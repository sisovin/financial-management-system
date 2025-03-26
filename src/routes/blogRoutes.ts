import { Router } from 'express';
import { createBlog, updateBlog, deleteBlog, getBlogs, getBlogById } from '../controllers/blogController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.post('/', authenticateJWT, createBlog);
router.put('/:id', authenticateJWT, updateBlog);
router.delete('/:id', authenticateJWT, deleteBlog);
router.get('/', getBlogs);
router.get('/:id', getBlogById);

export default router;
