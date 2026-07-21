import {
  Users,
  UserPlus,
  Layers,
  User,
  X,
  MapPin,
  Send,
  Download,
  Star,
  TrendingUp,
  Heart,
  Info,
  Droplet,
  Sparkles,
  Plane,
  Coffee,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

import img1 from "../assets/img1.png";
import highlight1 from "../assets/skin.jpg";
import highlight2 from "../assets/travel.jpg";
import highlight3 from "../assets/coffee.jpg";
import highlight4 from "../assets/yoga.jpg";
import highlight5 from "../assets/beauty.jpg";
import highlight6 from "../assets/food.jpg";

/* ---------------------------------------------------------
   Small reusable primitives
--------------------------------------------------------- */

// function TagPill({ children }) {
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

// function Button({ variant = "primary", icon: Icon, children, className = "" }) {
//   const base =
//     "flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition";
//   const variants = {
//     primary:
//       "bg-gradient-to-r from-[#5B3DF5] to-[#7C5CFF] text-white shadow-sm hover:opacity-95",
//     outline:
//       "border border-[#ECECEC] bg-white text-[#1F2937] hover:bg-[#FAFAFC]",
//   };
//   return (
//     <button className={`${base} ${variants[variant]} ${className}`}>
//       {Icon && <Icon className="h-4 w-4" />}
//       {children}
//     </button>
//   );
// }

function CardHeader({ title, action }) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <h3 className="text-[15px] font-semibold text-violet-700">{title}</h3>
        <Info className="h-3.5 w-3.5 text-[#6B7280]" />
      </div>
      {action}
    </div>
  );
}

// function ViewMoreLink() {
//   return (
//     <button className="mt-4 text-sm font-medium text-[#5B3DF5] hover:underline">
//       View More
//     </button>
//   );
// }

/* ---------------------------------------------------------
   Left sidebar
--------------------------------------------------------- */

