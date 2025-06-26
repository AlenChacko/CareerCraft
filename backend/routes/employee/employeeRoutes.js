import express from 'express'
import { loginEmployee, registerEmployee } from '../../controllers/employee/authController.js'


export const employeeRouter = express.Router()

employeeRouter.post('/register',registerEmployee)
employeeRouter.post('/login',loginEmployee)