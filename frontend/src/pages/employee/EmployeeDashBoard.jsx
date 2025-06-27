import {
  FaUserCircle,
  FaBriefcase,
  FaBell,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* 🔥 Highlighted "Explore Jobs" Card */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <FaSearch className="text-4xl sm:text-5xl" />
              <div>
                <h2 className="text-2xl font-bold">Explore Jobs</h2>
                <p className="text-sm text-white/90">
                  Find new opportunities tailored just for you.
                </p>
              </div>
            </div>
            <button className="mt-4 sm:mt-0 bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Browse Jobs
            </button>
          </div>

          {/* Other Dashboard Cards */}
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
