import { Router } from 'express';
import { createJob, updateJob, deleteJob, getJobs, getJobById } from '../controllers/jobPortalController';
import { authenticateJWT, authorizeRoles } from '../middleware/auth';

const router = Router();

router.post('/', authenticateJWT, authorizeRoles('employer'), createJob);
router.put('/:id', authenticateJWT, authorizeRoles('employer'), updateJob);
router.delete('/:id', authenticateJWT, authorizeRoles('employer'), deleteJob);
router.get('/', authenticateJWT, authorizeRoles('employer', 'freelancer'), getJobs);
router.get('/:id', authenticateJWT, authorizeRoles('employer', 'freelancer'), getJobById);

export default router;
