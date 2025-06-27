import { Routes, Route } from "react-router-dom";
import ChooseRole from "./pages/ChooseRole";
import EmployeeAuth from "./pages/employee/EmployeeAuth";
import RecruiterAuth from "./pages/recruiter/RecruiterAuth";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<ChooseRole />} />
        <Route path="/employee/auth" element={<EmployeeAuth />} />
        <Route path="/recruiter/auth" element={<RecruiterAuth />} />
        <Route path="/recruiter/dashboard/:id" element={<RecruiterDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
