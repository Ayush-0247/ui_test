import { useState } from "react";
import {
  Home,
  Compass,
  Megaphone,
  Users,
  FileText,
  BarChart2,
  ClipboardList,
  MessageSquare,
  CreditCard,
  Bookmark,
  Building2,
  Settings,
  MapPin,
  ExternalLink,
  //  Instagram,
  ChevronDown,
  Lock,
  Heart,
  MessageCircle,
  Hash,
  AtSign,
  Grid3x3,
  UserCircle2,
  Plus,
  Send,
  MoreHorizontal,
  TrendingUp,
  Eye,
  BadgeCheck,
  Tag,
  Menu,
  X,
} from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PURPLE = "#5B4CDB";
const PURPLE_TINT = "#EEF0FF";
const BORDER = "#ECECF3";
const HEADING = "#111827";
const MUTED = "#6B7280";
const GREEN = "#16A34A";

/* ---------------------------------- data --------------------------------- */

const navItems = [
  { icon: Home, label: "Dashboard" },
  { icon: Compass, label: "Discover" },
  { icon: Megaphone, label: "Campaigns" },
  { icon: Users, label: "Creators", active: true },
  { icon: FileText, label: "Content" },
  { icon: BarChart2, label: "Analytics" },
  { icon: ClipboardList, label: "Reports" },
  { icon: MessageSquare, label: "Messages", badge: 3 },
  { icon: CreditCard, label: "Payments" },
  { icon: Bookmark, label: "Saved" },
];

const bottomNavItems = [
  { icon: Building2, label: "Brand Hub" },
  { icon: Settings, label: "Settings" },
];

const tags = ["Beauty", "Skincare", "Lifestyle", "Wellness", "travel", "Food"];

const tabs = ["Overview", "Audience", "Content Analysis", "Performance"];

const sparkline = (seed) =>
  Array.from({ length: 12 }, (_, i) => ({
    x: i,
    y: seed + Math.sin(i / 1.6 + seed) * 8 + i * (seed % 3 === 0 ? 1.4 : 2.1),
  }));

const statCards = [
  {
    label: "Followers",
    value: "6.2M",
    change: "8.4%",
    caption: "vs last 30 days",
    icon: Users,
    spark: sparkline(4),
  },
  {
    label: "Following",
    value: "392",
    change: null,
    caption: "vs last 30 days",
    icon: Users,
    spark: sparkline(7),
  },
  {
    label: "Engagement Rate",
    value: "1.79%",
    change: "0.32pp",
    caption: "vs last 30 days",
    icon: TrendingUp,
    spark: sparkline(2),
  },
  {
    label: "Avg Likes",
    value: "106.9K",
    change: "10.4%",
    caption: "vs last 30 days",
    icon: Heart,
    spark: sparkline(5),
  },
  {
    label: "Avg Comments",
    value: "2.8K",
    change: "14.7%",
    caption: "vs last 30 days",
    icon: MessageSquare,
    spark: sparkline(9),
  },
  {
    label: "Avg Views",
    value: "1.2M",
    change: "22.1%",
    caption: "vs last 30 days",
    icon: Eye,
    spark: sparkline(1),
  },
  {
    label: "Posts",
    value: "1,247",
    change: null,
    caption: "All time",
    icon: Grid3x3,
    isBar: true,
    spark: Array.from({ length: 10 }, (_, i) => ({
      x: i,
      y: 10 + ((i * 37) % 40),
    })),
  },
];

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

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-medium leading-none text-[#5B3DF5] whitespace-nowrap">
      {children}
    </span>
  );
}

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

