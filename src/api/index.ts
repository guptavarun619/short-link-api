import express from 'express';
import { registerUser } from '../controllers/user';

const router = express.Router();

router.post('/signup', registerUser);

export default router;