import {
  BadgeCheck,
  MapPin,
  Lock,
  Share2,
  MoreHorizontal,
  Plus,
  Bookmark,
  Send,
  Users,
  Users2,
  TrendingUp,
  Heart,
  MessageSquare,
  Grid3x3,
  Info,
  Globe2,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Droplet,
  Leaf,
  Palette,
  Dumbbell,
  Languages,
  ShieldCheck,
  UserCircle2,
  LayoutGrid,
  BarChart2,
  Handshake,
  Network as NetworkIcon,
  UsersRound,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import usa from "../assets/usa.png";
import uk from "../assets/uk.png";
import canada from "../assets/canada.png";
import aus from "../assets/aus.png";
import phili from "../assets/phili.png";
/* -------------------------------- tokens --------------------------------- */

const PURPLE = "#5B4CDB";
const PURPLE_LIGHT = "#8B7FE8";
const PURPLE_TINT = "#EEF0FF";
const BORDER = "#ECECF3";
const HEADING = "#111827";
const MUTED = "#6B7280";
const GREEN = "#16A34A";
const AMBER = "#D97706";

const BLUE = "#3B82F6";

/* --------------------------------- data ----------------------------------- */

const tags = ["Beauty", "cosmetic & personal care", "Beauty & Skincare"];

const tabs = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Content", icon: Grid3x3 },
  { label: "Audience", icon: Users, active: true },
  { label: "Performance", icon: BarChart2 },
  { label: "Brand Fit", icon: Handshake },
  { label: "Network", icon: NetworkIcon },
  { label: "Similar Creators", icon: UsersRound },
];

const statCards = [
  { label: "Followers", value: "6.0M", caption: "Followers", icon: Users },
  {
    label: "Engagement Rate",
    value: "1.79%",
    caption: "Engagement",
    icon: TrendingUp,
  },
  { label: "Avg Likes", value: "106.9K", caption: "Per post", icon: Heart },
  {
    label: "Avg Comments",
    value: "2.8K",
    caption: "Per post",
    icon: MessageSquare,
  },
  { label: "Posts", value: "6.3K", caption: "Total posts", icon: Grid3x3 },
  {
    label: "Audience Quality",
    value: "84/100",
    caption: "High quality audience",
    icon: ShieldCheck,
  },
];

const genderSplit = [
  { name: "Female", value: 83.6, color: PURPLE },
  { name: "Male", value: 15.4, color: PURPLE_LIGHT },
  { name: "Other", value: 1.0, color: "#D8D6F5" },
];

const ageGroups = [
  { label: "18-25", value: 24.7 },
  { label: "25-35", value: 42.1 },
  { label: "35-45", value: 20.3 },
  { label: "45-55", value: 8.6 },
  { label: "55+", value: 4.3 },
];

const topLocations = [
  { country: "United States", flag: usa, value: 47.2 },
  { country: "Italy", flag: phili, value: 8.9 },
  { country: "United Kingdom", flag: uk, value: 6.7 },
  { country: "Canada", flag: canada , value: 5.3 },
  { country: "Australia", flag: aus, value: 4.1 },
];

const strengths = [
  "Highly engaged beauty audience",
  "Strong presence in US & Europe",
  "High authenticity & quality",
  "Low fake follower percentage",
];

const opportunities = [
  "Grow presence in Asia market",
  "Expand content around wellness",
  "Expand content around supplements",
  "Expand content around beauty tools",
];

// const recommendedFor = [
//   "Skincare",
//   "Cosmetics",
//   "Wellness",
//   "Beauty Tools",
//   "Supplements",
// ];
// const contentIdeas = [
//   "Skincare Routine",
//   "Product Reviews",
//   "GRWM",
//   "Beauty Tips",
// ];

const audienceInterests = [
  { label: "Beauty", value: 78.6, icon: Heart },
  { label: "Skincare", value: 64.3, icon: Droplet },
  { label: "Wellness", value: 48.9, icon: Leaf },
  { label: "Makeup", value: 46.1, icon: Palette },
  { label: "Sports", value: 28.7, icon: Dumbbell },
];

