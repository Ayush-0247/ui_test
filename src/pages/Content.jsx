
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
  TrendingUp,
  Heart,
  MessageSquare,
  Grid3x3,
  Sparkles,
  Info,
  ChevronDown,
  ChevronRight,
  Image as ImageIcon,
  Film,
  LayoutGrid,

  Handshake,
  UsersRound,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,

} from "recharts";

/* -------------------------------- tokens --------------------------------- */

const PURPLE = "#5B4CDB";
const PURPLE_TINT = "#EEF0FF";
const BORDER = "#ECECF3";
const HEADING = "#111827";
const MUTED = "#6B7280";
const GREEN = "#16A34A";
const TEAL = "#14B8A6";
const ORANGE = "#F97316";
const SKY = "#38BDF8";
const BLUE = "#3B82F6";
const AMBER = "#D97706";
const AMBER_BG = "#FFFBEB";
const AMBER_BORDER = "#FDE9C8";

/* --------------------------------- data ----------------------------------- */

const tags = ["Beauty", "cosmetic & personal care", "Beauty & Skincare"];

const tabs = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Audience", icon: Users },
  { label: "Content", icon: Grid3x3, active: true },
  { label: "Growth", icon: TrendingUp },
  { label: "Brand Partnerships", icon: Handshake },
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
    value: "88/100",
    caption: "Quality score",
    icon: Sparkles,
  },
];

const highlights = [
  { label: "Skincare", img: 21 },
  { label: "Skincare", img: 32 },
  { label: "Makeup", img: 44 },
  { label: "GRWM", img: 25 },
  { label: "Favorites", img: 47 },
  { label: "Travel", img: 12 },
  { label: "Q&A", img: 33 },
  { label: "Hauls", img: 45 },
  { label: "Routines", img: 48 },
  { label: "Reviews", img: 29 },
  { label: "Giveaways", img: 36 },
  { label: "Events", img: 9 },
  { label: "BTS", img: 15 },
  { label: "Celebs", img: 60 },
  { label: "Food", img: 27 },
];

const recentContent = [
  { img: 21, likes: "125K", comments: "1.6K", date: "Jun 14" },
  { img: 32, likes: "91K", comments: "1.3K", date: "Jun 11" },
  { img: 44, likes: "103K", comments: "1.6K", date: "Jun 9" },
  { img: 25, likes: "96K", comments: "1.1K", date: "Jun 7" },
  
//   { img: 12, likes: "77K", comments: "1.0K", date: "Jun 3" },
];

const contentFormatSplit = [
  { name: "Reels", value: 62, count: "3.9K", color: PURPLE },
  { name: "Carousel", value: 18, count: "1.1K", color: TEAL },
  { name: "Images", value: 12, count: "760", color: ORANGE },
  { name: "Stories", value: 8, count: "520", color: SKY },
];

const postingFrequency = [
  { week: "Mar 24 -\nMar 30", posts: 9 },
  { week: "Mar 31 -\nApr 6", posts: 15 },
  { week: "Apr 7 -\nApr 13", posts: 8 },
  { week: "Apr 14 -\nApr 20", posts: 10 },
  { week: "Apr 21 -\nApr 27", posts: 7 },
  { week: "Apr 28 -\nMay 4", posts: 14 },
  { week: "May 5 -\nMay 11", posts: 9 },
  { week: "May 12 -\nMay 18", posts: 8 },
  { week: "May 19 -\nMay 25", posts: 11 },
  { week: "May 26 -\nJun 1", posts: 6 },
  { week: "Jun 2 -\nJun 8", posts: 12 },
  { week: "Jun 9 -\nJun 15", posts: 16 },
];

// const topHashtags = [
//   { tag: "#skincare", posts: "1.2K", engagement: "6.2M" },
//   { tag: "#makeup", posts: "1.1K", engagement: "5.5M" },
//   { tag: "#makeuptutorial", posts: "960", engagement: "3.1M" },
//   { tag: "#beauty", posts: "880", engagement: "3.0M" },
//   { tag: "#glowyskinaug", posts: "680", engagement: "2.7M" },
// ];

