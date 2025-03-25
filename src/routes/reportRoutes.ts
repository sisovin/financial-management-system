import express from 'express';
import { generateReport, getDetailedReport } from '../controllers/reportController';
import { authenticateJWT, authorizeRoles } from '../middleware/auth';

const router = express.Router();

router.get('/generate/:userId', authenticateJWT, authorizeRoles('user', 'admin'), generateReport);
router.get('/detailed/:userId', authenticateJWT, authorizeRoles('user', 'admin'), getDetailedReport);

export default router;
