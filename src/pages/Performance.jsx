
import {
  Home,
  Users,
  BarChart2,
  MessageSquare,
  LayoutGrid,
  Star,
  Mail,
  Settings,
  Lock,
  Plus,
  Bookmark,
  Send,
  MoreVertical,
  MapPin,
  CheckCircle2,
  Heart,
  ThumbsUp,
  FileText,
  ShieldCheck,
  Info,
  ChevronDown,
  Sparkles,
  AlertTriangle,
  Clock,
  Link,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

function InstagramIcon({ size = 12, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Initial Avatar Component with colorful gradient backgrounds
function GradientAvatar({ name, src, size = 40, className = "" }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`rounded-full object-cover shrink-0 ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className={`rounded-full bg-gradient-to-tr from-purple-400 via-pink-400 to-rose-300 text-white font-semibold flex items-center justify-center shrink-0 shadow-sm ${className}`}
      style={{ width: size, height: size, fontSize: size * 0.38 }}
    >
      {initials}
    </div>
  );
}

export default function Performance() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-gray-800 flex font-sans text-xs">
      {/* 1. Left Icon Sidebar */}
      <aside className="w-14 bg-white border-r border-gray-200 flex flex-col justify-between items-center py-4 shrink-0">
        <div className="flex flex-col items-center gap-5 w-full">
          {/* Logo */}
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-base shadow-sm">
            e
          </div>

          {/* Nav Icons */}
          <nav className="flex flex-col items-center gap-3 w-full px-2">
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
              <Home size={17} />
            </button>
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
              <Users size={17} />
            </button>
            {/* Active Item */}
            <button className="w-9 h-9 rounded-xl flex items-center justify-center bg-purple-50 text-purple-600 font-medium transition-colors shadow-xs">
              <BarChart2 size={17} />
            </button>
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
              <MessageSquare size={17} />
            </button>
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
              <LayoutGrid size={17} />
            </button>
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
              <Star size={17} />
            </button>
            <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition-colors">
              <Mail size={17} />
            </button>
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col items-center gap-3">
          <button className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
            <Settings size={17} />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-300 text-gray-700 font-semibold flex items-center justify-center text-[10px]">
            JD
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {/* Top Profile Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left Profile Details */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <GradientAvatar
                  name="Mariale"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  size={76}
                />
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-[2px] shadow-xs">
                  <CheckCircle2
                    size={18}
                    className="text-blue-500 fill-blue-500 text-white"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xl font-bold text-gray-900 leading-none">
                    Mariale
                  </h1>
                  <CheckCircle2
                    size={16}
                    className="text-blue-500 fill-blue-500 text-white"
                  />
                </div>

                <div className="flex items-center gap-3 text-[11px] text-gray-500">
                  <span className="text-gray-600 font-medium">@mariale</span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-gray-50 border border-gray-200 text-gray-600 text-[10px]">
                    <InstagramIcon size={11} className="text-pink-500" /> Instagram
                  </span>
                  <span className="flex items-center gap-0.5 text-gray-400">
                    <MapPin size={11} /> USA
                  </span>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap items-center gap-1.5 mt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium text-[10px]">
                    Beauty
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium text-[10px]">
                    Cosmetics & Personal Care
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 font-medium text-[10px]">
                    Beauty & Skincare
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col items-end gap-2.5 self-stretch justify-between">
              <div className="flex items-center gap-2">
                <button className="h-8 px-3.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium text-[11px] flex items-center gap-1.5 shadow-xs transition-colors">
                  <Lock size={12} /> Unlock Full Report
                </button>
                <button className="w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-500 transition-colors">
                  <MoreVertical size={14} />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button className="h-7 px-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium text-[10px] flex items-center gap-1 transition-colors">
                  <Plus size={11} /> Add to Campaign
                </button>
                <button className="h-7 px-3 rounded-md border border-purple-200 hover:bg-purple-50 text-purple-700 font-medium text-[10px] flex items-center gap-1 transition-colors">
                  <Bookmark size={11} /> Save Creator
                </button>
                <button className="h-7 px-3 rounded-md border border-purple-200 hover:bg-purple-50 text-purple-700 font-medium text-[10px] flex items-center gap-1 transition-colors">
                  <Send size={11} /> Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Key Performance Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {/* Followers */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-2.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Users size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">Followers</p>
              <p className="text-base font-bold text-gray-900 leading-tight">
                6.0M
              </p>
              <p className="text-[9px] text-emerald-600 font-semibold flex items-center gap-0.5">
                +3.2%{" "}
                <span className="text-gray-400 font-normal">vs 30 days</span>
              </p>
            </div>
          </div>

          {/* Engagement Rate */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-2.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Heart size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">
                Engagement Rate
              </p>
              <p className="text-base font-bold text-gray-900 leading-tight">
                1.79%
              </p>
              <p className="text-[9px] text-emerald-600 font-semibold flex items-center gap-0.5">
                +0.29pp{" "}
                <span className="text-gray-400 font-normal">vs 30 days</span>
              </p>
            </div>
          </div>

          {/* Avg Likes */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-2.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <ThumbsUp size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">Avg Likes</p>
              <p className="text-base font-bold text-gray-900 leading-tight">
                106.9K
              </p>
              <p className="text-[9px] text-emerald-600 font-semibold flex items-center gap-0.5">
                +8.7%{" "}
                <span className="text-gray-400 font-normal">vs 30 days</span>
              </p>
            </div>
          </div>

          {/* Avg Comments */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-2.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <MessageSquare size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">
                Avg Comments
              </p>
              <p className="text-base font-bold text-gray-900 leading-tight">
                2.8K
              </p>
              <p className="text-[9px] text-emerald-600 font-semibold flex items-center gap-0.5">
                +5.1%{" "}
                <span className="text-gray-400 font-normal">vs 30 days</span>
              </p>
            </div>
          </div>

          {/* Posts */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-2.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <FileText size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">Posts</p>
              <p className="text-base font-bold text-gray-900 leading-tight">
                6.3K
              </p>
              <p className="text-[9px] text-gray-400">All time</p>
            </div>
          </div>

          {/* Audience Quality */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex items-center gap-2.5 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={16} />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-medium">
                Audience Quality
              </p>
              <p className="text-base font-bold text-gray-900 leading-tight">
                88{" "}
                <span className="text-xs font-normal text-gray-400">/ 100</span>
              </p>
              <p className="text-[9px] text-emerald-600 font-semibold">
                High Quality
              </p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 flex items-center gap-6 px-1 text-[11px] font-medium text-gray-500">
          <button className="pb-2 text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors">
            <Home size={12} /> Overview
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors">
            <Users size={12} /> Audience
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors">
            <FileText size={12} /> Content
          </button>

          {/* Active Performance Tab */}
          <button className="pb-2 text-purple-600 font-semibold border-b-2 border-purple-600 flex items-center gap-1">
            <BarChart2 size={12} /> Performance
          </button>

          <button className="pb-2 text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors">
            <Users size={12} /> Partnerships
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors">
            <Users size={12} /> Similar Creators
          </button>
          <button className="pb-2 text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors">
            <Link size={12} /> Contact
          </button>
        </div>

        {/* SECTION ROW 1: Performance Trend & AI Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* 1. Performance Trend Chart */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-gray-900 text-xs">
                    1. Performance Trend
                  </h3>
                  <Info size={12} className="text-gray-400" />
                </div>
                <button className="h-6 px-2 rounded border border-gray-200 text-[10px] text-gray-600 flex items-center gap-1 hover:bg-gray-50">
                  Last 90 days <ChevronDown size={10} />
                </button>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-purple-600" />{" "}
                  Engagement Rate (%)
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-sky-500" /> Avg Likes
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded bg-purple-200" /> Posts
                </span>
              </div>
            </div>

            {/* SVG Chart Graphic */}
            <div className="relative w-full h-36 mt-1">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 500 130"
              >
                {/* Grid Lines */}
                <line
                  x1="30"
                  y1="20"
                  x2="470"
                  y2="20"
                  stroke="#F3F4F6"
                  strokeDasharray="3 3"
                />
                <line
                  x1="30"
                  y1="45"
                  x2="470"
                  y2="45"
                  stroke="#F3F4F6"
                  strokeDasharray="3 3"
                />
                <line
                  x1="30"
                  y1="70"
                  x2="470"
                  y2="70"
                  stroke="#F3F4F6"
                  strokeDasharray="3 3"
                />
                <line
                  x1="30"
                  y1="95"
                  x2="470"
                  y2="95"
                  stroke="#F3F4F6"
                  strokeDasharray="3 3"
                />
                <line x1="30" y1="115" x2="470" y2="115" stroke="#E5E7EB" />

                {/* Y-Axis Left Labels (Engagement %) */}
                <text x="10" y="23" className="text-[9px] fill-gray-400">
                  4%
                </text>
                <text x="10" y="48" className="text-[9px] fill-gray-400">
                  3%
                </text>
                <text x="10" y="73" className="text-[9px] fill-gray-400">
                  2%
                </text>
                <text x="10" y="98" className="text-[9px] fill-gray-400">
                  1%
                </text>
                <text x="10" y="118" className="text-[9px] fill-gray-400">
                  0%
                </text>

                {/* Y-Axis Right Labels (Likes) */}
                <text x="475" y="23" className="text-[9px] fill-gray-400">
                  200K
                </text>
                <text x="475" y="48" className="text-[9px] fill-gray-400">
                  150K
                </text>
                <text x="475" y="73" className="text-[9px] fill-gray-400">
                  100K
                </text>
                <text x="475" y="98" className="text-[9px] fill-gray-400">
                  50K
                </text>
                <text x="475" y="118" className="text-[9px] fill-gray-400">
                  0
                </text>

                {/* Post Bars at Bottom */}
                {[50, 95, 140, 185, 230, 275, 320, 365, 410, 455].map(
                  (x, i) => (
                    <rect
                      key={i}
                      x={x - 3}
                      y={115 - (15 + (i % 3) * 8)}
                      width="6"
                      height={15 + (i % 3) * 8}
                      className="fill-purple-300"
                      rx="1"
                    />
                  ),
                )}

                {/* Sky Blue Line (Avg Likes) */}
                <path
                  d="M 50 82 L 95 78 L 140 85 L 185 75 L 230 81 L 275 80 L 320 83 L 365 77 L 410 76 L 455 83"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2"
                />
                {[
                  [50, 82],
                  [95, 78],
                  [140, 85],
                  [185, 75],
                  [230, 81],
                  [275, 80],
                  [320, 83],
                  [365, 77],
                  [410, 76],
                  [455, 83],
                ].map(([cx, cy], idx) => (
                  <circle
                    key={idx}
                    cx={cx}
                    cy={cy}
                    r="2.5"
                    className="fill-white stroke-sky-500"
                    strokeWidth="1.5"
                  />
                ))}

                {/* Purple Line (Engagement Rate) */}
                <path
                  d="M 50 48 L 95 52 L 140 42 L 185 53 L 230 40 L 275 44 L 320 47 L 365 30 L 410 33 L 455 42"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="2.5"
                />
                {[
                  [50, 48],
                  [95, 52],
                  [140, 42],
                  [185, 53],
                  [230, 40],
                  [275, 44],
                  [320, 47],
                  [365, 30],
                  [410, 33],
                  [455, 42],
                ].map(([cx, cy], idx) => (
                  <circle
                    key={idx}
                    cx={cx}
                    cy={cy}
                    r="3"
                    className="fill-purple-600 stroke-white"
                    strokeWidth="1.5"
                  />
                ))}

                {/* X-Axis Dates */}
                <text
                  x="50"
                  y="128"
                  textAnchor="middle"
                  className="text-[9px] fill-gray-500 font-medium"
                >
                  Mar 17
                </text>
                <text
                  x="115"
                  y="128"
                  textAnchor="middle"
                  className="text-[9px] fill-gray-500 font-medium"
                >
                  Mar 31
                </text>
                <text
                  x="180"
                  y="128"
                  textAnchor="middle"
                  className="text-[9px] fill-gray-500 font-medium"
                >
                  Apr 14
                </text>
                <text
                  x="245"
                  y="128"
                  textAnchor="middle"
                  className="text-[9px] fill-gray-500 font-medium"
                >
                  Apr 28
                </text>
                <text
                  x="310"
                  y="128"
                  textAnchor="middle"
                  className="text-[9px] fill-gray-500 font-medium"
                >
                  May 12
                </text>
                <text
                  x="375"
                  y="128"
                  textAnchor="middle"
                  className="text-[9px] fill-gray-500 font-medium"
                >
                  May 26
                </text>
                <text
                  x="440"
                  y="128"
                  textAnchor="middle"
                  className="text-[9px] fill-gray-500 font-medium"
                >
                  Jun 9
                </text>
              </svg>
            </div>
          </div>

          {/* AI Performance Summary */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <Sparkles size={14} className="text-purple-600" />
                <h3 className="font-bold text-gray-900 text-xs">
                  AI Performance Summary
                </h3>
                <Info size={12} className="text-gray-400" />
              </div>

              <div className="flex items-center gap-4">
                {/* Circular Score Donut Chart */}
                <div className="flex flex-col items-center">
                  <p className="text-[10px] text-gray-400 font-semibold mb-1">
                    Performance Score
                  </p>
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <svg
                      className="w-full h-full -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="text-gray-100"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-purple-600"
                        strokeDasharray="89, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
                      <span className="text-base font-bold text-gray-900">
                        89
                      </span>
                      <span className="text-[9px] text-gray-400 font-medium">
                        /100
                      </span>
                    </div>
                  </div>
                  <span className="mt-1 text-[10px] font-bold text-emerald-600">
                    Excellent
                  </span>
                </div>

                {/* Bullet Points */}
                <div className="flex-1 flex flex-col gap-2 text-[10px]">
                  <div className="flex items-start gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={10} />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Strengths
                      </span>
                      <p className="text-gray-500 leading-tight">
                        High engagement rate, strong like rate, consistent
                        posting
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <AlertTriangle size={10} />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Risks</span>
                      <p className="text-gray-500 leading-tight">
                        Comment rate slightly below industry average
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5">
                    <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles size={10} />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">
                        Growth Opportunities
                      </span>
                      <p className="text-gray-500 leading-tight">
                        Reels drive highest engagement, room to increase video
                        mix
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Highlight Banner */}
            <div className="mt-3 bg-emerald-50 border border-emerald-100 rounded-xl p-2.5 flex items-center gap-2">
              <Sparkles size={13} className="text-emerald-600 shrink-0" />
              <p className="text-[10px] text-emerald-900 font-medium leading-tight">
                Mariale is outperforming{" "}
                <span className="font-bold text-emerald-700">87%</span> of
                creators in Beauty & Skincare
              </p>
            </div>
          </div>
        </div>

        {/* SECTION ROW 2: Top Performing Content | Content Format | Posting Frequency */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* 2. Top Performing Content Table */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <h3 className="font-bold text-gray-900 text-xs">
                  2. Top Performing Content
                </h3>
                <Info size={12} className="text-gray-400" />
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[10px]">
                  <thead>
                    <tr className="text-gray-400 border-b border-gray-100 pb-1 font-medium">
                      <th className="pb-1.5 font-medium">Preview</th>
                      <th className="pb-1.5 font-medium">Type</th>
                      <th className="pb-1.5 font-medium">Posted Date</th>
                      <th className="pb-1.5 font-medium">Likes</th>
                      <th className="pb-1.5 font-medium">Comments</th>
                      <th className="pb-1.5 font-medium">Eng. Rate</th>
                      <th className="pb-1.5 font-medium">Caption / Text</th>
                      <th className="pb-1.5 font-medium">Hashtags</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {[
                      {
                        date: "Jun 14, 2025",
                        likes: "182.5K",
                        comments: "2.8K",
                        rate: "2.46%",
                        text: "my skincare summer fav ✨",
                        tags: 12,
                      },
                      {
                        date: "Jun 11, 2025",
                        likes: "168.4K",
                        comments: "2.2K",
                        rate: "2.18%",
                        text: "5 makeup must-haves 💄",
                        tags: 10,
                      },
                      {
                        date: "Jun 9, 2025",
                        likes: "144.1K",
                        comments: "1.9K",
                        rate: "1.90%",
                        text: "trying viral blush combo ✨",
                        tags: 11,
                      },
                      {
                        date: "Jun 7, 2025",
                        likes: "137.2K",
                        comments: "1.6K",
                        rate: "1.75%",
                        text: "gym fit + new perfume fav ✨",
                        tags: 9,
                      },
                      {
                        date: "Jun 5, 2025",
                        likes: "132.4K",
                        comments: "1.6K",
                        rate: "1.63%",
                        text: "my everyday makeup routine 💄",
                        tags: 11,
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-gray-50/80 transition-colors"
                      >
                        <td className="py-1.5">
                          <GradientAvatar
                            name={`Post ${i}`}
                            size={28}
                            className="rounded-lg"
                          />
                        </td>
                        <td className="py-1.5">
                          <InstagramIcon size={12} className="text-pink-500" />
                        </td>
                        <td className="py-1.5 text-gray-500">{row.date}</td>
                        <td className="py-1.5 font-medium text-gray-800">
                          {row.likes}
                        </td>
                        <td className="py-1.5 text-gray-600">{row.comments}</td>
                        <td className="py-1.5 font-semibold text-purple-600">
                          {row.rate}
                        </td>
                        <td className="py-1.5 text-gray-600 max-w-[110px] truncate">
                          {row.text}
                        </td>
                        <td className="py-1.5 text-gray-500 text-center">
                          {row.tags}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <button className="mt-3 text-[10px] font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 self-start">
              View all posts <ChevronRight size={11} />
            </button>
          </div>

          {/* 3. Content Format Performance */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <h3 className="font-bold text-gray-900 text-xs">
                  3. Content Format Performance
                </h3>
                <Info size={12} className="text-gray-400" />
              </div>

              <div className="flex items-center justify-between text-[9px] text-gray-400 font-medium mb-2">
                <span>Format</span>
                <div className="flex items-center gap-6">
                  <span>Avg Eng. Rate</span>
                  <span>Avg Likes</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {[
                  { name: "Reels", rate: "2.46%", likes: "122.1K", w: "80%" },
                  { name: "Carousel", rate: "1.97%", likes: "96.6K", w: "60%" },
                  { name: "Image", rate: "1.56%", likes: "71.8K", w: "45%" },
                  { name: "Story", rate: "0.83%", likes: "18.2K", w: "22%" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-medium text-gray-700 w-16">
                        {item.name}
                      </span>
                      <div className="flex-1 mx-2 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full bg-purple-600 rounded-full"
                          style={{ width: item.w }}
                        />
                      </div>
                      <span className="font-semibold text-purple-600 w-10 text-right">
                        {item.rate}
                      </span>
                      <span className="text-gray-600 w-12 text-right">
                        {item.likes}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-3 text-[10px] font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 self-start">
              View format insights <ChevronRight size={11} />
            </button>
          </div>

          {/* 4. Posting Frequency Heatmap */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-gray-900 text-xs">
                    4. Posting Frequency
                  </h3>
                  <Info size={12} className="text-gray-400" />
                </div>
                <button className="h-6 px-2 rounded border border-gray-200 text-[10px] text-gray-600 flex items-center gap-1 hover:bg-gray-50">
                  Last 90 days <ChevronDown size={10} />
                </button>
              </div>

              {/* Heatmap Grid */}
              <div className="flex flex-col gap-1">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                  (day, rowIdx) => (
                    <div key={day} className="flex items-center gap-1">
                      <span className="w-6 text-[9px] text-gray-400 font-medium">
                        {day}
                      </span>
                      <div className="flex-1 grid grid-cols-12 gap-0.5">
                        {Array.from({ length: 12 }).map((_, colIdx) => {
                          // Density color mock logic
                          const intensity = (rowIdx * 3 + colIdx * 7) % 5;
                          const bgClasses = [
                            "bg-purple-50",
                            "bg-purple-100",
                            "bg-purple-300",
                            "bg-purple-500",
                            "bg-purple-700",
                          ];
                          return (
                            <div
                              key={colIdx}
                              className={`h-3.5 rounded-[2px] ${bgClasses[intensity]} transition-opacity hover:opacity-80`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* X-Axis Hours Labels */}
              <div className="flex items-center justify-between text-[8px] text-gray-400 ml-7 mt-1.5 font-medium">
                <span>12 AM</span>
                <span>4 AM</span>
                <span>8 AM</span>
                <span>12 PM</span>
                <span>4 PM</span>
                <span>8 PM</span>
              </div>
            </div>

            {/* Heatmap Legend */}
            <div className="mt-3 flex items-center justify-between text-[9px] text-gray-400">
              <span>Low activity</span>
              <div className="flex items-center gap-0.5">
                <div className="w-2.5 h-2.5 rounded-[2px] bg-purple-50" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-purple-100" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-purple-300" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-purple-500" />
                <div className="w-2.5 h-2.5 rounded-[2px] bg-purple-700" />
              </div>
              <span>High activity</span>
            </div>
          </div>
        </div>

        {/* SECTION ROW 3: Brand Affinity | Hashtag Intelligence | Similar Creators */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {/* 5. Brand Affinity & Industry Fit */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <h3 className="font-bold text-gray-900 text-xs">
                  5. Brand Affinity & Industry Fit
                </h3>
                <Info size={12} className="text-gray-400" />
              </div>

              <div className="grid grid-cols-12 gap-3">
                {/* Score Left Box */}
                <div className="col-span-5 border-r border-gray-100 pr-2 flex flex-col justify-center">
                  <p className="text-[9px] text-gray-400 font-semibold mb-1">
                    Brand Affinity Score
                  </p>
                  <p className="text-2xl font-bold text-gray-900 leading-none">
                    93{" "}
                    <span className="text-xs font-normal text-gray-400">
                      /100
                    </span>
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[9px]">
                    <Star
                      size={9}
                      className="fill-emerald-600 text-emerald-600"
                    />{" "}
                    Excellent Fit
                  </div>
                </div>

                {/* Categories Right Box */}
                <div className="col-span-7 flex flex-col gap-2">
                  <div>
                    <p className="text-[9px] text-gray-400 font-medium mb-1">
                      Top Affinity Categories
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {[
                        "Skin Care",
                        "Makeup",
                        "Fragrance",
                        "Hair Care",
                        "Wellness",
                        "Personal Care",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 text-[9px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[9px] text-gray-400 font-medium mb-1">
                      Potential Industry Verticals
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {[
                        "Beauty",
                        "Skincare",
                        "Cosmetics",
                        "Wellness",
                        "Lifestyle",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 py-0.5 rounded bg-purple-50 text-purple-700 text-[9px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Hashtag Intelligence */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <h3 className="font-bold text-gray-900 text-xs">
                  6. Hashtag Intelligence
                </h3>
                <Info size={12} className="text-gray-400" />
              </div>

              <div className="grid grid-cols-12 gap-3">
                {/* Left Bars */}
                <div className="col-span-7 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[9px] text-gray-400 font-medium">
                    <span>Top Hashtags</span>
                    <span>Avg Freg.</span>
                  </div>
                  {[
                    { tag: "#skincare", w: "90%", count: "18.2M" },
                    { tag: "#makeup", w: "70%", count: "12.1M" },
                    { tag: "#beauty", w: "55%", count: "9.6M" },
                    { tag: "#grwm", w: "40%", count: "6.8M" },
                    { tag: "#selfcare", w: "30%", count: "5.2M" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between text-[9px]"
                    >
                      <span className="text-gray-600 font-medium w-16 truncate">
                        {item.tag}
                      </span>
                      <div className="flex-1 mx-1.5 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-600 rounded-full"
                          style={{ width: item.w }}
                        />
                      </div>
                      <span className="text-gray-700 font-semibold w-8 text-right">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Right Totals */}
                <div className="col-span-5 border-l border-gray-100 pl-3 flex flex-col justify-center gap-2 text-[10px]">
                  <div>
                    <p className="text-gray-400 text-[9px]">Total Reach</p>
                    <p className="font-bold text-gray-900 text-sm">
                      62.3M{" "}
                      <span className="text-[9px] text-emerald-600 font-semibold">
                        +12.4%
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[9px]">Total Engagement</p>
                    <p className="font-bold text-gray-900 text-sm">
                      2.1M{" "}
                      <span className="text-[9px] text-emerald-600 font-semibold">
                        +9.6%
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[9px]">Engagement Rate</p>
                    <p className="font-bold text-gray-900 text-sm">
                      3.37%{" "}
                      <span className="text-[9px] text-emerald-600 font-semibold">
                        +0.41pp
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 7. Similar Creators */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-gray-200 p-4 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-gray-900 text-xs">
                    7. Similar Creators
                  </h3>
                  <Info size={12} className="text-gray-400" />
                </div>
                <button className="w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <ChevronRight size={12} />
                </button>
              </div>

              {/* Creators Cards Row */}
              <div className="grid grid-cols-5 gap-1.5 text-center">
                {[
                  {
                    name: "glowbymaya",
                    handle: "@glowbymaya",
                    followers: "5.2M",
                    rate: "2.31%",
                  },
                  {
                    name: "beautybybri",
                    handle: "@beautybybri",
                    followers: "4.8M",
                    rate: "2.67%",
                  },
                  {
                    name: "skincares.official",
                    handle: "@skincares.official",
                    followers: "6.1M",
                    rate: "2.18%",
                  },
                  {
                    name: "makeupbyjules",
                    handle: "@makeupbyjules",
                    followers: "3.9M",
                    rate: "2.33%",
                  },
                  {
                    name: "alexa.rid",
                    handle: "@alexa.rid",
                    followers: "4.2M",
                    rate: "2.15%",
                  },
                ].map((c, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-0.5 p-1 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <GradientAvatar name={c.name} size={32} />
                    <p className="font-bold text-gray-900 text-[9px] truncate w-full mt-0.5">
                      {c.name}
                    </p>
                    <p className="text-[8px] text-gray-400 truncate w-full">
                      {c.handle}
                    </p>
                    <p className="text-[8px] text-gray-700 font-medium">
                      {c.followers}{" "}
                      <span className="text-gray-400">Followers</span>
                    </p>
                    <p className="text-[8px] font-semibold text-purple-600">
                      {c.rate}{" "}
                      <span className="text-gray-400 font-normal">
                        Eng. Rate
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button className="mt-2 text-[10px] font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 self-start">
              View more similar creators <ChevronRight size={11} />
            </button>
          </div>
        </div>

        {/* SECTION ROW 4: 8. Insights from Data Cards */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-xs">
          <h3 className="font-bold text-gray-900 text-xs mb-3">
            8. Insights from Data
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2.5">
            {/* Card 1 */}
            <div className="p-2.5 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <TrendingUp size={14} />
              </div>
              <p className="text-[10px] text-gray-600 leading-tight">
                Engagement rate has increased{" "}
                <span className="font-bold text-gray-800">+0.29pp</span> over
                the last 30 days.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-2.5 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                <Star size={14} />
              </div>
              <p className="text-[10px] text-gray-600 leading-tight">
                Reels generate{" "}
                <span className="font-bold text-gray-800">25%</span> higher
                engagement than other formats.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-2.5 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                <Clock size={14} />
              </div>
              <p className="text-[10px] text-gray-600 leading-tight">
                Peak posting times are{" "}
                <span className="font-bold text-gray-800">12 PM - 8 PM</span> on
                weekdays.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-2.5 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <MessageSquare size={14} />
              </div>
              <p className="text-[10px] text-gray-600 leading-tight">
                High like rate but comments are{" "}
                <span className="font-bold text-gray-800">18%</span> below
                industry average.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-2.5 rounded-xl border border-gray-100 bg-gray-50/50 flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <Users size={14} />
              </div>
              <p className="text-[10px] text-gray-600 leading-tight">
                Audience quality is in the top{" "}
                <span className="font-bold text-gray-800">13%</span> of similar
                creators.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