const performanceTrend = [
  { date: "Mar 17", er: 2.1, likes: 90, comments: 60 },
  { date: "Mar 24", er: 2.6, likes: 120, comments: 70 },
  { date: "Mar 31", er: 2.2, likes: 100, comments: 65 },
  { date: "Apr 7", er: 3.0, likes: 150, comments: 90 },
  { date: "Apr 14", er: 2.7, likes: 130, comments: 80 },
  { date: "Apr 21", er: 3.4, likes: 170, comments: 100 },
  { date: "Apr 28", er: 3.1, likes: 155, comments: 95 },
  { date: "May 5", er: 3.6, likes: 190, comments: 110 },
  { date: "May 12", er: 3.3, likes: 175, comments: 105 },
  { date: "May 19", er: 3.9, likes: 210, comments: 120 },
  { date: "May 26", er: 3.5, likes: 195, comments: 115 },
  { date: "Jun 2", er: 4.2, likes: 230, comments: 130 },
  { date: "Jun 9", er: 4.0, likes: 220, comments: 128 },
];

const videoVsStatic = {
  video: {
    label: "Video (Reels)",
    er: "2.64%",
    erVal: 2.64,
    likes: "142K",
    likesVal: 142,
    comments: "1.6K",
    commentsVal: 1.6,
  },
  static: {
    label: "Static (Images/Carousel)",
    er: "1.46%",
    erVal: 1.46,
    likes: "68K",
    likesVal: 68,
    comments: "620",
    commentsVal: 0.62,
  },
};

const topPosts = [
  {
    img: 21,
    type: "reel",
    likes: "182K",
    comments: "2.8K",
    er: "3.21%",
    reach: "2.3M",
    saves: "24.1K",
    date: "Jun 14",
  },
  {
    img: 32,
    type: "reel",
    likes: "169K",
    comments: "2.1K",
    er: "3.05%",
    reach: "2.0M",
    saves: "18.5K",
    date: "Jun 11",
  },
  {
    img: 44,
    type: "reel",
    likes: "146K",
    comments: "1.9K",
    er: "2.87%",
    reach: "1.7M",
    saves: "12.7K",
    date: "Jun 9",
  },
  {
    img: 25,
    type: "carousel",
    likes: "137K",
    comments: "1.8K",
    er: "2.68%",
    reach: "1.6M",
    saves: "11.2K",
    date: "Jun 7",
  },
  {
    img: 47,
    type: "image",
    likes: "132K",
    comments: "1.6K",
    er: "2.41%",
    reach: "1.5M",
    saves: "10.6K",
    date: "Jun 5",
  },
];

const contentThemes = [
  { name: "Skincare", value: 36, count: "2.4K", color: PURPLE },
  { name: "Makeup", value: 24, count: "1.6K", color: BLUE },
  { name: "Lifestyle", value: 16, count: "1.1K", color: ORANGE },
  { name: "Hauls", value: 12, count: "820", color: TEAL },
  { name: "Wellness", value: 12, count: "630", color: "#22C55E" },
];

const captionHooks = [
  { hook: "here's why...", usage: "2,523", er: "2.81%" },
  { hook: "let's talk about...", usage: "2,231", er: "2.48%" },
  { hook: "new in my...", usage: "2,045", er: "2.34%" },
  { hook: "stop doing this...", usage: "1,845", er: "2.19%" },
  { hook: "you need to try this...", usage: "1,678", er: "2.07%" },
];

/* -------------------------------- helpers --------------------------------- */

function Card({ className = "", children }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm ${className}`}
      style={{ border: `1px solid ${BORDER}` }}
    >
      {children}
    </div>
  );
}

function CardHeader({ icon: Icon, title, info, action }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        {Icon ? <Icon size={16} style={{ color: PURPLE }} /> : null}
        <h3 className="font-semibold text-sm" style={{ color: HEADING }}>
          {title}
        </h3>
        {info ? <Info size={13} style={{ color: "#C7C9D9" }} /> : null}
      </div>
      {action}
    </div>
  );
}

function Pill({ children,  }) {
  return (
   <span className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-bold leading-none text-[#5B3DF5]"
      
    >
      {children}
    </span>
  );
}

// function ViewAllButton() {
//   return (
//     <button
//       className="text-xs font-semibold rounded-lg px-3 py-1.5"
//       style={{ border: `1px solid ${BORDER}`, color: PURPLE }}
//     >
//       View all
//     </button>
//   );
// }

/* --------------------------------- header ---------------------------------- */



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
            <span
              className="flex items-center gap-1 rounded-md px-2 py-0.5 border border-[#C7C9D9] text-xs "
             
            >
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
          <button
             className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3.5 py-2 bg-white border border-violet-500 text-violet-500"
           
          >
            <Bookmark size={13} />
            Save Creator
          </button>
          <button
            className="flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3.5 py-2 bg-white border border-violet-500 text-violet-500"
           
          >
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
        <div
          className="flex items-center text-black gap-1.5 text-xs font-bold"
          
        >
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

/* ---------------------------------- tabs ------------------------------------ */

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

/* -------------------------------- highlights --------------------------------- */

function Highlights() {
  return (
    <Card className="p-5 mt-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm" style={{ color: HEADING }}>
          Highlights
        </h3>
      </div>
      <div className="relative flex items-center">
        <div className="flex gap-5 overflow-x-auto pb-1 scrollbar-hide">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1.5 shrink-0"
            >
              <img
  src={`https://i.pravatar.cc/100?img=${h.img}`}
  alt={h.label}
  className="w-14 h-14 rounded-full object-cover border-2 border-violet-300"
/>
              <span className="text-xs" style={{ color: MUTED }}>
                {h.label}
              </span>
            </div>
          ))}
        </div>
        <button
          className="ml-3 shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white"
          style={{ border: `1px solid ${BORDER}` }}
        >
          <ChevronRight size={15} style={{ color: MUTED }} />
        </button>
      </div>
    </Card>
  );
}

