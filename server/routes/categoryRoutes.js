import express from 'express';
import categoryControllers from '../controllers/categoryControllers.js';

const router = express.Router();

router.get('/', categoryControllers.getAll);
router.get('/:id', categoryControllers.get);
router.post('/create', categoryControllers.create);
router.put('/edit/:id', categoryControllers.edit);
router.delete('/delete/:id', categoryControllers.destroy);

export default router;
