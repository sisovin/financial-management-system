import { Router } from 'express';
import { createTransaction, updateTransaction, deleteTransaction, getTransactions } from '../controllers/transactionController';
import { authenticateJWT } from '../middleware/auth';

const router = Router();

router.post('/', authenticateJWT, createTransaction);
router.put('/:id', authenticateJWT, updateTransaction);
router.delete('/:id', authenticateJWT, deleteTransaction);
router.get('/', authenticateJWT, getTransactions);

export default router;
