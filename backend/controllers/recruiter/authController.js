import handler from "express-async-handler";
import { Recruiter } from "../../models/recruiter/recruiterModel.js";
import {
  comparePassword,
  generateToken,
  hashPassword,
} from "../../utils/utils.js";

export const registerRecruiter = handler(async (req, res) => {
  const { companyName, email, password } = req.body;

  if (!companyName || !email || !password) {
    res.status(400);
    throw new Error("Required fields are missing");
  }

  const isExisting = await Recruiter.findOne({ email });
  if (isExisting) {
    res.status(409);
    throw new Error("This email is already registered");
  }

  const hashedPassword = await hashPassword(password);

  const newRecruiter = await Recruiter.create({
    companyName,
    email,
    password: hashedPassword,
  });

  if (!newRecruiter) {
    res.status(500);
    throw new Error("Recruiter registration failed");
  }

  res.status(201).json({
    _id: newRecruiter._id,
    companyName: newRecruiter.companyName,
    email: newRecruiter.email,
    token: generateToken(
      { id: newRecruiter._id },
      process.env.RECRUITER_JWT_SECRET
    ),
  });
});

export const loginRecruiter = handler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Required fields are missing");
  }

  const recruiter = await Recruiter.findOne({ email });
  if (!recruiter || !(await comparePassword(password, recruiter.password))) {
    res.status(400);
    throw new Error("Invalid email or password");
  }

  res.status(200).json({
    _id: recruiter._id,
    companyName: recruiter.companyName,
    email: recruiter.email,
    token: generateToken(
      { id: recruiter._id },
      process.env.RECRUITER_JWT_SECRET
    ),
  });
});
