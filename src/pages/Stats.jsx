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

// function CategoryPill({ children }) {
//   return (
//     <span className="inline-flex items-center rounded-full border border-[#5B3DF5]/30 bg-[#5B3DF5]/5 px-3 py-1 text-xs font-medium text-[#5B3DF5]">
//       {children}
//     </span>
//   );
// }

// function StatItem({ value, label }) {
//   return (
//     <div className="flex flex-1 flex-col items-center">
//       <span className="text-lg font-bold text-[#1F2937]">{value}</span>
//       <span className="text-xs text-[#6B7280]">{label}</span>
//     </div>
//   );
// }

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

// function PrimaryButton({ icon: Icon, children, className = "" }) {
//   return (
//     <button
//       className={`flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5B3DF5] to-[#7C5CFF] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 ${className}`}
//     >
//       {Icon && <Icon className="h-4 w-4" />}
//       {children}
//     </button>
//   );
// }

// function SecondaryButton({ icon: Icon, children, className = "" }) {
//   return (
//     <button
//       className={`flex w-full items-center justify-center gap-2 rounded-xl border border-[#ECECEC] bg-white px-4 py-2.5 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FAFAFC] ${className}`}
//     >
//       {Icon && <Icon className="h-4 w-4" />}
//       {children}
//     </button>
//   );
// }

function CardHeader({ title, action }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <h3 className="text-[15px] font-semibold text-[#1F2937]">{title}</h3>
        <Info className="h-3.5 w-3.5 text-[#6B7280]" />
      </div>
      {action}
    </div>
  );
}

function ViewLink({ children }) {
  return (
    <div className="mt-4 text-center">
      <button className="text-sm font-medium text-[#5B3DF5] hover:underline">
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
    <aside className="w-[320px] shrink-0 bg-white rounded-lg border border-gray-200  p-6 flex flex-col items-center">
      <div className="relative ">
        <img
          src={img2}
          alt="Isabella Martinez"
          className="w-[230px] h-[230px] rounded-full object-cover"
        />
      </div>

      <h2 className="text-lg font-bold text-gray-900">Isabella Martinez</h2>
      <p className="text-sm text-gray-400 mt-0.5">@isabellamarts</p>

      <div className="flex items-center gap-1 text-gray-500 text-sm mt-2">
        <MapPin className="w-3.5 h-3.5" />
        <span>Los Angeles, CA, USA</span>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {["Lifestyle", "Fashion", "Travel"].map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-bold leading-none text-[#6348e6]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {["Wellness", "Beauty"].map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-bold leading-none text-[#6348e6]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="w-full flex flex-col gap-3 mt-6">
        <button className="w-full flex items-center justify-center gap-2 bg-[#5B3DF5] text-white text-sm font-semibold rounded-md py-3">
          <Send className="w-4 h-4" />
          Create Campaign
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] text-gray-600 text-sm font-bold rounded-md py-3">
          <Download className="w-5 h-5" />
          Download Media Kit
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] text-gray-600 text-sm font-bold rounded-md py-3">
          <Star className="w-5 h-5" />
          Add to Favorites
        </button>
      </div>

      <div className="w-full flex items-center justify-between mt-7 pt-6 border-t border-[#E5E7EB]">
        <div className="flex flex-col items-center gap-1">
          <Users className="w-6 h-6 text-blue-700" />
          <span className="text-base font-bold text-gray-900">892K</span>
          <span className="text-[11px] text-gray-400">Followers</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <TrendingUp className="w-6 h-6 text-blue-700" />
          <span className="text-base font-bold text-gray-900">6.38%</span>
          <span className="text-[11px] text-gray-400">Engagement</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Heart className="w-6 h-6 text-blue-700" />
          <span className="text-base font-bold text-gray-900">57.2K</span>
          <span className="text-[11px] text-gray-400">Avg. Likes</span>
        </div>
      </div>
    </aside>
  );
}

/* ---------------------------------------------------------
   Top tabs
--------------------------------------------------------- */

