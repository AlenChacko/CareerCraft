import { createContext, useContext, useState } from "react";
import axios from "axios";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employeeInfo, setEmployeeInfo] = useState(() => {
    const stored = localStorage.getItem("employeeInfo");
    return stored ? JSON.parse(stored) : null;
  });

  const registerEmployee = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/employee/register`,
        formData
      );
      const info = {
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        token: data.token,
      };
      localStorage.setItem("employeeInfo", JSON.stringify(info));
      setEmployeeInfo(info);
      return data;
    } catch (err) {
      throw err;
    }
  };

  const loginEmployee = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/employee/login`,
        formData
      );
      const info = {
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        token: data.token,
      };
      localStorage.setItem("employeeInfo", JSON.stringify(info));
      setEmployeeInfo(info);
      return data;
    } catch (err) {
      throw err;
    }
  };

  const logoutEmployee = () => {
    localStorage.removeItem("employeeInfo");
    setEmployeeInfo(null);
  };

  return (
    <EmployeeContext.Provider
      value={{ registerEmployee, loginEmployee, employeeInfo, logoutEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => useContext(EmployeeContext);
