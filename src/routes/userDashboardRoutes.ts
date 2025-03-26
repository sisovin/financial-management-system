import { Router } from 'express';
import { getUserDashboard, updateUserDashboard } from '../controllers/userDashboardController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.get('/', authenticateJWT, getUserDashboard);
router.put('/', authenticateJWT, updateUserDashboard);

export default router;
