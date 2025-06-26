import express from 'express'
import { loginRecruiter, registerRecruiter } from '../../controllers/recruiter/authController.js'


export const recruiterRouter = express.Router()

recruiterRouter.post('/register',registerRecruiter)
recruiterRouter.post('/login',loginRecruiter)