const audienceLanguage = [
  { name: "English", value: 69.2, color: PURPLE },
  { name: "French", value: 9.8, color: PURPLE_LIGHT },
  { name: "Spanish", value: 7.6, color: "#B7B0EE" },
  { name: "Korean", value: 4.2, color: "#D8D6F5" },
  { name: "Others", value: 9.2, color: "#EDEBFB" },
];

const ageGenderBreakdown = [
  { label: "18-25", female: 19.1, male: 5.2, other: 0.4 },
  { label: "25-35", female: 33.2, male: 8.6, other: 0.3 },
  { label: "35-45", female: 15.8, male: 4.2, other: 0.3 },
  { label: "45-55", female: 6.5, male: 2.0, other: 0.1 },
  { label: "55+", female: 3.6, male: 0.6, other: 0.1 },
];

const growthSignals = [
  { date: "Nov", value: 5.05 },
  { date: "Dec", value: 5.3 },
  { date: "Jan", value: 5.55 },
  { date: "Feb", value: 5.95 },
  { date: "Mar", value: 6.15 },
  { date: "Apr", value: 6.55 },
  { date: "May", value: 6.85 },
];

const audienceSnapshot = [
  { label: "Top Location", value: "United States", icon: MapPin },
  { label: "Dominant Language", value: "English", icon: Languages },
  { label: "Strongest Interest", value: "Beauty", icon: Heart },
  { label: "Core Age Group", value: "25-35", icon: Users2 },
  {
    label: "Audience Gender",
    value: "Mostly Female (83.6%)",
    icon: UserCircle2,
  },
  { label: "Authenticity", value: "High", icon: ShieldCheck },
];

/* -------------------------------- helpers --------------------------------- */

