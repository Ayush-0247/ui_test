import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PortalCard = ({ to, title }) => {
  // const styles = themeStyles[theme];

  return (
    <Link
      to={to}
      className="group flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex items-center gap-3">
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
          to="/Statsandmedia"
          title="Stats and Media Page"
          theme="sky"
        />{" "}
        <PortalCard
          to="/StoryAndHastag"
          title="Stories and Hastag Page"
          theme="sky"
        />
        <PortalCard
          to="/audience-insight"
          title="Audience Insight Page"
          theme="sky"
        />
        <PortalCard to="/lookalike" title="Lookalike Page" theme="sky" />
        <PortalCard to="/contact" title="Contact Page" theme="sky" /> <PortalCard to="/Searchbar" title="Search Bar Page" theme="sky" />
        <PortalCard to="/performance" title="Performance Page" theme="sky" />
        <PortalCard to="/overview" title="Overview Page" theme="sky" />
        <PortalCard to="/content" title="Content Page" theme="sky" />
        <PortalCard to="/audience" title="Audience Page" theme="sky" />
      </div>
    </div>
  );
};

export default Home;
