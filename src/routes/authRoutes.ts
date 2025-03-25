import { Router } from 'express';
import { signup, login, validateToken, logout } from '../controllers/authController';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/validate-token', validateToken);
router.post('/logout', logout);

export default router;
