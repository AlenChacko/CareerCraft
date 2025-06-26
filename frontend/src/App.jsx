import Auth from "./pages/Auth";
import ChooseRole from "./pages/ChooseRole";
import EmployeeDash from './pages/employee/EmployeeDash'
import RecruiterDash from './pages/recruiter/RecruiterDash'

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<ChooseRole />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/employee/dashboard" element={<EmployeeDash />} />
        <Route path="/recruiter/dashboard" element={<RecruiterDash />} />
      </Routes>
    </div>
  );
};

export default App;
