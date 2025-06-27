import { createContext, useContext, useState } from "react";
import axios from "axios";

const RecruiterContext = createContext();

export const RecruiterProvider = ({ children }) => {
  const [recruiter, setRecruiter] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("recruiterToken") || ""
  );

  const registerRecruiter = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/recruiter/register`,
        formData
      );
      localStorage.setItem("recruiterToken", data.token);
      setToken(data.token);
      setRecruiter({
        _id: data._id,
        email: data.email,
        companyName: data.companyName,
      });
      return data;
    } catch (err) {
      throw err; // still throw so the form page can handle loading/UI
    }
  };

  const loginRecruiter = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/recruiter/login`,
        formData
      );
      localStorage.setItem("recruiterToken", data.token);
      setToken(data.token);
      setRecruiter({
        _id: data._id,
        email: data.email,
        companyName: data.companyName,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };

  return (
    <RecruiterContext.Provider
      value={{ registerRecruiter, recruiter, token, loginRecruiter }}
    >
      {children}
    </RecruiterContext.Provider>
  );
};

export const useRecruiterContext = () => useContext(RecruiterContext);
