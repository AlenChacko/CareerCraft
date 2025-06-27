import { Routes, Route } from "react-router-dom";
import ChooseRole from "./pages/ChooseRole";
import EmployeeAuth from "./pages/employee/EmployeeAuth";
import RecruiterAuth from "./pages/recruiter/RecruiterAuth";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import RecruiterProfile from "./pages/recruiter/RecruiterProfile";
import { ToastContainer } from "react-toastify";
import EmployeeDashboard from "./pages/employee/EmployeeDashBoard";
import { ProtectedRoute } from "./layouts/ProtectedRoute";
import { PublicRoute } from "./layouts/PublicRoute";
import EditRecruiter from "./pages/recruiter/EditRecruiter";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute role="recruiter">
              <ChooseRole />
            </PublicRoute>
          }
        />
        <Route
          path="/employee/auth"
          element={
            <PublicRoute role="employee">
              <EmployeeAuth />
            </PublicRoute>
          }
        />
        <Route
          path="/recruiter/auth"
          element={
            <PublicRoute role="recruiter">
              <RecruiterAuth />
            </PublicRoute>
          }
        />
        <Route
          path="/recruiter/dashboard/:id"
          element={
            <ProtectedRoute role="recruiter">
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/employee/dashboard/:id"
          element={
            <ProtectedRoute role="employee">
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/profile/:id"
          element={
            <ProtectedRoute>
              <RecruiterProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/edit/:id"
          element={
            <ProtectedRoute>
              <EditRecruiter />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
