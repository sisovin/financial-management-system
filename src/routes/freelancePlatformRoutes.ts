import { Router } from 'express';
import { createFreelanceProject, getFreelanceProjects, updateFreelanceProject, deleteFreelanceProject } from '../controllers/freelancePlatformController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.post('/', authenticateJWT, createFreelanceProject);
router.get('/', authenticateJWT, getFreelanceProjects);
router.put('/:id', authenticateJWT, updateFreelanceProject);
router.delete('/:id', authenticateJWT, deleteFreelanceProject);

export default router;
