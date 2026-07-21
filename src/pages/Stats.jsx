import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Users,
  User,
  X,
  MapPin,
  Send,
  Download,
  Star,
  TrendingUp,
  Heart,
  Info,
  BarChart3,
  UserPlus,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Video,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

import img2 from "../assets/img2.png";
import post1 from "../assets/yoga.jpg";
import post2 from "../assets/travel.jpg";
import post3 from "../assets/skin.jpg";
import post4 from "../assets/coffee.jpg";
import post5 from "../assets/beauty.jpg";

/* ---------------------------------------------------------
   Small reusable primitives
--------------------------------------------------------- */

function ProgressBar({ percent, colorClass = "bg-[#5B3DF5]" }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#ECECEC]">
      <div
        className={`h-full rounded-full ${colorClass}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

function CardHeader({ title, action }) {
  return (
    <div className="mb-3 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <h3 className="text-xs sm:text-sm font-bold text-[#1F2937]">{title}</h3>
        <Info className="h-3 w-3 text-[#6B7280]" />
      </div>
      {action}
    </div>
  );
}

function ViewLink({ children }) {
  return (
    <div className="mt-3 text-center">
      <button className="text-xs font-medium text-[#5B3DF5] hover:underline cursor-pointer">
        {children}
      </button>
    </div>
  );
}

/* ---------------------------------------------------------
   Left sidebar
--------------------------------------------------------- */

function ProfileSidebar() {
  return (
    <aside className="w-full xl:w-[260px] shrink-0 bg-white rounded-md border border-[#ECECEC] p-5 flex flex-col items-center shadow-sm">
      <div className="relative">
        <img
          src={img2}
          alt="Isabella Martinez"
          className="w-[140px] h-[140px] rounded-full object-cover"
        />
        <div className="absolute bottom-1 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#0095F6] text-white ring-2 ring-white shadow-sm">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
      </div>

      <h2 className="text-base font-bold text-[#1F2937] mt-3">Isabella Martinez</h2>
      <p className="text-xs text-[#6B7280] mt-0.5">@isabellamarts</p>

      <div className="flex items-center gap-1 text-[#6B7280] text-xs mt-1.5">
        <MapPin className="w-3.5 h-3.5 text-[#6B7280]" />
        <span>Los Angeles, CA, USA</span>
      </div>

      <div className="flex flex-wrap justify-center gap-1.5 mt-3">
        {["Lifestyle", "Fashion", "Travel"].map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F5F3FF] px-2.5 py-0.5 text-[10px] font-bold text-[#6348e6]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-1.5 mt-1.5">
        {["Wellness", "Beauty"].map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F5F3FF] px-2.5 py-0.5 text-[10px] font-bold text-[#6348e6]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full flex flex-col sm:flex-row xl:flex-col gap-2 mt-5">
        <button className="w-full flex items-center justify-center gap-2 bg-[#5B3DF5] text-white text-xs font-semibold rounded-xl py-2.5 shadow-sm transition hover:opacity-95 cursor-pointer">
          <Send className="w-3.5 h-3.5" />
          Create Campaign
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] text-[#1F2937] text-xs font-bold rounded-xl py-2.5 transition hover:bg-[#FAFAFC] cursor-pointer">
          <Download className="w-4 h-4 text-[#6B7280]" />
          Download Media Kit
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] text-[#1F2937] text-xs font-bold rounded-xl py-2.5 transition hover:bg-[#FAFAFC] cursor-pointer">
          <Star className="w-4 h-4 text-[#6B7280]" />
          Add to Favorites
        </button>
      </div>

      <div className="w-full flex items-center justify-between mt-5 pt-4 border-t border-[#E5E7EB]">
        <div className="flex flex-col items-center gap-0.5">
          <Users className="w-5 h-5 text-[#5B3DF5]" />
          <span className="text-sm font-bold text-[#1F2937]">892K</span>
          <span className="text-[10px] text-[#6B7280]">Followers</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <TrendingUp className="w-5 h-5 text-[#5B3DF5]" />
          <span className="text-sm font-bold text-[#1F2937]">6.38%</span>
          <span className="text-[10px] text-[#6B7280]">Engagement</span>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Heart className="w-5 h-5 text-[#5B3DF5]" />
          <span className="text-sm font-bold text-[#1F2937]">57.2K</span>
          <span className="text-[10px] text-[#6B7280]">Avg. Likes</span>
        </div>
      </div>
    </aside>
  );
}

/* ---------------------------------------------------------
   Top tabs
--------------------------------------------------------- */

function TopTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      label: "Statistics & Media",
      icon: <BarChart3 className="w-4 h-4" />,
      path: "/Statsandmedia",
    },
    { label: "Stories & Hashtags", icon: <Layers className="w-4 h-4" />, path: "/StoryAndHastag" },
    { label: "Audience Insights", icon: <Users className="w-4 h-4" />, path: "/audience-insight" },
    { label: "Lookalike Creator", icon: <UserPlus className="w-4 h-4" />, path: "/lookalike" },
    { label: "Contact Info", icon: <User className="w-4 h-4" />, path: "/contact" },
  ];

  return (
    <div className="flex items-center justify-between border-b border-[#ECECEC] px-4 sm:px-6 pt-3 pb-0 overflow-x-auto scrollbar-none gap-4">
      <div className="flex gap-6 sm:gap-8 min-w-max">
        {tabs.map((tab) => {
          const isActive =
            location.pathname === tab.path ||
            (tab.path === "/Statsandmedia" &&
              (location.pathname === "/Statsandmedia" || location.pathname === "/"));
          return (
            <button
              key={tab.label}
              onClick={() => navigate(tab.path)}
              className={`flex items-center gap-2 pb-2.5 text-xs sm:text-sm transition whitespace-nowrap cursor-pointer ${isActive
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
      <button className="mb-2 w-7 h-7 rounded-md bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 ml-2 cursor-pointer hover:bg-gray-50">
        <X className="w-4 h-4 text-[#1F2937]" />
      </button>
    </div>
  );
}

/* ---------------------------------------------------------
   Row 1 — analytics stat cards
--------------------------------------------------------- */

function AnalyticsStatCard({ icon: Icon, title, value, subtitle, delta, hasInfo = false }) {
  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-3.5 sm:p-4 shadow-sm min-w-0">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5B3DF5]/10">
          <Icon className="h-4 w-4 text-[#5B3DF5]" />
        </span>
        <div className="flex items-center gap-1">
          <p className="text-xs font-semibold text-[#1F2937]">{title}</p>
          {hasInfo && <Info className="h-3 w-3 text-[#6B7280]" />}
        </div>
      </div>
      <p className="mt-2 text-xl sm:text-2xl font-bold text-[#1F2937]">{value}</p>
      <div className="mt-1 flex items-center justify-between text-[10px] sm:text-[11px]">
        <span className="text-[#6B7280]">{subtitle}</span>
        <div className="flex items-center gap-1">
          <span className="flex items-center gap-0.5 font-semibold text-[#22C55E]">
            <span className="text-[11px]">↑</span>
            {delta}
          </span>
          <span className="text-[#6B7280]">vs last 30 days</span>
        </div>
      </div>
    </div>
  );
}