function Card({ className = "", children }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-5 ${className}`}
      style={{ border: `1px solid ${BORDER}` }}
    >
      {children}
    </div>
  );
}

function CardHeader({ icon: Icon, title, info = true }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {Icon ? (
        <span
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: PURPLE_TINT }}
        >
          <Icon size={14} style={{ color: PURPLE }} />
        </span>
      ) : null}
      <h3 className="font-semibold text-sm" style={{ color: HEADING }}>
        {title}
      </h3>
      {info ? <Info size={13} style={{ color: "#C7C9D9" }} /> : null}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span
      className="rounded-full px-3 py-1 text-xs font-medium"
      style={{ backgroundColor: PURPLE_TINT, color: PURPLE }}
    >
      {children}
    </span>
  );
}

function Bar({ value, max = 100, color = PURPLE, track = "#F1F1F8" }) {
  return (
    <div
      className="h-2 rounded-full flex-1 overflow-hidden"
      style={{ backgroundColor: track }}
    >
      <div
        className="h-full rounded-full"
        style={{ width: `${(value / max) * 100}%`, backgroundColor: color }}
      />
    </div>
  );
}

/* --------------------------------- header ---------------------------------- */

// function TopBar() {
//   return (
//     <button
//       className="flex items-center gap-1.5 text-sm font-medium mb-4"
//       style={{ color: HEADING }}
//     >
//       <ArrowLeft size={15} />
//       Back to search
//     </button>
//   );
// }

function ProfileHeader() {
  return (
    <div className="flex items-start justify-between">
      <div className="flex gap-4">
        <div className="relative w-[70px] h-[70px] shrink-0">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="Mariale"
            className="w-full h-full rounded-full object-cover"
            style={{ border: `2px solid ${PURPLE_TINT}` }}
          />
          <span
            className="absolute bottom-0 right-0 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ backgroundColor: BLUE, border: "2px solid white" }}
          >
            <BadgeCheck size={11} className="text-white" />
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold" style={{ color: HEADING }}>
              Mariale
            </h1>
            <BadgeCheck
              size={17}
              className="text-blue-500"
              fill={BLUE}
              color="white"
            />
          </div>
          <div
            className="flex items-center gap-2 mt-1 text-sm"
            style={{ color: MUTED }}
          >
            <span className="font-semibold text-gray-600">@mariale</span>
            <span className="flex items-center gap-1 rounded-md px-2 py-0.5 border border-[#C7C9D9] text-xs ">
              <FaInstagram size={11} className="text-pink-500" />
              Instagram
            </span>
          </div>
          <div
            className="flex items-center gap-1.5 mt-1.5 text-sm"
            style={{ color: MUTED }}
          >
            <MapPin size={13} />
            <span className="font-semibold text-gray-600">USA</span>
          </div>
          <div className="flex gap-2 mt-2.5">
            {tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 text-white text-xs font-semibold rounded-lg px-3.5 py-2"
            style={{ backgroundColor: PURPLE }}
          >
            <Lock size={13} />
            Unlock
          </button>
          <button
            className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3.5 py-2 bg-white"
            style={{ border: `1px solid ${BORDER}`, color: HEADING }}
          >
            <Share2 size={13} />
            Share Profile
          </button>
          <button
            className="rounded-lg p-2 bg-white"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <MoreHorizontal size={15} style={{ color: MUTED }} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 text-white text-xs font-semibold rounded-lg px-3.5 py-2"
            style={{ backgroundColor: PURPLE }}
          >
            <Plus size={13} />
            Add to Campaign
          </button>
          <button className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3.5 py-2 bg-white border border-violet-500 text-violet-500">
            <Bookmark size={13} />
            Save Creator
          </button>
          <button className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3.5 py-2 bg-white border border-violet-500 text-violet-500">
            <Send size={13} />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- stat cards -------------------------------- */

function StatCard({ label, value, caption, icon: Icon }) {
  return (
    <Card className="p-4 flex-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-black gap-1.5 text-xs font-bold">
          <Icon size={14} style={{ color: PURPLE }} />
          {label}
        </div>
        <Info size={13} style={{ color: "#C7C9D9" }} />
      </div>
      <p className="text-xl font-bold mt-2" style={{ color: HEADING }}>
        {value}
      </p>
      <p className="text-xs mt-1" style={{ color: MUTED }}>
        {caption}
      </p>
    </Card>
  );
}

function StatCardsRow() {
  return (
    <div className="grid grid-cols-6 gap-4 mt-5">
      {statCards.map((c) => (
        <StatCard key={c.label} {...c} />
      ))}
    </div>
  );
}
function Tabs() {
  return (
    <div
      className="flex gap-7 mt-5"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      {tabs.map(({ label, icon: Icon, active }) => (
        <button
          key={label}
          className="pb-3 flex items-center gap-1.5 text-sm"
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
      ))}
    </div>
  );
}

/* ----------------------------- audience demographics ----------------------------- */

function AudienceDemographics() {
  return (
    <Card>
      <CardHeader icon={Users2} title="Audience Demographics" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold mb-2" style={{ color: HEADING }}>
            Gender Split
          </p>
          <div className="w-24 h-24 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderSplit}
                  dataKey="value"
                  innerRadius={28}
                  outerRadius={44}
                  stroke="none"
                >
                  {genderSplit.map((d, i) => (
                    <Cell key={i} fill={d.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 flex flex-col gap-1.5">
            {genderSplit.map((d) => (
              <li
                key={d.name}
                className="flex items-center justify-between text-xs"
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: d.color }}
                  />
                  <span style={{ color: HEADING }}>{d.name}</span>
                </span>
                <span className="font-medium" style={{ color: HEADING }}>
                  {d.value}%
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold mb-2" style={{ color: HEADING }}>
            Age Groups
          </p>
          <ul className="flex flex-col gap-2.5">
            {ageGroups.map((a) => (
              <li key={a.label} className="flex items-center gap-2 text-xs">
                <span className="w-10 shrink-0" style={{ color: MUTED }}>
                  {a.label}
                </span>
                <Bar value={a.value} max={45} />
                <span
                  className="w-10 text-right font-medium"
                  style={{ color: HEADING }}
                >
                  {a.value}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}

/* -------------------------------- audience location -------------------------------- */

function DotMap() {
  // deterministic dot clusters approximating landmasses
  const clusters = [
    { cx: 60, cy: 45, rx: 45, ry: 30, n: 26 }, // N. America
    { cx: 90, cy: 110, rx: 25, ry: 35, n: 16 }, // S. America
    { cx: 195, cy: 45, rx: 30, ry: 22, n: 16 }, // Europe
    { cx: 205, cy: 90, rx: 32, ry: 40, n: 20 }, // Africa
    { cx: 265, cy: 55, rx: 55, ry: 35, n: 26 }, // Asia
    { cx: 290, cy: 130, rx: 20, ry: 14, n: 10 }, // Australia
  ];
  const dots = [];
  let seed = 1;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  clusters.forEach((c, ci) => {
    for (let i = 0; i < c.n; i++) {
      const a = rand() * Math.PI * 2;
      const r = rand();
      dots.push({
        x: c.cx + Math.cos(a) * c.rx * r,
        y: c.cy + Math.sin(a) * c.ry * r,
        key: `${ci}-${i}`,
      });
    }
  });
  const markers = [
    { x: 55, y: 48 },
    { x: 195, y: 42 },
    { x: 188, y: 38 },
    { x: 62, y: 40 },
    { x: 292, y: 132 },
  ];
  return (
  <svg viewBox="0 0 340 155" className="w-full h-32">
  {dots.map((d) => (
    <circle
      key={d.key}
      cx={d.x}
      cy={d.y}
      r={2.6}              // was 1.6
      fill={PURPLE_TINT}
      opacity={0.95}
    />
  ))}

  {markers.map((m, i) => (
    <circle
      key={i}
      cx={m.x}
      cy={m.y}
      r={5}                // was 2.6
      fill={PURPLE}
      stroke="#fff"
      strokeWidth={1.5}
    />
  ))}
</svg>
  );
}

function AudienceLocation() {
  return (
    <Card>
      <CardHeader icon={Globe2} title="Audience Location" />
      <DotMap />
      <p className="text-xs font-semibold mt-3 mb-2" style={{ color: HEADING }}>
        Top Locations
      </p>
      <ul className="flex flex-col gap-2">
        {topLocations.map((l) => (
          <li
            key={l.country}
            className="flex items-center justify-between text-xs"
          >
            <span
              className="flex items-center gap-2"
              style={{ color: HEADING }}
            >
              {/* <span>{l.flag}</span> */}
              <img src={l.flag} className="w-5 rounded-md h-5" alt="" />
            <p className="font-bold">{l.country}</p>  
            </span>
            <span className="font-bold" style={{ color: HEADING }}>
              {l.value}%
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* ------------------------------- audience intelligence ------------------------------- */

function ScoreGauge({ score, label }) {
  const data = [
    { value: score, color: GREEN },
    { value: 100 - score, color: "#E5E7EB" },
  ];
  return (
    <div className="w-24 h-24 relative mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius={34}
            outerRadius={44}
            stroke="none"
          >
            {data.map((d, i) => (
              <Cell key={i} fill={d.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold" style={{ color: GREEN }}>
          {score}
        </span>
        <span className="text-[10px] font-medium" style={{ color: GREEN }}>
          {label}
        </span>
      </div>
    </div>
  );
}

function AudienceIntelligence() {
  return (
    <Card>
      <CardHeader icon={Sparkles} title="Audience Intelligence" />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <ScoreGauge score={92} label="Excellent" />
          <p className="text-center text-xs mt-2" style={{ color: MUTED }}>
            Great match for your brand
          </p>
        </div>
        <div className="">
          <p
            className="text-xs font-semibold mb-1.5"
            style={{ color: HEADING }}
          >
            Strengths
          </p>
          <ul className="flex flex-col gap-1.5 mb-3">
            {strengths.map((s) => (
              <li
                key={s}
                className="flex items-start gap-1.5 text-xs"
                style={{ color: HEADING }}
              >
                <CheckCircle2
                  size={13}
                  className="mt-0.5 shrink-0"
                  style={{ color: GREEN }}
                />
                {s}
              </li>
            ))}
          </ul>
         
        </div> 
        <div className="flex flex-col w-[360px]">
          <p
            className="text-xs text-nowrap font-semibold mb-1.5"
            style={{ color: HEADING }}
          >
            Opportunities
          </p>
          <ul className="flex flex-col gap-1.5">
            {opportunities.map((s) => (
              <li
                key={s}
                className="flex items-start gap-1.5 text-xs"
                style={{ color: HEADING }}
              >
                <Lightbulb
                  size={13}
                  className="mt-0.5 shrink-0"
                  style={{ color: AMBER }}
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
        
      </div>

      {/* <p className="text-xs font-semibold mt-4 mb-2" style={{ color: HEADING }}>
        Recommended For
      </p>
      <div className="flex flex-wrap gap-1.5">
        {recommendedFor.map((r) => (
          <Pill key={r}>{r}</Pill>
        ))}
      </div>

      <p className="text-xs font-semibold mt-4 mb-2" style={{ color: HEADING }}>
        Content Ideas
      </p>
      <div className="flex flex-wrap gap-1.5">
        {contentIdeas.map((r) => (
          <Pill key={r}>{r}</Pill>
        ))}
      </div> */}
    </Card>
  );
}

/* -------------------------------- audience interests -------------------------------- */

function AudienceInterests() {
  return (
    <Card>
      <CardHeader icon={Heart} title="Audience Interests" />
      <ul className="flex flex-col gap-3">
        {audienceInterests.map((a) => (
          <li key={a.label} className="flex items-center gap-3 text-xs">
            <a.icon size={14} style={{ color: MUTED }} />
            <span className="w-16 shrink-0" style={{ color: HEADING }}>
              {a.label}
            </span>
            <Bar value={a.value} max={80} />
            <span
              className="w-10 text-right font-medium"
              style={{ color: HEADING }}
            >
              {a.value}%
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* -------------------------------- audience language -------------------------------- */

function AudienceLanguage() {
  return (
    <Card>
      <CardHeader icon={Globe2} title="Audience Language" />
      <div className="flex items-center gap-5">
        <div className="w-28 h-28 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={audienceLanguage}
                dataKey="value"
                innerRadius={32}
                outerRadius={50}
                stroke="none"
              >
                {audienceLanguage.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="flex flex-col gap-2 flex-1">
          {audienceLanguage.map((d) => (
            <li
              key={d.name}
              className="flex items-center justify-between text-xs"
            >
              <span
                className="flex items-center gap-1.5"
                style={{ color: HEADING }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                {d.name}
              </span>
              <span className="font-medium" style={{ color: HEADING }}>
                {d.value}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

/* -------------------------- audience quality & authenticity -------------------------- */

function QualityMeter({ title, caption, value, display }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold" style={{ color: HEADING }}>
          {title}
        </span>
        <span className="text-lg font-bold" style={{ color: GREEN }}>
          {display}
        </span>
      </div>
      <p className="text-xs mb-1.5" style={{ color: MUTED }}>
        {caption}
      </p>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: GREEN }}
        />
      </div>
    </div>
  );
}

function AudienceQuality() {
  return (
    <Card>
      <CardHeader icon={ShieldCheck} title="Audience Quality & Authenticity" />
      <QualityMeter
        title="Audience Quality Score"
        caption="High quality audience"
        value={84}
        display="84/100"
      />
      <QualityMeter
        title="Audience Authenticity"
        caption="Highly authentic audience"
        value={91}
        display="91%"
      />
    </Card>
  );
}

/* -------------------------------- age & gender breakdown ------------------------------- */

function AgeGenderBreakdown() {
  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: PURPLE_TINT }}
          >
            <Users2 size={14} style={{ color: PURPLE }} />
          </span>
          <h3 className="font-semibold text-sm" style={{ color: HEADING }}>
            Age & Gender Breakdown
          </h3>
        </div>
        <div
          className="flex items-center gap-3 text-xs"
          style={{ color: MUTED }}
        >
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: PURPLE }}
            />
            Female
          </span>
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: PURPLE_LIGHT }}
            />
            Male
          </span>
          <span className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#D8D6F5" }}
            />
            Other
          </span>
        </div>
      </div>
      <ul className="flex flex-col gap-3">
        {ageGenderBreakdown.map((row) => {
          const total = row.female + row.male + row.other;
          return (
            <li key={row.label} className="flex items-center gap-3 text-xs">
              <span
                className="w-12 shrink-0 font-medium"
                style={{ color: HEADING }}
              >
                {row.label}
              </span>
              <div className="flex-1 h-5 rounded-md overflow-hidden flex bg-gray-100">
                <div
                  className="h-full flex items-center justify-center text-[10px] text-white font-medium"
                  style={{
                    width: `${(row.female / total) * 100}%`,
                    backgroundColor: PURPLE,
                  }}
                >
                  {row.female}%
                </div>
                <div
                  className="h-full flex items-center justify-center text-[10px] text-white font-medium"
                  style={{
                    width: `${(row.male / total) * 100}%`,
                    backgroundColor: PURPLE_LIGHT,
                  }}
                >
                  {row.male}%
                </div>
                <div
                  className="h-full flex items-center justify-center text-[10px] font-medium"
                  style={{
                    width: `${(row.other / total) * 100}%`,
                    backgroundColor: "#D8D6F5",
                    color: HEADING,
                  }}
                >
                  {row.other}%
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

/* ------------------------------- audience growth signals ------------------------------- */

function AudienceGrowthSignals() {
  return (
    <Card>
      <CardHeader icon={TrendingUp} title="Audience Growth Signals" />
      <div className="grid grid-cols-[1.5fr_1fr] gap-4">
        <div>
          <p className="text-xs mb-1" style={{ color: MUTED }}>
            Followers over time
          </p>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={growthSignals}
                margin={{ top: 5, right: 5, left: -20, bottom: 0 }}
              >
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: MUTED, fontSize: 10 }}
                />
                <YAxis
                  domain={[5, 7]}
                  tickFormatter={(v) => `${v.toFixed(1)}M`}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: MUTED, fontSize: 10 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: 8,
                    borderColor: BORDER,
                    fontSize: 12,
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={PURPLE}
                  strokeWidth={2.5}
                  dot={{ r: 3, fill: PURPLE }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="rounded-lg p-3"
            style={{ backgroundColor: PURPLE_TINT }}
          >
            <p className="text-[11px] mb-1" style={{ color: MUTED }}>
              Strongest Region
            </p>
            <p
              className="text-sm font-semibold flex items-center gap-1.5"
              style={{ color: HEADING }}
            >
             <img className="w-7 h-7" src={usa} alt="" /> United States
            </p>
            <p className="text-xs font-medium mt-0.5" style={{ color: GREEN }}>
              +212K followers
            </p>
          </div>
          <div
            className="rounded-lg p-3"
            style={{ backgroundColor: PURPLE_TINT }}
          >
            <p className="text-[11px] mb-1" style={{ color: MUTED }}>
              Fastest Growing Segment
            </p>
            <p
              className="text-sm font-semibold flex items-center gap-1.5"
              style={{ color: HEADING }}
            >
              <Users2 size={14} style={{ color: PURPLE }} />
              25-35
            </p>
            <p className="text-xs font-medium mt-0.5" style={{ color: GREEN }}>
              +18.7% growth
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

/* ------------------------------------ audience snapshot ------------------------------------ */

function AudienceSnapshot() {
  return (
    <Card>
      <CardHeader icon={UserCircle2} title="Audience Snapshot" info={false} />
      <ul className="flex flex-col gap-3">
        {audienceSnapshot.map((f) => (
          <li
            key={f.label}
            className="flex items-center justify-between text-xs"
          >
            <span className="flex items-center gap-2" style={{ color: MUTED }}>
              <f.icon size={14} style={{ color: PURPLE }} />
              {f.label}
            </span>
            <span className="font-medium" style={{ color: HEADING }}>
              {f.value}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

/* ---------------------------------- app ------------------------------------ */

export default function Audience() {
  return (
    <div
      className="min-h-screen font-sans p-6"
      style={{ backgroundColor: "#F8F8FB", fontFamily: "Inter, sans-serif" }}
    >
      {/* <TopBar /> */}
      <ProfileHeader />
      <StatCardsRow />
      <Tabs />

      <div className="grid grid-cols-3 gap-5 mt-5">
        <AudienceDemographics />
        <AudienceLocation />
        <AudienceIntelligence />
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <AudienceInterests />
        <AudienceLanguage />
        <AudienceQuality />
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5 mb-8">
        <AgeGenderBreakdown />
        <AudienceGrowthSignals />
        <AudienceSnapshot />
      </div>
    </div>
  );
}