function ProfileSidebar() {
  return (
    <aside className="w-[320px] shrink-0 bg-white rounded-lg border border-gray-200  p-6 flex flex-col items-center">
      <div className="relative ">
        <img
          src={img1}
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
    { label: "Statistics & Media", icon: <BarChart3 size={16} /> },
    { label: "Stories & Hashtags", icon: <Layers size={16} />,active: true },
    { label: "Audience Insights", icon: <Users size={16} /> },
    { label: "Lookalike Creator", icon: <UserPlus size={16} /> },
    { label: "Contact Info", icon: <User size={16} />,  },
  ];
  return (
    <div className="flex items-center justify-between border-b border-gray-100 px-8 pt-6">
      <div className="flex gap-8">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`flex items-center gap-2 pb-2 text-sm font-medium transition ${
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
      <button className="mb-4 w-8 h-8 rounded-md bg-[#ffffff] border border-[#E5E7EB] flex items-center justify-center shrink-0">
        <X className="w-5 h-5 text-zinc-900" />
      </button>
    </div>
  );
}

/* ---------------------------------------------------------
   Story Activity card
--------------------------------------------------------- */

function StoryActivityCard() {
  const stories = [
    { id: 1, img: highlight3, title: "Daily Routine", count: "24 stories" },
    { id: 2, img: highlight2, title: "Travel Diaries", count: "18 stories" },
    { id: 3, img: highlight1, title: "Skincare Favs", count: "16 stories" },
  ];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-3 shadow-sm">
      <CardHeader title="Story Activity" />

      <div className="grid grid-cols-[120px_auto] items-start gap-4">
        <div className="relative flex h-28 w-28 shrink-0 items-center justify-center">
          <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#ECECEC"
              strokeWidth="12"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="url(#donutGradient)"
              strokeWidth="12"
              strokeDasharray={2 * Math.PI * 50}
              strokeDashoffset={2 * Math.PI * 50 * 0.22}
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="donutGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#5B3DF5" />
                <stop offset="100%" stopColor="#7C5CFF" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-2xl font-bold text-[#1F2937]">487</span>
            <span className="text-xs text-[#6B7280]">Highlights</span>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mb-2 text-xs font-bold text-zinc-700">
            Active Story Series
          </p>
          <div className="space-y-2.5">
            {stories.map((s) => (
              <div key={s.id} className="flex items-center gap-2.5">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-xs font-bold leading-tight text-[#1F2937]">
                    {s.title}
                  </p>
                  <p className="text-[12px] text-[#6B7280]">{s.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-3 flex justify-center">
        <div className="rounded-md bg-[#F5F1FF] px-4 py-1 text-[15px] font-bold text-[#5B3DF5]">
          Avg. Stories per Month: 62
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Content Themes card
--------------------------------------------------------- */

function ContentThemesCard() {
  const themes = [
    { label: "Skincare", icon: Droplet, percent: 34 },
    { label: "Beauty", icon: Sparkles, percent: 28 },
    { label: "Travel", icon: Plane, percent: 20 },
    { label: "Lifestyle", icon: Coffee, percent: 18 },
  ];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <CardHeader title="Content Themes" />
      <div className="space-y-4">
        {themes.map(({ label, icon: Icon, percent }) => (
          <div key={label} className="flex items-center gap-3">
            <Icon className="h-4 w-4 shrink-0 text-[#5B3DF5]" />
            <span className="w-16 shrink-0 text-sm text-[#1F2937]">
              {label}
            </span>
            <ProgressBar percent={percent} />
            <span className="w-9 shrink-0 text-right text-sm font-medium text-[#1F2937]">
              {percent}%
            </span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <button className="text-sm font-bold text-violet-700 hover:underline">
          View More
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Top Hashtags card
--------------------------------------------------------- */

function HashtagsCard() {
  const hashtags = [
    { tag: "#skincare", count: 82 },
    { tag: "#beauty", count: 71 },
    { tag: "#selfcare", count: 64 },
    { tag: "#travel", count: 61 },
    { tag: "#glowingskin", count: 54 },
    { tag: "#ootd", count: 49 },
    { tag: "#cleanbeauty", count: 46 },
    { tag: "#wellness", count: 42 },
    { tag: "#shopmylook", count: 38 },
    { tag: "#beachlife", count: 35 },
    // { tag: "#grwm", count: 33 },
    // { tag: "#healthyhabits", count: 29 },
  ];

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <CardHeader title="Top Hashtags" />
      <div className="flex flex-wrap gap-2">
        {hashtags.map(({ tag, count }) => (
          <span
            key={tag}
            className="flex items-center gap-1.5 rounded-lg border border-violet-300 bg-[#FAFAFC] px-2 py-1 text-[8px] font-semibold text-violet-700"
          >
            {tag}
            <span className="text-[#4926f6]">{count}</span>
          </span>
        ))}
      </div>
       <div className="mt-5 flex justify-center">
        <button className="text-sm font-bold text-violet-700 hover:underline">
          View More
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Brand Mentions card
--------------------------------------------------------- */

function BrandMentionsCard() {
  const brands = [
    { name: "Sephora", value: 38, percent: "19%", bg: "bg-[#1F2937]" },
    { name: "Glossier", value: 27, percent: "14%", bg: "bg-[#FCE7F3]" },
    { name: "Drunk Elephant", value: 24, percent: "12%", bg: "bg-[#FEF3C7]" },
    { name: "Tatcha", value: 21, percent: "11%", bg: "bg-[#DBEAFE]" },
    { name: "Rare Beauty", value: 18, percent: "9%", bg: "bg-[#FCE7E7]" }, { name: "Beauty", value: 78, percent: "94%", bg: "bg-[#FCE7E7]" },
  ];
  const maxValue = 38;

  return (
    <div className="flex-1 rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <CardHeader title="Brand Mentions" />
      <div className="space-y-4">
        {brands.map(({ name, value, percent, bg }) => (
          <div key={name} className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${bg}`}
            />
            <span className="w-28 shrink-0 text-sm text-[#1F2937]">{name}</span>
            <ProgressBar percent={(value / maxValue) * 100} />
            <span className="w-16 shrink-0 text-right text-sm font-medium text-[#1F2937]">
              {value} ({percent})
            </span>
          </div>
        ))}
      </div>
       <div className="mt-5 flex justify-center">
        <button className="text-sm font-bold text-violet-700 hover:underline">
          View More
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   Highlight Collections card
--------------------------------------------------------- */

