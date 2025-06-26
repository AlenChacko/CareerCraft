import handler from "express-async-handler";
import { Employee } from "../../models/employee/employeeModel.js";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../../utils/utils.js";

export const registerEmployee = handler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Required fields are missing");
  }

  const isExisting = await Employee.findOne({ email });
  if (isExisting) {
    res.status(409);
    throw new Error("This email is already registered");
  }

  const hashedPassword = await hashPassword(password);

  const newEmployee = await Employee.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  if (!newEmployee) {
    res.status(500);
    throw new Error("Employee registration failed");
  }

  res.status(201).json({
    _id: newEmployee._id,
    firstName: newEmployee.firstName,
    lastName: newEmployee.lastName,
    email: newEmployee.email,
    token: generateToken(
      { id: newEmployee._id },
      process.env.EMPLOYEE_JWT_SECRET
    ),
  });
});

export const loginEmployee = handler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Required fields are missing");
  }

  const employee = await Employee.findOne({ email });
  if (!employee || !(await comparePassword(password, employee.password))) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  res.status(200).json({
    _id: employee._id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    email: employee.email,
    token: generateToken(
      { id: employee._id },
      process.env.EMPLOYEE_JWT_SECRET
    ),
  });
});
