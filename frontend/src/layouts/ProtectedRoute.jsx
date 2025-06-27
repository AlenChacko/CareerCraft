import { Navigate } from "react-router-dom";
import { useRecruiterContext } from "../context/RecruiterContext";
import { useEmployeeContext } from "../context/EmployeeContext";

export const ProtectedRoute = ({ children, role }) => {
  const { recruiterInfo } = useRecruiterContext();
  const { employeeInfo } = useEmployeeContext(); // if employee context exists

  if (role === "recruiter" && !recruiterInfo?.token) {
    return <Navigate to="/" replace />;
  }

  if (role === "employee" && !employeeInfo?.token) {
    return <Navigate to="/" replace />;
  }

  return children;
};
