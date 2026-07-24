import {
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
import ProfileSidebar from "../components/ProfileSidebar";
import TopTabs from "../components/TopTabs";
import highlight1 from "../assets/skin.jpg";
import highlight2 from "../assets/travel.jpg";
import highlight3 from "../assets/coffee.jpg";
import highlight4 from "../assets/yoga.jpg";
import highlight5 from "../assets/beauty.jpg";
import highlight6 from "../assets/food.jpg";

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
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <h3 className="text-[15px] font-semibold text-violet-700">{title}</h3>
        <Info className="h-3.5 w-3.5 text-[#6B7280]" />
      </div>
      {action}
    </div>
  );
}

/* ---------------------------------------------------------
   Left sidebar (Desktop)
--------------------------------------------------------- */

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
    <div className="h-full rounded-2xl border border-[#ECECEC] bg-white p-4 shadow-sm flex flex-col justify-between">
      {/* MOBILE ONLY LAYOUT */}
      <div className="flex sm:hidden flex-col w-full h-full">
        <CardHeader title="Story Activity" />

        {/* Top Row: Condensed Chart + Stat Block */}
        <div className="flex flex-row items-center justify-between gap-3 mt-3 mb-5 p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            {/* Scaled Down Chart */}
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
              <svg viewBox="0 0 120 120" className="h-14 w-14 -rotate-90">
                {/* Added inner background circle here */}
                <circle cx="60" cy="60" r="38" fill="#fff" />

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
                  stroke="url(#donutGradientMobile)"
                  strokeWidth="12"
                  strokeDasharray={2 * Math.PI * 50}
                  strokeDashoffset={2 * Math.PI * 50 * 0.22}
                  strokeLinecap="round"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="12"
                />

                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#donutGradientMobile)"
                  strokeWidth="12"
                />

                <circle cx="60" cy="60" r="44" fill="#fff" />
                <defs>
                  <linearGradient
                    id="donutGradientMobile"
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
                <span className="text-[13px] font-black text-[#1F2937]">
                  487
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-gray-800">
                Total Highlights
              </span>
              <span className="text-[9px] font-medium text-gray-400">
                Lifetime
              </span>
            </div>
          </div>

          {/* Stat Pill */}
          <div className="rounded-lg bg-[#F5F1FF] px-2.5 py-1.5 flex flex-col items-center justify-center text-center shrink-0 border border-[#E9D5FF]">
            <span className="text-[14px] font-black text-[#5B3DF5] leading-none mb-0.5">
              62
            </span>
            <span className="text-[8px] font-bold uppercase tracking-wider text-[#5B3DF5]">
              Per Month
            </span>
          </div>
        </div>
        {/* Bottom Row: IG-Style Horizontal Scrollable Stories */}
        <div>
          <p className="mb-2.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">
            Active Series
          </p>
          <div
            className="flex flex-row overflow-x-auto gap-4 pb-2 pl-1"
            style={{ scrollbarWidth: "none" }}
          >
            {stories.map((s) => (
              <div
                key={s.id}
                className="flex flex-col items-center gap-1.5 shrink-0 w-16"
              >
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-[#5B3DF5] via-purple-400 to-pink-400 shadow-sm cursor-pointer">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-14 w-14 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <p className="text-[9px] font-bold text-gray-800 text-center leading-tight truncate w-full">
                  {s.title}
                </p>
                <p className="text-[8px] font-medium text-gray-400 text-center">
                  {s.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LAPTOP ONLY LAYOUT (Untouched) */}
      <div className="hidden sm:flex flex-col h-full justify-between">
        <CardHeader title="Story Activity" />

        <div className="flex flex-col sm:flex-row md:grid md:grid-cols-[120px_auto] items-center sm:items-start gap-4">
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
                stroke="url(#donutGradientDesktop)"
                strokeWidth="12"
                strokeDasharray={2 * Math.PI * 50}
                strokeDashoffset={2 * Math.PI * 50 * 0.22}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="donutGradientDesktop"
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

          <div className="flex flex-col w-full">
            <p className="mb-2 text-xs font-bold text-zinc-700 text-center sm:text-left">
              Active Story Series
            </p>
            <div className="space-y-2.5">
              {stories.map((s) => (
                <div key={s.id} className="flex items-center gap-2.5">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-10 w-10 rounded-full object-cover shrink-0"
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

        <div className="mt-4 flex justify-center">
          <div className="rounded-md bg-[#F5F1FF] px-4 py-1.5 text-xs sm:text-[15px] font-bold text-[#5B3DF5] text-center">
            Avg. Stories per Month: 62
          </div>
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
    <div className="h-full rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm flex flex-col justify-between">
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
  ];

  return (
    <div className="h-full rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm flex flex-col justify-between">
      <CardHeader title="Top Hashtags" />
      <div className="flex flex-wrap gap-2">
        {hashtags.map(({ tag, count }) => (
          <span
            key={tag}
            className="flex items-center gap-1.5 rounded-lg border border-violet-300 bg-[#FAFAFC] px-2.5 py-1 text-xs font-semibold text-violet-700"
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
    { name: "Rare Beauty", value: 18, percent: "9%", bg: "bg-[#FCE7E7]" },
    { name: "Beauty", value: 78, percent: "94%", bg: "bg-[#FCE7E7]" },
  ];
  const maxValue = 38;

  return (
    <div className="h-full rounded-2xl border border-[#ECECEC] bg-white p-5 shadow-sm flex flex-col justify-between">
      <CardHeader title="Brand Mentions" />
      <div className="space-y-4">
        {brands.map(({ name, value, percent, bg }) => (
          <div key={name} className="flex items-center gap-3">
            <span
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${bg}`}
            />
            <span className="w-24 sm:w-28 shrink-0 text-xs sm:text-sm text-[#1F2937] truncate">
              {name}
            </span>
            <ProgressBar percent={(value / maxValue) * 100} />
            <span className="w-16 sm:w-20 shrink-0 text-right text-xs sm:text-sm font-medium text-[#1F2937]">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {highlights.map(({ img, title, count, featured }) => (
          <div key={title} className="w-full md:w-[170px]">
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

            <p className="text-[10px] text-[#6B7280]">{count}</p>
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
    <div className="mt-5 rounded-2xl border border-[#ECECEC] bg-white p-4 sm:p-6 shadow-sm">
      <div className="mb-4 flex items-center gap-1.5">
        <Sparkles className="h-5 w-5 text-[#5B3DF5]" />
        <h3 className="text-base sm:text-[19px] font-bold text-violet-700">
          AI Content Intelligence
        </h3>
        <Info className="h-3.5 w-3.5 text-[#6B7280]" />
      </div>

      <div className="rounded-xl bg-[#5B3DF5]/5 px-4 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm text-[#5B3DF5]">
        Isabella's story content drives{" "}
        <span className="font-semibold text-[#5B3DF5]">2.1x</span> higher
        engagement than her feed posts.
        <br className="hidden sm:block" /> Skincare and travel themes{" "}
        <span className="italic">resonate most</span> with her audience.
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 border-t border-[#ECECEC] pt-6">
        <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-6 md:pb-0 md:pr-4">
          <h4 className="mb-3 text-sm sm:text-md font-bold text-violet-800">
            Key Recommendations
          </h4>
          <ul className="space-y-3">
            {recommendations.map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 text-xs sm:text-sm text-[#1F2937]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-[#5B3DF5]" />
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:ml-5">
          <h4 className="mb-3 text-sm sm:text-md font-bold text-violet-800">
            Content Insights
          </h4>
          <ul className="space-y-3">
            {insights.map((text) => (
              <li
                key={text}
                className="flex items-start gap-2 text-xs sm:text-sm text-[#1F2937]"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5231f7] to-[#6640ff] py-3 text-xs sm:text-sm font-semibold text-white shadow-sm hover:opacity-95">
        <BarChart3 className="h-4 w-4" />
        View Full Content Report
      </button>
    </div>
  );
}

/* ---------------------------------------------------------
   Dedicated Mobile View Component
--------------------------------------------------------- */


/* ---------------------------------------------------------
   Page Export
--------------------------------------------------------- */

export default function CreatorDashboard() {
  return (
   <div className="min-h-screen xl:h-screen bg-white text-[#1F2937] flex flex-col xl:flex-row overflow-x-hidden xl:overflow-hidden">
  <ProfileSidebar />

  <main className="flex-1 min-w-0 flex flex-col border-t xl:border-t-0 xl:border-l border-[#ECECEC] bg-white">
    
  
     <div className="sticky top-0 z-30 bg-white border-b border-[#ECECEC] p-2">
         
        <TopTabs activeTab="/StoryAndHastag" />
          
        </div>

    {/* Scrollable Content only on desktop */}
    <div className="flex-1 p-3 sm:p-4 xl:p-5 space-y-4 xl:overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <StoryActivityCard />
        <ContentThemesCard />
        <HashtagsCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] gap-4 xl:gap-5">
        <BrandMentionsCard />
        <HighlightCollectionsCard />
      </div>

      <AIContentIntelligenceCard />
    </div>
  </main>
</div>
  );
}
