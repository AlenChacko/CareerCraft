import { createContext, useContext, useState } from "react";
import axios from "axios";

const RecruiterContext = createContext();

export const RecruiterProvider = ({ children }) => {
  // Combine token and user info into one object
  const [recruiterInfo, setRecruiterInfo] = useState(() => {
    const stored = localStorage.getItem("recruiterInfo");
    return stored ? JSON.parse(stored) : null;
  });

  const registerRecruiter = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/recruiter/register`,
        formData
      );
      const info = {
        _id: data._id,
        email: data.email,
        companyName: data.companyName,
        token: data.token,
      };
      localStorage.setItem("recruiterInfo", JSON.stringify(info));
      setRecruiterInfo(info);
      return data;
    } catch (err) {
      throw err;
    }
  };

  const loginRecruiter = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/recruiter/login`,
        formData
      );
      const info = {
        _id: data._id,
        email: data.email,
        companyName: data.companyName,
        token: data.token,
      };
      localStorage.setItem("recruiterInfo", JSON.stringify(info));
      setRecruiterInfo(info);
      return data;
    } catch (err) {
      throw err;
    }
  };

  const logoutRecruiter = () => {
    localStorage.removeItem("recruiterInfo");
    setRecruiterInfo(null);
  };

  return (
    <RecruiterContext.Provider
      value={{ registerRecruiter, loginRecruiter, recruiterInfo, logoutRecruiter }}
    >
      {children}
    </RecruiterContext.Provider>
  );
};

export const useRecruiterContext = () => useContext(RecruiterContext);
