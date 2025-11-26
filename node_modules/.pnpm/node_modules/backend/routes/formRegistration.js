import express from 'express';
import { getAllRegistered, registerForm } from '../controller/registration-controller.js';
import { allPrayer, requestPrayer } from '../controller/prayerReq-controller.js';
import { protectMiddleware } from '../middleware/protected-middleware.js';
import { adminMiddleware } from '../middleware/admin-middleware.js';

const router = express.Router();

router.post('/form', registerForm);
router.get('/list', protectMiddleware, adminMiddleware, getAllRegistered);
router.post('/prayerRequest', requestPrayer);
router.get('/allPrayer',protectMiddleware, adminMiddleware, allPrayer);

export default router;