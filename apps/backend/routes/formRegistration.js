import express from 'express';
import { getAllRegistered, registerForm, removeUser } from '../controller/registration-controller.js';
import { allPrayer, removePrayer, requestPrayer } from '../controller/prayerReq-controller.js';
import { protectMiddleware } from '../middleware/protected-middleware.js';
import { adminMiddleware } from '../middleware/admin-middleware.js';

const router = express.Router();

//registration
router.post('/form', registerForm);
router.get('/list', protectMiddleware, adminMiddleware, getAllRegistered);
router.delete('/remove/:id', protectMiddleware, adminMiddleware, removeUser);

//prayer request
router.post('/prayerRequest', requestPrayer);
router.get('/allPrayer',protectMiddleware, adminMiddleware, allPrayer);
router.delete('/removeprayer/:id', protectMiddleware, adminMiddleware, removePrayer);

export default router;