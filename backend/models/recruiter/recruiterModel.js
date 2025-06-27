import mongoose from "mongoose";

const recruiterSchema = mongoose.Schema(
  {
    companyName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },

    // New Fields for Profile
    recruiterName: { type: String, default: "" },
    phone: { type: String, default: "" },

    website: { type: String, default: "" },
    industry: { type: String, default: "" },
    employeeCount: { type: String, default: "" }, // e.g., "11–50 employees"
    location: { type: String, default: "" },

    aboutRecruiter: { type: String, default: "" },
    aboutCompany: { type: String, default: "" },
    companyLogo: { type: String, default: "" }, 

    // Optional counters (can be auto-calculated or manually maintained)
    jobsPosted: { type: Number, default: 0 },
    applicationsReceived: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Recruiter = mongoose.model("Recruiter", recruiterSchema);
