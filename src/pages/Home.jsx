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
    wrapperHover: "hover:border-indigo-300",
    iconBg: "bg-indigo-50",
    iconText: "text-indigo-600",
    badgeBg: "bg-indigo-50",
    badgeText: "text-indigo-700",
    badgeBorder: "border-indigo-100",
    titleHover: "group-hover:text-indigo-600",
    actionText: "text-indigo-600",
  },
  sky: {
    wrapperHover: "hover:border-sky-300",
    iconBg: "bg-sky-50",
    iconText: "text-sky-600",
    badgeBg: "bg-sky-50",
    badgeText: "text-sky-700",
    badgeBorder: "border-sky-100",
    titleHover: "group-hover:text-sky-600",
    actionText: "text-sky-600",
  },
};

const PortalCard = ({
  to,
  icon: Icon,
  badgeText,
  title,
  description,
  actionText,
  theme = "indigo",
}) => {
  const styles = themeStyles[theme];

  return (
    <Link
      to={to}
      className={`group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-gray-200 hover:shadow-md transition-all duration-300 ${styles.wrapperHover}`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${styles.iconBg}`}
          >
            <Icon className={`w-7 h-7 ${styles.iconText}`} />
          </div>
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border ${styles.badgeBg} ${styles.badgeText} ${styles.badgeBorder}`}
          >
            {badgeText}
          </span>
        </div>
        <h2
          className={`text-2xl font-bold mb-2 transition-colors text-gray-900 ${styles.titleHover}`}
        >
          {title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div
        className={`flex items-center gap-2 text-sm font-semibold group-hover:translate-x-1 transition-transform ${styles.actionText}`}
      >
        <span>{actionText}</span>
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-semibold tracking-wider text-indigo-600 uppercase shadow-sm">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          App Reception
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Welcome to the Portal
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
          Select a page below to enter. Each page opens independently without top
          header text clutter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        <PortalCard
          to="/page1"
          icon={Search}
          badgeText="Page 1"
          title="Creator Discovery & Search"
          description="Explore creator analytics, AI quality estimates, filters, reach metrics, and influencer search."
          actionText="Open Page 1"
          theme="indigo"
        />

        <PortalCard
          to="/audience-insight"
          icon={Users}
          badgeText="Audience Insight Page"
          title="Audience Analytics & AI"
          description="Detailed demographic breakdown, authenticity scores, quality ratings, and AI audience recommendations."
          actionText="Open Audience Insight"
          theme="sky"
        />

        <PortalCard
          to="/contact"
          icon={Users}
          badgeText="Contact"
          title="Contact Page"
          description="Connect with creators directly, manage outreach campaigns, and track communication history."
          actionText="Open Contact"
          theme="sky"
        />
      </div>

      <div className="mt-16 text-xs text-gray-400 flex items-center gap-2">
        <Compass className="w-4 h-4 text-gray-400" />
        <span>Reception Portal &bull; Select any destination above</span>
      </div>
    </div>
  );
};

export default Home;