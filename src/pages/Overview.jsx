import { useState } from "react";
import SidebarOpen from "../components/SidebarOpen";
import {
  ExternalLink,
  ChevronDown,
  Lock,
  Heart,
  MessageCircle,
  Hash,
  AtSign,
  UserCircle2,
  BarChart2,
  Tag,
  Bookmark,
  BadgeCheck,
  Grid3x3,
  Users,
} from "lucide-react";
import {
  CREATOR,
  STATS,
  NAV_TABS,
  ProfileHeader,
  StatCardsRow,
  TabBar,
} from "../components/CreatorHeaderLayout";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PURPLE = "#7C3AED";
const PURPLE_TINT = "#EDE9FE";
const BORDER = "#E5E7EB";
const HEADING = "#111827";
const MUTED = "#6B7280";

// Shared CREATOR, STATS, NAV_TABS imported from CreatorHeaderLayout

/* ---------------------------------- data --------------------------------- */



const tags = ["Beauty", "Skincare", "Lifestyle", "Wellness", "travel", "Food"];

const growthData = [
  { date: "Apr 16", value: 5.25 },
  { date: "Apr 19", value: 5.32 },
  { date: "Apr 21", value: 5.42 },
  { date: "Apr 23", value: 5.5 },
  { date: "Apr 26", value: 5.62 },
  { date: "Apr 28", value: 5.72 },
  { date: "May 1", value: 5.82 },
  { date: "May 3", value: 5.9 },
  { date: "May 6", value: 5.98 },
  { date: "May 8", value: 6.05 },
  { date: "May 11", value: 6.12 },
  { date: "May 13", value: 6.16 },
  { date: "May 16", value: 6.2 },
];

const profileFields = [
  // { label: "Platform", value: "Instagram", icon: Instagram },
  { label: "Verified", value: "Yes", icon: BadgeCheck, verified: true },
  { label: "Location", value: "Los Angeles, California, USA" },
  { label: "Joined", value: "May 18, 2016" },
  { label: "Last Updated", value: "May 16, 2025" },
  {
    label: "Profile URL",
    value: "instagram.com/mariale",
    link: true,
  },
];

const recentContent = [
  { img: 21, likes: "112K", comments: "1.1K", date: "May 16, 2025" },
  { img: 32, likes: "99K", comments: "1.4K", date: "May 13, 2025" },
  { img: 44, likes: "126K", comments: "2.2K", date: "May 10, 2025" },
  { img: 25, likes: "89K", comments: "1.3K", date: "May 8, 2025" },
  { img: 47, likes: "145K", comments: "2.6K", date: "May 6, 2025" },
];

const hashtags = [
  { tag: "#skincare", count: "96.6K", value: 96.6 },
  { tag: "#beauty", count: "88.1K", value: 88.1 },
  { tag: "#skincareroutine", count: "55.2K", value: 55.2 },
  { tag: "#glowingskin", count: "46.3K", value: 46.3 },
  { tag: "#selfcare", count: "32.1K", value: 32.1 },
];

const mentions = [
  { handle: "@laniege_us", count: "2.6K", value: 2.6 },
  { handle: "@sephora", count: "1.8K", value: 1.8 },
  { handle: "@nyxcosmetics", count: "1.5K", value: 1.5 },
  { handle: "@tatcha", count: "1.2K", value: 1.2 },
  { handle: "@rarebeauty", count: "1.1K", value: 1.1 },
];

const similarCreators = [
  {
    name: "Terri Joe Lephan",
    handle: "@michellephan",
    category: "Beauty",
    followers: "8.6M",
    er: "2.31%",
    img: 12,
  },
  {
    name: "Lily Lyne",
    handle: "@lilylyne",
    category: "Lifestyle",
    followers: "6.1M",
    er: "2.05%",
    img: 45,
  },
  {
    name: "Nikki Vargas",
    handle: "@nikkimakeup",
    category: "Beauty",
    followers: "14.1M",
    er: "1.76%",
    img: 33,
  },
];

