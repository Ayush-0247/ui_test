import { Link } from "react-router-dom";
import { Users, ArrowRight } from "lucide-react";

const themeStyles = {
  indigo: {
    iconBg: "bg-indigo-50",
    iconText: "text-indigo-600",
  },
  sky: {
    iconBg: "bg-sky-50",
    iconText: "text-sky-600",
  },
};

const PortalCard = ({ to, icon: Icon, title, theme = "indigo" }) => {
  const styles = themeStyles[theme];

  return (
    <Link
      to={to}
      className="group flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${styles.iconBg}`}
        >
          <Icon className={`w-5 h-5 ${styles.iconText}`} />
        </div>
        <h2 className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
          {title}
        </h2>
      </div>

      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
    </Link>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-6">
      <div className="mb-10 flex flex-col items-center gap-3">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
          Welcome to KALO BY TG3
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
        {/* <PortalCard
          to="/page1"
          icon={Search}
          title="Creator Discovery"
          theme="indigo"
        /> */}

        <PortalCard
          to="/Searchbar"
          icon={Users}
          title="Search Bar Page"
          theme="sky"
        />

        <PortalCard
          to="/audience-insight"
          icon={Users}
          title="Audience Insight Page"
          theme="sky"
        />

        <PortalCard
          to="/contact"
          icon={Users}
          title="Contact Page"
          theme="sky"
        />
        <PortalCard
          to="/lookalike"
          icon={Users}
          title="Lookalike Page"
          theme="sky"
        />

        <PortalCard
          to="/StoryAndHastag"
          icon={Users}
          title="Stories and Hastag Page"
          theme="sky"
        />

        <PortalCard
          to="/Statsandmedia"
          icon={Users}
          title="Stats and Media Page"
          theme="sky"
        />

         <PortalCard
          to="/performance"
          icon={Users}
          title="Performance Page"
          theme="sky"
        />

        <PortalCard
          to="/overview"
          icon={Users}
          title="Overview Page"
          theme="sky"
        />
      </div>
    </div>
  );
};

export default Home;
