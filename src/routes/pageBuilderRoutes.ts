import { Router } from 'express';
import { createPage, updatePage, deletePage, getPage, getAllPages } from '../controllers/pageBuilderController';
import { authenticateJWT, authorizeRoles } from '../middleware/auth';

const router = Router();

router.post('/', authenticateJWT, authorizeRoles('admin'), createPage);
router.put('/:id', authenticateJWT, authorizeRoles('admin'), updatePage);
router.delete('/:id', authenticateJWT, authorizeRoles('admin'), deletePage);
router.get('/:id', authenticateJWT, getPage);
router.get('/', authenticateJWT, getAllPages);

export default router;
