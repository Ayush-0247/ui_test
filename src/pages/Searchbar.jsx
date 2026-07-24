import { useState } from "react";
import {
  Sparkles,
  Search,
  Megaphone,
  Users,
  FolderOpen,
  FileText,
  BarChart2,
  MessageSquare,
  CreditCard,
  ClipboardList,
  Star,
  ChevronRight,
  ChevronDown,
  ChevronLeft,
  MoreHorizontal,
  Bookmark,
  Bell,
  ArrowUp,
  BadgeCheck,
  // Heart,
  // Eye,
  // Instagram,
  Droplet,
  Brush,
  Wind,
  HeartPulse,
  Flower2,
  Info,
  ArrowRight,
  Plus,
  SlidersHorizontal,
  Menu,
  X,
  Home,
  TrendingUp,
} from "lucide-react";
import img2 from "../assets/kohli.jpg";
import { SiTiktok } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
function SearchBar() {
  return (
    <div className="relative mx-auto mt-4 w-[90%] max-w-2xl">
      {/* Outer Glassmorphism Container */}
      <div className="rounded-full bg-white/40 backdrop-blur-md border border-white/60 p-[6px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {/* Inner Solid Container */}
        <div className="relative h-[52px] rounded-full bg-white flex items-center pl-5 pr-1.5 shadow-sm">
          {/* Left Icon */}
          <Sparkles size={18} className="text-[#6D5CFF] shrink-0" />

          {/* Subtle Vertical Divider */}
          <div className="w-[1px] h-5 bg-gray-200 ml-4 mr-3 shrink-0" />

          {/* Input Field */}
          <input
            type="text"
            defaultValue="Find skincare influencers for women 18-30 in USA"
            className="flex-1 text-[15px] font-normal text-gray-800 placeholder-gray-400 outline-none bg-transparent w-full"
          />

          {/* Search Button */}
          <button className="w-10 h-10 rounded-full bg-[#6D5CFF] flex items-center justify-center shrink-0 shadow-sm hover:brightness-110 transition-all duration-200">
            <Search size={18} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

const GRADIENTS = [
  "from-rose-200 to-orange-200",
  "from-purple-200 to-indigo-200",
  "from-sky-200 to-emerald-200",
  "from-amber-200 to-pink-200",
  "from-violet-200 to-blue-200",
];
function hashSeed(str = "") {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}
// NOTE: no real photo assets were provided, so creator/profile imagery is
// rendered as initials-on-gradient placeholders. Swap in real <img src=.../>
// to fully match the original screenshot's photography.
function Avatar({
  name = "",
  size = 40,
  rounded = "rounded-full",
  ring = false,
  className = "",
}) {
  const seed = hashSeed(name);
  const gradient = GRADIENTS[seed % GRADIENTS.length];
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div
      style={{ width: size, height: size }}
      className={`${rounded} bg-gradient-to-br ${gradient} flex items-center justify-center text-gray-700 font-semibold ${ring ? "ring-2 ring-white" : ""} ${className}`}
    >
      <span style={{ fontSize: size * 0.36 }}>{initials}</span>
    </div>
  );
}
function AvatarGroup({ names = [], extra = 0, size = 22 }) {
  return (
    <div className="flex items-center">
      {names.map((n, i) => (
        <Avatar
          key={n + i}
          name={n}
          size={size}
          ring
          className={i > 0 ? "-ml-2" : ""}
        />
      ))}
      {extra > 0 && (
        <span
          style={{ height: size }}
          className="-ml-2 rounded-full bg-white/90 ring-2 ring-white flex items-center justify-center px-2 text-[10px] font-semibold text-gray-700"
        >
          +{extra}
        </span>
      )}
    </div>
  );
}
function Badge({ children, variant = "purple", icon, className = "" }) {
  const V = {
    purple: "bg-[#F5F1FF] text-[#5B3DF5]",
    green: "bg-green-50 text-[#22C55E]",
    gray: "bg-gray-100 text-gray-600",
    pastel: "bg-[#F5F1FF] text-[#6B7280]",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs border border-purple-200 text-purple-700 font-medium ${V[variant]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-lg text-xs font-medium h-8 px-3 transition-colors";
  const V = {
    primary:
      "bg-gradient-to-r from-[#6D5CFF] to-[#8B7BFF] text-white hover:brightness-105",
    secondary:
      "bg-white border border-[#ECECEC] text-gray-700 hover:bg-gray-50",
    ghost: "text-[#5B3DF5] font-semibold hover:opacity-80",
  };
  return (
    <button className={`${base} ${V[variant]} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  );
}
function IconButton({ icon, size = 40, className = "", ...props }) {
  return (
    <button
      style={{ width: size, height: size }}
      className={`rounded-full bg-white border border-[#ECECEC] flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
function ProgressBar({ value = 0, color = "bg-[#5B3DF5]" }) {
  return (
    <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
function DropdownChip({ label }) {
  return (
    <button className="h-[34px] rounded-full bg-white border border-[#ECECEC] px-3.5 flex items-center gap-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors shrink-0">
      {label}
      <ChevronDown size={13} className="text-gray-400" />
    </button>
  );
}

/* ======================================================================
   DESKTOP / LAPTOP LAYOUT — UNCHANGED FROM ORIGINAL
   Everything in this section is rendered only at `lg` and above
   (see the `hidden lg:flex` wrapper in App at the bottom of the file).
   Nothing here was modified.
   ====================================================================== */

/* ---------- Sidebar ---------- */
const NAV_ITEMS = [
  { label: "Discover", icon: Search, active: true },
  { label: "Campaigns", icon: Megaphone },
  { label: "Creators", icon: Users },
  { label: "Collections", icon: FolderOpen },
  { label: "Content", icon: FileText },
  { label: "Analytics", icon: BarChart2 },
  { label: "Messages", icon: MessageSquare },
  { label: "Payments", icon: CreditCard },
  { label: "Reports", icon: ClipboardList },
];
function Sidebar() {
  return (
    <aside className="w-[200px] shrink-0 h-screen sticky top-0 bg-white border-r border-[#ECECEC] flex flex-col justify-between pt-4 pb-4 px-3.5">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Sparkles size={18} className="text-[#5B3DF5]" fill="#5B3DF5" />
          <span className="text-xl font-bold text-[#111827]">Kalo</span>
        </div>
        <nav className="flex flex-col gap-0.5">
          {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`h-9 px-2.5 rounded-xl flex items-center gap-2.5 text-[13px] font-medium transition-colors ${active ? "bg-[#F5F1FF] text-[#5B3DF5]" : "text-[#374151] hover:bg-gray-50"}`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-2">
        <button className="h-9 rounded-xl border border-[#ECECEC] px-2.5 flex items-center justify-between text-[13px] text-gray-700 hover:bg-gray-50 transition-colors">
          <span className="flex items-center gap-2">
            <Star size={15} className="text-gray-400" />
            Favorites
          </span>
          <ChevronRight size={13} className="text-gray-400" />
        </button>
        <button className="rounded-xl border border-[#ECECEC] p-2.5 flex items-center justify-between hover:bg-gray-50 transition-colors">
          <span className="flex items-center gap-2">
            <Sparkles size={15} className="text-[#5B3DF5]" fill="#5B3DF5" />
            <span className="text-left">
              <span className="block text-xs font-semibold text-gray-900">
                Glow Beauty
              </span>
              <span className="block text-[10px] text-gray-500">Workspace</span>
            </span>
          </span>
          <ChevronDown size={13} className="text-gray-400" />
        </button>
        <div className="flex items-center gap-2 px-1 pt-1">
          <Avatar name="Sarah Mitchell" size={30} />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-gray-900 truncate">
              Sarah Mitchell
            </p>
            <p className="text-[10px] text-gray-500 truncate">
              sarah@glowbeauty.com
            </p>
          </div>
          <MoreHorizontal size={15} className="text-gray-400" />
        </div>
      </div>
    </aside>
  );
}

/* ---------- Header ---------- */
function Header() {
  return (
    <div className="h-11 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <h1 className="text-[22px] font-bold text-gray-900 leading-none">
          Discover Influencers
        </h1>
        <Badge variant="purple" icon={<Sparkles size={10} />}>
          AI-Powered Discovery
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="secondary" icon={<Bookmark size={13} />}>
          Save Search
        </Button>
        <IconButton icon={<Bell size={15} />} size={32} />
        <Avatar name="Sarah Mitchell" size={32} />
      </div>
    </div>
  );
}

/* ---------- Hero Search ---------- */
const CHIPS = [
  "Platform",
  "Followers",
  "Engagement",
  "Location",
  "Audience",
  "Category",
];
function HeroSearch() {
  return (
    <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-br from-[#EDE7FF] via-[#E3EEFF] to-white px-6 pt-7 pb-5">
      <div className="pointer-events-none absolute -top-16 -left-16 w-72 h-72 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="pointer-events-none absolute top-4 right-8 text-purple-300/60">
        <Sparkles size={20} />
      </div>
      <div className="pointer-events-none absolute top-16 right-20 text-purple-300/40">
        <Sparkles size={12} />
      </div>
      <h2 className="relative text-center font-serif text-[32px] leading-[1.1] font-semibold text-gray-900">
        Find the perfect creators for your brand
      </h2>
      <div className="relative mx-auto mt-4 w-[90%] max-w-2xl">
        <SearchBar />
      </div>
      <div className="relative mt-3.5 flex items-center justify-center gap-2 flex-wrap">
        {CHIPS.map((label) => (
          <DropdownChip key={label} label={label} />
        ))}
        <button className="h-[34px] w-[34px] rounded-xl bg-white border border-[#ECECEC] flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
          <SlidersHorizontal size={14} />
        </button>
      </div>
    </div>
  );
}

/* ---------- Trending Niches ---------- */
const NICHES = [
  {
    label: "Skincare",
    count: "128K creators",
    icon: Droplet,
    bg: "bg-pink-50",
    color: "text-pink-500",
  },
  {
    label: "Clean Beauty",
    count: "86K creators",
    icon: Sparkles,
    bg: "bg-purple-50",
    color: "text-purple-500",
  },
  {
    label: "Makeup",
    count: "210K creators",
    icon: Brush,
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    label: "Hair Care",
    count: "75K creators",
    icon: Wind,
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    label: "Wellness",
    count: "96K creators",
    icon: HeartPulse,
    bg: "bg-green-50",
    color: "text-green-500",
  },
  {
    label: "Self Care",
    count: "65K creators",
    icon: Flower2,
    bg: "bg-indigo-50",
    color: "text-indigo-500",
  },
];
function TrendingNiches() {
  return (
    <div className="bg-white rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-900">Trending Niches</h3>
        <Button variant="ghost" className="h-auto p-0">
          View all
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1 flex gap-2 overflow-x-auto">
          {NICHES.map(({ label, count, icon: Icon, bg, color }) => (
            <div
              key={label}
              className="shrink-0 w-[150px] h-[56px] rounded-xl border border-[#ECECEC] px-2.5 flex items-center gap-1hover:shadow-sm transition"
            >
              <div
                className={`w-7 h-7 rounded-lg ${bg} ${color} flex items-center justify-center shrink-0`}
              >
                <Icon size={14} />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-900 truncate">
                  {label}
                </p>
                <p className="text-[10px] text-gray-500 truncate">{count}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-7 h-7 rounded-full bg-white border border-[#ECECEC] shadow-sm flex items-center justify-center shrink-0 hover:bg-gray-50">
          <ChevronRight size={13} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}

/* ---------- Creator Cards ---------- */
const CREATORS = [
  {
    rank: 1,
    name: "Ashley Park",
    handle: "ashleyglow",
    platform: "instagram",
    tags: ["Skincare", "Clean Beauty"],
    followers: "532K",
    engagement: "4.8%",
    matchLabel: "Perfect Match",
  },
  {
    rank: 2,
    name: "Maddie Green",
    handle: "maddie.greenn",
    platform: "tiktok",
    tags: ["Skincare", "Self Care"],
    followers: "318K",
    engagement: "6.2%",
    matchLabel: "Perfect Match",
  },
  {
    rank: 3,
    name: "Valeria Cruz",
    handle: "valeria.skincare",
    platform: "instagram",
    tags: ["Skincare", "Wellness"],
    followers: "276K",
    engagement: "5.1%",
    matchLabel: "Great Match",
  },
  {
    rank: 4,
    name: "Sophie Lauren",
    handle: "sophielauren",
    platform: "tiktok",
    tags: ["Skincare", "Clean Beauty"],
    followers: "610K",
    engagement: "3.9%",
    matchLabel: "Great Match",
  },
];

function CreatorCard({ name, handle, tags, followers, engagement, platform }) {
  return (
    <div className="relative w-[180px] h-[180px] rounded-[12px] overflow-hidden shadow-sm group cursor-pointer">
      {/* Background Image */}
      <img
        src={img2}
        alt={name}
        className="absolute inset-0 w-full h-full object-fill transition-transform duration-300 group-hover:scale-105"
      />

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Top Left - Platform Icon */}
      {platform === "instagram" && (
        <div className="absolute top-3 left-3 bg-gradient-to-tr from-[#FFDF40] via-[#FD1D1D] to-[#833AB4] p-1.5 rounded-lg shadow-sm">
          <FaInstagram size={16} className="text-white" />
        </div>
      )}

      {platform === "tiktok" && (
        <div className="absolute top-3 left-3 bg-black p-1.5 rounded-lg shadow-sm">
          <SiTiktok size={16} className="text-white" />
        </div>
      )}

      {/* Top Right - Bookmark Button */}
      <button className="absolute top-3 right-3  p-1.5 rounded-lg shadow-sm hover:bg-gray-100 transition">
        <Bookmark size={16} className="text-white" strokeWidth={2.5} />
      </button>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-2 pb-0 flex flex-col">
        {/* Name & Verified Badge */}
        <div className="flex items-center gap-1.5">
          <h3 className="text-white font-bold text-[12px] ">{name}</h3>
          <BadgeCheck
            size={18}
            className="text-white mt-0.5"
            fill="white"
            color="#262626"
          />
        </div>

        {/* Handle */}
        <p className="text-gray-200 text-[9px] mb-1">@{handle}</p>

        {/* Tags (Glassmorphism effect) */}
        <div className="flex flex-wrap gap-2 mb-1">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-sm border border-white/40 bg-white/30 backdrop-blur-md text-white text-[7px] font-medium tracking-wide"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex items-center gap-5 mb-1 text-white font-semibold text-[9px]">
          <div className="flex items-center gap-1.5">
            <Users size={12} className="text-gray-300" strokeWidth={2.5} />
            <span>{followers}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Star size={12} className="text-gray-300" strokeWidth={2.5} />
            <span>{engagement}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function CreatorSection() {
  return (
    <div className="bg-white rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            AI Recommended Creators
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Curated by AI based on your search
          </p>
        </div>
        <Button variant="ghost" className="h-auto p-0">
          View all
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {CREATORS.map((c) => (
          <CreatorCard key={c.rank} {...c} />
        ))}
      </div>
    </div>
  );
}

/* ---------- Spotlight Collections ---------- */
const COLLECTIONS = [
  {
    title: "Glass Skin Goals",
    count: "24 creators",
    gradient: "from-purple-200 to-purple-100",
    people: ["Ashley Park", "Maddie Green", "Valeria Cruz"],
    extra: 21,
  },
  {
    title: "Derm Approved",
    count: "18 creators",
    gradient: "from-rose-200 to-pink-100",
    people: ["Sophie Lauren", "Ashley Park"],
    extra: 15,
  },
  {
    title: "Night Routine Experts",
    count: "16 creators",
    gradient: "from-slate-500 to-slate-700",
    people: ["Maddie Green", "Valeria Cruz"],
    extra: 13,
  },
];
function SpotlightSection() {
  return (
    <div className="bg-white rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-900">
          Spotlight Collections
        </h3>
        <div className="flex items-center gap-1.5">
          <button className="w-7 h-7 rounded-full border border-[#ECECEC] flex items-center justify-center text-gray-500 hover:bg-gray-50">
            <ChevronLeft size={13} />
          </button>
          <button className="w-7 h-7 rounded-full border border-[#ECECEC] flex items-center justify-center text-gray-500 hover:bg-gray-50">
            <ChevronRight size={13} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {COLLECTIONS.map((c) => (
          <div
            key={c.title}
            className={`relative h-[150px] rounded-xl overflow-hidden bg-gradient-to-br ${c.gradient} flex flex-col justify-between p-2.5`}
          >
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative mt-auto text-white">
              <p className="text-xs font-bold leading-tight">{c.title}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] opacity-90">{c.count}</span>
                <AvatarGroup names={c.people} extra={c.extra} size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Top Performing Creators Table ---------- */
const ROWS = [
  {
    name: "Alina Rose",
    handle: "alina.rose",
    followers: "1.2M",
    engagement: "5.4%",
    avgViews: "68K",
    category: "Skincare",
    location: "USA",
    status: "Active",
  },
  {
    name: "Maddie Green",
    handle: "maddie.greenn",
    followers: "318K",
    engagement: "6.2%",
    avgViews: "42K",
    category: "Self Care",
    location: "Canada",
    status: "Active",
  },
  {
    name: "Valeria Cruz",
    handle: "valeria.skincare",
    followers: "276K",
    engagement: "5.1%",
    avgViews: "31K",
    category: "Wellness",
    location: "USA",
    status: "Active",
  },
];
const COLUMNS = [
  "Creator",
  "Followers",
  "Engagement",
  "Avg. Views",
  "Category",
  "Location",
  "Status",
  "",
];
function TopCreatorsTable() {
  return (
    <div className="bg-white rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-center justify-between mb-1.5">
        <h3 className="text-sm font-bold text-gray-900">
          Top Performing Creators
        </h3>
        <Button variant="ghost" className="h-auto p-0">
          View all
        </Button>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#ECECEC]">
            {COLUMNS.map((col) => (
              <th
                key={col}
                className="text-left text-xs font-semibold text-gray-500 py-2 px-1.5 first:pl-0"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROWS.map((r) => (
            <tr
              key={r.handle}
              className="h-[54px] border-b border-[#F3F4F6] hover:bg-gray-50/60 transition-colors"
            >
              <td className="pl-0 pr-1.5">
                <div className="flex items-center gap-2">
                  <Avatar name={r.name} size={34} />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-gray-900 flex items-center gap-1">
                      {r.name}
                      <BadgeCheck size={11} className="text-[#5B3DF5]" />
                    </p>
                    <p className="text-[10px] text-gray-500">@{r.handle}</p>
                  </div>
                </div>
              </td>
              <td className="px-1.5 text-xs font-bold text-gray-900">
                {r.followers}
              </td>
              <td className="px-1.5 text-xs font-semibold text-[#5B3DF5]">
                {r.engagement}
              </td>
              <td className="px-1.5 text-xs text-gray-700">{r.avgViews}</td>
              <td className="px-1.5">
                <Badge variant="pastel">{r.category}</Badge>
              </td>
              <td className="px-1.5 text-xs text-gray-500">{r.location}</td>
              <td className="px-1.5">
                <Badge variant="green">{r.status}</Badge>
              </td>
              <td className="px-1.5 text-right">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal size={14} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Right Analytics Sidebar ---------- */
function DiscoveryScoreCard() {
  return (
    <div className="bg-purple-50 rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Sparkles size={13} className="text-[#5B3DF5]" />
          <p className="text-xs font-bold text-gray-900">AI Search Insights</p>
        </div>
        <Badge
          variant="gray"
          className="uppercase border-violet-200 tracking-wide text-[9px]"
        >
          Beta
        </Badge>
      </div>
      <p className="text-[10px] text-gray-500 leading-relaxed mb-3">
        Insights powered by AI to help you make data-driven creator decisions.
      </p>
      <div className="border bg-white border-purple-200 rounded-xl px-3 py-2">
        {/* Top Row: Score and Chart */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1 text-[10px] font-semibold text-gray-500 mb-1">
              Opportunity Score <Info size={10} />
            </div>
            <p className="text-[26px] font-bold text-[#5B3DF5] leading-none">
              9.2
            </p>
            <button className="mt-1 px-2 py-0.5 text-[11px] font-semibold text-green-700 bg-green-50 rounded-full border border-green-100/50 shadow-[0_0_8px_rgba(74,222,128,0.2)] hover:bg-green-100 transition-colors">
              Excellent
            </button>
          </div>
          <div className="relative w-[56px] h-[56px] shrink-0">
            <svg viewBox="0 0 72 72" className="w-full h-full -rotate-90">
              <circle
                cx="36"
                cy="36"
                r="30"
                fill="none"
                stroke="#F3F4F6"
                strokeWidth="7"
              />
              <circle
                cx="36"
                cy="36"
                r="30"
                fill="none"
                stroke="#22C55E"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 30}
                strokeDashoffset={2 * Math.PI * 30 * (1 - 0.92)}
              />
            </svg>
          </div>
        </div>

        {/* Bottom Row: Description */}
        <p className="text-[10px] text-gray-500 mt-2 leading-relaxed">
          High opportunity to achieve strong results with this search criteria.
        </p>
      </div>
    </div>
  );
}
function AudienceSnapshotCard() {
  const rows = [
    { label: "Age 18-30", value: 78, color: "bg-[#5B3DF5]" },
    { label: "Female", value: 92, color: "bg-pink-400" },
    { label: "United States", value: 88, color: "bg-[#5B3DF5]" },
  ];
  return (
    <div className="bg-white rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-center gap-1.5 mb-3">
        <p className="text-xs font-bold text-gray-900">Audience Snapshot</p>
        <Info size={10} className="text-gray-400" />
      </div>
      <div className="flex flex-col gap-3">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] text-gray-700">{r.label}</span>
              <span className="text-[11px] font-bold text-gray-900">
                {r.value}%
              </span>
            </div>
            <ProgressBar value={r.value} color={r.color} />
          </div>
        ))}
      </div>
      <button className="p-2 flex gap-1 align-bottom items-center text-purple-400 text-xs">
        View full audience breakdown <ArrowRight size={14} />
      </button>
    </div>
  );
}
function MarketTrendsCard() {
  const trends = [
    { label: "Barrier Repair", growth: "+124%", dot: "bg-purple-400" },
    { label: "Glass Skin", growth: "+98%", dot: "bg-pink-400" },
    { label: "SPF & Sun Care", growth: "+76%", dot: "bg-amber-400" },
  ];
  return (
    <div className="bg-white rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-center gap-1.5 mb-1">
        <p className="text-xs font-bold text-gray-900">Market Trends</p>
        <Info size={10} className="text-gray-400" />
      </div>
      <p className="text-[10px] text-gray-500 mb-3">
        Growing searches in skincare
      </p>
      <div className="flex flex-col gap-2.5">
        {trends.map((t) => (
          <div key={t.label} className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[11px] text-gray-700">
              <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
              {t.label}
            </span>
            <span className="text-[11px] font-semibold text-[#22C55E] flex items-center gap-0.5">
              <ArrowUp size={11} /> {t.growth}
            </span>
          </div>
        ))}
      </div>
      <Button variant="ghost" className="h-auto p-0 mt-3 text-xs">
        View all trends <ArrowUp size={11} />
      </Button>
    </div>
  );
}
function RefinementSuggestionsCard() {
  const suggestions = [
    { title: "Add TikTok creators", sub: "High engagement opportunity" },
    { title: "Expand to micro-influencers", sub: "Better ROI potential" },
    { title: "Include skincare routines", sub: "Trending content type" },
  ];
  return (
    <div className="bg-white rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-center gap-1.5 mb-3">
        <p className="text-xs font-bold text-gray-900">
          Refinement Suggestions
        </p>
        <Info size={10} className="text-gray-400" />
      </div>
      <div className="flex flex-col gap-2.5">
        {suggestions.map((s) => (
          <div key={s.title} className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-1.5">
              <span className="mt-0.5 w-5 h-5 rounded-md bg-pink-50 text-[#5B3DF5] flex items-center justify-center shrink-0">
                <Sparkles size={10} />
              </span>
              <div>
                <p className="text-[10px] font-bold text-gray-500 leading-tight">
                  {s.title}
                </p>
                <p className="text-[8px] text-gray-500 leading-tight">
                  {s.sub}
                </p>
              </div>
            </div>
            <button className="w-5 h-5 rounded-full border border-[#ECECEC] flex items-center justify-center text-gray-500 shrink-0 hover:bg-gray-50">
              <Plus size={10} />
            </button>
          </div>
        ))}
      </div>
      <Button variant="ghost" className="h-auto p-0 mt-3 text-xs">
        Apply all suggestions
      </Button>
    </div>
  );
}
function InsightsSidebar() {
  return (
    <aside className="w-[240px] shrink-0 flex flex-col gap-3">
      <DiscoveryScoreCard />
      <AudienceSnapshotCard />
      <MarketTrendsCard />
      <RefinementSuggestionsCard />
    </aside>
  );
}

function FloatingActionButton() {
  return (
    <button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-[#6D5CFF] to-[#8B7BFF] shadow-lg flex items-center justify-center text-white hover:scale-[1.03] transition-transform duration-150">
      <Sparkles size={22} />
    </button>
  );
}

function DesktopApp() {
  return (
    <div
      className="hidden lg:flex min-h-screen bg-[#FAFAFC]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Sidebar />
      <main className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
        <Header />
        <div className="flex gap-3 items-start">
          <div className="flex-1 min-w-0 flex flex-col gap-3">
            <HeroSearch />
            <TrendingNiches />
            <CreatorSection />
            <SpotlightSection />
            <TopCreatorsTable />
          </div>
          <InsightsSidebar />
        </div>
      </main>
      <FloatingActionButton />
    </div>
  );
}

/* ======================================================================
   MOBILE LAYOUT — purpose-built, not a squeezed-down desktop view.
   Rendered only below `lg`. Nothing above this line was changed to
   make room for it.

   Mobile-specific decisions:
   - Sidebar becomes a slide-over drawer opened from a top app bar,
     plus a persistent 5-item bottom tab bar for the primary actions
     (thumb-reach, not a 9-item vertical list).
   - Hero search collapses to a single-column, edge-to-edge search
     field; filter chips become a horizontally scrollable row with a
     "Filters" trigger instead of six separate dropdown pills.
   - Recommended creators and spotlight collections become swipeable,
     snap-scrolling carousels instead of fixed 3-4 column grids.
   - The performance table (7 columns) is replaced with a stacked
     creator card list — a table can't work on a 375px viewport.
   - The AI insights sidebar becomes a bottom sheet opened from a
     floating "Insights" pill, so the data still exists on mobile but
     doesn't permanently eat screen width.
   ====================================================================== */

const MOBILE_TABS = [
  { label: "Discover", icon: Home, active: true },
  { label: "Campaigns", icon: Megaphone },
  { label: "Creators", icon: Users },
  { label: "Messages", icon: MessageSquare },
];

function MobileTopBar({ onOpenMenu }) {
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-[#ECECEC] h-14 px-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <button
          onClick={onOpenMenu}
          className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-50 -ml-1"
        >
          <Menu size={19} />
        </button>
        <div className="flex items-center gap-1.5">
          <Sparkles size={16} className="text-[#5B3DF5]" fill="#5B3DF5" />
          <span className="text-[17px] font-bold text-[#111827]">Kalo</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <IconButton icon={<Bell size={15} />} size={34} />
        <Avatar name="Sarah Mitchell" size={30} />
      </div>
    </header>
  );
}

function MobileMenuDrawer({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Scrim */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
      />
      {/* Drawer */}
      <div
        className={`absolute top-0 left-0 h-full w-[78%] max-w-[300px] bg-white shadow-xl flex flex-col pt-4 pb-4 px-3.5 transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-[#5B3DF5]" fill="#5B3DF5" />
            <span className="text-xl font-bold text-[#111827]">Kalo</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-50"
          >
            <X size={17} />
          </button>
        </div>
        <nav className="flex flex-col gap-0.5 overflow-y-auto">
          {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              className={`h-11 px-2.5 rounded-xl flex items-center gap-2.5 text-[14px] font-medium transition-colors ${active ? "bg-[#F5F1FF] text-[#5B3DF5]" : "text-[#374151] hover:bg-gray-50"}`}
            >
              <Icon size={17} />
              {label}
            </button>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-[#ECECEC]">
          <button className="h-10 rounded-xl border border-[#ECECEC] px-2.5 flex items-center justify-between text-[13px] text-gray-700">
            <span className="flex items-center gap-2">
              <Star size={15} className="text-gray-400" />
              Favorites
            </span>
            <ChevronRight size={13} className="text-gray-400" />
          </button>
          <div className="flex items-center gap-2 px-1 pt-1">
            <Avatar name="Sarah Mitchell" size={32} />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-900 truncate">
                Sarah Mitchell
              </p>
              <p className="text-[10px] text-gray-500 truncate">
                sarah@glowbeauty.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileBottomNav({ activeTab, onSelectTab, onOpenMore }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-white/95 backdrop-blur-md border-t border-[#ECECEC] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-5 h-[58px]">
        {MOBILE_TABS.map(({ label, icon: Icon }) => {
          const isActive = activeTab === label;
          return (
            <button
              key={label}
              onClick={() => onSelectTab(label)}
              className="flex flex-col items-center justify-center gap-0.5"
            >
              <Icon
                size={19}
                className={isActive ? "text-[#5B3DF5]" : "text-gray-400"}
                fill={isActive ? "#5B3DF5" : "none"}
                strokeWidth={isActive ? 0 : 2}
              />
              <span
                className={`text-[10px] font-medium ${isActive ? "text-[#5B3DF5]" : "text-gray-400"}`}
              >
                {label}
              </span>
            </button>
          );
        })}
        <button
          onClick={onOpenMore}
          className="flex flex-col items-center justify-center gap-0.5"
        >
          <MoreHorizontal size={19} className="text-gray-400" />
          <span className="text-[10px] font-medium text-gray-400">More</span>
        </button>
      </div>
    </nav>
  );
}

function MobileHeroSearch({ onOpenFilter }) {
  return (
    <div className="relative overflow-hidden rounded-[18px] bg-gradient-to-br from-[#EDE7FF] via-[#E3EEFF] to-white px-4 pt-5 pb-4">
      <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-purple-200/40 blur-3xl" />
      <Badge variant="purple" icon={<Sparkles size={9} />} className="mb-2">
        AI-Powered Discovery
      </Badge>
      <h2 className="relative font-serif text-[22px] leading-[1.15] font-semibold text-gray-900">
        Find the perfect creators for your brand
      </h2>

      {/* Edge-to-edge search field, thumb-sized */}
      <div className="relative mt-3.5 h-[50px] rounded-2xl bg-white shadow-sm flex items-center pl-3.5 pr-1.5">
        <Search size={17} className="text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder="Search skincare influencers..."
          defaultValue="Skincare influencers, 18-30, USA"
          className="flex-1 ml-2.5 text-[13px] font-medium text-gray-800 placeholder-gray-400 outline-none bg-transparent min-w-0"
        />
        <button className="w-[38px] h-[38px] rounded-xl bg-[#6D5CFF] flex items-center justify-center shrink-0">
          <Search size={15} className="text-white" />
        </button>
      </div>

      {/* Horizontally scrollable filter row + explicit Filters trigger */}
      <div className="relative mt-2.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar -mx-4 px-4 pb-0.5">
        <button
          onClick={onOpenFilter}
          className="h-8 shrink-0 rounded-full bg-[#5B3DF5] px-3 flex items-center gap-1 text-[11px] font-semibold text-white"
        >
          <SlidersHorizontal size={12} />
          Filters
        </button>
        {CHIPS.map((label) => (
          <button
            key={label}
            onClick={onOpenFilter}
            className="h-[34px] rounded-full bg-white border border-[#ECECEC] px-3.5 flex items-center gap-1 text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors shrink-0"
          >
            {label}
            <ChevronDown size={13} className="text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}

function MobileNichesCarousel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 px-0.5">
        <h3 className="text-[13px] font-bold text-gray-900">Trending Niches</h3>
        <button className="text-[11px] font-semibold text-[#5B3DF5]">
          View all
        </button>
      </div>
      <div className="flex gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 snap-x snap-mandatory">
        {NICHES.map(({ label, count, icon: Icon, bg, color }) => (
          <div
            key={label}
            className="shrink-0 snap-start w-[132px] rounded-xl border border-[#ECECEC] bg-white p-2.5 flex flex-col gap-2"
          >
            <div
              className={`w-8 h-8 rounded-lg ${bg} ${color} flex items-center justify-center`}
            >
              <Icon size={15} />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-gray-900 truncate">
                {label}
              </p>
              <p className="text-[9px] text-gray-500 truncate">{count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileCreatorCard({
  name,
  handle,
  tags,
  followers,
  engagement,
  platform,
  matchLabel,
}) {
  return (
    <div className="relative shrink-0 snap-start w-[62vw] max-w-[240px] aspect-[3/4] rounded-[14px] overflow-hidden shadow-sm">
      <img
        src={img2}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-transparent" />

      {platform === "instagram" && (
        <div className="absolute top-2.5 left-2.5 bg-gradient-to-tr from-[#FFDF40] via-[#FD1D1D] to-[#833AB4] p-1.5 rounded-lg shadow-sm">
          <FaInstagram size={14} className="text-white" />
        </div>
      )}
      {platform === "tiktok" && (
        <div className="absolute top-2.5 left-2.5 bg-black p-1.5 rounded-lg shadow-sm">
          <SiTiktok size={14} className="text-white" />
        </div>
      )}
      <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-[9px] font-semibold text-[#5B3DF5] px-2 py-0.5 rounded-full">
        {matchLabel}
      </span>

      <div className="absolute bottom-0 left-0 w-full p-3 flex flex-col">
        <div className="flex items-center gap-1.5">
          <h3 className="text-white font-bold text-[13px]">{name}</h3>
          <BadgeCheck
            size={14}
            className="text-white"
            fill="white"
            color="#262626"
          />
        </div>
        <p className="text-gray-200 text-[10px] mb-1.5">@{handle}</p>
        <div className="flex flex-wrap gap-1.5 mb-1.5">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-sm border border-white/40 bg-white/30 backdrop-blur-md text-white text-[8px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 text-white font-semibold text-[10px]">
          <div className="flex items-center gap-1">
            <Users size={12} className="text-gray-300" strokeWidth={2.5} />
            <span>{followers}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star size={12} className="text-gray-300" strokeWidth={2.5} />
            <span>{engagement}</span>
          </div>
        </div>
      </div>
      <button className="absolute top-2.5 right-2.5 mt-8 hidden" />
    </div>
  );
}

function MobileCreatorCarousel() {
  return (
    <div>
      <div className="flex items-start justify-between mb-2 px-0.5">
        <div>
          <h3 className="text-[13px] font-bold text-gray-900">
            AI Recommended Creators
          </h3>
          <p className="text-[10px] text-gray-500 mt-0.5">
            Curated by AI based on your search
          </p>
        </div>
        <button className="text-[11px] font-semibold text-[#5B3DF5] shrink-0 ml-2">
          View all
        </button>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 snap-x snap-mandatory">
        {CREATORS.map((c) => (
          <MobileCreatorCard key={c.rank} {...c} />
        ))}
      </div>
    </div>
  );
}

function MobileSpotlightCarousel() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 px-0.5">
        <h3 className="text-[13px] font-bold text-gray-900">
          Spotlight Collections
        </h3>
        <span className="text-[10px] text-gray-400">Swipe →</span>
      </div>
      <div className="flex gap-2.5 overflow-x-auto no-scrollbar -mx-4 px-4 snap-x snap-mandatory">
        {COLLECTIONS.map((c) => (
          <div
            key={c.title}
            className={`relative shrink-0 snap-start w-[70vw] max-w-[260px] h-[130px] rounded-xl overflow-hidden bg-gradient-to-br ${c.gradient} flex flex-col justify-end p-3`}
          >
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative text-white">
              <p className="text-[13px] font-bold leading-tight">{c.title}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] opacity-90">{c.count}</span>
                <AvatarGroup names={c.people} extra={c.extra} size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Table with 7 columns can't work on a phone — stacked cards instead.
function MobileCreatorListCard({ r }) {
  return (
    <div className="flex items-center gap-2.5 py-2.5 border-b border-[#F3F4F6] last:border-b-0">
      <Avatar name={r.name} size={40} />
      <div className="flex-1 min-w-0">
        <p className="text-[12.5px] font-semibold text-gray-900 flex items-center gap-1 truncate">
          {r.name}
          <BadgeCheck size={11} className="text-[#5B3DF5] shrink-0" />
        </p>
        <p className="text-[10.5px] text-gray-500 truncate">
          @{r.handle} · {r.location}
        </p>
        <div className="flex items-center gap-1.5 mt-1">
          <Badge variant="pastel" className="px-1.5 py-0.5 text-[9px]">
            {r.category}
          </Badge>
          <Badge variant="green" className="px-1.5 py-0.5 text-[9px]">
            {r.status}
          </Badge>
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="text-[12.5px] font-bold text-gray-900">{r.followers}</p>
        <p className="text-[10.5px] font-semibold text-[#5B3DF5]">
          {r.engagement}
        </p>
        <p className="text-[9.5px] text-gray-400">{r.avgViews} avg</p>
      </div>
    </div>
  );
}

function MobileTopCreatorsList() {
  return (
    <div className="bg-white rounded-[14px] border border-[#ECECEC] p-3.5">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[13px] font-bold text-gray-900">
          Top Performing Creators
        </h3>
        <button className="text-[11px] font-semibold text-[#5B3DF5]">
          View all
        </button>
      </div>
      <div>
        {ROWS.map((r) => (
          <MobileCreatorListCard key={r.handle} r={r} />
        ))}
      </div>
    </div>
  );
}

function MobileFilterSheet({ open, onClose }) {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("Skincare");

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-white rounded-t-[24px] p-5 pb-8 transition-transform duration-200 ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="w-10 h-1.5 rounded-full bg-gray-300 mx-auto mb-4" />
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Filter Creators</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
          >
            <X size={16} />
          </button>
        </div>

        {/* Platform */}
        <div className="mb-4">
          <label className="text-xs font-bold text-gray-700 block mb-2">Platform</label>
          <div className="grid grid-cols-3 gap-2">
            {["All", "Instagram", "TikTok"].map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPlatform(p)}
                className={`py-2 rounded-xl text-xs font-semibold border transition ${
                  selectedPlatform === p
                    ? "bg-[#5B3DF5] text-white border-[#5B3DF5]"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="text-xs font-bold text-gray-700 block mb-2">Category</label>
          <div className="flex flex-wrap gap-2">
            {["Skincare", "Beauty", "Fashion", "Travel", "Wellness", "Fitness"].map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition ${
                  selectedCategory === c
                    ? "bg-[#5B3DF5] text-white border-[#5B3DF5]"
                    : "bg-gray-50 text-gray-700 border-gray-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Follower Range */}
        <div className="mb-6">
          <label className="text-xs font-bold text-gray-700 block mb-2">Followers</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              placeholder="Min e.g. 10k"
              className="px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium outline-none"
            />
            <input
              type="text"
              placeholder="Max e.g. 500k"
              className="px-3 py-2 border border-gray-200 rounded-xl text-xs font-medium outline-none"
            />
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#6D5CFF] to-[#8B7BFF] text-white text-xs font-bold shadow-sm"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}

function MobileInsightsTrigger({ onOpen }) {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-[74px] right-4 z-30 lg:hidden h-11 pl-3 pr-4 rounded-full bg-white border border-[#ECECEC] shadow-lg flex items-center gap-2 text-[12px] font-semibold text-gray-800"
    >
      <span className="w-6 h-6 rounded-full bg-[#5B3DF5] flex items-center justify-center text-white">
        <TrendingUp size={13} />
      </span>
      AI Insights
    </button>
  );
}

function MobileInsightsSheet({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 max-h-[85vh] overflow-y-auto bg-[#FAFAFC] rounded-t-[20px] p-3.5 pb-8 transition-transform duration-200 ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="w-10 h-1.5 rounded-full bg-gray-300 mx-auto mb-3" />
        <div className="flex items-center justify-between mb-3 px-0.5">
          <h3 className="text-[15px] font-bold text-gray-900">AI Insights</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-[#ECECEC] flex items-center justify-center text-gray-500"
          >
            <X size={15} />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <DiscoveryScoreCard />
          <AudienceSnapshotCard />
          <MarketTrendsCard />
          <RefinementSuggestionsCard />
        </div>
      </div>
    </div>
  );
}

function MobileApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Discover");

  return (
    <div
      className="lg:hidden min-h-screen bg-[#FAFAFC]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <MobileTopBar onOpenMenu={() => setMenuOpen(true)} />

      <main className="px-4 pt-3 pb-[calc(58px+90px)] flex flex-col gap-4">
        <MobileHeroSearch onOpenFilter={() => setFilterOpen(true)} />
        <MobileNichesCarousel />
        <MobileCreatorCarousel />
        <MobileSpotlightCarousel />
        <MobileTopCreatorsList />
      </main>

      <MobileInsightsTrigger onOpen={() => setInsightsOpen(true)} />
      <MobileInsightsSheet
        open={insightsOpen}
        onClose={() => setInsightsOpen(false)}
      />
      <MobileFilterSheet
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      />
      <MobileMenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
      <MobileBottomNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenMore={() => setMenuOpen(true)}
      />
    </div>
  );
}

/* ---------- App ---------- */
export default function App() {
  return (
    <>
      <DesktopApp />
      <MobileApp />
    </>
  );
}

