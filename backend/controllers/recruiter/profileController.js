import handler from "express-async-handler";
import { Recruiter } from "../../models/recruiter/recruiterModel.js";


export const getRecruiterById = handler(async (req, res) => {
  const { id } = req.params;

  const recruiter = await Recruiter.findById(id).select("-password");
  if (!recruiter) {
    res.status(404);
    throw new Error("Recruiter not found");
  }

  res.status(200).json(recruiter);
});