function HighlightCollectionsCard() {
  const highlights = [
    {
      img: highlight1,
      title: "Skincare Favs",
      count: "16 stories",
      featured: true,
    },
    { img: highlight2, title: "Travel Diaries", count: "18 stories" },
    { img: highlight3, title: "Daily Routine", count: "24 stories" },
    { img: highlight4, title: "Wellness Journey", count: "14 stories" },
    { img: highlight5, title: "Beauty Essentials", count: "20 stories" },
    { img: highlight6, title: "Food", count: "16 stories" },
  ];

  return (
    <div className="rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <CardHeader title="Highlight Collections" />
        <div className="mb-4 flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] text-[#6B7280] hover:bg-[#FAFAFC]">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECECEC] text-[#6B7280] hover:bg-[#FAFAFC]">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
  {highlights.map(({ img, title, count, featured }) => (
    <div key={title} className="w-[170px]">
      <div className="relative h-[90px] overflow-hidden rounded-md">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover"
        />

        {featured && (
          <span className="absolute left-1 top-1 rounded bg-white/90 px-1 py-[2px] text-[8px] font-semibold text-[#5B3DF5]">
            Featured
          </span>
        )}
      </div>

      <p className="mt-1 truncate text-[11px] font-semibold text-[#1F2937]">
        {title}
      </p>

      <p className="text-[10px] text-[#6B7280]">
        {count}
      </p>
    </div>
  ))}
</div>  <div className="mt-5 flex justify-center">
        <button className="text-sm font-bold text-violet-700 hover:underline">
          View More
        </button>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   AI Content Intelligence card
--------------------------------------------------------- */

function AIContentIntelligenceCard() {
  const recommendations = [
    "Increase skincare routine content (highest engagement driver)",
    "Add more behind-the-scenes travel content",
    "Leverage product reviews in story format",
    "Use more polls and Q&A stickers for engagement",
  ];
  const insights = [
    "Stories with product tags get 3.2x more engagement",
    "Travel content generates 2.8x more replies",
    "Tutorial-style stories have 45% higher completion rate",
    "Best posting time: 6PM - 9PM PST",
  ];

  return (
    <div className="mt-5 rounded-2xl border border-[#ECECEC] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-1.5">
        <Sparkles className="h-5 w-5 text-[#5B3DF5]" />
        <h3 className="text-[19px] font-bold text-violet-700">
          AI Content Intelligence
        </h3>
        <Info className="h-3.5 w-3.5 text-[#6B7280]" />
      </div>

      <div className="rounded-xl bg-[#5B3DF5]/5 px-6 py-4 text-center text-sm text-[#5B3DF5]">
        Isabella's story content drives{" "}
        <span className="font-semibold text-[#5B3DF5]">2.1x</span> higher
        engagement than her feed posts.
        <br />
        Skincare and travel themes <span className="italic">
          resonate most
        </span>{" "}
        with her audience.
      </div>

      <div className="mt-6 grid grid-cols-2 gap-0 border-t border-[#ECECEC] pt-6">
        <div className="border-r border-gray-200  ">
          <h4 className="mb-3 text-md font-bold text-violet-800">
            Key Recommendations
          </h4>
          <ul className="space-y-3">
            {recommendations.map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 text-sm text-[#1F2937]"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#5B3DF5]" />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-5">
          <h4 className="mb-3 text-md font-bold text-violet-800">
            Content Insights
          </h4>
          <ul className="space-y-3">
            {insights.map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 text-sm text-[#1F2937]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5231f7] to-[#6640ff] py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95">
        <BarChart3 className="h-4 w-4" />
        View Full Content Report
      </button>
    </div>
  );
}

/* ---------------------------------------------------------
   Page
--------------------------------------------------------- */

export default function CreatorDashboard() {
  return (
    <div
      className="min-h-screen bg-[#F8F9FC] p-0 font-sans"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto flex max-w-[1580px] overflow-hidden rounded-none border border-gray-100 bg-white shadow-sm">
        <ProfileSidebar />

        <main className="flex-1  bg-white p-4 shadow-sm">
          <TopTabs />
          <div className="mt-3 flex gap-3">
            <div className="w-[330px]">
              <StoryActivityCard />
            </div>

            <div className="w-[320px]">
              <ContentThemesCard />
            </div>

            <div className="w-[260px]">
              <HashtagsCard />
            </div>
          </div>
      <div className="mt-5 grid grid-cols-[360px_1fr] gap-5">
  <BrandMentionsCard />
  <HighlightCollectionsCard />
</div>

          <AIContentIntelligenceCard />
        </main>
      </div>
    </div>
  );
}
