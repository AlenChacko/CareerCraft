import jwt from "jsonwebtoken";
import { Recruiter } from "../models/recruiter/recruiterModel.js";
import handler from "express-async-handler";

export const recruiterAuth = handler(async (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401);
    throw new Error("Unauthorized: No token");
  }

  const decoded = jwt.verify(token, process.env.RECRUITER_JWT_SECRET);
  const recruiter = await Recruiter.findById(decoded.id).select("-password");

  if (!recruiter) {
    res.status(401);
    throw new Error("Unauthorized: Invalid token");
  }

  req.recruiter = recruiter;
  next();
});
