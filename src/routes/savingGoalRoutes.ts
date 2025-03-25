import { Router } from 'express';
import { createSavingGoal, updateSavingGoal, deleteSavingGoal } from '../controllers/savingGoalController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.post('/', authenticateJWT, createSavingGoal);
router.put('/:id', authenticateJWT, updateSavingGoal);
router.delete('/:id', authenticateJWT, deleteSavingGoal);

export default router;
