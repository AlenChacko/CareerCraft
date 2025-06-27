import {
  FaBriefcase,
  FaPlus,
  FaUserCircle,
  FaEnvelope,
  FaEye,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import RecruiterNavbar from "../../components/recruiter/RecruiterNavbar";
import { useRecruiterContext } from "../../context/RecruiterContext";

const RecruiterDashboard = () => {
  const { recruiterInfo } = useRecruiterContext();
  const navigate = useNavigate();

  const cardItems = [
    {
      label: "My Profile",
      icon: <FaUserCircle size={30} />,
      bg: "bg-purple-100",
      route: `/recruiter/profile/${recruiterInfo?._id}`, // dynamic ID
    },
    {
      label: "Posted Jobs",
      icon: <FaBriefcase size={30} />,
      bg: "bg-blue-100",
      route: `/recruiter/jobs`,
    },
    {
      label: "Create Job",
      icon: <FaPlus size={30} />,
      bg: "bg-green-100",
      route: `/recruiter/create`,
    },
    {
      label: "View Applications",
      icon: <FaEye size={30} />,
      bg: "bg-yellow-100",
      route: `/recruiter/applications`,
    },
    {
      label: "Inbox",
      icon: <FaEnvelope size={30} />,
      bg: "bg-pink-100",
      route: `/recruiter/inbox`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <RecruiterNavbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Welcome back, {recruiterInfo?.companyName || "Recruiter"}!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardItems.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.route)}
              className={`p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer ${card.bg}`}
            >
              <div className="mb-3 text-purple-700">{card.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">
                {card.label}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Click to manage</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