/* ------------------------------- recent content ------------------------------- */

function RecentContent() {
  return (
    <Card className="p-5">
      <CardHeader icon={Grid3x3} title="Recent Content" info />
      <div className="grid grid-cols-4 gap-2">
        {recentContent.map((post, i) => (
          <div key={i}>
            <div className="rounded-lg overflow-hidden ">
              <img
                src={`https://i.pravatar.cc/300?img=${post.img}`}
                alt=""
                className="w-[100px] "
              />
            </div>
            <div
              className="flex items-center gap-3 mt-2 text-xs"
              style={{ color: MUTED }}
            >
              <span className="flex items-center gap-1">
                <Heart size={11} />
                {post.likes}
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare size={11} />
                {post.comments}
              </span>
            </div>
            <p className="text-xs mt-0.5" style={{ color: MUTED }}>
              {post.date}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------------------------- content format split ----------------------------- */

function DonutCard({ title, data, total, totalLabel }) {
  return (
    <Card className="p-5">
      <CardHeader title={title} info />
      <div className="flex items-center gap-5">
        <div className="w-32 h-35 relative shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={40}
                outerRadius={58}
                paddingAngle={2}
                stroke="none"
              >
                {data.map((d, i) => (
                  <Cell key={i} fill={d.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold" style={{ color: HEADING }}>
              {total}
            </span>
            <span className="text-[10px]" style={{ color: MUTED }}>
              {totalLabel}
            </span>
          </div>
        </div>
        <ul className="flex flex-col gap-2.5 flex-1">
          {data.map((d) => (
            <li
              key={d.name}
              className="flex items-center justify-between text-xs"
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                <span style={{ color: HEADING }}>{d.name}</span>
                <span style={{ color: MUTED }}>{d.value}%</span>
              </span>
              <span className="font-medium" style={{ color: HEADING }}>
                {d.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

/* ------------------------------- posting frequency ------------------------------ */

function PostingFrequency() {
  return (
    <Card className="p-3">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-sm" style={{ color: HEADING }}>
          Posting Frequency
        </h3>
        <button
          className="flex items-center gap-1 text-xs font-medium rounded-full px-2.5 py-1"
          style={{ border: `1px solid ${BORDER}`, color: HEADING }}
        >
          Last 60 days
          <ChevronDown size={12} />
        </button>
      </div>
      <p className="text-xs mb-3" style={{ color: MUTED }}>
        Posts per week
      </p>
      <div className="h-33">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={postingFrequency}
            margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
          >
            <YAxis
              domain={[0, 18]}
              ticks={[0, 6, 12, 18]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: MUTED, fontSize: 10 }}
            />
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fill: MUTED, fontSize: 8 }}
              interval={0}
            />
            <Bar
              dataKey="posts"
              fill={PURPLE}
              radius={[3, 3, 0, 0]}
              maxBarSize={16}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

/* ---------------------------------- hashtags table ------------------------------- */

// function TopHashtagsTable() {
//   return (
//     <Card className="p-5">
//       <div className="flex items-center justify-between mb-3">
//         <h3
//           className="font-semibold text-sm flex items-center gap-1.5"
//           style={{ color: HEADING }}
//         >
//           Top Hashtags
//           <Info size={13} style={{ color: "#C7C9D9" }} />
//         </h3>
//         <button
//           className="text-xs font-semibold rounded-lg px-3 py-1.5 text-white"
//           style={{ backgroundColor: PURPLE }}
//         >
//           View all
//         </button>
//       </div>
//       <table className="w-full text-xs">
//         <thead>
//           <tr style={{ color: MUTED }}>
//             <th className="text-left font-medium pb-2 w-6">#</th>
//             <th className="text-left font-medium pb-2">Hashtag</th>
//             <th className="text-right font-medium pb-2">Posts</th>
//             <th className="text-right font-medium pb-2">Engagement</th>
//           </tr>
//         </thead>
//         <tbody>
//           {topHashtags.map((h, i) => (
//             <tr key={h.tag} style={{ borderTop: `1px solid ${BORDER}` }}>
//               <td className="py-2" style={{ color: MUTED }}>
//                 {i + 1}
//               </td>
//               <td className="py-2 font-medium" style={{ color: HEADING }}>
//                 {h.tag}
//               </td>
//               <td className="py-2 text-right" style={{ color: HEADING }}>
//                 {h.posts}
//               </td>
//               <td className="py-2 text-right" style={{ color: HEADING }}>
//                 {h.engagement}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Card>
//   );
// }

/* -------------------------------- premium insights -------------------------------- */

function PremiumBanner() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Lock size={14} style={{ color: AMBER }} />
      <span
        className="text-xs font-bold tracking-wide"
        style={{ color: AMBER }}
      >
        PREMIUM INSIGHTS
      </span>
    </div>
  );
}

function ContentPerformanceTrend() {
  return (
    <Card className="p-5">
      <CardHeader title="Content Performance Trend" info />
      <div className="flex items-center gap-4 mb-2 text-xs">
        <span className="flex items-center gap-1.5" style={{ color: MUTED }}>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: PURPLE }}
          />
          Engagement Rate (%)
        </span>
        <span className="flex items-center gap-1.5" style={{ color: MUTED }}>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: SKY }}
          />
          Avg Likes
        </span>
        <span className="flex items-center gap-1.5" style={{ color: MUTED }}>
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: TEAL }}
          />
          Avg Comments
        </span>
      </div>
      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={performanceTrend}
            margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
          >
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: MUTED, fontSize: 10 }}
              interval={1}
            />
            <YAxis
              yAxisId="left"
              domain={[0, 5]}
              tickFormatter={(v) => `${v}%`}
              axisLine={false}
              tickLine={false}
              tick={{ fill: MUTED, fontSize: 10 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 250]}
              tickFormatter={(v) => `${v}K`}
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
              yAxisId="left"
              type="monotone"
              dataKey="er"
              stroke={PURPLE}
              strokeWidth={2}
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="likes"
              stroke={SKY}
              strokeWidth={2}
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="comments"
              stroke={TEAL}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

function MetricBar({ label, value, display, max }) {
  return (
    <div className="mb-3">
      <div className="flex items-center justify-between text-xs mb-1">
        <span style={{ color: MUTED }}>{label}</span>
        <span className="font-semibold" style={{ color: HEADING }}>
          {display}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${(value / max) * 100}%`, backgroundColor: PURPLE }}
        />
      </div>
    </div>
  );
}

function VideoVsStatic() {
  const { video, static: stat } = videoVsStatic;
  return (
    <Card className="p-5">
      <CardHeader title="Video vs Static Performance" info />
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold mb-3" style={{ color: HEADING }}>
            {video.label}
          </p>
          <MetricBar
            label="Engagement Rate"
            value={video.erVal}
            display={video.er}
            max={3}
          />
          <MetricBar
            label="Avg Likes"
            value={video.likesVal}
            display={video.likes}
            max={150}
          />
          <MetricBar
            label="Avg Comments"
            value={video.commentsVal}
            display={video.comments}
            max={2}
          />
        </div>
        <div>
          <p className="text-xs font-semibold mb-3" style={{ color: HEADING }}>
            {stat.label}
          </p>
          <MetricBar
            label="Engagement Rate"
            value={stat.erVal}
            display={stat.er}
            max={3}
          />
          <MetricBar
            label="Avg Likes"
            value={stat.likesVal}
            display={stat.likes}
            max={150}
          />
          <MetricBar
            label="Avg Comments"
            value={stat.commentsVal}
            display={stat.comments}
            max={2}
          />
        </div>
      </div>
    </Card>
  );
}

const typeIcon = { reel: Film, carousel: LayoutGrid, image: ImageIcon };

function TopPerformingPosts() {
  return (
    <Card className="p-5 h-full">
      <div className="flex items-center justify-between mb-3">
        <h3
          className="font-semibold text-sm flex items-center gap-1.5"
          style={{ color: HEADING }}
        >
          Top Performing Posts
          <Info size={13} style={{ color: "#C7C9D9" }} />
        </h3>
        <button
          className="text-xs font-semibold rounded-lg px-3 py-1.5 text-white"
          style={{ backgroundColor: PURPLE }}
        >
          View all
        </button>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr style={{ color: MUTED }}>
            <th className="text-left font-medium pb-2">Preview</th>
            <th className="text-left font-medium pb-2">Type</th>
            <th className="text-right font-medium pb-2">Likes</th>
            <th className="text-right font-medium pb-2">Comments</th>
            <th className="text-right font-medium pb-2">Eng. Rate</th>
            <th className="text-right font-medium pb-2">Reach</th>
            <th className="text-right font-medium pb-2">Saves</th>
            <th className="text-right font-medium pb-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {topPosts.map((p, i) => {
            const TypeIcon = typeIcon[p.type];
            return (
              <tr key={i} style={{ borderTop: `1px solid ${BORDER}` }}>
                <td className="py-2">
                  <img
                    src={`https://i.pravatar.cc/60?img=${p.img}`}
                    alt=""
                    className="w-8 h-8 rounded-md object-cover"
                  />
                </td>
                <td className="py-2">
                  <TypeIcon size={13} style={{ color: MUTED }} />
                </td>
                <td className="py-2 text-right" style={{ color: HEADING }}>
                  {p.likes}
                </td>
                <td className="py-2 text-right" style={{ color: HEADING }}>
                  {p.comments}
                </td>
                <td
                  className="py-2 text-right font-medium"
                  style={{ color: GREEN }}
                >
                  {p.er}
                </td>
                <td className="py-2 text-right" style={{ color: HEADING }}>
                  {p.reach}
                </td>
                <td className="py-2 text-right" style={{ color: HEADING }}>
                  {p.saves}
                </td>
                <td className="py-2 text-right" style={{ color: MUTED }}>
                  {p.date}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

function CaptionHookInsights() {
  return (
    <Card className="p-5">
      <CardHeader title="Caption & Hook Insights" info />
      <table className="w-full text-xs">
        <thead>
          <tr style={{ color: MUTED }}>
            <th className="text-left font-medium pb-2 w-6">#</th>
            <th className="text-left font-medium pb-2">
              Hook / Caption Opener
            </th>
            <th className="text-right font-medium pb-2">Usage Count</th>
            <th className="text-right font-medium pb-2">Engagement Rate</th>
          </tr>
        </thead>
        <tbody>
          {captionHooks.map((h, i) => (
            <tr key={h.hook} style={{ borderTop: `1px solid ${BORDER}` }}>
              <td className="py-2" style={{ color: MUTED }}>
                {i + 1}
              </td>
              <td className="py-2 font-medium" style={{ color: HEADING }}>
                {h.hook}
              </td>
              <td className="py-2 text-right" style={{ color: HEADING }}>
                {h.usage}
              </td>
              <td className="py-2 text-right" style={{ color: HEADING }}>
                {h.er}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

/* ---------------------------------- app ------------------------------------ */

export default function Content() {
  return (
    <div
      className="min-h-screen font-sans p-6"
      style={{ backgroundColor: "#F8F8FB", fontFamily: "Inter, sans-serif" }}
    >
    
      <ProfileHeader />
      <StatCardsRow />
      <Tabs />
      <Highlights />

         <div className="grid grid-cols-[1.4fr_0.85fr_1.15fr] gap-5 mt-5 items-start">
        <RecentContent />
        <DonutCard
          title="Content Format Split"
          data={contentFormatSplit}
          total="6.3K"
          totalLabel="Total Posts"
        />
        <div className="flex flex-col gap-5">
          <PostingFrequency />
          {/* <TopHashtagsTable /> */}
        </div>
      </div>

      <div
        className="rounded-xl p-5 mt-5"
        style={{
          backgroundColor: AMBER_BG,
          border: `1px solid ${AMBER_BORDER}`,
        }}
      >
        <PremiumBanner />
        <div className="grid grid-cols-[1.1fr_1.3fr_1fr] gap-5 items-start">
          <div className="flex flex-col gap-5">
            <ContentPerformanceTrend />
            <VideoVsStatic />
          </div>
          <TopPerformingPosts />
          <div className="flex flex-col gap-5">
            <DonutCard
              title="Content Themes"
              data={contentThemes}
              total="6.3K"
              totalLabel="Total Posts"
            />
            <CaptionHookInsights />
          </div>
        </div>
      </div>
    </div>
  );
}
