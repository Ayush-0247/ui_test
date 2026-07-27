import { useState } from "react";
import SidebarClose from "../components/SidebarClose";
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
  Sparkles,

  Handshake,

  Phone,
  Tag,
  TrendingUp,
  Grid3x3,
  UsersRound,
  BadgeCheck,
  Share2,
  Info,
} from "lucide-react";

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
  { key: "overview", label: "Overview", icon: Home },
  { key: "audience", label: "Audience", icon: Users },
  { key: "content", label: "Content", icon: Grid3x3 },
  { key: "performance", label: "Performance", icon: BarChart2 },
  { key: "partnerships", label: "Partnerships", icon: Handshake },
  { key: "similar", label: "Similar Creators", icon: UsersRound },
  { key: "contact", label: "Contact", icon: Phone },
  { key: "pricing", label: "Pricing", icon: Tag },
];

const PLANS = [
  {
    key: "free",
    name: "Free",
    tagline: "Perfect for getting started",
    icon: Sparkles,
    price: 0,
    cta: "Get Started",
    highlighted: false,
    features: [
      "1 Campaign",
      "5 Creator Searches / month",
      "Basic Creator Insights",
      "Email Support",
    ],
  },
  {
    key: "starter",
    name: "Starter",
    tagline: "Great for small teams",
    icon: Users,
    price: 49,
    strikePrice: 61,
    cta: "Start Free Trial",
    highlighted: false,
    prefix: "Everything in Free, plus:",
    features: [
      "10 Campaigns",
      "500 Creator Searches / month",
      "Advanced Filters",
      "Export Reports",
      "Email Support",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    tagline: "For growing businesses",
    icon: Users,
    price: 129,
    strikePrice: 161,
    cta: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular",
    prefix: "Everything in Starter, plus:",
    features: [
      "Unlimited Campaigns",
      "2,500 Creator Searches / month",
      "Audience Demographics",
      "AI Performance Score",
      "Priority Support",
      "Custom Reports",
    ],
  },
  {
    key: "enterprise",
    name: "Enterprise",
    tagline: "For large organizations",
    icon: ShieldCheck,
    price: "Custom",
    cta: "Contact Sales",
    highlighted: false,
    prefix: "Everything in Pro, plus:",
    features: [
      "Unlimited Searches",
      "Dedicated Account Manager",
      "Custom Integrations",
      "White-labeled Reports",
      "SLA & Priority Support",
      "Advanced Security",
    ],
  },
];

const COMPARE_ROWS = [
  {
    label: "Monthly Price",
    values: ["$0", "$49", "$129", "Custom"],
    strike: [null, "$61", "$161", null],
  },
  { label: "Campaigns", values: ["1", "10", "Unlimited", "Unlimited"] },
  {
    label: "Creator Searches / month",
    values: ["5", "500", "2,500", "Unlimited"],
  },
  { label: "Advanced Filters", values: [false, true, true, true] },
  { label: "AI Performance Score", values: [false, false, true, true] },
  { label: "Export Reports", values: [false, true, true, true] },
  { label: "Audience Demographics", values: [false, false, true, true] },
  { label: "Priority Support", values: [false, false, true, true] },
];

/* ------------------------------------------------------------------
 * SMALL PRESENTATIONAL PIECES
 * ------------------------------------------------------------------ */

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
  return (
    <div
      className="mt-5 flex gap-7"
      style={{ borderBottom: `1px solid ${BORDER}` }}
    >
      {tabs.map(({ key, label, icon: Icon }) => {
        const active = key === activeTab;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
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

function BillingToggle({ cycle, setCycle }) {
  return (
    <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
      <button
        onClick={() => setCycle("monthly")}
        className={[
          "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
          cycle === "monthly"
            ? "bg-white text-gray-900 shadow-sm"
            : "text-gray-500",
        ].join(" ")}
      >
        Monthly
      </button>
      <button
        onClick={() => setCycle("yearly")}
        className={[
          "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
          cycle === "yearly"
            ? "bg-violet-600 text-white shadow-sm"
            : "text-gray-500",
        ].join(" ")}
      >
        Yearly
        <span
          className={[
            "rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
            cycle === "yearly"
              ? "bg-white/20 text-white"
              : "bg-emerald-100 text-emerald-600",
          ].join(" ")}
        >
          Save 20%
        </span>
      </button>
    </div>
  );
}

function PlanCard({ plan }) {
  const Icon = plan.icon;
  const isCustom = typeof plan.price !== "number";

  return (
    <div
      className={[
        "relative flex flex-col rounded-2xl border p-6",
        plan.highlighted
          ? "border-violet-600 bg-white shadow-xl shadow-violet-100 ring-1 ring-violet-600"
          : "border-gray-200 bg-white",
      ].join(" ")}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
          {plan.badge}
        </span>
      )}

      <div className="flex items-center gap-3">
        <span
          className={[
            "flex h-10 w-10 items-center justify-center rounded-xl",
            plan.highlighted
              ? "bg-violet-100 text-violet-600"
              : "bg-gray-100 text-gray-500",
          ].join(" ")}
        >
          <Icon size={18} />
        </span>
        <div>
          <div className="font-semibold text-gray-900">{plan.name}</div>
          <div className="text-xs text-gray-400">{plan.tagline}</div>
        </div>
      </div>

      <div className="mt-5 flex items-baseline gap-2">
        {isCustom ? (
          <span className="text-3xl font-bold text-gray-900">Custom</span>
        ) : (
          <>
            <span className="text-3xl font-bold text-gray-900">
              ${plan.price}
            </span>
            <span className="text-sm text-gray-400">/month</span>
            {plan.strikePrice && (
              <span className="text-sm text-gray-300 line-through">
                ${plan.strikePrice}
              </span>
            )}
          </>
        )}
      </div>

      <button
        className={[
          "mt-5 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors",
          plan.highlighted
            ? "bg-violet-600 text-white hover:bg-violet-700"
            : plan.key === "free" || plan.key === "enterprise"
              ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
              : "bg-violet-50 text-violet-600 hover:bg-violet-100",
        ].join(" ")}
      >
        {plan.cta}
      </button>

      <div className="mt-6 text-sm font-medium text-gray-700">
        {plan.prefix ?? "Includes:"}
      </div>
      <ul className="mt-3 flex flex-col gap-2.5">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-gray-600"
          >
            <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompareTable({ plans, rows }) {
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
          {rows.map((row, idx) => (
            <tr
              key={row.label}
              className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"}
            >
              <td className="px-6 py-3.5 font-medium text-gray-700">
                {row.label}
              </td>
              {row.values.map((val, i) => (
                <td key={i} className="px-6 py-3.5">
                  {typeof val === "boolean" ? (
                    val ? (
                      <CheckCircle2 size={17} className="text-emerald-500" />
                    ) : (
                      <Minus size={15} className="text-gray-300" />
                    )
                  ) : (
                    <span className="flex items-center gap-2 text-gray-700">
                      {val}
                      {row.strike?.[i] && (
                        <span className="text-gray-300 line-through">
                          {row.strike[i]}
                        </span>
                      )}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------
 * MAIN EXPORT — drop <CreatorPricingDashboard /> anywhere.
 * Pass overrides via props if you don't want to edit the config above.
 * ------------------------------------------------------------------ */

export default function CreatorPricingDashboard({
  creator = CREATOR,
  stats = STATS,
  tabs = NAV_TABS,
  plans = PLANS,
  compareRows = COMPARE_ROWS,
}) {
  const [activeTab, setActiveTab] = useState("pricing");
  const [cycle, setCycle] = useState("yearly");

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50 font-sans">
      <SidebarClose />

      <main className="flex-1 overflow-y-auto overflow-x-hidden pl-20">
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

                <div className="mt-6 flex justify-center">
                  <BillingToggle cycle={cycle} setCycle={setCycle} />
                </div>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {plans.map((plan) => (
                  <PlanCard key={plan.key} plan={plan} />
                ))}
              </div>

              <div className="mt-14">
                <h3 className="mb-5 text-xl font-bold text-gray-900">
                  Compare Plans
                </h3>
                <CompareTable plans={plans} rows={compareRows} />
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
