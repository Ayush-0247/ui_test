import { Link } from "react-router-dom";
import {
  Search,
  Users,
  ArrowRight,
  Layout,
  Sparkles,
  Compass,
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a7daee] via-[#80dcfe] to-[#bdd0fd] text-white flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="max-w-3xl text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold tracking-wider text-[#A78BFA] uppercase">
          <Sparkles className="w-4 h-4 text-[#A78BFA]" />
          App Reception
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
          Welcome to the Portal
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
          Select a page below to enter. Each page opens independently without
          top header text clutter.
        </p>
      </div>

      {/* Page Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Card 1: Page 1 */}
        <Link
          to="/page1"
          className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#7C5CFF]/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-lg shadow-xl hover:shadow-[#5B3DF5]/20 hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7C5CFF] to-[#5B3DF5] flex items-center justify-center shadow-lg shadow-[#5B3DF5]/30">
                <Search className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#5B3DF5]/20 text-[#A78BFA] border border-[#5B3DF5]/30">
                Page 1
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-[#A78BFA] transition-colors">
              Creator Discovery & Search
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Explore creator analytics, AI quality estimates, filters, reach
              metrics, and influencer search.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#A78BFA] group-hover:translate-x-1 transition-transform">
            <span>Open Page 1</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>

        {/* Card 2: Audience Insight */}
        <Link
          to="/audience-insight"
          className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#38BDF8]/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-lg shadow-xl hover:shadow-[#38BDF8]/20 hover:-translate-y-1"
        >
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#38BDF8] to-[#0284C7] flex items-center justify-center shadow-lg shadow-[#38BDF8]/30">
                <Users className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/30">
                Audience Insight
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-[#38BDF8] transition-colors">
              Audience Analytics & AI
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Detailed demographic breakdown, authenticity scores, quality
              ratings, and AI audience recommendations.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#38BDF8] group-hover:translate-x-1 transition-transform">
            <span>Open Audience Insight</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </Link>
      </div>

      {/* Footer hint */}
      <div className="mt-16 text-xs text-gray-500 flex items-center gap-2">
        <Compass className="w-4 h-4 text-gray-400" />
        <span>Reception Portal &bull; Select any destination above</span>
      </div>
    </div>
  );
};

export default Home;