function TopTabs() {
  const tabs = [
    {
      label: "Statistics & Media",
      icon: <BarChart3 size={30} />,
      active: true,
    },
    { label: "Stories & Hashtags", icon: <Layers size={30} /> },
    { label: "Audience Insights", icon: <Users size={30} /> },
    { label: "Lookalike Creator", icon: <UserPlus size={30} /> },
    { label: "Contact Info", icon: <User size={30} /> },
  ];
  return (
    <div className="flex items-center justify-between border-b border-gray-100 px-8 pt-6">
      <div className="flex gap-26">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-4 pb-2 text-lg font-medium transition ${
              tab.active
                ? "border-b-2 border-violet-900 text-violet-900 font-extrabold"
                : "border-b-2 border-transparent text-gray-900 font-extrabold hover:text-gray-700"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>
      <button className="mb-4 w-10 h-10 rounded-md bg-[#ffffff] border border-[#E5E7EB] flex items-center justify-center shrink-0">
        <X className="w-7 h-7 text-zinc-900" />
      </button>
    </div>
  );
}

/* ---------------------------------------------------------
   Row 1 — analytics stat cards
--------------------------------------------------------- */

function AnalyticsStatCard({ icon: Icon, title, value, subtitle, delta }) {
  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5B3DF5]/10">
          <Icon className="h-5 w-5 text-[#5B3DF5]" />
        </span>
        <div className="flex items-center gap-1.5">
          <p className="text-sm font-medium text-[#6B7280]">{title}</p>
          {title === "Engagement Rate" && (
            <Info className="h-3.5 w-3.5 text-[#6B7280]" />
          )}
        </div>
      </div>
      <p className="mt-3 text-2xl font-bold text-[#1F2937]">{value}</p>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-xs text-[#6B7280]">{subtitle}</span>
        <span className="flex items-center gap-0.5 text-xs font-semibold text-[#22C55E]">
          <TrendingUp className="h-3 w-3" />
          {delta}
        </span>
      </div>
      <p className="mt-0.5 text-right text-[11px] text-[#6B7280]">
        vs last 30 days
      </p>
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
    },
    {
      icon: TrendingUp,
      title: "Engagement Rate",
      value: "6.38%",
      subtitle: "Avg. Engagement Rate",
      delta: "0.86pp",
    },
    {
      icon: Heart,
      title: "Avg Likes",
      value: "57.2K",
      subtitle: "Average Likes",
      delta: "8.7%",
    },
    {
      icon: MessageCircle,
      title: "Avg Comments",
      value: "1.4K",
      subtitle: "Average Comments",
      delta: "11.3%",
    },
  ];

  return (
    <div className="flex gap-5">
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
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <CardHeader title="Media Performance Overview" />
      <div className="space-y-3.5">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-sm text-[#6B7280]">
              {r.label}
            </span>
            <span className="w-14 shrink-0 text-sm font-semibold text-[#1F2937]">
              {r.value}
            </span>
            <ProgressBar percent={r.percent} />
            <span className="flex w-14 shrink-0 items-center justify-end gap-0.5 text-xs font-semibold text-[#22C55E]">
              <TrendingUp className="h-3 w-3" />
              {r.delta}
            </span>
          </div>
        ))}
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
    { label: "Posts", color: "#E879F9", percent: 27, er: "5.03%" },
    { label: "Carousels", color: "#F59E0B", percent: 11, er: "4.21%" },
  ];

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  let offsetAccum = 0;

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <CardHeader title="Content Format Performance" />
      <div className="flex items-center gap-6">
        <svg viewBox="0 0 120 120" className="h-32 w-32 shrink-0 -rotate-90">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#ECECEC"
            strokeWidth="16"
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
                strokeWidth="16"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offsetAccum}
              />
            );
            offsetAccum += dash;
            return circle;
          })}
        </svg>

        <div className="flex-1 space-y-3">
          {segments.map((s) => (
            <div key={s.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: s.color }}
                />
                <span className="text-sm text-[#1F2937]">{s.label}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#1F2937]">
                  {s.percent}%
                </p>
                <p className="text-[11px] text-[#6B7280]">
                  Engagement Rate {s.er}
                </p>
              </div>
            </div>
          ))}
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

  // intensity levels 0-4 per [time][day]
  const grid = [
    [1, 1, 2, 1, 2, 1, 1],
    [1, 2, 2, 3, 2, 2, 1],
    [3, 3, 4, 3, 4, 3, 2],
    [2, 3, 3, 4, 3, 3, 2],
    [3, 2, 3, 2, 4, 4, 3],
    [1, 2, 1, 2, 2, 3, 2],
  ];

  const levelColor = [
    "bg-[#ECECEC]",
    "bg-[#D9CFFB]",
    "bg-[#B7A3F8]",
    "bg-[#8A6BF5]",
    "bg-[#5B3DF5]",
  ];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <CardHeader title="Posting Activity" />
      <div className="flex">
        <div className="flex flex-col justify-between pr-2 pt-6 text-[11px] text-[#6B7280]">
          {times.map((t) => (
            <span key={t} className="h-6 leading-6">
              {t}
            </span>
          ))}
        </div>
        <div className="flex-1">
          <div className="mb-1 grid grid-cols-7 text-center text-[11px] text-[#6B7280]">
            {days.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {grid.map((row, ri) =>
              row.map((level, ci) => (
                <span
                  key={`${ri}-${ci}`}
                  className={`h-6 rounded ${levelColor[level]}`}
                />
              )),
            )}
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#6B7280]">
        <span>Low Activity</span>
        <span className="flex gap-0.5">
          {levelColor.map((c) => (
            <span key={c} className={`h-2.5 w-4 rounded-sm ${c}`} />
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
    <div className="flex-[1.4] rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <CardHeader title="Recent Content Performance" />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="text-[11px] text-[#6B7280]">
              {cols.map((c) => (
                <th key={c} className="pb-2 pr-3 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.title} className="border-t border-[#ECECEC]">
                <td className="py-2.5 pr-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={r.img}
                      alt={r.title}
                      className="h-9 w-9 shrink-0 rounded-lg object-cover"
                    />
                    <span className="text-sm text-[#1F2937]">{r.title}</span>
                  </div>
                </td>
                <td className="py-2.5 pr-3">
                  <r.type className="h-4 w-4 text-[#5B3DF5]" />
                </td>
                <td className="py-2.5 pr-3 text-sm text-[#6B7280]">{r.date}</td>
                <td className="py-2.5 pr-3 text-sm text-[#1F2937]">
                  {r.impressions}
                </td>
                <td className="py-2.5 pr-3 text-sm text-[#1F2937]">
                  {r.reach}
                </td>
                <td className="py-2.5 pr-3 text-sm text-[#1F2937]">{r.er}</td>
                <td className="py-2.5 pr-3 text-sm text-[#1F2937]">
                  {r.likes}
                </td>
                <td className="py-2.5 pr-3 text-sm text-[#1F2937]">
                  {r.comments}
                </td>
                <td className="py-2.5 pr-3 text-sm text-[#1F2937]">
                  {r.saves}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ViewLink>View All Content</ViewLink>
    </div>
  );
}

/* ---------------------------------------------------------
   Top Performing Posts
--------------------------------------------------------- */

function TopPerformingPostsCard() {
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
    // {
    //   img: post5,
    //   title: "Beach day carousel",
    //   date: "May 18, 2025",
    //   er: "5.67%",
    //   likes: "34.8K",
    // },
    // {
    //   img: post1,
    //   title: "Beach day carousel",
    //   date: "May 18, 2025",
    //   er: "5.67%",
    //   likes: "34.8K",
    // },
    // {
    //   img: post2,
    //   title: "Beach day carousel",
    //   date: "May 18, 2025",
    //   er: "5.67%",
    //   likes: "34.8K",
    // },
    // {
    //   img: post3,
    //   title: "Beach day carousel",
    //   date: "May 18, 2025",
    //   er: "5.67%",
    //   likes: "34.8K",
    // },
  ];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <CardHeader title="Top Performing Posts" />
        <div className="mb-4 flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] text-[#6B7280] hover:bg-[#FAFAFC]">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] text-[#6B7280] hover:bg-[#FAFAFC]">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden ">
        {posts.map((p) => (
          <div key={p.title} className="w-[180px] shrink-0">
            <div className="h-[110px] w-full overflow-hidden rounded-xl">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-2 text-sm font-medium leading-tight text-[#1F2937]">
              {p.title}
            </p>
            <p className="text-xs text-[#6B7280]">{p.date}</p>
            <div className="mt-1.5 flex items-center gap-3 text-xs text-[#1F2937]">
              <span className="font-medium text-[#5B3DF5]">ER {p.er}</span>
              <span className="flex items-center gap-1">
                <Heart className="h-3 w-3" /> {p.likes}
              </span>
            </div>
          </div>
        ))}
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

  const width = 640;
  const height = 220;
  const padding = { top: 10, right: 10, bottom: 24, left: 34 };
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
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <h3 className="text-[15px] font-semibold text-[#1F2937]">
            Engagement Trend
          </h3>
          <Info className="h-3.5 w-3.5 text-[#6B7280]" />
        </div>
        <div className="flex items-center gap-4 text-xs text-[#6B7280]">
          <span className="flex items-center gap-1.5">
            <span className="h-0.5 w-4 bg-[#5B3DF5]" />
            Engagement Rate (%)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-0.5 w-4 border-t-2 border-dashed border-[#5B3DF5]" />
            Avg. Likes
          </span>
        </div>
      </div>

      <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
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
              x={padding.left - 8}
              y={padding.top + chartH - (t / erMax) * chartH + 3}
              textAnchor="end"
              className="fill-[#6B7280] text-[9px]"
            >
              {t}%
            </text>
            <text
              x={width - padding.right + 6}
              y={
                padding.top + chartH - (yTicksLikes[i] / likesMax) * chartH + 3
              }
              textAnchor="start"
              className="fill-[#6B7280] text-[9px]"
            >
              {yTicksLikes[i]}K
            </text>
          </g>
        ))}

        <polyline
          points={toPointsEr}
          fill="none"
          stroke="#5B3DF5"
          strokeWidth="2"
        />
        <polyline
          points={toPointsLikes}
          fill="none"
          stroke="#5B3DF5"
          strokeWidth="2"
          strokeDasharray="5 4"
        />

        {labels.map((l, i) => (
          <text
            key={l}
            x={
              padding.left +
              ((i * (erData.length - 1)) / (labels.length - 1)) * xStep
            }
            y={height - 6}
            textAnchor="middle"
            className="fill-[#6B7280] text-[9px]"
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
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-1.5">
        <Sparkles className="h-4 w-4 text-[#5B3DF5]" />
        <h3 className="text-[15px] font-semibold text-[#1F2937]">
          AI Performance Summary
        </h3>
        <Info className="h-3.5 w-3.5 text-[#6B7280]" />
      </div>

      <div className="rounded-xl bg-[#5B3DF5]/5 px-6 py-4 text-center text-sm text-[#1F2937]">
        Isabella's content is performing great! Her engagement rate is{" "}
        <span className="font-semibold text-[#5B3DF5]">60% higher</span> than
        similar creators.
        <br />
        Reels drive the most engagement, especially lifestyle and travel
        content.
      </div>

      <div className="mt-6 grid grid-cols-3 gap-6 border-t border-[#ECECEC] pt-6">
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[#1F2937]">
            What's Working
          </h4>
          <ul className="space-y-3">
            {working.map((t) => (
              <li
                key={t}
                className="flex items-start gap-2 text-sm text-[#1F2937]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-[#1F2937]">
            Growth Opportunities
          </h4>
          <ul className="space-y-3">
            {opportunities.map((t) => (
              <li
                key={t}
                className="flex items-start gap-2 text-sm text-[#1F2937]"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 flex items-center gap-1.5 text-sm font-semibold text-[#1F2937]">
            <Star className="h-4 w-4 text-[#5B3DF5]" />
            Recommendation
          </h4>
          <p className="mb-3 text-sm text-[#1F2937]">
            Increase posting frequency to 4-5 times per week to boost reach and
            engagement.
          </p>
          <div className="flex h-16 items-end gap-1.5">
            {[40, 60, 50, 80, 65].map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-[#5B3DF5] to-[#7C5CFF]"
                style={{ height: `${h}%` }}
              />
            ))}
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
    <div className="min-h-screen bg-[#FAFAFC] p-0 ">
      <div className="mx-auto flex max-w-[1560px] gap-6 rounded-none border border-gray-100 bg-white shadow-sm">
        <ProfileSidebar />

        <main className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-sm">
          <TopTabs />

          <div className="mt-6 space-y-5">
            <AnalyticsRow />

            <div className="flex gap-5">
              <MediaPerformanceCard />
              <ContentFormatPerformanceCard />
              <PostingActivityCard />
            </div>

            <div className="flex gap-5">
              <RecentContentPerformanceCard />
              <TopPerformingPostsCard />
            </div>

            <div className="flex gap-5">
              <EngagementTrendCard />
              <AIPerformanceSummaryCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
