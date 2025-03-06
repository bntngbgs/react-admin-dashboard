import express from 'express';
import userControllers from '../controllers/userControllers.js';
import authorize from '../middlewares/authHandler.js';

const router = express.Router();

router.get('/', authorize, (req, res) => {
  res.json({ message: 'user found!' });
});

router.post('/register', userControllers.register);
router.post('/login', userControllers.login);
router.post('/logout', userControllers.logout);

export default router;