/* -------------------------------- helpers -------------------------------- */

// Pill helper removed

function Card({ className = "", children }) {
  return (
    <div
      className={`bg-white rounded-xl  ${className}`}
      style={{ border: `1px solid ${BORDER}` }}
    >
      {children}
    </div>
  );
}

function SectionHeader({ icon: Icon, title, action }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <Icon size={18} style={{ color: PURPLE }} />
        <h3 className="font-semibold text-[15px]" style={{ color: HEADING }}>
          {title}
        </h3>
      </div>
      {action !== undefined ? action : null}
    </div>
  );
}

function ViewAll() {
  return (
    <button
      className="text-sm font-medium flex items-center gap-1 hover:underline"
      style={{ color: PURPLE }}
    >
      View all <span aria-hidden>→</span>
    </button>
  );
}

/* --------------------------------- sidebar -------------------------------- */

// function Sidebar({ mobileOpen, onClose }) {
//   return (
//     <>
//       {/* mobile backdrop */}
//       {mobileOpen ? (
//         <div
//           className="fixed inset-0 bg-black/40 z-40 lg:hidden"
//           onClick={onClose}
//         />
//       ) : null}

//      <SidebarOpen />
//     </>
//   );
// }

/* ------------------------------ mobile topbar ------------------------------ */

// function MobileTopbar({ onOpen }) {
//   return (
//     <div
//       className="lg:hidden sticky top-0 z-30 flex items-center justify-between bg-white px-4 py-3"
//       style={{ borderBottom: `1px solid ${BORDER}` }}
//     >
//       <button onClick={onOpen} aria-label="Open menu">
//         <Menu size={22} style={{ color: HEADING }} />
//       </button>
//       <div className="flex items-center gap-2">
//         <div
//           className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
//           style={{ backgroundColor: PURPLE }}
//         >
//           C
//         </div>
//         <span className="font-bold text-[15px]" style={{ color: HEADING }}>
//           CreatorOS
//         </span>
//       </div>
//       <img
//         src="https://i.pravatar.cc/150?img=68"
//         alt="Alex Johnson"
//         className="w-7 h-7 rounded-full object-cover"
//       />
//     </div>
//   );
// }

/* --------------------------------- header --------------------------------- */

// Shared layout components imported from CreatorHeaderLayout

/* ----------------------------- middle section ----------------------------- */

