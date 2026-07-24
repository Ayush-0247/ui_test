import { useNavigate } from "react-router-dom";
import { X, BarChart3, Layers, Users, UserPlus, User } from "lucide-react";

function TopTabs({ activeTab }) {
  const navigate = useNavigate();

  const tabs = [
    {
      label: "Statistics & Media",
      icon: <BarChart3 className="w-4 h-4" />,
      path: "/Statsandmedia",
    },
    {
      label: "Stories & Hashtags",
      icon: <Layers className="w-4 h-4" />,
      path: "/StoryAndHastag",
    },
    {
      label: "Audience Insights",
      icon: <Users className="w-4 h-4" />,
      path: "/audience-insight",
    },
    {
      label: "Lookalike Creator",
      icon: <UserPlus className="w-4 h-4" />,
      path: "/lookalike",
    },
    {
      label: "Contact Info",
      icon: <User className="w-4 h-4" />,
      path: "/contact",
    },
  ];

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 pt-2 pb-0 overflow-x-auto scrollbar-none gap-4">
      <div className="flex gap-6 sm:gap-8 min-w-max">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.path;

          return (
            <button
              key={tab.path}
              onClick={() => navigate(tab.path)}
              className={`flex items-center gap-2 pb-2.5 text-xs sm:text-sm transition whitespace-nowrap cursor-pointer ${
                isActive
                  ? "border-b-2 border-[#5B3DF5] text-[#5B3DF5] font-bold"
                  : "border-b-2 border-transparent text-[#6B7280] font-semibold hover:text-[#1F2937]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>

      <button className="mb-2 w-7 h-7 rounded-md bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 ml-2 hover:bg-gray-50">
        <X className="w-4 h-4 text-[#1F2937]" />
      </button>
    </div>
  );
}

export default TopTabs;