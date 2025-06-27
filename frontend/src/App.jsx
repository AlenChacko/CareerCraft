import { Routes, Route } from "react-router-dom";
import ChooseRole from "./pages/ChooseRole";
import EmployeeAuth from "./pages/employee/EmployeeAuth";
import RecruiterAuth from "./pages/recruiter/RecruiterAuth";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ChooseRole />} />
        <Route path="/employee/auth" element={<EmployeeAuth />} />
        <Route path="/recruiter/auth" element={<RecruiterAuth />} />
      </Routes>
    </div>
  );
};

export default App;