function AnalyticsRow() {
  const cards = [
    {
      icon: Users,
      title: "Followers",
      value: "892K",
      subtitle: "Total Followers",
      delta: "12.4%",
      hasInfo: false,
    },
    {
      icon: TrendingUp,
      title: "Engagement Rate",
      value: "6.38%",
      subtitle: "Avg. Engagement Rate",
      delta: "0.86pp",
      hasInfo: true,
    },
    {
      icon: Heart,
      title: "Avg Likes",
      value: "57.2K",
      subtitle: "Average Likes",
      delta: "8.7%",
      hasInfo: false,
    },
    {
      icon: MessageCircle,
      title: "Avg Comments",
      value: "1.4K",
      subtitle: "Average Comments",
      delta: "11.3%",
      hasInfo: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
      {cards.map((c) => (
        <AnalyticsStatCard key={c.title} {...c} />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------
   Media Performance Overview
--------------------------------------------------------- */

function MediaPerformanceCard() {
  const rows = [
    { label: "Impressions", value: "21.4M", percent: 88, delta: "18.6%" },
    { label: "Reach", value: "9.8M", percent: 65, delta: "16.2%" },
    { label: "Engagements", value: "1.36M", percent: 72, delta: "22.4%" },
    { label: "Profile Visits", value: "312K", percent: 45, delta: "15.7%" },
    { label: "Saves", value: "98.7K", percent: 30, delta: "20.1%" },
  ];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm min-w-0 flex flex-col justify-between">
      <div>
        <CardHeader title="Media Performance Overview" />
        <div className="space-y-2.5 mt-2">
          {rows.map((r) => (
            <div key={r.label} className="flex items-center gap-2">
              <span className="w-20 shrink-0 text-xs text-[#6B7280] font-medium">
                {r.label}
              </span>
              <span className="w-12 shrink-0 text-xs font-semibold text-[#1F2937]">
                {r.value}
              </span>
              <ProgressBar percent={r.percent} />
              <span className="flex w-12 shrink-0 items-center justify-end gap-0.5 text-[11px] font-semibold text-[#22C55E]">
                <span>↑</span>
                {r.delta}
              </span>
            </div>
          ))}
        </div>
      </div>
      <ViewLink>View Full Report</ViewLink>
    </div>
  );
}

/* ---------------------------------------------------------
   Content Format Performance (donut)
--------------------------------------------------------- */

function ContentFormatPerformanceCard() {
  const segments = [
    { label: "Reels", color: "#5B3DF5", percent: 62, er: "7.12%" },
    { label: "Posts", color: "#C084FC", percent: 27, er: "5.03%" },
    { label: "Carousels", color: "#F59E0B", percent: 11, er: "4.21%" },
  ];

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  let offsetAccum = 0;

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm min-w-0 flex flex-col justify-between">
      <div>
        <CardHeader title="Content Format Performance" />
        <div className="flex items-center gap-4 my-2">
          <svg viewBox="0 0 120 120" className="h-24 w-24 shrink-0 -rotate-90">
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#ECECEC"
              strokeWidth="14"
            />
            {segments.map((s) => {
              const dash = (s.percent / 100) * circumference;
              const circle = (
                <circle
                  key={s.label}
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="14"
                  strokeDasharray={`${dash} ${circumference - dash}`}
                  strokeDashoffset={-offsetAccum}
                />
              );
              offsetAccum += dash;
              return circle;
            })}
          </svg>

          <div className="flex-1 space-y-2">
            {segments.map((s) => (
              <div key={s.label} className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full shrink-0"
                    style={{ backgroundColor: s.color }}
                  />
                  <span className="text-xs font-semibold text-[#1F2937]">{s.label}</span>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-[#1F2937]">
                    {s.percent}%
                  </p>
                  <p className="text-[10px] text-[#6B7280]">
                    Engagement Rate {s.er}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ViewLink>View Full Report</ViewLink>
    </div>
  );
}

/* ---------------------------------------------------------
   Posting Activity heatmap
--------------------------------------------------------- */

function PostingActivityCard() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const times = ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM"];

  const grid = [
    [1, 1, 2, 1, 2, 1, 1],
    [1, 2, 2, 3, 2, 2, 1],
    [3, 3, 4, 3, 4, 3, 2],
    [2, 3, 3, 4, 3, 3, 2],
    [3, 2, 3, 2, 4, 4, 3],
    [1, 2, 1, 2, 2, 3, 2],
  ];

  const levelColor = [
    "bg-[#F3E8FF]",
    "bg-[#DDD6FE]",
    "bg-[#C4B5FD]",
    "bg-[#8B5CF6]",
    "bg-[#5B3DF5]",
  ];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm min-w-0 flex flex-col justify-between">
      <div>
        <CardHeader title="Posting Activity" />
        <div className="flex">
          <div className="flex flex-col justify-between pr-2 pt-4 text-[10px] text-[#6B7280] font-medium">
            {times.map((t) => (
              <span key={t} className="h-4 leading-4 whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
          <div className="flex-1">
            <div className="mb-1 grid grid-cols-7 text-center text-[10px] text-[#6B7280] font-medium">
              {days.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {grid.map((row, ri) =>
                row.map((level, ci) => (
                  <span
                    key={`${ri}-${ci}`}
                    className={`h-4.5 rounded-sm ${levelColor[level]}`}
                  />
                )),
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-[#6B7280]">
        <span>Low Activity</span>
        <span className="flex gap-0.5">
          {levelColor.map((c) => (
            <span key={c} className={`h-2 w-3 rounded-sm ${c}`} />
          ))}
        </span>
        <span>High Activity</span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Recent Content Performance table
--------------------------------------------------------- */

function RecentContentPerformanceCard() {
  const rows = [
    {
      img: post1,
      title: "Sunset views & city lights",
      type: ImageIcon,
      date: "May 24, 2025",
      impressions: "1.2M",
      reach: "612K",
      er: "7.81%",
      likes: "86.4K",
      comments: "1.6K",
      saves: "8.7K",
    },
    {
      img: post2,
      title: "Morning routine essentials",
      type: Video,
      date: "May 21, 2025",
      impressions: "842K",
      reach: "498K",
      er: "6.24%",
      likes: "52.1K",
      comments: "1.1K",
      saves: "4.3K",
    },
    {
      img: post3,
      title: "Beach day carousel",
      type: Layers,
      date: "May 18, 2025",
      impressions: "612K",
      reach: "371K",
      er: "5.67%",
      likes: "34.8K",
      comments: "932",
      saves: "3.2K",
    },
    {
      img: post4,
      title: "Wellness reset tips",
      type: Video,
      date: "May 15, 2025",
      impressions: "1.4M",
      reach: "721K",
      er: "8.32%",
      likes: "103K",
      comments: "2.1K",
      saves: "9.2K",
    },
    {
      img: post5,
      title: "Skincare must-haves",
      type: ImageIcon,
      date: "May 12, 2025",
      impressions: "502K",
      reach: "288K",
      er: "4.91%",
      likes: "24.6K",
      comments: "612",
      saves: "2.1K",
    },
  ];

  const cols = [
    "Content",
    "Type",
    "Date",
    "Impressions",
    "Reach",
    "Eng. Rate",
    "Likes",
    "Comments",
    "Saves",
  ];

  return (
    <div className="rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm min-w-0 flex flex-col justify-between h-full">
      <div>
        <CardHeader title="Recent Content Performance" />
        <div className="overflow-x-auto scrollbar-none mt-1">
          <table className="w-full min-w-[500px] border-collapse text-left">
            <thead>
              <tr className="text-[10px] text-[#6B7280]">
                {cols.map((c) => (
                  <th key={c} className="pb-2 pr-1.5 font-normal">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.title} className="border-t border-[#ECECEC]">
                  <td className="py-2 pr-1.5">
                    <div className="flex items-center gap-2">
                      <img
                        src={r.img}
                        alt={r.title}
                        className="h-6 w-6 shrink-0 rounded-md object-cover"
                      />
                      <span className="text-[11px] text-[#1F2937] font-medium truncate max-w-[130px]">
                        {r.title}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 pr-1.5">
                    <r.type className="h-3.5 w-3.5 text-[#C084FC]" />
                  </td>
                  <td className="py-2 pr-1.5 text-[11px] text-[#6B7280] whitespace-nowrap">
                    {r.date}
                  </td>
                  <td className="py-2 pr-1.5 text-[11px] text-[#1F2937]">
                    {r.impressions}
                  </td>
                  <td className="py-2 pr-1.5 text-[11px] text-[#1F2937]">
                    {r.reach}
                  </td>
                  <td className="py-2 pr-1.5 text-[11px] text-[#1F2937]">
                    {r.er}
                  </td>
                  <td className="py-2 pr-1.5 text-[11px] text-[#1F2937]">
                    {r.likes}
                  </td>
                  <td className="py-2 pr-1.5 text-[11px] text-[#1F2937]">
                    {r.comments}
                  </td>
                  <td className="py-2 pr-1.5 text-[11px] text-[#1F2937]">
                    {r.saves}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ViewLink>View All Content</ViewLink>
    </div>
  );
}

/* ---------------------------------------------------------
   Top Performing Posts
--------------------------------------------------------- */

function TopPerformingPostsCard() {
  const scrollRef = useRef(null);

  const posts = [
    {
      img: post1,
      title: "Sunset views & city lights",
      date: "May 24, 2025",
      er: "7.81%",
      likes: "86.4K",
    },
    {
      img: post3,
      title: "Wellness reset tips",
      date: "May 15, 2025",
      er: "8.32%",
      likes: "103K",
    },
    {
      img: post2,
      title: "Morning routine essentials",
      date: "May 21, 2025",
      er: "6.24%",
      likes: "52.1K",
    },
    {
      img: post4,
      title: "Beach day carousel",
      date: "May 18, 2025",
      er: "5.67%",
      likes: "34.8K",
    },
  ];

  const handleScroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -140 : 140,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm min-w-0 flex flex-col justify-between h-full">
      <div>
        <CardHeader title="Top Performing Posts" />
        <div className="relative flex items-center mt-2 gap-1">
          <button
            onClick={() => handleScroll("left")}
            className="flex h-5 w-5 shrink-0 items-center justify-center text-[#6B7280] hover:text-[#1F2937] cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex flex-1 gap-2.5 overflow-x-auto scrollbar-none scroll-smooth py-0.5"
          >
            {posts.map((p) => (
              <div key={p.title} className="w-[110px] sm:w-[118px] shrink-0">
                <div className="h-[90px] w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-1.5 text-[11px] font-semibold leading-tight text-[#1F2937] truncate">
                  {p.title}
                </p>
                <p className="text-[10px] text-[#6B7280]">{p.date}</p>
                <div className="mt-1 flex items-center justify-between text-[10px] text-[#6B7280]">
                  <span>ER {p.er}</span>
                  <span className="flex items-center gap-0.5 text-[#6B7280]">
                    <Heart className="h-2.5 w-2.5" /> {p.likes}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            className="flex h-5 w-5 shrink-0 items-center justify-center text-[#6B7280] hover:text-[#1F2937] cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <ViewLink>View All Top Posts</ViewLink>
    </div>
  );
}

/* ---------------------------------------------------------
   Engagement Trend (line chart)
--------------------------------------------------------- */

function EngagementTrendCard() {
  const erData = [
    4.5, 6.5, 5, 8.5, 6, 5.5, 9.5, 6, 5, 7.5, 6.5, 5.5, 8, 6.5, 5, 6, 8.5, 6,
    5.5, 7,
  ];
  const likesData = [
    30, 45, 35, 55, 40, 38, 60, 42, 36, 50, 44, 38, 52, 45, 37, 40, 55, 42, 38,
    48,
  ];
  const labels = [
    "Apr 25",
    "Apr 30",
    "May 5",
    "May 10",
    "May 15",
    "May 20",
    "May 25",
  ];

  const width = 600;
  const height = 180;
  const padding = { top: 10, right: 30, bottom: 20, left: 30 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const xStep = chartW / (erData.length - 1);
  const erMax = 10;
  const likesMax = 100;

  const toPointsEr = erData
    .map(
      (v, i) =>
        `${padding.left + i * xStep},${padding.top + chartH - (v / erMax) * chartH}`,
    )
    .join(" ");
  const toPointsLikes = likesData
    .map(
      (v, i) =>
        `${padding.left + i * xStep},${padding.top + chartH - (v / likesMax) * chartH}`,
    )
    .join(" ");

  const yTicksEr = [0, 2, 4, 6, 8, 10];
  const yTicksLikes = [0, 20, 40, 60, 80, 100];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm min-w-0">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h3 className="text-xs sm:text-sm font-bold text-[#1F2937]">
            Engagement Trend
          </h3>
          <Info className="h-3 w-3 text-[#6B7280]" />
        </div>
        <div className="flex items-center gap-3 text-[10px] text-[#6B7280]">
          <span className="flex items-center gap-1">
            <span className="h-0.5 w-3 bg-[#5B3DF5]" />
            Engagement Rate (%)
          </span>
          <span className="flex items-center gap-1">
            <span className="h-0.5 w-3 border-t border-dashed border-[#5B3DF5]" />
            Avg. Likes
          </span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {yTicksEr.map((t, i) => (
          <g key={t}>
            <line
              x1={padding.left}
              x2={width - padding.right}
              y1={padding.top + chartH - (t / erMax) * chartH}
              y2={padding.top + chartH - (t / erMax) * chartH}
              stroke="#ECECEC"
              strokeWidth="1"
            />
            <text
              x={padding.left - 6}
              y={padding.top + chartH - (t / erMax) * chartH + 3}
              textAnchor="end"
              className="fill-[#6B7280] text-[8px]"
            >
              {t}%
            </text>
            <text
              x={width - padding.right + 4}
              y={
                padding.top + chartH - (yTicksLikes[i] / likesMax) * chartH + 3
              }
              textAnchor="start"
              className="fill-[#6B7280] text-[8px]"
            >
              {yTicksLikes[i]}K
            </text>
          </g>
        ))}

        <polyline
          points={toPointsEr}
          fill="none"
          stroke="#5B3DF5"
          strokeWidth="1.5"
        />
        <polyline
          points={toPointsLikes}
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />

        {labels.map((l, i) => (
          <text
            key={l}
            x={
              padding.left +
              ((i * (erData.length - 1)) / (labels.length - 1)) * xStep
            }
            y={height - 4}
            textAnchor="middle"
            className="fill-[#6B7280] text-[8px]"
          >
            {l}
          </text>
        ))}
      </svg>
    </div>
  );
}

/* ---------------------------------------------------------
   AI Performance Summary
--------------------------------------------------------- */

function AIPerformanceSummaryCard() {
  const working = [
    "Reels with travel & lifestyle content",
    "Posting between 11AM - 2PM",
    "High-quality visuals & storytelling",
  ];
  const opportunities = [
    "Increase carousel content (high saves)",
    "Post more on weekends",
    "Try more educational/tutorial content",
  ];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm min-w-0">
      <div className="mb-2 flex items-center gap-1.5">
        <Sparkles className="h-3.5 w-3.5 text-[#5B3DF5]" />
        <h3 className="text-xs sm:text-sm font-bold text-[#1F2937]">
          AI Performance Summary
        </h3>
        <Info className="h-3 w-3 text-[#6B7280]" />
      </div>

      <div className="rounded-xl bg-[#F5F3FF] px-4 py-2.5 text-center text-xs text-[#1F2937]">
        Isabella's content is performing great! Her engagement rate is{" "}
        <span className="font-bold text-[#5B3DF5]">60% higher</span> than
        similar creators.
        <br />
        Reels drive the most engagement, especially lifestyle and travel content.
      </div>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#ECECEC] pt-3">
        <div>
          <h4 className="mb-2 text-xs font-bold text-[#1F2937]">
            What's Working
          </h4>
          <ul className="space-y-1.5">
            {working.map((t) => (
              <li
                key={t}
                className="flex items-start gap-1.5 text-[11px] text-[#1F2937]"
              >
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#22C55E]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-xs font-bold text-[#1F2937]">
            Growth Opportunities
          </h4>
          <ul className="space-y-1.5">
            {opportunities.map((t) => (
              <li
                key={t}
                className="flex items-start gap-1.5 text-[11px] text-[#1F2937]"
              >
                <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F59E0B]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-1 flex items-center gap-1 text-xs font-bold text-[#1F2937]">
            <Star className="h-3.5 w-3.5 text-[#5B3DF5]" />
            Recommendation
          </h4>
          <p className="mb-2 text-[10px] text-[#6B7280] leading-tight">
            Increase posting frequency to 4-5 times per week to boost reach and engagement.
          </p>
          <div className="flex items-end justify-between gap-1 h-10 px-2 py-1 bg-[#F5F3FF] rounded-lg">
            <div className="flex items-end gap-1 h-full flex-1">
              {[40, 60, 50, 80, 65].map((h, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-[#5B3DF5] to-[#A78BFA]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="text-[#5B3DF5] pl-1">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M23 6l-9.5 9.5-5-5L1 18" />
                <path d="M17 6h6v6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Page
--------------------------------------------------------- */

export default function StatisticsMedia() {
  return (
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col xl:flex-row w-full">
      <ProfileSidebar />

      <main className="flex-1 border-l border-[#ECECEC] bg-white p-4 sm:p-6 min-w-0 overflow-hidden">
          <TopTabs />

          <div className="mt-4 space-y-3.5">
            <AnalyticsRow />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5">
              <MediaPerformanceCard />
              <ContentFormatPerformanceCard />
              <PostingActivityCard />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-3.5">
              <div className="xl:col-span-7 min-w-0">
                <RecentContentPerformanceCard />
              </div>
              <div className="xl:col-span-5 min-w-0">
                <TopPerformingPostsCard />
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-3.5">
              <EngagementTrendCard />
              <AIPerformanceSummaryCard />
            </div>
          </div>
      </main>
    </div>
  );
}


