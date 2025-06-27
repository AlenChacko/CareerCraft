import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("employeeToken") || ""
  );

  const registerEmployee = async (formData) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/employee/register`,
        formData
      );
      localStorage.setItem("employeeToken", data.token);
      setToken(data.token);
      setEmployee({
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
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
      localStorage.setItem("employeeToken", data.token);
      setToken(data.token);
      setEmployee({
        _id: data._id,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };

  return (
    <EmployeeContext.Provider
      value={{ registerEmployee, loginEmployee, employee, token }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};


export const useEmployeeContext = () => useContext(EmployeeContext)