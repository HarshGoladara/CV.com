import express from 'express';
import { registerController,loginController } from '../controller/authController.js';
import { addResumeIdTOdb, getResumeDetails, getResumeIdArray, upadateResumeDetails } from '../controller/resumeController.js';


const router = express.Router();

router.post('/register',registerController);

router.post('/login',loginController);

router.post('/addresumeid',addResumeIdTOdb);

router.get('/addresumeid',getResumeIdArray);

router.get('/getresumedetails',getResumeDetails);

router.post('/updateresumedetails',upadateResumeDetails);

export default router;