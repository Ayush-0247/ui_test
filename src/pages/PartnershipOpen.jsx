import {
  Building2,
  Users,
  BarChart3,
  MessageSquare,
  Sparkles,
  Mail,
  Lock,
  MoreHorizontal,
  Bookmark,
  Send,
  CheckCircle2,
  Heart,
  ThumbsUp,
  FileText,
  ShieldCheck,
  Eye,
  Folder,
  TrendingUp,
  Info,
  Zap,
  RotateCw,
  Megaphone,
  DollarSign,
  Calendar,
  Check,
  AlertTriangle,
  ChevronRight,
  MapPin,
  Video,
  Layers,
  Layout,
  Package,
  //   User,
  //   Instagram,
} from "lucide-react";
import SidebarOpen from "../components/SidebarOpen";

export default function App() {
  return (
   <div className="h-screen bg-[#F8FAFC] overflow-hidden">
      <SidebarOpen />

<div className="ml-[250px] h-screen overflow-y-auto">
        <main className="p-5 space-y-5">
  
  
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
     
     
            <div className="flex items-start sm:items-center gap-5">
       
       
              <div className="relative shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop"
                  alt="Mariale"
                  className="w-20 h-20 sm:w-22 sm:h-22 rounded-full object-cover ring-4 ring-purple-50 shadow-md"
                />
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-white fill-blue-600" />
                </div>
              </div>

              {/* Name and Meta */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                    Mariale
                  </h1>
                  <CheckCircle2 className="w-5 h-5 text-white fill-blue-500" />
                  <span className="text-slate-400 text-sm font-medium ml-1">
                    @mariale
                  </span>

                  {/* Instagram Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-linear-to-r from-purple-50 via-pink-50 to-orange-50 text-pink-700 px-2.5 py-1 rounded-lg text-xs font-semibold border border-pink-100 ml-1">
                    {/* <Instagram className="w-3.5 h-3.5 text-pink-600" /> */}
                    <span>Instagram</span>
                  </div>

                  {/* Location Tag */}
                  <div className="inline-flex items-center gap-1 text-slate-400 text-xs font-medium ml-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>USA</span>
                  </div>
                </div>

                {/* Categories Tags */}
                <div className="flex items-center gap-2 flex-wrap pt-0.5">
                  <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100/60">
                    Beauty
                  </span>
                  <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100/60">
                    Cosmetics & Personal Care
                  </span>
                  <span className="bg-purple-50 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full border border-purple-100/60">
                    Beauty & Skincare
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col items-end gap-3 shrink-0">
              {/* Top Row Actions */}
              <div className="flex items-center gap-2">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm shadow-purple-200 flex items-center gap-2 transition-all cursor-pointer">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Unlock Full Report</span>
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all cursor-pointer">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Row Campaign Actions */}
              <div className="flex items-center gap-2.5">
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1.5 transition-all shadow-sm shadow-purple-100 cursor-pointer">
                  <span className="text-base font-bold leading-none">+</span>
                  <span>Add to Campaign</span>
                </button>
                <button className="border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer">
                  <Bookmark className="w-3.5 h-3.5 text-slate-500" />
                  <span>Save Creator</span>
                </button>
                <button className="border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer">
                  <Send className="w-3.5 h-3.5 text-slate-500" />
                  <span>Contact</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= HEADER STATS ROW (6 KPI CARDS) ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {/* Card 1: Followers */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/60 flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 leading-tight">
                6.0M
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                Followers
              </div>
              <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                +3.2%{" "}
                <span className="text-slate-400 font-normal">vs 30 days</span>
              </div>
            </div>
          </div>

          {/* Card 2: Engagement Rate */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100/60 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 leading-tight">
                1.79%
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                Engagement Rate
              </div>
              <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                +0.29pp{" "}
                <span className="text-slate-400 font-normal">vs 30 days</span>
              </div>
            </div>
          </div>

          {/* Card 3: Avg Likes */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100/60 flex items-center justify-center shrink-0">
              <ThumbsUp className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 leading-tight">
                106.9K
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                Avg Likes
              </div>
              <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                +8.7%{" "}
                <span className="text-slate-400 font-normal">vs 30 days</span>
              </div>
            </div>
          </div>

          {/* Card 4: Avg Comments */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/60 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 leading-tight">
                2.8K
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                Avg Comments
              </div>
              <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                +5.1%{" "}
                <span className="text-slate-400 font-normal">vs 30 days</span>
              </div>
            </div>
          </div>

          {/* Card 5: Posts */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100/60 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 leading-tight">
                6.3K
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                Posts
              </div>
              <div className="text-[10px] font-semibold text-slate-400 mt-0.5">
                All time
              </div>
            </div>
          </div>

          {/* Card 6: Audience Quality */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100/60 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 leading-tight">
                88{" "}
                <span className="text-xs font-normal text-slate-400">/100</span>
              </div>
              <div className="text-[11px] font-medium text-slate-400">
                Audience Quality
              </div>
              <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                High Quality
              </div>
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION SUB-TABS BAR ================= */}
        <div className="border-b border-slate-200/80 flex items-center gap-8 text-xs font-medium text-slate-500 px-2 pt-1">
          <button className="flex items-center gap-1.5 py-2.5 hover:text-slate-800 transition-colors cursor-pointer">
            <Eye className="w-4 h-4" />
            <span>Overview</span>
          </button>
          <button className="flex items-center gap-1.5 py-2.5 hover:text-slate-800 transition-colors cursor-pointer">
            <Users className="w-4 h-4" />
            <span>Audience</span>
          </button>
          <button className="flex items-center gap-1.5 py-2.5 hover:text-slate-800 transition-colors cursor-pointer">
            <Folder className="w-4 h-4" />
            <span>Content</span>
          </button>
          <button className="flex items-center gap-1.5 py-2.5 hover:text-slate-800 transition-colors cursor-pointer">
            <BarChart3 className="w-4 h-4" />
            <span>Performance</span>
          </button>

          {/* Active Tab */}
          <button className="flex items-center gap-1.5 py-2.5 text-purple-600 font-semibold border-b-2 border-purple-600 -mb-px transition-colors cursor-pointer">
            <Building2 className="w-4 h-4" />
            <span>Partnerships</span>
          </button>

          <button className="flex items-center gap-1.5 py-2.5 hover:text-slate-800 transition-colors cursor-pointer">
            <Sparkles className="w-4 h-4" />
            <span>Similar Creators</span>
          </button>
          <button className="flex items-center gap-1.5 py-2.5 hover:text-slate-800 transition-colors cursor-pointer">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </div>

        {/* ================= DASHBOARD GRID SECTIONS ================= */}

        {/* ---------- ROW 1: PARTNERSHIP OVERVIEW & AI PARTNERSHIP SCORE ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* 1. Partnership Overview (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm font-bold text-slate-900">
                  1. Partnership Overview
                </h2>
                <Info className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
              </div>
            </div>

            {/* Sub-grid of 6 Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {/* Tile 1 */}
              <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  {/* Mini Sparkline */}
                  <svg
                    className="w-16 h-6 text-purple-500 stroke-current"
                    viewBox="0 0 60 20"
                    fill="none"
                  >
                    <path
                      d="M0 15 Q 15 18, 25 10 T 45 12 T 60 4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2.5">
                  <div className="text-xs text-slate-500 font-medium">
                    Total Brand Collaborations
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    58
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                    +16%{" "}
                    <span className="text-slate-400 font-normal">
                      vs last 90 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Tile 2 */}
              <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Zap className="w-3.5 h-3.5" />
                  </div>
                  <svg
                    className="w-16 h-6 text-blue-500 stroke-current"
                    viewBox="0 0 60 20"
                    fill="none"
                  >
                    <path
                      d="M0 16 Q 15 12, 30 14 T 45 8 T 60 5"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2.5">
                  <div className="text-xs text-slate-500 font-medium">
                    Active Partnerships
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    14
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                    +7%{" "}
                    <span className="text-slate-400 font-normal">
                      vs last 90 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Tile 3 */}
              <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <RotateCw className="w-3.5 h-3.5" />
                  </div>
                  <svg
                    className="w-16 h-6 text-purple-500 stroke-current"
                    viewBox="0 0 60 20"
                    fill="none"
                  >
                    <path
                      d="M0 14 Q 20 16, 35 11 T 50 8 T 60 3"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2.5">
                  <div className="text-xs text-slate-500 font-medium">
                    Repeat Brand Rate
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    72%
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                    +12pp{" "}
                    <span className="text-slate-400 font-normal">
                      vs last 90 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Tile 4 */}
              <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Megaphone className="w-3.5 h-3.5" />
                  </div>
                  <svg
                    className="w-16 h-6 text-blue-500 stroke-current"
                    viewBox="0 0 60 20"
                    fill="none"
                  >
                    <path
                      d="M0 18 Q 15 15, 30 10 T 45 13 T 60 6"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2.5">
                  <div className="text-xs text-slate-500 font-medium">
                    Sponsored Posts %
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    68%
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                    +9%{" "}
                    <span className="text-slate-400 font-normal">
                      vs last 90 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Tile 5 */}
              <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <DollarSign className="w-3.5 h-3.5" />
                  </div>
                  <svg
                    className="w-16 h-6 text-purple-500 stroke-current"
                    viewBox="0 0 60 20"
                    fill="none"
                  >
                    <path
                      d="M0 16 Q 15 14, 30 8 T 45 10 T 60 2"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2.5">
                  <div className="text-xs text-slate-500 font-medium">
                    Estimated Partnership Value
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    $312K
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                    +22%{" "}
                    <span className="text-slate-400 font-normal">
                      vs last 90 days
                    </span>
                  </div>
                </div>
              </div>

              {/* Tile 6 */}
              <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                    <Calendar className="w-3.5 h-3.5" />
                  </div>
                  <svg
                    className="w-16 h-6 text-purple-500 stroke-current"
                    viewBox="0 0 60 20"
                    fill="none"
                  >
                    <path
                      d="M0 15 Q 15 17, 30 11 T 45 12 T 60 5"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div className="mt-2.5">
                  <div className="text-xs text-slate-500 font-medium">
                    Average Campaign Duration
                  </div>
                  <div className="text-lg font-bold text-slate-900 mt-0.5">
                    45 Days
                  </div>
                  <div className="text-[10px] font-semibold text-emerald-500 mt-0.5">
                    +5 days{" "}
                    <span className="text-slate-400 font-normal">
                      vs last 90 days
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Partnership Score (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="flex items-center gap-1.5 mb-3">
              <h2 className="text-sm font-bold text-slate-900">
                AI Partnership Score
              </h2>
              <Info className="w-3.5 h-3.5 text-slate-400 cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
              {/* Radial Score Gauge (5 cols) */}
              <div className="sm:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="#F1F5F9"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="42"
                      stroke="url(#purpleGradient)"
                      strokeWidth="8"
                      strokeDasharray="263.8"
                      strokeDashoffset="21"
                      strokeLinecap="round"
                      fill="transparent"
                    />
                    <defs>
                      <linearGradient
                        id="purpleGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#6D28D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-extrabold text-slate-900 leading-none">
                      92
                    </span>
                    <span className="text-[10px] font-medium text-slate-400 mt-0.5">
                      /100
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-500 mt-2">
                  Excellent
                </span>
              </div>

              {/* Lists of Insights (7 cols) */}
              <div className="sm:col-span-7 space-y-3">
                {/* Strengths */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Strengths</span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-0.5 pl-5 list-disc">
                    <li>High repeat partnerships</li>
                    <li>Premium brand portfolio</li>
                    <li>Consistent sponsorship frequency</li>
                  </ul>
                </div>

                {/* Risks */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    <span>Risks</span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-0.5 pl-5 list-disc">
                    <li>Few long-term retainers</li>
                  </ul>
                </div>

                {/* Growth Opportunities */}
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Growth Opportunities</span>
                  </div>
                  <ul className="text-[11px] text-slate-600 space-y-0.5 pl-5 list-disc">
                    <li>Luxury skincare</li>
                    <li>Wellness brands</li>
                    <li>Global campaigns</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Decorative Glass Sparkle Graphic on the Right */}
            <div className="absolute right-2 bottom-2 w-20 h-20 opacity-20 pointer-events-none">
              <Sparkles className="w-full h-full text-purple-600" />
            </div>
          </div>
        </div>

        {/* ---------- ROW 2: COLLABORATIONS, CATEGORIES & TIMELINE ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* 2. Recent Brand Collaborations (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-3">
                2. Recent Brand Collaborations
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-[10px] font-semibold text-slate-400 border-b border-slate-100 pb-2">
                      <th className="pb-2 font-medium">Brand</th>
                      <th className="pb-2 font-medium">Campaign Type</th>
                      <th className="pb-2 font-medium">Date</th>
                      <th className="pb-2 font-medium">Est. Value</th>
                      <th className="pb-2 font-medium">Engagement</th>
                      <th className="pb-2 font-medium text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {/* Row 1 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2.5 font-semibold text-slate-800 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[9px] flex items-center justify-center shrink-0">
                          L
                        </div>
                        <span>L'Oréal Paris</span>
                      </td>
                      <td className="py-2.5 text-slate-500">Reel Campaign</td>
                      <td className="py-2.5 text-slate-500 whitespace-nowrap">
                        May 12, 2025
                      </td>
                      <td className="py-2.5 text-slate-800 font-semibold">
                        $18,000
                      </td>
                      <td className="py-2.5 text-slate-500">2.6%</td>
                      <td className="py-2.5 text-right">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                          Completed
                        </span>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2.5 font-semibold text-slate-800 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-pink-100 text-pink-700 font-bold text-[9px] flex items-center justify-center shrink-0">
                          R
                        </div>
                        <span>Rare Beauty</span>
                      </td>
                      <td className="py-2.5 text-slate-500">Product Review</td>
                      <td className="py-2.5 text-slate-500 whitespace-nowrap">
                        Apr 28, 2025
                      </td>
                      <td className="py-2.5 text-slate-800 font-semibold">
                        $15,000
                      </td>
                      <td className="py-2.5 text-slate-500">2.3%</td>
                      <td className="py-2.5 text-right">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold text-purple-600 bg-purple-50 rounded-full">
                          Running
                        </span>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2.5 font-semibold text-slate-800 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[9px] flex items-center justify-center shrink-0">
                          S
                        </div>
                        <span>Sephora</span>
                      </td>
                      <td className="py-2.5 text-slate-500">Brand Feature</td>
                      <td className="py-2.5 text-slate-500 whitespace-nowrap">
                        Apr 10, 2025
                      </td>
                      <td className="py-2.5 text-slate-800 font-semibold">
                        $22,000
                      </td>
                      <td className="py-2.5 text-slate-500">2.8%</td>
                      <td className="py-2.5 text-right">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                          Completed
                        </span>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2.5 font-semibold text-slate-800 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[9px] flex items-center justify-center shrink-0">
                          C
                        </div>
                        <span>CeraVe</span>
                      </td>
                      <td className="py-2.5 text-slate-500">
                        Skincare Routine
                      </td>
                      <td className="py-2.5 text-slate-500 whitespace-nowrap">
                        Mar 25, 2025
                      </td>
                      <td className="py-2.5 text-slate-800 font-semibold">
                        $16,000
                      </td>
                      <td className="py-2.5 text-slate-500">2.1%</td>
                      <td className="py-2.5 text-right">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold text-amber-600 bg-amber-50 rounded-full">
                          Recurring
                        </span>
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2.5 font-semibold text-slate-800 flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-rose-500 text-white font-bold text-[9px] flex items-center justify-center shrink-0">
                          M
                        </div>
                        <span>Maybelline</span>
                      </td>
                      <td className="py-2.5 text-slate-500">Makeup Tutorial</td>
                      <td className="py-2.5 text-slate-500 whitespace-nowrap">
                        Mar 8, 2025
                      </td>
                      <td className="py-2.5 text-slate-800 font-semibold">
                        $14,000
                      </td>
                      <td className="py-2.5 text-slate-500">1.9%</td>
                      <td className="py-2.5 text-right">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-semibold text-blue-600 bg-blue-50 rounded-full">
                          Upcoming
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 cursor-pointer">
                <span>View all collaborations</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 3. Collaboration Categories (3 cols) */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <h2 className="text-sm font-bold text-slate-900 mb-3">
              3. Collaboration Categories
            </h2>

            <div className="space-y-2">
              {[
                { name: "Beauty", pct: 82 },
                { name: "Skincare", pct: 76 },
                { name: "Fashion", pct: 64 },
                { name: "Lifestyle", pct: 58 },
                { name: "Wellness", pct: 48 },
                { name: "Fitness", pct: 34 },
                { name: "Technology", pct: 26 },
                { name: "Food", pct: 20 },
                { name: "Travel", pct: 18 },
              ].map((cat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs">
                  <span className="w-20 text-slate-600 font-medium truncate">
                    {cat.name}
                  </span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-purple-600 rounded-full"
                      style={{ width: `${cat.pct}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-right font-semibold text-slate-700">
                    {cat.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Partnership Timeline (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <h2 className="text-sm font-bold text-slate-900 mb-3">
              4. Partnership Timeline
            </h2>

            <div className="space-y-3">
              {[
                {
                  brand: "L'Oréal Paris",
                  date: "May 2025",
                  type: "Reel Campaign",
                  impact: "High Engagement",
                  color: "emerald",
                },
                {
                  brand: "Rare Beauty",
                  date: "Apr 2025",
                  type: "Product Review",
                  impact: "Strong Sales Lift",
                  color: "emerald",
                },
                {
                  brand: "Sephora",
                  date: "Apr 2025",
                  type: "Brand Feature",
                  impact: "High Engagement",
                  color: "emerald",
                },
                {
                  brand: "CeraVe",
                  date: "Mar 2025",
                  type: "Skincare Routine",
                  impact: "Strong Sales Lift",
                  color: "emerald",
                },
                {
                  brand: "Maybelline",
                  date: "Mar 2025",
                  type: "Makeup Tutorial",
                  impact: "Engagement Boost",
                  color: "blue",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between text-xs py-1 border-b border-slate-50 last:border-0"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      {item.brand[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {item.brand}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {item.type}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] font-medium text-slate-400">
                      {item.date}
                    </div>
                    <span
                      className={`inline-block px-2 py-0.5 text-[9px] font-semibold rounded-full mt-0.5 ${
                        item.color === "emerald"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {item.impact}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---------- ROW 3: PARTNERS, PERFORMANCE & BRAND FIT ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* 5. Top Brand Partners (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-slate-900 mb-3">
                5. Top Brand Partners
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    brand: "L'Oréal Paris",
                    campaigns: "6 Campaigns",
                    eng: "2.6% Avg. Eng.",
                    duration: "10 Months",
                  },
                  {
                    brand: "Sephora",
                    campaigns: "5 Campaigns",
                    eng: "2.7% Avg. Eng.",
                    duration: "8 Months",
                  },
                  {
                    brand: "Rare Beauty",
                    campaigns: "4 Campaigns",
                    eng: "2.5% Avg. Eng.",
                    duration: "7 Months",
                  },
                  {
                    brand: "CeraVe",
                    campaigns: "4 Campaigns",
                    eng: "2.1% Avg. Eng.",
                    duration: "6 Months",
                  },
                ].map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 flex flex-col justify-between"
                  >
                    <div className="font-bold text-xs text-slate-900">
                      {p.brand}
                    </div>
                    <div className="space-y-0.5 mt-2 text-[10px]">
                      <div className="font-medium text-slate-700">
                        {p.campaigns}
                      </div>
                      <div className="text-slate-500">{p.eng}</div>
                      <div className="text-slate-400">{p.duration}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end mt-3">
              <button className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 cursor-pointer">
                <span>View all partners</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* 6. Sponsored vs Organic Performance (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold text-slate-900">
                6. Sponsored vs Organic Performance
              </h2>
              <div className="flex items-center gap-3 text-[10px] font-medium">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-sm bg-purple-600"></span>
                  Sponsored
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-sm bg-purple-200"></span>
                  Organic
                </span>
              </div>
            </div>

            {/* Custom SVG Bar Chart */}
            <div className="h-44 w-full pt-2 flex flex-col justify-between">
              <svg className="w-full h-36" viewBox="0 0 300 120">
                {/* Y Gridlines */}
                <line
                  x1="25"
                  y1="20"
                  x2="290"
                  y2="20"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <text x="0" y="23" className="fill-slate-400 text-[8px]">
                  2M
                </text>

                <line
                  x1="25"
                  y1="45"
                  x2="290"
                  y2="45"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <text x="0" y="48" className="fill-slate-400 text-[8px]">
                  1.5M
                </text>

                <line
                  x1="25"
                  y1="70"
                  x2="290"
                  y2="70"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <text x="0" y="73" className="fill-slate-400 text-[8px]">
                  1M
                </text>

                <line
                  x1="25"
                  y1="95"
                  x2="290"
                  y2="95"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <text x="0" y="98" className="fill-slate-400 text-[8px]">
                  500K
                </text>

                <line
                  x1="25"
                  y1="115"
                  x2="290"
                  y2="115"
                  stroke="#E2E8F0"
                  strokeWidth="1"
                />
                <text x="15" y="118" className="fill-slate-400 text-[8px]">
                  0
                </text>

                {/* Group 1: Reach */}
                <rect
                  x="40"
                  y="30"
                  width="12"
                  height="85"
                  rx="2"
                  fill="#6D28D9"
                />
                <rect
                  x="54"
                  y="45"
                  width="12"
                  height="70"
                  rx="2"
                  fill="#DDD6FE"
                />

                {/* Group 2: Likes */}
                <rect
                  x="90"
                  y="22"
                  width="12"
                  height="93"
                  rx="2"
                  fill="#6D28D9"
                />
                <rect
                  x="104"
                  y="40"
                  width="12"
                  height="75"
                  rx="2"
                  fill="#DDD6FE"
                />

                {/* Group 3: Comments */}
                <rect
                  x="140"
                  y="60"
                  width="12"
                  height="55"
                  rx="2"
                  fill="#6D28D9"
                />
                <rect
                  x="154"
                  y="78"
                  width="12"
                  height="37"
                  rx="2"
                  fill="#DDD6FE"
                />

                {/* Group 4: Shares */}
                <rect
                  x="190"
                  y="60"
                  width="12"
                  height="55"
                  rx="2"
                  fill="#6D28D9"
                />
                <rect
                  x="204"
                  y="72"
                  width="12"
                  height="43"
                  rx="2"
                  fill="#DDD6FE"
                />

                {/* Group 5: Saves */}
                <rect
                  x="240"
                  y="68"
                  width="12"
                  height="47"
                  rx="2"
                  fill="#6D28D9"
                />
                <rect
                  x="254"
                  y="85"
                  width="12"
                  height="30"
                  rx="2"
                  fill="#DDD6FE"
                />
              </svg>

              <div className="flex justify-between text-[10px] text-slate-500 font-medium px-4">
                <span>Reach</span>
                <span>Likes</span>
                <span>Comments</span>
                <span>Shares</span>
                <span>Saves</span>
              </div>
            </div>
          </div>

          {/* 7. Brand Fit Analysis (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <h2 className="text-sm font-bold text-slate-900 mb-1">
              7. Brand Fit Analysis
            </h2>

            <div className="relative h-44 w-full flex items-center justify-center">
              {/* Radar Spider Web Chart SVG */}
              <svg className="w-52 h-44" viewBox="0 0 200 160">
                {/* Hexagon Web Layers */}
                <polygon
                  points="100,20 160,50 160,110 100,140 40,110 40,50"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <polygon
                  points="100,35 145,57.5 145,102.5 100,125 55,102.5 55,57.5"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <polygon
                  points="100,50 130,65 130,95 100,110 70,95 70,65"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />

                {/* Axis lines */}
                <line
                  x1="100"
                  y1="20"
                  x2="100"
                  y2="140"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <line
                  x1="40"
                  y1="50"
                  x2="160"
                  y2="110"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />
                <line
                  x1="40"
                  y1="110"
                  x2="160"
                  y2="50"
                  stroke="#F1F5F9"
                  strokeWidth="1"
                />

                {/* Filled Data Polygon */}
                <polygon
                  points="100,28 152,55 148,105 100,132 52,102 50,58"
                  fill="#8B5CF6"
                  fillOpacity="0.25"
                  stroke="#7C3AED"
                  strokeWidth="2"
                />

                {/* Vertex Dots */}
                <circle cx="100" cy="28" r="3" fill="#7C3AED" />
                <circle cx="152" cy="55" r="3" fill="#7C3AED" />
                <circle cx="148" cy="105" r="3" fill="#7C3AED" />
                <circle cx="100" cy="132" r="3" fill="#7C3AED" />
                <circle cx="52" cy="102" r="3" fill="#7C3AED" />
                <circle cx="50" cy="58" r="3" fill="#7C3AED" />

                {/* Axis Labels */}
                <text
                  x="100"
                  y="12"
                  textAnchor="middle"
                  className="fill-slate-500 text-[8px] font-semibold"
                >
                  Audience Match
                </text>
                <text
                  x="168"
                  y="52"
                  textAnchor="start"
                  className="fill-slate-500 text-[8px] font-semibold"
                >
                  Content Quality
                </text>
                <text
                  x="168"
                  y="112"
                  textAnchor="start"
                  className="fill-slate-500 text-[8px] font-semibold"
                >
                  Brand Safety
                </text>
                <text
                  x="100"
                  y="152"
                  textAnchor="middle"
                  className="fill-slate-500 text-[8px] font-semibold"
                >
                  Authenticity
                </text>
                <text
                  x="32"
                  y="112"
                  textAnchor="end"
                  className="fill-slate-500 text-[8px] font-semibold"
                >
                  Conversion Potential
                </text>
                <text
                  x="32"
                  y="52"
                  textAnchor="end"
                  className="fill-slate-500 text-[8px] font-semibold"
                >
                  Professionalism
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* ---------- ROW 4: BREAKDOWN, INDUSTRIES & FREQUENCY ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* 8. Sponsored Content Breakdown (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <h2 className="text-sm font-bold text-slate-900 mb-2">
              8. Sponsored Content Breakdown
            </h2>

            <div className="flex items-center gap-4">
              {/* Custom SVG Donut Chart */}
              <div className="w-32 h-32 relative shrink-0">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  {/* Total Circumference = 2 * PI * 35 = 220 */}
                  {/* Reels 38% = 83.6 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#6D28D9"
                    strokeWidth="18"
                    strokeDasharray="83.6 136.4"
                    strokeDashoffset="0"
                    fill="none"
                  />
                  {/* Carousel 22% = 48.4 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#8B5CF6"
                    strokeWidth="18"
                    strokeDasharray="48.4 171.6"
                    strokeDashoffset="-83.6"
                    fill="none"
                  />
                  {/* Stories 18% = 39.6 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#A78BFA"
                    strokeWidth="18"
                    strokeDasharray="39.6 180.4"
                    strokeDashoffset="-132"
                    fill="none"
                  />
                  {/* Images 12% = 26.4 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#C4B5FD"
                    strokeWidth="18"
                    strokeDasharray="26.4 193.6"
                    strokeDashoffset="-171.6"
                    fill="none"
                  />
                  {/* Live 6% = 13.2 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#DDD6FE"
                    strokeWidth="18"
                    strokeDasharray="13.2 206.8"
                    strokeDashoffset="-198"
                    fill="none"
                  />
                  {/* UGC 4% = 8.8 */}
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="#EDE9FE"
                    strokeWidth="18"
                    strokeDasharray="8.8 211.2"
                    strokeDashoffset="-211.2"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Donut Legend */}
              <div className="space-y-1.5 text-xs flex-1">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#6D28D9]"></span>
                    Reels
                  </span>
                  <span className="font-bold text-slate-800">38%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#8B5CF6]"></span>
                    Carousel
                  </span>
                  <span className="font-bold text-slate-800">22%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#A78BFA]"></span>
                    Stories
                  </span>
                  <span className="font-bold text-slate-800">18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#C4B5FD]"></span>
                    Images
                  </span>
                  <span className="font-bold text-slate-800">12%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#DDD6FE]"></span>
                    Live
                  </span>
                  <span className="font-bold text-slate-800">6%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-slate-600">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#EDE9FE]"></span>
                    UGC
                  </span>
                  <span className="font-bold text-slate-800">4%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 9. Brand Industries (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <h2 className="text-sm font-bold text-slate-900 mb-2">
              9. Brand Industries
            </h2>

            {/* Treemap Grid Matrix */}
            <div className="grid grid-cols-6 gap-1 h-36 rounded-xl overflow-hidden text-white font-medium text-xs">
              {/* Beauty 28% */}
              <div className="col-span-3 bg-purple-600 p-2.5 flex flex-col justify-between rounded-l-lg">
                <span className="font-semibold text-xs">Beauty</span>
                <span className="text-xs font-bold">28%</span>
              </div>

              {/* Luxury 18% */}
              <div className="col-span-2 bg-purple-500 p-2.5 flex flex-col justify-between">
                <span className="font-semibold text-xs">Luxury</span>
                <span className="text-xs font-bold">18%</span>
              </div>

              {/* Fashion 16% */}
              <div className="col-span-1 bg-purple-400 p-2 flex flex-col justify-between rounded-r-lg">
                <span className="font-semibold text-[10px] truncate">
                  Fashion
                </span>
                <span className="text-[10px] font-bold">16%</span>
              </div>

              {/* Row 2 */}
              <div className="col-span-2 bg-purple-400/90 p-2 flex flex-col justify-between rounded-bl-lg">
                <span className="font-semibold text-[10px]">Lifestyle</span>
                <span className="text-[10px] font-bold">9%</span>
              </div>

              <div className="col-span-2 bg-purple-300 p-2 text-slate-800 flex flex-col justify-between">
                <span className="font-semibold text-[10px]">Technology</span>
                <span className="text-[10px] font-bold">7%</span>
              </div>

              <div className="col-span-1 bg-purple-200 p-1.5 text-slate-800 flex flex-col justify-between">
                <span className="font-semibold text-[9px] truncate">
                  Travel
                </span>
                <span className="text-[9px] font-bold">5%</span>
              </div>

              <div className="col-span-1 bg-purple-100 p-1.5 text-slate-800 flex flex-col justify-between rounded-br-lg">
                <span className="font-semibold text-[9px] truncate">
                  Fitness
                </span>
                <span className="text-[9px] font-bold">3%</span>
              </div>
            </div>
          </div>

          {/* 13. Partnership Frequency (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <h2 className="text-sm font-bold text-slate-900 mb-2">
              13. Partnership Frequency
            </h2>

            {/* Heatmap Grid */}
            <div className="space-y-1">
              <div className="grid grid-cols-13 gap-1 text-[8px] text-slate-400 font-medium pl-6">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m) => (
                  <span key={m} className="text-center">
                    {m}
                  </span>
                ))}
              </div>

              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, dIdx) => (
                  <div key={day} className="flex items-center gap-1">
                    <span className="w-5 text-[8px] font-medium text-slate-400">
                      {day}
                    </span>
                    <div className="grid grid-cols-12 gap-1 flex-1">
                      {[3, 1, 2, 0, 3, 4, 2, 4, 3, 2, 1, 0].map(
                        (intensity, mIdx) => {
                          const colors = [
                            "bg-slate-100",
                            "bg-purple-100",
                            "bg-purple-300",
                            "bg-purple-500",
                            "bg-purple-700",
                          ];
                          return (
                            <div
                              key={mIdx}
                              className={`h-3 rounded-xs ${colors[(intensity + dIdx) % 5]}`}
                            ></div>
                          );
                        },
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* Heatmap Legend */}
            <div className="flex items-center justify-end gap-2 text-[9px] text-slate-400 font-medium mt-2">
              <span>Low</span>
              <div className="flex gap-0.5">
                <span className="w-2.5 h-2.5 bg-purple-100 rounded-xs"></span>
                <span className="w-2.5 h-2.5 bg-purple-300 rounded-xs"></span>
                <span className="w-2.5 h-2.5 bg-purple-600 rounded-xs"></span>
              </div>
              <span>High</span>
            </div>
          </div>
        </div>

        {/* ---------- ROW 5: PRICING, BRANDS INTERESTED & AI INSIGHTS ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* 11. Estimated Partnership Pricing (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <h2 className="text-sm font-bold text-slate-900 mb-3">
              11. Estimated Partnership Pricing
            </h2>

            <div className="grid grid-cols-2 gap-2.5">
              {[
                {
                  title: "Instagram Story",
                  price: "$2,500",
                  eng: "Avg. Eng. 1.8%",
                  desc: "Best for Awareness",
                  //   icon: Instagram,
                },
                {
                  title: "Reel",
                  price: "$7,500",
                  eng: "Avg. Eng. 2.6%",
                  desc: "Best for Engagement",
                  icon: Video,
                },
                {
                  title: "Carousel",
                  price: "$5,000",
                  eng: "Avg. Eng. 2.1%",
                  desc: "Best for Education",
                  icon: Layers,
                },
                {
                  title: "Dedicated Post",
                  price: "$6,000",
                  eng: "Avg. Eng. 2.3%",
                  desc: "Best for Reach",
                  icon: Layout,
                },
                {
                  title: "UGC Video",
                  price: "$8,000",
                  eng: "Avg. Eng. 2.8%",
                  desc: "Best for Conversions",
                  icon: Video,
                },
                {
                  title: "Brand Package",
                  price: "$20,000+",
                  eng: "Avg. Eng. 3.0%",
                  desc: "Best for Long-term",
                  icon: Package,
                },
              ].map((item, idx) => {
                const IconComponent = item.icon || Sparkles;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50/70 p-2.5 rounded-xl border border-slate-100 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-700">
                      <IconComponent className="w-3 h-3 text-purple-600" />
                      <span className="truncate">{item.title}</span>
                    </div>
                    <div className="my-1.5">
                      <div className="text-base font-bold text-slate-900">
                        {item.price}
                      </div>
                      <div className="text-[9px] text-slate-400 font-medium">
                        {item.eng}
                      </div>
                    </div>
                    <div className="text-[9px] font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md self-start">
                      {item.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 12. Brands Interested (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between relative">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-bold text-slate-900">
                12. Brands Interested
              </h2>
              <button className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer">
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Brands Logos Grid */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Nike", logo: "NIKE" },
                { name: "Sephora", logo: "SEPHORA" },
                { name: "L'Oréal", logo: "L'ORÉAL" },
                { name: "Rare Beauty", logo: "Rare Beauty" },
                { name: "Fenty Beauty", logo: "FENTY BEAUTY" },
                { name: "Charlotte Tilbury", logo: "Charlotte Tilbury" },
                { name: "CeraVe", logo: "CeraVe" },
                { name: "Maybelline", logo: "MAYBELLINE" },
                { name: "Glow Recipe", logo: "GLOW RECIPE" },
                { name: "The Ordinary", logo: "The Ordinary." },
              ].map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50/70 p-2.5 rounded-xl border border-slate-100 flex items-center justify-center text-center font-bold text-xs text-slate-800 tracking-wider hover:border-purple-200 transition-colors"
                >
                  {brand.logo}
                </div>
              ))}
            </div>
          </div>

          {/* 13. AI Partnership Insights (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-1.5 mb-3">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <h2 className="text-sm font-bold text-slate-900">
                13. AI Partnership Insights
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  text: "Repeat partnerships increased by 18% vs last 90 days",
                  icon: RotateCw,
                },
                {
                  text: "Beauty collaborations generate 32% higher engagement",
                  icon: Sparkles,
                },
                {
                  text: "Long-term retainers outperform one-off campaigns",
                  icon: CheckCircle2,
                },
                {
                  text: "Luxury skincare brands show highest audience affinity",
                  icon: Zap,
                },
                {
                  text: "Estimated campaign ROI exceeds industry benchmark",
                  icon: TrendingUp,
                },
                {
                  text: "Creator ranks in the top 10% for partnership consistency",
                  //   icon: User,
                },
              ].map((insight, idx) => {
                const IconComp = insight.icon || Sparkles;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50/70 p-2 rounded-xl border border-slate-100 flex flex-col items-center text-center justify-between space-y-1"
                  >
                    <div className="w-6 h-6 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-[9px] font-medium text-slate-600 leading-tight">
                      {insight.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden"></div>
</div>
     
    </div>
  );
}
