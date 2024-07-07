import express from 'express';
import { registerController,loginController } from '../controller/authController.js';


const router = express.Router();


//register
router.post('/register',registerController);

//Login
router.post('/login',loginController);


export default router;