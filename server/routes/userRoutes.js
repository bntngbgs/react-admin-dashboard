import express from 'express';
import userControllers from '../controllers/userControllers.js';

const router = express.Router();

router.post('/register', userControllers.register);

export default router;
