import express from 'express';
import authControllers from '../controllers/authControllers.js';
import authorize from '../middlewares/authHandler.js';

const router = express.Router();

router.get('/', authorize, (req, res) => {
  res.json({ message: 'user found!' });
});

router.post('/register', authControllers.register);
router.get('/refresh', authControllers.refreshToken);
router.post('/login', authControllers.login);
router.get('/logout', authControllers.logout);

export default router;
