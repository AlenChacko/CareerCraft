import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const EmployeeNavbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-5 flex items-center justify-between">
      {/* Left: Brand Name */}
      <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer">
        <span className="text-purple-700 hover:text-blue-600 transition-colors duration-300">
          Career
        </span>
        <span className="text-blue-600 hover:text-purple-700 transition-colors duration-300">
          Craft
        </span>
      </h1>

      {/* Right: Employee Name and Logout */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 text-base text-gray-700">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span>John Doe</span>
        </div>
        <button className="flex items-center gap-2 text-base text-red-500 hover:text-red-700 transition">
          <FaSignOutAlt className="text-xl" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default EmployeeNavbar;