function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {/* mobile backdrop */}
      {mobileOpen ? (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      ) : null}

      <aside
        className={`fixed left-0 top-0 h-screen w-[220px] bg-white flex flex-col z-50 transform transition-transform duration-200 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        style={{ borderRight: `1px solid ${BORDER}` }}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{ backgroundColor: PURPLE }}
            >
              C
            </div>
            <span className="font-bold text-[16px]" style={{ color: HEADING }}>
              CreatorOS
            </span>
          </div>
          <button className="lg:hidden" onClick={onClose} aria-label="Close menu">
            <X size={20} style={{ color: MUTED }} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3">
          <ul className="flex flex-col gap-1">
            {navItems.map(({ icon: Icon, label, active, badge }) => (
              <li key={label}>
                <a
                  href="#"
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                    active ? "" : "hover:bg-gray-50"
                  }`}
                  style={{
                    backgroundColor: active ? PURPLE_TINT : "transparent",
                    color: active ? PURPLE : "#6B7280",
                  }}
                >
                  <span className="flex items-center gap-3">
                    <Icon size={17} />
                    {label}
                  </span>
                  {badge ? (
                    <span
                      className="w-5 h-5 rounded-full text-white text-[11px] font-semibold flex items-center justify-center"
                      style={{ backgroundColor: PURPLE }}
                    >
                      {badge}
                    </span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>

          <div className="my-3 border-t" style={{ borderColor: BORDER }} />

          <ul className="flex flex-col gap-1">
            {bottomNavItems.map(({ icon: Icon, label }) => (
              <li key={label}>
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <Icon size={17} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="px-3 pb-3">
          <div
            className="rounded-xl p-4 text-white"
            style={{
              background: "linear-gradient(135deg, #6C5CE7 0%, #5B4CDB 100%)",
            }}
          >
            <Lock size={18} className="mb-2 opacity-90" />
            <p className="text-[13px] font-semibold leading-snug mb-3">
              Unlock audience and commercial insights
            </p>
            <button
              className="bg-white rounded-full text-xs font-semibold px-3 py-1.5 w-full"
              style={{ color: PURPLE }}
            >
              Upgrade Now
            </button>
          </div>
        </div>

        <div
          className="flex items-center justify-between px-4 py-4"
          style={{ borderTop: `1px solid ${BORDER}` }}
        >
          <div className="flex items-center gap-2.5">
            <img
              src="https://i.pravatar.cc/150?img=68"
              alt="Alex Johnson"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="leading-tight">
              <p className="text-sm font-semibold" style={{ color: HEADING }}>
                Alex Johnson
              </p>
              <p className="text-xs" style={{ color: MUTED }}>
                Brand Manager
              </p>
            </div>
          </div>
          <ChevronDown size={16} style={{ color: MUTED }} />
        </div>
      </aside>
    </>
  );
}

/* ------------------------------ mobile topbar ------------------------------ */

function MobileTopbar({ onOpen }) {
  return (
    <div
      className="lg:hidden sticky top-0 z-30 flex items-center justify-between bg-white px-4 py-3"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      <button onClick={onOpen} aria-label="Open menu">
        <Menu size={22} style={{ color: HEADING }} />
      </button>
      <div className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: PURPLE }}
        >
          C
        </div>
        <span className="font-bold text-[15px]" style={{ color: HEADING }}>
          CreatorOS
        </span>
      </div>
      <img
        src="https://i.pravatar.cc/150?img=68"
        alt="Alex Johnson"
        className="w-7 h-7 rounded-full object-cover"
      />
    </div>
  );
}

/* --------------------------------- header --------------------------------- */

function ProfileHeader() {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-0">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full lg:w-auto">
        <img
          src="https://i.pravatar.cc/150?img=47"
          alt="Mariale"
          className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-full object-cover"
          style={{ border: `1px solid ${PURPLE}`, padding: 2 }}
        />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl lg:text-2xl font-bold" style={{ color: HEADING }}>
              Mariale
            </h1>
            <BadgeCheck
              size={20}
              className="text-blue-500"
              fill="#3B82F6"
              color="white"
            />
          </div>
          <div
            className="flex items-center gap-2 mt-1 text-sm flex-wrap"
            style={{ color: MUTED }}
          >
            <span className="font-semibold text-black">@mariale</span>
            <span className="text-gray-300">•</span>
            {/* <Instagram size={14} /> */}
            <span className="font-semibold text-black">Instagram</span>
            <ExternalLink size={12} />
          </div>
          <div
            className="flex items-center gap-1.5 mt-1.5 text-sm"
            style={{ color: MUTED }}
          >
            <MapPin size={14} />
            <span className="font-bold">Los Angeles, California, USA</span>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap overflow-x-auto no-scrollbar">
            {tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-1 flex-wrap w-full lg:w-auto">
        <button
          className="flex items-center gap-1.5 text-white text-sm font-medium rounded-lg px-4 py-2.5"
          style={{ backgroundColor: PURPLE }}
        >
          <Plus size={15} />
          <span className="hidden sm:inline">Add to Campaign</span>
          <span className="sm:hidden">Add</span>
        </button>
        <button className="flex items-center gap-1.5 text-sm rounded-lg px-4 py-2.5 bg-white  text-violet-700 font-medium">
          <Bookmark size={15} className="text-violet-600" />
          <span className="hidden sm:inline">Save Creator</span>
          <span className="sm:hidden">Save</span>
        </button>
        <button className="flex items-center gap-1.5 text-sm rounded-lg px-4 py-2.5 bg-white  text-violet-700 font-medium">
          <Send size={15} className="text-violet-600" />
          Contact
        </button>
        <button
          className="rounded-lg p-2.5 bg-white text-violet-700 font-bold"
          style={{ border: `1px solid ${BORDER}` }}
        >
          <MoreHorizontal size={16} style={{ color: MUTED }} />
        </button>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div
      className="flex gap-6 lg:gap-8 mt-6 overflow-x-auto no-scrollbar"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      {tabs.map((t, i) => {
        const active = i === 0;
        return (
          <button
            key={t}
            className="pb-3 text-sm whitespace-nowrap"
            style={{
              color: active ? PURPLE : "black",
              fontWeight: active ? 900 : 700,
              borderBottom: active
                ? `2px solid ${PURPLE}`
                : "2px solid transparent",
            }}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------- stat cards ------------------------------- */

function StatCard({ label, value, change, caption, icon: Icon, spark, isBar }) {
  return (
    <Card className="p-3 flex flex-col border rounded-sm shadow-none ">
      <div
        className="flex  items-center gap-1.5 text-[8px]"
        style={{ color: MUTED }}
      >
        <Icon size={12} className="text-violet-600" />
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-md font-bold" style={{ color: HEADING }}>
          {value}
        </span>
        {change ? (
          <span className="text-[10px] font-semibold" style={{ color: GREEN }}>
            ↗ {change}
          </span>
        ) : null}
      </div>
      <p className="text-[8px] font-bold mt-1" style={{ color: MUTED }}>
        {caption}
      </p>
      <div className="h-8 mt-3 -mx-1">
        <ResponsiveContainer width="100%" height="100%">
          {isBar ? (
            <BarChart data={spark}>
              <Bar dataKey="y" fill={PURPLE} radius={[2, 2, 0, 0]} />
            </BarChart>
          ) : (
            <LineChart data={spark}>
              <Line
                type="linear"
                dataKey="y"
                stroke={PURPLE}
                strokeWidth={2}
                dot={{ r: 1 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

function StatCardsRow() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-6">
      {statCards.map((c) => (
        <StatCard key={c.label} {...c} />
      ))}
    </div>
  );
}

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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: "#F8F8FB", fontFamily: "Inter, sans-serif" }}
    >
      <style>{`.no-scrollbar::-webkit-scrollbar{display:none} .no-scrollbar{-ms-overflow-style:none; scrollbar-width:none}`}</style>

      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <MobileTopbar onOpen={() => setMobileOpen(true)} />

      <main className="lg:ml-[220px] p-3 sm:p-4 lg:p-6">
        <ProfileHeader />
        <Tabs />
        <StatCardsRow />

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
      </main>
    </div>
  );
}

export default Overview;