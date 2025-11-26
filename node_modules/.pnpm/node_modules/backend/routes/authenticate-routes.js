import express from 'express';
import { registerLeader } from '../controller/autheticate-leader-controller.js';
import { loginMIddleware } from '../middleware/login-middleware.js';
import { login } from '../controller/login-controller.js';

const router = express.Router();

router.post('/signup', registerLeader);
router.post('/login', loginMIddleware, login);

export default router;