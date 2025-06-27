import { Navigate } from "react-router-dom";
import { useRecruiterContext } from "../context/RecruiterContext";
import { useEmployeeContext } from "../context/EmployeeContext";

export const PublicRoute = ({ children, role }) => {
  const { recruiterInfo } = useRecruiterContext();
  const { employeeInfo } = useEmployeeContext();

  if (role === "recruiter" && recruiterInfo?.token) {
    return <Navigate to={`/recruiter/dashboard/${recruiterInfo._id}`} replace />;
  }

  if (role === "employee" && employeeInfo?.token) {
    return <Navigate to={`/employee/dashboard/${employeeInfo._id}`} replace />;
  }

  return children;
};
