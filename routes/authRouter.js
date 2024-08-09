import { Router } from 'express';
import { register, logout, login } from '../controllers/authController.js';
import { validateRegisterInput,validateLoginInput } from '../middleware/validationMiddleware.js'
const router = Router();

router.post('/register', validateRegisterInput, register);
router.post('/login', validateLoginInput, login);
router.post('/logout', logout);

export default router;
