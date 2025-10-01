import { Router } from 'express';
import { signIn, signUp, signOut } from '#controllers/auth.controllers.js';

const router = Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.post('/sign-out', signOut);

export default router;
