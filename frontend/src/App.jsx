import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import ChooseRole from "./pages/ChooseRole";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<ChooseRole />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  );
};

export default App;
