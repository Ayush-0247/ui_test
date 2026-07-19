import { useState } from "react";
import {
  Search,
  Bookmark,
  RotateCcw,
  Download,
  Bell,
  Settings,
  BarChart2,
  Megaphone,
  ChevronDown,
  ChevronUp,
  Lock,
  Info,
  Check,
  ArrowRight,
  X,
  ListChecks,
  Send,
  Menu,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";

/* -------------------------------------------------------------------------- */
/* Static data                                                                */
/* -------------------------------------------------------------------------- */

const creators = [
  {
    id: 1,
    img: img1,
    handle: "sarah.fitness_",
    name: "Sarah Thomson",
    platform: "instagram",
    verified: true,
    followers: "512K",
    following: "580",
    posts: "1,248",
    lastActive: "May 28, 2026",
    engagement: "2.36%",
    avgLikes: "156",
    avgViews: "22.5K",
    avgComments: "225",
    category: "Fitness",
    categoryConf: "87%",
    location: "United States",
    locationSub: "New York, NY",
    locationConf: "82%",
    quality: 78,
    qualityLabel: "Good",
    qualityColor: "green",
    qualityConf: "74%",
    rate: "$450 - $650",
    rateConf: "64%",
  },
  {
    id: 2,
    img: img2,
    handle: "alex.outdoors",
    name: "Alex Outdoors",
    platform: "tikok",
    verified: false,
    followers: "328K",
    following: "320",
    posts: "892",
    lastActive: "May 25, 2026",
    engagement: "1.89%",
    avgLikes: "5.2K",
    avgViews: "6.2K",
    avgComments: "98",
    category: "Travel",
    categoryConf: "81%",
    location: "Canada",
    locationSub: "Vancouver, BC",
    locationConf: "89%",
    quality: 72,
    qualityLabel: "Good",
    qualityColor: "green",
    qualityConf: "71%",
    rate: "$350 - $550",
    rateConf: "60%",
  },
  {
    id: 3,
    img: img1,
    handle: "makeup.by.lina",
    name: "Lina Rodriguez",
    platform: "instagram",
    verified: false,
    followers: "742K",
    following: "1,120",
    posts: "2,341",
    lastActive: "May 29, 2026",
    engagement: "2.71%",
    avgLikes: "20.1K",
    avgViews: "20.1K",
    avgComments: "213",
    category: "Beauty",
    categoryConf: "90%",
    location: "United Kingdom",
    locationSub: "London",
    locationConf: "85%",
    quality: 84,
    qualityLabel: "Excellent",
    qualityColor: "green",
    qualityConf: "80%",
    rate: "$600 - $900",
    rateConf: "68%",
  },
  {
    id: 4,
    img: img2,
    handle: "tech.with.sam",
    name: "Sam Carter",
    platform: "tiktok",
    verified: false,
    followers: "215K",
    following: "180",
    posts: "612",
    lastActive: "May 20, 2026",
    engagement: "1.46%",
    avgLikes: "3.1K",
    avgViews: "45K",
    avgComments: "45K",
    extraStat: "68K",
    category: "Tech",
    categoryConf: "76%",
    location: "Germany",
    locationSub: "—",
    locationConf: "78%",
    quality: 68,
    qualityLabel: "Average",
    qualityColor: "orange",
    qualityConf: "69%",
    rate: "$250 - $400",
    rateConf: "58%",
  },
];

const filterChips = [
  { label: "Platform: Instagram, TikTok" },
  { label: "Followers: 10K - 1M+" },
  { label: "Tier: Macro" },
  { label: "ER: 1% - 10%" },
  { label: "High Confidence Only" },
];

const navItems = [
  { icon: Search, label: "Discover", active: true },
  { icon: Bookmark, label: "Shortlists" },
  { icon: Send, label: "Outreach" },
  { icon: Megaphone, label: "Campaigns" },
  { icon: BarChart2, label: "Analytics" },
  { icon: ListChecks, label: "Billing" },
  { icon: Settings, label: "Settings" },
];

/* -------------------------------------------------------------------------- */
/* Small reusable pieces                                                      */
/* -------------------------------------------------------------------------- */

function AiPill({ children }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-medium leading-none text-[#5B3DF5]">
      {children}
    </span>
  );
}

function ConfPill({ value }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-2xl border border-[#E5E7EB] bg-gray-50 px-2 py-1 text-xs font-bold text-gray-700">
      {value}
      <Info size={11} className="text-gray-400" />
    </span>
  );
}

function QualityRing({ score, color, label }) {
  const stroke = color === "green" ? "#22C55E" : "#F59E0B";

  const radius = 28;

  const path = `
    M 8 36
    A ${radius} ${radius} 0 0 1 64 36
  `;

  return (
    <div className="relative flex h-24 w-20 flex-col items-center">
      <svg
        width="72"
        height="40"
        viewBox="0 0 72 40"
        className="absolute top-0 left-1/2 -translate-x-1/2"
      >
        {/* Background */}
        <path
          d={path}
          fill="none"
          stroke="#ECECF5"
          strokeWidth="5"
          strokeLinecap="round"
          pathLength={100}
        />

        {/* Progress */}
        <path
          d={path}
          fill="none"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${score} ${100 - score}`}
        />
      </svg>

      {/* Text */}
      <div className="absolute top-5 flex w-full flex-col items-center">
        <span className="text-[18px] font-bold leading-none text-gray-900">
          {score}
        </span>

        <span
          className={`mt-1 text-xs font-medium ${
            color === "green" ? "text-green-600" : "text-orange-500"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
function PlatformBadge({ platform }) {
  const isInsta = platform === "instagram";
  return (
    <span
      className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white ${
        isInsta
          ? "bg-gradient-to-tr from-[#FEDA75] via-[#D62976] to-[#4F5BD5]"
          : "bg-black"
      }`}
    >
      {isInsta ? (
        <FaInstagram size={11} className="text-white" />
      ) : (
        <SiTiktok size={11} className="text-white" />
        // <span className="text-[9px] font-bold text-white">T</span>
      )}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Sidebar                                                                    */
/* -------------------------------------------------------------------------- */

function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-64 shrink-0 flex-col justify-between bg-gradient-to-b from-[#161B33] to-[#0D1024] px-4 py-6 transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <div className="mb-8 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#7C5CFF] to-[#5B3DF5]">
                <FaInstagram size={18} className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-wide text-white">
                KALO <span className="text-[#8B7CFF]">IQ</span>
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close sidebar"
              className="flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 hover:bg-white/10 hover:text-white"
            >
              <X size={15} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  item.active
                    ? "bg-gradient-to-r from-[#6D4CFF] to-[#5B3DF5] text-white shadow-lg shadow-[#5B3DF5]/30"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={17} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-sm font-semibold text-white">Pro Plan</p>
            <p className="mt-0.5 text-xs text-gray-400">
              Renews on Jun 18, 2026
            </p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-[#8B7CFF] to-[#5B3DF5]" />
            </div>
            <p className="mt-2 text-xs text-gray-400">3 / 5 Seats Used</p>
            <button className="mt-3 w-full rounded-lg bg-white/10 py-2 text-xs font-semibold text-white transition hover:bg-white/20">
              Manage Plan
            </button>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
            <div>
              <p className="text-sm font-semibold text-white">Need help?</p>
              <p className="text-xs text-gray-400">Visit our Help Center</p>
            </div>
            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20">
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* Top header                                                                 */
/* -------------------------------------------------------------------------- */

function TopHeader({ onMenuClick }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b p-1 border-gray-200">
      <div className="flex items-center gap-3 md:max-w-xl md:flex-1 mb-1">
        <button
          onClick={onMenuClick}
          aria-label="Open menu"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
        >
          <Menu size={18} />
        </button>
        <div className="relative flex-1">
          <Search
            size={17}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search creators, hashtags, brands, bio..."
            className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B3DF5]/30"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
        <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-bold text-gray-700 ">
          <Bookmark size={15} />
          Saved Filters
        </button>
        <button className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50">
          <RotateCcw size={15} />
          Reset
        </button>
        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#6D4CFF] to-[#5B3DF5] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#5B3DF5]/30 hover:opacity-95">
          <Download size={15} />
          Export
          <ChevronDown size={14} />
        </button>
        {/* <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 hover:bg-gray-50">
          <Bell size={16} />
        </button> */}

        <div className="flex items-center gap-3">
          <div className="hidden text-left leading-tight lg:block">
            <p className="text-sm font-bold text-gray-900">Pro Plan</p>
            <p className="text-xs text-gray-400">Team Workspace</p>
          </div>

          {/* Notification */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100">
            <Bell size={18} className="text-gray-700" />
          </button>

          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111827] text-sm font-semibold text-white">
            AS
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Filter chips row                                                           */
/* -------------------------------------------------------------------------- */

function FilterChips() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {filterChips.map((chip) => (
          <span
            key={chip.label}
            className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 py-1.5 text-xs font-bold text-gray-900"
          >
            {chip.label}
            <button className="flex h-4 w-4 items-center justify-center rounded-full ">
              <X size={16} strokeWidth={2.5} className="text-[#5B3DF5]" />
            </button>
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-500">
        <span>Sort by</span>
        <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 font-medium text-gray-700">
          Relevance
          <ChevronDown size={13} />
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Left filter panel                                                          */
/* -------------------------------------------------------------------------- */

function FilterSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-100 py-3.5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left text-sm font-bold text-zinc-900"
      >
        {title}
        {open ? (
          <ChevronUp size={15} className="text-gray-400" />
        ) : (
          <ChevronDown size={15} className="text-gray-400" />
        )}
      </button>
      {open && <div className="mt-3">{children}</div>}
    </div>
  );
}

function Checkbox({ label, checked }) {
  return (
    <label className="flex cursor-pointer items-center gap-2 py-1.5 text-sm text-gray-600">
      {/* Checkbox */}
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
          checked ? "border-[#5B3DF5] bg-[#5B3DF5]" : "border-gray-300 bg-white"
        }`}
      >
        {checked && <Check size={11} className="text-white" />}
      </span>

      {/* Label */}
      <span className="flex items-center gap-2">
        {label === "Instagram" && (
          <FaInstagram size={20} className="text-pink-500" />
        )}

        {label === "TikTok" && <SiTiktok size={16} className="text-black" />}

        {label}
      </span>
    </label>
  );
}

function Toggle({ checked }) {
  return (
    <span
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition ${
        checked ? "bg-[#5B3DF5]" : "bg-gray-200"
      }`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition ${
          checked ? "translate-x-4.5 ml-4.5" : "ml-0.5"
        }`}
      />
    </span>
  );
}

function FilterPanel() {
  return (
    <div className="hidden w-70 shrink-0 flex-col rounded-xs border border-gray-100 bg-white p-5 shadow-sm lg:flex">
      <div className="mb-1 flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900">Filters</h3>
        <button className="text-xs font-medium text-[#5B3DF5]">
          Clear all
        </button>
      </div>

      <FilterSection title="Keyword">
        <input
          type="text"
          placeholder="Search keywords..."
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none"
        />
      </FilterSection>

      <FilterSection title="Platform">
        <Checkbox label="Instagram" checked />
        <Checkbox label="TikTok" checked />
      </FilterSection>
      <FilterSection title="Followers Range">
        <div className="relative mt-2">
          {/* Track */}
          <div className="h-1 rounded-full bg-gray-200">
            <div className="h-full w-full rounded-full bg-[#5B3DF5]" />
          </div>

          {/* Left Dot */}
          <div className="absolute -left-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#5B3DF5]" />

          {/* Right Dot */}
          <div className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#5B3DF5]" />
        </div>

        <div className="mt-3 flex justify-between text-xs text-gray-600">
          <span>10K</span>
          <span>1M+</span>
        </div>
      </FilterSection>

      <FilterSection title="Follower Tier">
        {[
          "Nano (<10K)",
          "Micro (10K - 50K)",
          "Mid (50K - 200K)",
          "Macro (200K - 1M)",
          "Mega (>1M)",
        ].map((tier) => (
          <Checkbox
            key={tier}
            label={tier}
            checked={tier.startsWith("Macro")}
          />
        ))}
      </FilterSection>

      <FilterSection title="Engagement Rate">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <input
            className="w-14 rounded-lg border border-gray-200 px-2 py-1.5 text-center"
            defaultValue="1"
          />
          <span>%</span>
          <span className="text-gray-300">•</span>
          <input
            className="w-14 rounded-lg border border-gray-200 px-2 py-1.5 text-center"
            defaultValue="10"
          />
          <span>%</span>
        </div>
        {/* <div className="mt-3 h-1.5 rounded-full bg-gray-100">
          <div className="h-full w-2/3 rounded-full bg-[#5B3DF5]" />
        </div> */}
        <div className="relative mt-2">
          {/* Track */}
          <div className="mt-3 h-1.5 rounded-full bg-gray-100">
            <div className="h-full w-2/3 rounded-full bg-[#5B3DF5]" />
          </div>

          {/* Left Dot */}
          <div className="absolute -left-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#5B3DF5]" />

          {/* Right Dot */}
          <div className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-[#5B3DF5]" />
        </div>
      </FilterSection>

      <FilterSection title="Categories" defaultOpen={false} />
      <FilterSection title="Country" defaultOpen={false} />

      <div className="flex items-center justify-between border-b border-gray-100 py-3.5 text-sm text-gray-700">
        <span className="font-semibold">High Confidence only</span>
        <Toggle checked />
      </div>

      <FilterSection title="Language (Caption)" defaultOpen={false} />
      <FilterSection title="Verified" defaultOpen={false} />
      <FilterSection title="Has Email" defaultOpen={false} />
      <FilterSection title="Claimed (Creator Verified)" defaultOpen={false} />
      <FilterSection title="Hashtags" defaultOpen={false} />
      <FilterSection title="Mentions" defaultOpen={false} />

      <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#6D4CFF] to-[#5B3DF5] py-2.5 text-sm font-semibold text-white shadow-md shadow-[#5B3DF5]/30">
        Save Filter
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* AI banner                                                                  */
/* -------------------------------------------------------------------------- */

function AiBanner() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-[#DDD6FE] bg-[#F1EEFF] px-5 py-3.5">
      <div className="flex items-center gap-3">
        <Info size={17} className="shrink-0 text-[#5B3DF5]" />
        <p className="text-md text-zinc-900">
          Every estimated metric is labeled with{" "}
          <span className="font-semibold text-gray-900">AI Estimate</span>,
          confidence and explanation.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm font-semibold text-[#5B3DF5]">
          Learn more
        </button>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Creator row                                                                */
/* -------------------------------------------------------------------------- */

function CreatorRow({ creator }) {
  return (
    <div className="grid grid-cols-[1.7fr_1fr_1.3fr_0.9fr_1fr_0.9fr_1fr_1.3fr] items-stretch gap-4 rounded-b-2xl border border-gray-100 bg-white px-5 py-5 shadow-sm">
      {/* Creator */}
      <div className="relative flex items-start gap-2 border-r border-gray-200">
        <div className="relative shrink-0">
          <img
            src={creator.img}
            alt={creator.name}
            className="h-20 w-20 rounded-full object-cover"
          />
          {/* <PlatformBadge platform={creator.platform} /> */}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">
            {creator.handle}
          </p>
          <p className="text-xs text-gray-500">{creator.name}</p>
          {creator.verified && (
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-green-50 px-0.5 py-0.5 text-[9px] font-medium text-green-600">
              <Check size={10} /> Creator Verified
            </span>
          )}
          <button className="absolute bottom-5 right-4 text-gray-300 hover:text-gray-500">
            <Bookmark size={30} />
          </button>
        </div>
      </div>

      {/* Reach */}
      <div className="text-xs text-gray-500 border-r border-gray-200">
        <p className="text-sm font-bold text-gray-900">{creator.followers}</p>
        <p>Followers</p>
        <p className="mt-1.5 text-sm font-bold text-gray-900">
          {creator.following}
        </p>
        <p>Following</p>
        <p className="mt-1.5 text-sm font-bold text-gray-900">
          {creator.posts}
        </p>
        <p>Posts</p>
      </div>

      {/* Performance */}
      <div className="w-full border-r pr-1 border-gray-200 pt-2">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-y-5 text-xs">
          <div>
            <p className="text-sm font-bold text-gray-900">
              {creator.engagement}
            </p>
            <p>Eng. Rate</p>
          </div>

          <div>
            <p className="text-sm font-bold text-gray-900">
              {creator.avgLikes}
            </p>
            <p>Avg Likes</p>
          </div>

          <div>
            <p className="text-sm font-bold text-gray-900">
              {creator.avgViews}
            </p>
            <p>Avg Views</p>
          </div>

          <div className="relative">
            <p className="text-sm font-bold text-gray-900">
              {creator.avgComments}
            </p>
            <p>Comments</p>

            {/* Info Icon */}
            <button className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full border border-gray-300 text-[10px] text-gray-500">
              i
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-gray-200" />

        {/* Last Active */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <p className="text-sm font-bold text-gray-900">
            {creator.lastActive}
          </p>
          <p className="text-xs text-gray-500">Last Active</p>
        </div>
      </div>

      {/* Category */}
      <div className="flex flex-col items-start gap-1.5 border-r border-gray-200">
        <span className="inline-flex items-center rounded-sm bg-[#f9f4ff] px-2 py-0.5 text-[11px] font-semibold text-[#5B3DF5]">
          {creator.category}
        </span>

        <AiPill>AI Estimate</AiPill>
        <ConfPill value={creator.categoryConf} />
      </div>

      {/* Location */}
      <div className="text-xs text-gray-500 border-r border-gray-200">
        <p className="text-sm font-bold text-gray-900">{creator.location}</p>
        <div className="mt-1.5 flex flex-col items-start gap-1.5">
          <AiPill>AI Estimate</AiPill>
          <ConfPill value={creator.locationConf} />
        </div>{" "}
        <p>{creator.locationSub}</p>
      </div>
      {/* Quality */}
      <div className="flex flex-col items-center gap-2 border-r border-gray-200">
        <QualityRing
          score={creator.quality}
          color={creator.qualityColor}
          label={creator.qualityLabel}
        />

        <AiPill>AI Estimate</AiPill>
        <ConfPill value={creator.qualityConf} />
      </div>

      {/* Est rate */}
      <div className="flex flex-col items-start gap-1.5 border-r border-gray-200">
        <p className="text-sm font-bold text-gray-900">{creator.rate}</p>
        <AiPill>AI Estimate</AiPill>
        <ConfPill value={creator.rateConf} />
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <button className="rounded-lg border border-gray-200 py-2 text-xs font-semibold text-[#6D4CFF] hover:bg-gray-50">
          View Profile
        </button>
        <button className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-2 text-xs font-semibold text-[#6D4CFF] hover:bg-gray-50">
          <Lock size={12} />
          Unlock Email
        </button>
        <button className="flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#6D4CFF] to-[#5B3DF5] py-2 text-xs font-semibold text-white shadow-md shadow-[#5B3DF5]/30 hover:opacity-95">
          <Bookmark size={12} />
          Add to Shortlist
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Right floating AI explanation card                                        */
/* -------------------------------------------------------------------------- */

function AiExplanationCard() {
  const items = [
    "Followers",
    "Engagement Rate",
    "Category",
    "Country",
    "Historical brand partnerships",
  ];
  return (
    <div className="fixed bottom-0 right-1 z-20 hidden w-52 rounded-xl border border-gray-100 bg-white p-3 shadow-xl xl:block">
      <p className="text-xs font-bold text-gray-900">
        Why this AI estimated rate?
      </p>

      <div className="mt-1">
        <AiPill>AI Estimate</AiPill>
      </div>

      <p className="mt-2 text-[11px] leading-4 text-gray-500">
        We analyze multiple data points to suggest a fair market range.
      </p>

      <div className="mt-2 flex flex-col gap-1">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-center gap-2 text-[11px] text-gray-700"
          >
            <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-green-100">
              <Check size={8} className="text-green-600" />
            </span>
            {item}
          </div>
        ))}
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <span>Confidence</span>
          <span className="font-semibold text-gray-800">64%</span>
        </div>

        <div className="mt-1 h-1 rounded-full bg-gray-100">
          <div className="h-full w-[64%] rounded-full bg-[#5B3DF5]" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Bottom legend                                                              */
/* -------------------------------------------------------------------------- */

function BottomLegend() {
  return (
    <div className="flex flex-col gap-4">
      <button className="mx-auto flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
        Load More
        <ChevronDown size={14} />
      </button>
      <p className="text-center text-xs text-gray-400">
        No total results are shown
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-white px-5 py-3.5 text-xs text-gray-500">
        <div className="flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-gray-700">OBSERVED</span>{" "}
            Directly scraped from platform
          </span>
          <span className="flex items-center gap-1.5">
            <span className="rounded bg-[#EFEBFF] px-1.5 py-0.5 font-semibold text-[#5B3DF5]">
              ESTIMATED
            </span>
            AI Estimate with confidence &amp; explanation
          </span>
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-gray-700">VERIFIED</span>{" "}
            Creator verified (coming soon)
          </span>
        </div>
        <span className="flex items-center gap-1.5">
          Dataset frozen on{" "}
          <span className="font-semibold text-gray-700">May 30, 2026</span>
          <Info size={12} className="text-gray-400" />
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Root component                                                            */
/* -------------------------------------------------------------------------- */

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-[#F8F9FC] font-sans">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5">
          <TopHeader onMenuClick={() => setSidebarOpen(true)} />
          {/* <FilterChips />
          <AiBanner /> */}

          <div className="flex flex-col p-0 gap-5 lg:flex-row">
            {/* Left Sidebar */}
            <FilterPanel />

            {/* Right Content */}
            <div className="flex flex-1 flex-col gap-4">
              <FilterChips />
              <AiBanner />

              <div className="rounded-xl border border-gray-200 bg-white">
                <div className="grid my-3 grid-cols-[1.7fr_1fr_1.3fr_0.9fr_1fr_0.9fr_1fr_1.3fr] gap-4 px-5 text-sm font-bold text-gray-900">
                  <span>Creator</span>
                  <span>Reach</span>
                  <span>Performance</span>
                  <span>Category</span>
                  <span>Location</span>
                  <span>Quality</span>
                  <span>Est. Rate</span>
                  <span>Actions</span>
                </div>

                {creators.map((creator) => (
                  <CreatorRow key={creator.id} creator={creator} />
                ))}

                <BottomLegend />
              </div>
            </div>
          </div>
        </div>
      </main>

      <AiExplanationCard />
    </div>
  );
}
