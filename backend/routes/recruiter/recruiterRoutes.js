import express from 'express'
import { loginRecruiter, registerRecruiter } from '../../controllers/recruiter/authController.js'
import { getRecruiterById } from '../../controllers/recruiter/profileController.js'
import { recruiterAuth } from '../../middlewares/recruiterAuth.js'


export const recruiterRouter = express.Router()

recruiterRouter.post('/register',registerRecruiter)
recruiterRouter.post('/login',loginRecruiter)
recruiterRouter.get("/:id", recruiterAuth, getRecruiterById);