function ProfileSnapshot() {
  return (
    <Card className="p-2">
      <SectionHeader icon={UserCircle2} title="Profile Snapshot" />
      <p className="text-xs leading-relaxed" style={{ color: "#374151" }}>
        Beauty & lifestyle creator sharing honest reviews, skincare tips, and
        everyday routines. Helping you look and feel your best ✨
      </p>
      <ul className="mt-4 flex flex-col gap-3">
        {profileFields.map((f) => (
          <li
            key={f.label}
            className="flex items-center justify-between text-xs"
          >
            <span
              className="flex items-center gap-1.5"
              style={{ color: MUTED }}
            >
              {f.icon ? <f.icon size={10} /> : null}
              {f.label}
            </span>
            {f.link ? (
              <a
                href="#"
                className="flex items-center gap-1 font-medium"
                style={{ color: PURPLE }}
              >
                {f.value}
                <ExternalLink size={10} />
              </a>
            ) : (
              <span
                className="flex items-center gap-1 font-medium"
                style={{ color: HEADING }}
              >
                {f.value}
                {f.verified ? (
                  <BadgeCheck
                    size={10}
                    className="text-blue-500"
                    fill="#3B82F6"
                    color="white"
                  />
                ) : null}
              </span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function GrowthChart() {
  return (
    <Card className="p-5 col-span-1 lg:col-span-2 relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart2 size={18} style={{ color: PURPLE }} />
          <h3 className="font-semibold text-[15px]" style={{ color: HEADING }}>
            Followers Growth Overview
          </h3>
        </div>
        <button
          className="flex items-center gap-1.5 text-xs font-bold rounded-md px-3 py-1.5"
          style={{ border: `1px solid ${BORDER}`, color: HEADING }}
        >
          <span className="hidden sm:inline">Last 30 Days</span>
          <span className="sm:hidden">30D</span>
          <ChevronDown size={13} />
        </button>
      </div>

      <div className="h-56 lg:h-64 relative">
        <span
          className="absolute top-1 right-1 text-[8px] font-semibold rounded-md px-2 py-1"
          style={{ backgroundColor: PURPLE_TINT, color: PURPLE }}
        >
          6.2M · May 16
        </span>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={growthData}
            margin={{ top: 20, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={PURPLE} stopOpacity={0.25} />
                <stop offset="100%" stopColor={PURPLE} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              ticks={[
                "Apr 16",
                "Apr 21",
                "Apr 26",
                "May 1",
                "May 6",
                "May 11",
                "May 16",
              ]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: MUTED, fontSize: 11, strokeDasharray: "2 2" }}
              dy={10}
            />
            <YAxis
              domain={[5.2, 6.8]}
              ticks={[5.2, 5.6, 6.0, 6.4, 6.8]}
              tickFormatter={(v) => `${v.toFixed(1)}M`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: MUTED, fontSize: 11 }}
            />
            <Tooltip
              formatter={(v) => [`${v.toFixed(2)}M`, "Followers"]}
              contentStyle={{
                borderRadius: 8,
                borderColor: BORDER,
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={PURPLE}
              strokeWidth={2.5}
              fill="url(#growthFill)"
              dot={!false}
              activeDot={{ r: 4, fill: PURPLE }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

function CategoriesAndPromo() {
  return (
    <div className="flex flex-col gap-4">
      <Card className="p-5">
        <SectionHeader icon={Tag} title="Categories" />
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[8px] font-medium leading-none text-[#5B3DF5]">
              {t}
            </span>
          ))}
        </div>
      </Card>

      <div
        className="rounded-xl p-5 text-white flex-1"
        style={{
          background: "linear-gradient(135deg, #5A31F4 0%, #312E81 100%)",
        }}
      >
        <Lock size={20} className="mb-3 opacity-90" />
        <h4 className="font-semibold text-[10px] mb-2 leading-snug">
          Unlock audience and commercial insights
        </h4>
        <p className="text-[8px] leading-relaxed opacity-90 mb-4">
          Upgrade to Pro to access audience demographics, brand affinity,
          engagement quality, pricing insights and more.
        </p>
        <button
          className="bg-white rounded-lg text-xs font-semibold px-4 py-2"
          style={{ color: PURPLE }}
        >
          Upgrade Now
        </button>
      </div>
    </div>
  );
}

/* ------------------------------ recent content ----------------------------- */

function RecentContent() {
  return (
    <Card className="p-5 mt-5">
      <SectionHeader
        icon={Grid3x3}
        title="Recent Content"
        action={<ViewAll />}
      />
      <div className="flex overflow-x-auto no-scrollbar gap-4 sm:grid sm:grid-cols-3 lg:grid-cols-5 sm:overflow-visible">
        {recentContent.map((post, i) => (
          <div className="flex flex-col border p-2 border-gray-200 rounded-2xl w-[42vw] shrink-0 sm:w-auto sm:shrink" key={i}>
            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
              <img
                src={`https://i.pravatar.cc/400?img=${post.img}`}
                alt=""
                className="w-90% h-full object-cover"
              />
              <span className="absolute top-2 right-2 bg-white/90 rounded-full p-1.5">
                <Bookmark size={13} style={{ color: HEADING }} />
              </span>
            </div>
            <div
              className="flex items-center gap-3 mt-2 text-xs"
              style={{ color: MUTED }}
            >
              <span className="flex items-center gap-1">
                <Heart size={12} />
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={12} />
                {post.comments}
              </span>
            </div>
            <p className="text-xs mt-1" style={{ color: MUTED }}>
              {post.date}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* --------------------------- hashtags / mentions --------------------------- */

function MeterList({ icon, title, rows, labelKey }) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <Card className="p-5">
      <SectionHeader icon={icon} title={title} action={<ViewAll />} />
      <ul className="flex flex-col gap-3.5">
        {rows.map((r) => (
          <li key={r[labelKey]} className="flex items-center gap-3 text-sm">
            <span
              className="w-24 sm:w-28 shrink-0 font-medium truncate"
              style={{ color: HEADING }}
            >
              {r[labelKey]}
            </span>
            <span className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <span
                className="block h-full rounded-full"
                style={{
                  width: `${(r.value / max) * 100}%`,
                  backgroundColor: PURPLE,
                }}
              />
            </span>
            <span
              className="w-16 sm:w-20 text-right text-xs font-bold"
              style={{ color: MUTED }}
            >
              {r.count}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* ------------------------------ similar creators ---------------------------- */

function SimilarCreators() {
  return (
    <Card className="p-5 mt-5 mb-8">
      <SectionHeader
        icon={Users}
        title="Similar Creators"
        action={<ViewAll />}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {similarCreators.map((c) => (
          <div
            key={c.handle}
            className="rounded-[12px] p-2 flex flex-row items-center gap-5 w-full lg:w-max bg-white"
            style={{ border: `1px solid ${BORDER || "#F1F5F9"}` }}
          >
            <div className="relative ">
              <img
                src={`https://i.pravatar.cc/150?img=${c.img}`}
                alt={c.name}
                className="w-[70px] h-[70px] rounded-full object-cover shadow-[0_4px_24px_-6px_rgba(0,0,0,0.15)]"
              />
            </div>

            <div className="flex flex-col items-start text-left">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-sm font-extrabold text-slate-800 tracking-tight"
                  style={{ color: HEADING }}
                >
                  {c.name}
                </span>
                <BadgeCheck
                  size={15}
                  className="text-indigo-600"
                  fill="#4F46E5"
                  color="white"
                />
              </div>

              <p
                className="text-xs font-semibold text-slate-400 mt-0.5"
                style={{ color: MUTED }}
              >
                {c.handle}
              </p>

              <div className="mt-1">
                <div className="inline-flex items-center justify-center px-1.5 py-1 rounded-[8px] bg-indigo-50 text-indigo-600 text-[8px] font-bold">
                  {c.category}
                </div>
              </div>

              <div className="flex items-center gap-3 mt-3.5 text-[13px] flex-wrap">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-slate-800">
                    {c.followers}
                  </span>
                  <span className="font-bold text-slate-400">Followers</span>
                </div>

                <div className="w-[1.5px] h-3.5 bg-slate-200 rounded-full"></div>

                <div className="font-extrabold text-slate-600">ER {c.er}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------------------------------- app ----------------------------------- */

function Overview() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      className="flex h-screen overflow-hidden bg-gray-50 font-sans"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none} .no-scrollbar{-ms-overflow-style:none; scrollbar-width:none}`}</style>

      <SidebarOpen />

      <main
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{ marginLeft: "256px" }}
      >
        <div className="bg-white px-6 pt-6">
          <ProfileHeader creator={CREATOR} />
          <StatCardsRow stats={STATS} />
          <TabBar tabs={NAV_TABS} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        <div className="p-3 sm:p-4 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">
            <ProfileSnapshot />
            <GrowthChart />
            <CategoriesAndPromo />
          </div>

          <RecentContent />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
            <MeterList
              icon={Hash}
              title="Top Hashtags"
              rows={hashtags}
              labelKey="tag"
            />
            <MeterList
              icon={AtSign}
              title="Post Mentions"
              rows={mentions}
              labelKey="handle"
            />
          </div>

          <SimilarCreators />
        </div>
      </main>
    </div>
  );
}

export default Overview;
