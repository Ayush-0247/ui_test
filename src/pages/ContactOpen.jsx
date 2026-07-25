import { useState } from "react";
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
  Info,
  BadgeCheck,
  Zap,
  RotateCw,
  Megaphone,
  DollarSign,
  Calendar,
  Check,
  AlertTriangle,
  MapPin,
  ChevronRight,
  Phone,
  Rocket,
  Tag,
  Star,
  Clock,
  Download,
  Globe,
} from "lucide-react";
import SidebarOpen from "../components/SidebarOpen";

export default function App() {
  const [activeTab, setActiveTab] = useState("Partnerships");

  const tabClass = (tabName) =>
    `flex items-center gap-1.5 py-2.5 transition-colors cursor-pointer ${
      activeTab === tabName
        ? "text-purple-600 font-semibold border-b-2 border-purple-600 -mb-px"
        : "text-slate-500 hover:text-slate-800"
    }`;

  return (
   <div className="h-screen bg-[#F8FAFC] overflow-hidden">
        <SidebarOpen />

     <div className="ml-[250px] h-screen overflow-y-auto">
 <main className="p-2 space-y-5">

         <div className="bg-white  p-3  relative overflow-hidden">
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
        <div className="border-b border-slate-200/80 flex items-center gap-8 text-xs font-medium px-2 pt-1 flex-wrap">
          <button
            className={tabClass("Overview")}
            onClick={() => setActiveTab("Overview")}
          >
            <Eye className="w-4 h-4" />
            <span>Overview</span>
          </button>
          <button
            className={tabClass("Audience")}
            onClick={() => setActiveTab("Audience")}
          >
            <Users className="w-4 h-4" />
            <span>Audience</span>
          </button>
          <button
            className={tabClass("Content")}
            onClick={() => setActiveTab("Content")}
          >
            <Folder className="w-4 h-4" />
            <span>Content</span>
          </button>
          <button
            className={tabClass("Performance")}
            onClick={() => setActiveTab("Performance")}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Performance</span>
          </button>

          <button
            className={tabClass("Partnerships")}
            onClick={() => setActiveTab("Partnerships")}
          >
            <Building2 className="w-4 h-4" />
            <span>Partnerships</span>
          </button>

          <button
            className={tabClass("Similar Creators")}
            onClick={() => setActiveTab("Similar Creators")}
          >
            <Sparkles className="w-4 h-4" />
            <span>Similar Creators</span>
          </button>
          <button
            className={tabClass("Contact")}
            onClick={() => setActiveTab("Contact")}
          >
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </button>
        </div>

        {/* ================= PARTNERSHIPS TAB VIEW ================= */}
        {activeTab === "Partnerships" && (
          <div className="space-y-5">
            {/* ROW 1: PARTNERSHIP OVERVIEW & AI PARTNERSHIP SCORE */}
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
                  <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 relative overflow-hidden">
                    <div className="flex items-start justify-between">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Users className="w-3.5 h-3.5" />
                      </div>
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

                  <div className="sm:col-span-7 space-y-3">
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

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        <span>Risks</span>
                      </div>
                      <ul className="text-[11px] text-slate-600 space-y-0.5 pl-5 list-disc">
                        <li>Few long-term retainers</li>
                      </ul>
                    </div>

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
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* 4. Past Brand Contacts (4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-sm font-bold text-slate-900 mb-3">
                    4. Past Brand Contacts
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="text-[10px] font-semibold text-slate-400 border-b border-slate-100 pb-2">
                          <th className="pb-2 font-medium">Brand</th>
                          <th className="pb-2 font-medium">Campaign</th>
                          <th className="pb-2 font-medium">Date</th>
                          <th className="pb-2 font-medium text-right">
                            Outcome
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {[
                          {
                            brand: "L'Oréal Paris",
                            campaign: "Revitalift Campaign",
                            date: "May 2025",
                            outcome: "Successful",
                          },
                          {
                            brand: "Rare Beauty",
                            campaign: "Product Launch",
                            date: "Apr 2025",
                            outcome: "Successful",
                          },
                          {
                            brand: "CeraVe",
                            campaign: "Skincare Routine",
                            date: "Mar 2025",
                            outcome: "Successful",
                          },
                          {
                            brand: "Maybelline",
                            campaign: "Makeup Tutorial",
                            date: "Feb 2025",
                            outcome: "Successful",
                          },
                          {
                            brand: "Sephora",
                            campaign: "Brand Awareness",
                            date: "Jan 2025",
                            outcome: "Successful",
                          },
                        ].map((row, idx) => (
                          <tr
                            key={idx}
                            className="hover:bg-slate-50/50 transition-colors"
                          >
                            <td className="py-2.5 font-semibold text-slate-800 flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold text-[9px] flex items-center justify-center shrink-0">
                                {row.brand[0]}
                              </div>
                              <span className="text-[11px]">{row.brand}</span>
                            </td>
                            <td className="py-2.5 text-slate-500 text-[11px]">
                              {row.campaign}
                            </td>
                            <td className="py-2.5 text-slate-400 text-[10px] whitespace-nowrap">
                              {row.date}
                            </td>
                            <td className="py-2.5 text-right">
                              <span className="inline-block px-2 py-0.5 text-[9px] font-semibold text-emerald-600 bg-emerald-50 rounded-full">
                                {row.outcome}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-end mt-2">
                  <button className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1 cursor-pointer">
                    <span>View all brand collaborations</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 5. Preferred Contact Channels (4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <h2 className="text-sm font-bold text-slate-900 mb-3">
                  5. Preferred Contact Channels
                </h2>

                <div className="space-y-2.5">
                  {[
                    {
                      icon: Mail,
                      name: "Email",
                      desc: "Primary channel for business inquiries",
                      badge: "Preferred",
                      badgeColor: "bg-purple-50 text-purple-700",
                    },
                    {
                      icon: BadgeCheck,
                      name: "Instagram DM",
                      desc: "Good for quick follow-ups",
                      badge: "Good",
                      badgeColor: "bg-blue-50 text-blue-600",
                    },
                    {
                      icon: Building2,
                      name: "Management",
                      desc: "For large campaigns & contracts",
                      badge: "Best",
                      badgeColor: "bg-emerald-50 text-emerald-600",
                    },
                    {
                      icon: Phone,
                      name: "Phone Calls",
                      desc: "By appointment only",
                      badge: "Limited",
                      badgeColor: "bg-amber-50 text-amber-600",
                    },
                  ].map((ch, idx) => {
                    const IconComp = ch.icon;
                    return (
                      <div
                        key={idx}
                        className="bg-slate-50/80 p-3 rounded-xl border border-slate-100 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-purple-600 shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-800">
                              {ch.name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {ch.desc}
                            </div>
                          </div>
                        </div>

                        <span
                          className={`px-2 py-0.5 text-[10px] font-semibold rounded-md ${ch.badgeColor}`}
                        >
                          {ch.badge}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 6. Collaboration Interest (4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <h2 className="text-sm font-bold text-slate-900 mb-2">
                  6. Collaboration Interest
                </h2>

                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Top campaign interests
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap mb-4">
                    {[
                      "Beauty & Skincare",
                      "Makeup",
                      "Lifestyle",
                      "Wellness",
                      "Fashion",
                    ].map((tag, i) => (
                      <span
                        key={i}
                        className="bg-purple-50 text-purple-700 text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    Open to
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                      <Calendar className="w-4 h-4 text-purple-600 mb-1" />
                      <span className="text-[9px] font-bold text-slate-700">
                        Long-term Partnerships
                      </span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                      <Rocket className="w-4 h-4 text-purple-600 mb-1" />
                      <span className="text-[9px] font-bold text-slate-700">
                        Product Launches
                      </span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex flex-col items-center text-center">
                      <Tag className="w-4 h-4 text-purple-600 mb-1" />
                      <span className="text-[9px] font-bold text-slate-700">
                        Affiliate & Discounts
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50/60 border border-purple-100 p-2.5 rounded-xl flex items-center gap-2 text-[10px] font-medium text-purple-900">
                  <Star className="w-3.5 h-3.5 text-purple-600 fill-purple-600 shrink-0" />
                  <span>
                    Actively looking for meaningful partnerships that align with
                    her values and audience.
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 3: Ready to Work Together? & Additional Information */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              {/* 7. Ready to Work Together? (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <div>
                  <h2 className="text-sm font-bold text-slate-900">
                    7. Ready to Work Together?
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Send Mariale a collaboration proposal. Our team will
                    facilitate the introduction.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                    <div className="flex items-center gap-2 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Send className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800">
                          Direct introduction
                        </div>
                        <div className="text-[9px] text-slate-400">
                          We'll connect you directly
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Clock className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800">
                          Fast response
                        </div>
                        <div className="text-[9px] text-slate-400">
                          Typically within 24-48 hrs
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-slate-50/70 p-2.5 rounded-xl border border-slate-100">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-800">
                          Secure & professional
                        </div>
                        <div className="text-[9px] text-slate-400">
                          100% secure communication
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-purple-200 flex items-center gap-2 transition-all cursor-pointer">
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Collaboration Inquiry</span>
                  </button>

                  <button className="border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all cursor-pointer">
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Download Media Kit</span>
                  </button>
                </div>
              </div>

              {/* 8. Additional Information (5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
                <h2 className="text-sm font-bold text-slate-900 mb-3">
                  8. Additional Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-medium text-slate-400">
                        Languages
                      </div>
                      <div className="text-xs font-bold text-slate-800">
                        English, Spanish
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-medium text-slate-400">
                        Content Style
                      </div>
                      <div className="text-[11px] font-bold text-slate-800 leading-tight">
                        High-quality, aesthetic, informative
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50/70 p-3 rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-medium text-slate-400">
                        Brand Safety
                      </div>
                      <div className="text-xs font-bold text-emerald-600">
                        Very Safe
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                  All profiles undergo periodic AI audit & human verification.
                </div>
              </div>
            </div>

            {/* Verification Footer Banner */}
            <div className="bg-purple-50/50 border border-purple-100 rounded-2xl p-3 flex items-center gap-2 text-xs text-purple-900">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
              <span>
                Contact data is verified and updated regularly. Last verified on
                May 12, 2025
              </span>
            </div>
          </div>
        )}

        {/* ================= PARTNERSHIPS TAB VIEW ================= */}
        {activeTab === "Partnerships" && (
          <div className="space-y-5">
            {/* ROW 1: PARTNERSHIP OVERVIEW & AI PARTNERSHIP SCORE */}
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
                  <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-100 relative overflow-hidden">
                    <div className="flex items-start justify-between">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Users className="w-3.5 h-3.5" />
                      </div>
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

                  <div className="sm:col-span-7 space-y-3">
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

                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 mb-1">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                        <span>Risks</span>
                      </div>
                      <ul className="text-[11px] text-slate-600 space-y-0.5 pl-5 list-disc">
                        <li>Few long-term retainers</li>
                      </ul>
                    </div>

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
              </div>
            </div>
          </div>
        )}
      </main>

     </div>
      
    </div>
  );
}
