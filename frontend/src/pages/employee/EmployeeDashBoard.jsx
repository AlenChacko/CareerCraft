import { FaUserCircle, FaBriefcase, FaBell, FaEnvelope } from "react-icons/fa";
import EmployeeNavbar from "../../components/employee/EmployeeNavbar"; 

const EmployeeDashboard = () => {
  const dashboardItems = [
    {
      title: "My Profile",
      icon: <FaUserCircle className="text-3xl text-purple-600" />,
      description: "View and edit your profile details.",
    },
    {
      title: "Applied Jobs",
      icon: <FaBriefcase className="text-3xl text-purple-600" />,
      description: "Track all jobs you’ve applied for.",
    },
    {
      title: "Notifications",
      icon: <FaBell className="text-3xl text-purple-600" />,
      description: "Check new alerts and updates.",
    },
    {
      title: "Messages",
      icon: <FaEnvelope className="text-3xl text-purple-600" />,
      description: "Read and reply to messages.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <EmployeeNavbar />

      <div className="py-10 px-6">
        <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">
          Employee Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {dashboardItems.map((item) => (
            <div
              key={item.title}
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {item.icon}
              <h2 className="mt-4 text-xl font-semibold text-gray-700">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
