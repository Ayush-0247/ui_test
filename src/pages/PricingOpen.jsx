import { useState } from "react";
import SidebarOpen from "../components/SidebarOpen";
import { FaInstagram } from "react-icons/fa";
import {
  Home,
  Users,
  BarChart2,
  MapPin,
  Lock,
  Plus,
  Bookmark,
  Send,
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  FileText,
  ShieldCheck,
  CheckCircle2,
  Check,
  Minus,
  ChevronDown,
  Handshake,
  Phone,
  Tag,
  TrendingUp,
  Grid3x3,
  BadgeCheck,
  Share2,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
/* ------------------------------------------------------------------
 * DESIGN TOKENS — edit these to reuse this file for another theme.
 * ------------------------------------------------------------------ */

const PURPLE = "#7C3AED";
const PURPLE_TINT = "#EDE9FE";
const BLUE = "#3B82F6";
const HEADING = "#111827";
const MUTED = "#6B7280";
const BORDER = "#E5E7EB";

/* ------------------------------------------------------------------
 * CONFIG — edit these arrays/objects to reuse this file for another
 * creator, plan set, or nav layout. Nothing below this block needs
 * to change for basic customization.
 * ------------------------------------------------------------------ */

const CREATOR = {
  name: "Mariale",
  handle: "@mariale",
  location: "USA",
  avatar: "https://i.pravatar.cc/150?img=47",
  tags: ["Beauty", "Cosmetics & Personal Care", "Beauty & Skincare"],
};

const STATS = [
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

const NAV_TABS = [
  { key: "overview", label: "Overview", icon: Home,
    route: "/Overview", },
  { key: "audience", label: "Audience", icon: Users,
    route: "/audience-open", },
  { key: "content", label: "Content", icon: Grid3x3 ,
    route: "/content-open",},
  { key: "performance", label: "Performance", icon: BarChart2,
    route: "/PerformanceOpen",},
  { key: "partnerships", label: "Partnerships", icon: Handshake ,
    route: "/Partnership-open",},

  {
    key: "contact",
    label: "Contact",
    icon: Phone,
    route: "/Contact-open",
  },
  { key: "pricing", label: "Pricing", icon: Tag },
];



const PLANS = [
  {
    key: "free",
    name: "Free Plan",
    gradient: "linear-gradient(135deg, #FDEBD3 0%, #FFF7ED 60%)",
    accent: "#F59E0B",
    accentText: "#B45309",
    monthly: {
      tagline: "Perfect for getting started",
      price: 0,
      cta: "Current Plan",
      features: [
        "Search Quota: 200",
        "Campaign Limit: 0",
        "Compare Limit: 0",
        "List Limit: 5",
        "Influencers per List: 10",
        "Outreach Quota: 0",
      ],
    },
    yearly: {
      tagline: "Perfect for getting started",
      price: 0,
      cta: "Current Plan",
      features: [
        "Search Quota: 200",
        "Campaign Limit: 0",
        "Compare Limit: 0",
        "List Limit: 5",
        "Influencers per List: 10",
        "Outreach Quota: 0",
      ],
    },
    highlighted: false,
  },
  {
    key: "starter",
    name: "Starter Plan",
    gradient: "linear-gradient(135deg, #E4E7FB 0%, #F5F6FE 60%)",
    accent: "#6366F1",
    accentText: "#4338CA",
    monthly: {
      tagline:
        "Perfect for getting started, pay month.",
      price: 79,
      cta: "Get Started",
      prefix: "Everything in Free, plus:",
      features: [
        "Everything in Free",
        "Search Quota: 20,000",
        "Campaign Limit: 1",
        "Compare Limit: 2",
        "Credit Limit: 100",
        "Export Limit: 500",
      ],
    },
    yearly: {
      tagline:
        "Best value for serious growth, enjoy uninterrupted access all year while saving more overall.",
      price: 660,
      cta: "Get Started",
      prefix: "Everything in Free, plus:",
      features: [
        "Everything in Free",
        "Search Quota: 70,000",
        "Campaign Limit: 15",
        "Compare Limit: 5",
        "Credit Limit: 7,000",
        "Export Limit: 6,500",
      ],
    },
    highlighted: false,
  },
  {
    key: "pro",
    name: "Enterprise Plan",
    gradient: "linear-gradient(135deg, #FCE3EF 0%, #FEF5FA 60%)",
    accent: "#EC4899",
    accentText: "#BE185D",
    badge: "Most Popular",
    monthly: {
      tagline: "Best for large teams and agencies.",
      price: 199,
      cta: "Get Started",
      prefix: "Everything in Starter, plus:",
      features: [
        "Everything in Starter",
        "Search Quota: 65,000",
        "Campaign Limit: 10",
        "Compare Limit: 2",
        "Credit Limit: 1,500",
        "Export Limit: Unlimited",
      ],
    },
    yearly: {
      tagline: "Best for large teams and agencies.",
      price: 1668,
      cta: "Get Started",
      prefix: "Everything in Starter, plus:",
      features: [
        "Everything in Starter",
        "Search Quota: 210,000",
        "Campaign Limit: 120",
        "Compare Limit: 5",
        "Credit Limit: 18,000",
        "Export Limit: Unlimited",
      ],
    },
    highlighted: true,
  },
];



function Pill({ children }) {
  return (
    <span
      className="rounded-md px-2 py-0.5 text-xs font-medium text-gray-600"
      style={{ border: `1px solid ${BORDER}` }}
    >
      {children}
    </span>
  );
}

function StatCard({ label, value, caption, icon: Icon }) {
  return (
    <div
      className="flex-1 rounded-xl bg-white p-4"
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

function StatCardsRow({ stats }) {
  return (
    <div className="mt-5 grid grid-cols-6 gap-4">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

function ProfileHeader({ creator }) {
  return (
    <div className="flex items-start justify-between">
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
            className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white"
            style={{ backgroundColor: PURPLE }}
          >
            <Lock size={13} />
            Unlock
          </button>
          <button
            className="flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-xs font-semibold"
            style={{ border: `1px solid ${BORDER}`, color: HEADING }}
          >
            <Share2 size={13} />
            Share Profile
          </button>
          <button
            className="rounded-lg bg-white p-2"
            style={{ border: `1px solid ${BORDER}` }}
          >
            <MoreHorizontal size={15} style={{ color: MUTED }} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold text-white"
            style={{ backgroundColor: PURPLE }}
          >
            <Plus size={13} />
            Add to Campaign
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-violet-500 bg-white px-3.5 py-2 text-xs font-semibold text-violet-500">
            <Bookmark size={13} />
            Save Creator
          </button>
          <button className="flex items-center gap-1.5 rounded-lg border border-violet-500 bg-white px-3.5 py-2 text-xs font-semibold text-violet-500">
            <Send size={13} />
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}

function TabBar({ tabs, activeTab, onChange }) {
  const navigate = useNavigate();

  return (
    <div
      className="mt-5 flex gap-7"
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
            className="flex items-center gap-1.5 pb-3 text-sm"
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

/* Monthly / Annually toggle + "50% OFF" badge, matching the screenshot. */
function BillingToggle({ cycle, setCycle }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <div
        className="inline-flex items-center rounded-full p-1"
        style={{ backgroundColor: "#EEF0FE", border: `1px solid ${BORDER}` }}
      >
        <button
          onClick={() => setCycle("monthly")}
          className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
          style={{
            color: cycle === "monthly" ? "#4338CA" : MUTED,
            backgroundColor: cycle === "monthly" ? "white" : "transparent",
            boxShadow:
              cycle === "monthly" ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
          }}
        >
          Monthly
        </button>
        <button
          onClick={() => setCycle("yearly")}
          className="rounded-full px-4 py-1.5 text-sm font-semibold transition-colors"
          style={{
            color: cycle === "yearly" ? "white" : MUTED,
            backgroundColor: cycle === "yearly" ? "#6366F1" : "transparent",
          }}
        >
          Annually
        </button>
      </div>
      <span
        className="rounded-full px-3 py-1.5 text-xs font-semibold"
        style={{ backgroundColor: "#EEF0FE", color: "#4338CA" }}
      >
        50% OFF on Annual Plans
      </span>
    </div>
  );
}

function PlanCard({ plan, cycle }) {
  const [expanded, setExpanded] = useState(false);
  const data = plan[cycle];
  const isCustom = typeof data.price !== "number";
  const visibleFeatures = expanded ? data.features : data.features.slice(0, 5);

  return (
    <div
      className="relative flex flex-col rounded-2xl p-6"
      style={{
        background: plan.gradient,
        border: plan.highlighted
          ? `2px solid ${plan.accent}`
          : `1px solid ${BORDER}`,
        boxShadow: plan.highlighted
          ? "0 10px 25px -10px rgba(236,72,153,0.35)"
          : "none",
      }}
    >
      {plan.badge && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm"
          style={{ backgroundColor: plan.accent }}
        >
          {plan.badge}
        </span>
      )}

      <div className="font-bold text-lg" style={{ color: HEADING }}>
        {plan.name}
      </div>

      <div className="mt-4 text-xs font-medium" style={{ color: MUTED }}>
        Starts at
      </div>
      <div className="mt-1 flex items-baseline gap-1.5">
        {isCustom ? (
          <span className="text-3xl font-bold" style={{ color: HEADING }}>
            Custom
          </span>
        ) : (
          <>
            <span className="text-3xl font-bold" style={{ color: HEADING }}>
              ${data.price}
            </span>
            <span className="text-sm" style={{ color: MUTED }}>
              per {cycle === "yearly" ? "year" : "month"}
            </span>
          </>
        )}
      </div>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: MUTED }}>
        {data.tagline}
      </p>

      <button
        className="mt-6 w-full rounded-lg py-2.5 text-sm font-semibold text-white transition-colors"
        style={{ backgroundColor: plan.accent }}
      >
        {data.cta}
      </button>

      <div
        className="mt-6 border-t pt-4 text-sm font-semibold"
        style={{ borderColor: "rgba(0,0,0,0.06)", color: HEADING }}
      >
        Features
      </div>
      <ul className="mt-3 flex flex-col gap-2.5">
        {visibleFeatures.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm"
            style={{ color: "#374151" }}
          >
            <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
            {feature}
          </li>
        ))}
      </ul>

      {data.features.length > 5 && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 flex items-center gap-1 self-start text-sm font-medium"
          style={{ color: plan.accentText }}
        >
          {expanded ? "See Less" : "See More"}
          <ChevronDown
            size={14}
            style={{
              transform: expanded ? "rotate(180deg)" : "none",
              transition: "transform 0.15s",
            }}
          />
        </button>
      )}
    </div>
  );
}

/* Compare table is derived from the plan data itself (per active cycle)
 * so it can never drift out of sync with the cards above it. */
function CompareTable({ plans, cycle }) {
  const rowLabels = [
    "Everything in Free",
    "Search Quota",
    "Campaign Limit",
    "Compare Limit",
    "Credit Limit",
    "Export Limit",
  ];

  const getValue = (plan, label) => {
    const data = plan[cycle];
    if (label === "Everything in Free") return plan.key !== "free";
    const match = data.features.find((f) => f.startsWith(label));
    if (!match) return "—";
    return match.split(":")[1]?.trim() ?? "—";
  };

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="px-6 py-4 text-left font-semibold text-gray-900">
              Feature
            </th>
            {plans.map((plan) => (
              <th
                key={plan.key}
                className="px-6 py-4 text-left font-semibold text-gray-900"
              >
                <div className="flex items-center gap-2">
                  {plan.name}
                  {plan.highlighted && (
                    <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-600">
                      Most Popular
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="px-6 py-3.5 font-medium text-gray-700">
              Price
            </td>
            {plans.map((plan) => (
              <td key={plan.key} className="px-6 py-3.5 text-gray-700">
                ${plan[cycle].price} / {cycle === "yearly" ? "yr" : "mo"}
              </td>
            ))}
          </tr>
          {rowLabels.map((label, idx) => (
            <tr
              key={label}
              className={idx % 2 === 0 ? "bg-gray-50/40" : "bg-white"}
            >
              <td className="px-6 py-3.5 font-medium text-gray-700">
                {label}
              </td>
              {plans.map((plan) => {
                const val = getValue(plan, label);
                return (
                  <td key={plan.key} className="px-6 py-3.5">
                    {typeof val === "boolean" ? (
                      val ? (
                        <CheckCircle2 size={17} className="text-emerald-500" />
                      ) : (
                        <Minus size={15} className="text-gray-300" />
                      )
                    ) : (
                      <span className="text-gray-700">{val}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default function CreatorPricingDashboard({
  creator = CREATOR,
  stats = STATS,
  tabs = NAV_TABS,
  plans = PLANS,
}) {
  const [activeTab, setActiveTab] = useState("pricing");
  const [cycle, setCycle] = useState("yearly");
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <SidebarOpen />

     <main
        className="flex-1 overflow-y-auto overflow-x-hidden"
        style={{ marginLeft: "256px" }}
      >
        <div className="bg-white px-6 pt-6">
          <ProfileHeader creator={creator} />
          <StatCardsRow stats={stats} />
          <TabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
        </div>

        {activeTab === "pricing" && (
          <section className="px-6 py-12">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900">
                  Simple, Transparent Pricing
                </h2>
                <p className="mt-2 text-gray-500">
                  Choose the perfect plan to grow your influencer marketing
                  campaigns.
                </p>

                <div className="mt-6">
                  <BillingToggle cycle={cycle} setCycle={setCycle} />
                </div>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan) => (
                  <PlanCard key={plan.key} plan={plan} cycle={cycle} />
                ))}
              </div>

              <div className="mt-14">
                <h3 className="mb-5 text-xl font-bold text-gray-900">
                  Compare Plans
                </h3>
                <CompareTable plans={plans} cycle={cycle} />
              </div>
            </div>
          </section>
        )}

        {activeTab !== "pricing" && (
          <div className="flex h-64 items-center justify-center text-gray-400">
            "{tabs.find((t) => t.key === activeTab)?.label}" content goes here.
          </div>
        )}
      </main>
    </div>
  );
}