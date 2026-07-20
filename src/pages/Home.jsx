import { Link } from "react-router-dom";
import {
  Search,
  Users,
  ArrowRight,
  Sparkles,
  Compass,
} from "lucide-react";

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

const PortalCard = ({
  to,
  icon: Icon,
  title,
  theme = "indigo",
}) => {
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
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[11px] font-semibold tracking-wider text-gray-500 uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          App Reception
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-800">
          Portal
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl w-full">
        <PortalCard
          to="/page1"
          icon={Search}
          title="Creator Discovery"
          theme="indigo"
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
      </div>

      <div className="mt-12 flex items-center gap-2 text-xs text-gray-400">
        <Compass className="w-3.5 h-3.5" />
        <span>Select a destination</span>
      </div>
    </div>
  );
};

export default Home;