import {
  Sparkles,
  Send,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Info,
  BadgeCheck,
  Zap,
  RotateCw,
  Megaphone,
  DollarSign,
  Calendar,
  AlertTriangle,
  ChevronRight,
  Phone,
  Rocket,
  Tag,
  Star,
  Clock,
  Download,
  Globe,
  Users,
  Mail,
  Building2,
} from "lucide-react";
import SidebarClose from "../components/SidebarClose";
import {
  CREATOR,
  STATS,
  NAV_TABS_CLOSE,
  ProfileHeader,
  StatCardsRow,
  TabBar,
} from "../components/CreatorHeaderLayout";
import Steps from "../components/Steps";

export default function App() {
  const activeTab = "contact";



  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-purple-100 selection:text-purple-700">
      {/*  LEFT SLIM NAVIGATION SIDEBAR  */}
      <SidebarClose />

      {/*  MAIN DASHBOARD CONTENT CONTAINER  */}
      <main className="min-h-screen min-w-0 overflow-y-auto pb-16 lg:ml-[72px] lg:pb-3">
        <div className="bg-white px-6 pt-6 mb-5">
          <ProfileHeader creator={CREATOR} />
          <StatCardsRow stats={STATS} />
          <Steps />
          <TabBar tabs={NAV_TABS_CLOSE} activeTab="contact" />
        </div>
        <div className="px-4 py-5 sm:px-6 lg:px-8 space-y-5">

          {/* ================= PARTNERSHIPS TAB VIEW ================= */}
          {activeTab === "contact" && (
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
                <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-violet-600" />
                      </div>

                      <div>
                        <h2 className="text-sm font-bold text-slate-900">
                          AI Partnership
                        </h2>
                        <p className="text-[11px] text-slate-500">
                          Confidence • 97%
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-7xl font-black text-violet-600">92</p>
                      <span className="text-[11px] font-medium text-emerald-600">
                        Excellent
                      </span>
                    </div>
                  </div>

                  {/* AI Insight */}
                  <div className="mt-5 rounded-xl bg-gradient-to-r from-violet-50 to-indigo-50 border border-violet-100 p-3">
                    <p className="text-[12px] leading-5 text-slate-700">
                      Strong fit for premium lifestyle and beauty brands with
                      excellent audience trust and consistent campaign quality.
                    </p>
                    <p>
                      <span className="font-semibold text-violet-600">Confidence:</span>{" "}
                      <span className="font-semibold text-violet-600">97%</span>
                    </p>
                  </div>

                  {/* Chips */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                      <CheckCircle2 className="w-3 h-3" />
                      High Trust
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-3 py-1 text-[11px] font-medium text-violet-700">
                      <Sparkles className="w-3 h-3" />
                      Luxury Ready
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-700">
                      <AlertTriangle className="w-3 h-3" />
                      Needs Retainers
                    </span>

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


        </div>
      </main>
    </div>
  );
}
