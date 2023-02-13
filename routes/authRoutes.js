import { Login,Register } from "../controllers/auth.js";
import express from 'express'
const router = express.Router();


router.post('/',Register);
router.post('/login',Login);
// router.post('/logout',Logout);

export default router;