/* eslint-disable react-refresh/only-export-components */
import {} from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import {
  Home,
  Users,
  Grid3x3,
  BarChart2,
  Handshake,
  Phone,
  Tag,
  ThumbsUp,
  MessageSquare,
  FileText,
  ShieldCheck,
  BadgeCheck,
  MapPin,
  Lock,
  Share2,
  MoreHorizontal,
  Plus,
  Bookmark,
  Send,
  Info,
  TrendingUp,
} from "lucide-react";

export const PURPLE = "#7C3AED";
export const PURPLE_TINT = "#EDE9FE";
export const BLUE = "#3B82F6";
export const BORDER = "#E5E7EB";
export const HEADING = "#111827";
export const MUTED = "#6B7280";

export const CREATOR = {
  name: "Mariale",
  handle: "@mariale",
  location: "USA",
  avatar: "https://i.pravatar.cc/150?img=47",
  tags: ["Beauty", "Cosmetics & Personal Care", "Beauty & Skincare"],
};

export const STATS = [
  {
    icon: Users,
    label: "Followers",
    value: "6.0M",
    caption: "+3.2% vs 30 days",
  },
  {
    icon: TrendingUp,
    label: "Engagement Rate",
    value: "1.79%",
    caption: "+0.29pp vs 30 days",
  },
  {
    icon: ThumbsUp,
    label: "Avg Likes",
    value: "106.9K",
    caption: "+8.7% vs 30 days",
  },
  {
    icon: MessageSquare,
    label: "Avg Comments",
    value: "2.8K",
    caption: "+5.1% vs 30 days",
  },
  { icon: FileText, label: "Posts", value: "6.3K", caption: "All time" },
  {
    icon: ShieldCheck,
    label: "Audience Quality",
    value: "88/100",
    caption: "High Quality",
  },
];

export const NAV_TABS = [
  { key: "overview", label: "Overview", icon: Home, route: "/Overview" },
  { key: "audience", label: "Audience", icon: Users, route: "/audience-open" },
  { key: "content", label: "Content", icon: Grid3x3, route: "/content-open" },
  { key: "performance", label: "Performance", icon: BarChart2, route: "/PerformanceOpen" },
  { key: "partnerships", label: "Partnerships", icon: Handshake, route: "/Partnership-open" },
  { key: "contact", label: "Contact", icon: Phone, route: "/Contact-open" },
  { key: "pricing", label: "Pricing", icon: Tag, route: "/pricing-open" },
];

export const NAV_TABS_CLOSE = [
  { key: "overview", label: "Overview", icon: Home, route: "/overview-close" },
  { key: "audience", label: "Audience", icon: Users, route: "/audience-close" },
  { key: "content", label: "Content", icon: Grid3x3, route: "/content-close" },
  { key: "performance", label: "Performance", icon: BarChart2, route: "/Performance" },
  { key: "partnerships", label: "Partnerships", icon: Handshake, route: "/Partnership-close" },
  { key: "contact", label: "Contact", icon: Phone, route: "/Contact-close" },
  { key: "pricing", label: "Pricing", icon: Tag, route: "/pricing-close" },
];

export function Pill({ children }) {
  return (
    <span
      className="rounded-md px-2 py-0.5 text-xs font-medium text-gray-600 font-sans"
      style={{ border: `1px solid ${BORDER}` }}
    >
      {children}
    </span>
  );
}

export function StatCard({ label, value, caption, icon: Icon }) {
  return (
    <div
      className="flex-1 rounded-xl bg-white p-4 font-sans"
      style={{ border: `1px solid ${BORDER}` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-black">
          <Icon size={14} style={{ color: PURPLE }} />
          {label}
        </div>
        <Info size={13} style={{ color: "#C7C9D9" }} />
      </div>
      <p className="mt-2 text-xl font-bold" style={{ color: HEADING }}>
        {value}
      </p>
      <p className="mt-1 text-xs" style={{ color: MUTED }}>
        {caption}
      </p>
    </div>
  );
}

export function StatCardsRow({ stats }) {
  return (
    <div className="mt-5 grid grid-cols-6 gap-4 font-sans">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

export function ProfileHeader({ creator }) {
  return (
    <div className="flex items-start justify-between font-sans">
      <div className="flex gap-4">
        <div className="relative h-[70px] w-[70px] shrink-0">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="h-full w-full rounded-full object-cover"
            style={{ border: `2px solid ${PURPLE_TINT}` }}
          />
          <span
            className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full"
            style={{ backgroundColor: BLUE, border: "2px solid white" }}
          >
            <BadgeCheck size={11} className="text-white" />
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold" style={{ color: HEADING }}>
              {creator.name}
            </h1>
            <BadgeCheck
              size={17}
              className="text-blue-500"
              fill={BLUE}
              color="white"
            />
          </div>
          <div
            className="mt-1 flex items-center gap-2 text-sm"
            style={{ color: MUTED }}
          >
            <span className="font-semibold text-gray-600">
              {creator.handle}
            </span>
            <span className="flex items-center gap-1 rounded-md border border-[#C7C9D9] px-2 py-0.5 text-xs">
              <FaInstagram size={11} className="text-pink-500" />
              Instagram
            </span>
          </div>
          <div
            className="mt-1.5 flex items-center gap-1.5 text-sm"
            style={{ color: MUTED }}
          >
            <MapPin size={13} />
            <span className="font-semibold text-gray-600">
              {creator.location}
            </span>
          </div>
          <div className="mt-2.5 flex gap-2">
            {creator.tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white cursor-pointer"
            style={{ backgroundColor: PURPLE }}
          >
            <Lock size={13} />
            Unlock
          </button>
          <button
            className="flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold cursor-pointer"
            style={{ border: `1px solid ${BORDER}`, color: HEADING }}
          >
            <Share2 size={13} />
            Share Profile
          </button>
          <button
            className="rounded-lg bg-white p-2 cursor-pointer"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <MoreHorizontal size={15} style={{ color: MUTED }} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white cursor-pointer"
            style={{ backgroundColor: PURPLE }}
          >
            <Plus size={13} />
            Add to Campaign
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-violet-500 bg-white px-3.5 py-2 text-xs font-semibold text-violet-500 cursor-pointer">
            <Bookmark size={13} />
            Save Creator
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-violet-500 bg-white px-3.5 py-2 text-xs font-semibold text-violet-500 cursor-pointer">
            <Send size={13} />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export function TabBar({ tabs, activeTab, onChange }) {
  const navigate = useNavigate();

  return (
    <div
      className="mt-5 flex gap-7 font-sans"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      {tabs.map(({ key, label, icon: Icon, route }) => {
        const active = key === activeTab;

        return (
          <button
            key={key}
            onClick={() => {
              if (route) {
                navigate(route);
              } else {
                onChange(key);
              }
            }}
            className="flex items-center gap-1.5 pb-3 text-sm cursor-pointer"
            style={{
              color: active ? PURPLE : MUTED,
              fontWeight: active ? 600 : 500,
              borderBottom: active
                ? `2px solid ${PURPLE}`
                : "2px solid transparent",
            }}
          >
            <Icon size={15} />
            {label}
          </button>
        );
      })}
    </div>
  );
}
