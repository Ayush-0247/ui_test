import { useState } from "react";
import SidebarClose from "../components/SidebarClose";
import {
  CheckCircle2,
  Check,
  Minus,
  ChevronDown,
} from "lucide-react";
import {
  CREATOR,
  STATS,
  NAV_TABS_CLOSE,
  ProfileHeader,
  StatCardsRow,
  TabBar,
  PURPLE,
} from "../components/CreatorHeaderLayout";
import Steps from "../components/Steps";

const HEADING = "#111827";
const MUTED = "#6B7280";
const BORDER = "#E5E7EB";

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
        "Perfect for getting started, pay month-to-month with full access and zero long-term commitment.",
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


function MobileStatCard({ label, value, caption, icon: Icon }) {
  return (
    <div
      className="w-[100px] shrink-0 snap-start rounded-lg bg-white p-2.5 font-sans"
      style={{ border: `1px solid ${BORDER}` }}
    >
      <div
        className="flex items-center gap-1 text-[10px] font-semibold leading-tight"
        style={{ color: HEADING }}
      >
        <Icon size={11} className="shrink-0" style={{ color: PURPLE }} />
        <span className="truncate">{label}</span>
      </div>
      <p className="mt-1.5 text-[15px] font-bold leading-none" style={{ color: HEADING }}>
        {value}
      </p>
      <p className="mt-1 truncate text-[9px] leading-tight" style={{ color: MUTED }}>
        {caption}
      </p>
    </div>
  );
}

function MobileStatCardsRow({ stats }) {
  return (
    <div className="-mx-4 mt-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {stats.map((s) => (
        <MobileStatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

function BillingToggle({ cycle, setCycle }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 lg:flex-row">
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
        className="rounded-full px-3 py-1.5 text-center text-xs font-semibold"
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
      className="relative flex flex-col rounded-2xl p-4 lg:p-6"
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
    <div className="-mx-4 overflow-x-auto rounded-2xl border border-gray-100 px-4 lg:mx-0 lg:px-0">
      <table className="w-full min-w-[640px] border-collapse text-sm lg:min-w-[720px]">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="px-3 py-3 text-left font-semibold text-gray-900 lg:px-6 lg:py-4">
              Feature
            </th>
            {plans.map((plan) => (
              <th
                key={plan.key}
                className="px-3 py-3 text-left font-semibold text-gray-900 lg:px-6 lg:py-4"
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
            <td className="px-3 py-3 font-medium text-gray-700 lg:px-6 lg:py-3.5">
              Price
            </td>
            {plans.map((plan) => (
              <td key={plan.key} className="px-3 py-3 text-gray-700 lg:px-6 lg:py-3.5">
                ${plan[cycle].price} / {cycle === "yearly" ? "yr" : "mo"}
              </td>
            ))}
          </tr>
          {rowLabels.map((label, idx) => (
            <tr
              key={label}
              className={idx % 2 === 0 ? "bg-gray-50/40" : "bg-white"}
            >
              <td className="px-3 py-3 font-medium text-gray-700 lg:px-6 lg:py-3.5">
                {label}
              </td>
              {plans.map((plan) => {
                const val = getValue(plan, label);
                return (
                  <td key={plan.key} className="px-3 py-3 lg:px-6 lg:py-3.5">
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
  tabs = NAV_TABS_CLOSE,
  plans = PLANS,
}) {
  const [activeTab, setActiveTab] = useState("pricing");
  const [cycle, setCycle] = useState("yearly");

  return (
    <div className="flex min-h-screen overflow-hidden bg-gray-50 font-sans lg:h-screen">
      <SidebarClose />

      <main className="min-h-screen min-w-0 flex-1 overflow-y-auto overflow-x-hidden pb-16 lg:ml-[72px] lg:pb-0">
        <div className="min-w-0 bg-white px-4 pt-4 lg:px-6 lg:pt-6">
          <div className="[&>div.flex]:flex-col [&>div.flex]:items-stretch [&>div.flex]:gap-4 lg:[&>div.flex]:flex-row lg:[&>div.flex]:items-start lg:[&>div.flex]:gap-0 [&>div.flex>div:last-child]:w-full lg:[&>div.flex>div:last-child]:w-auto [&>div.flex>div:last-child_.flex]:flex-wrap lg:[&>div.flex>div:last-child_.flex]:flex-nowrap">
            <ProfileHeader creator={creator} />
          </div>
          <div className="lg:hidden">
            <MobileStatCardsRow stats={stats} />
          </div>
          <div className="hidden lg:block">
            <StatCardsRow stats={stats} />
          </div>
          <Steps />
          <div className="-mx-4 overflow-x-auto px-4 lg:mx-0 lg:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [&>div]:min-w-max [&>div]:gap-4 lg:[&>div]:min-w-0 lg:[&>div]:gap-7">
            <TabBar tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />
          </div>
        </div>

        {activeTab === "pricing" && (
          <section className="px-4 py-8 lg:px-6 lg:py-12">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                  Simple, Transparent Pricing
                </h2>
                <p className="mt-2 px-1 text-sm text-gray-500 lg:px-0 lg:text-base">
                  Choose the perfect plan to grow your influencer marketing
                  campaigns.
                </p>

                <div className="mt-6">
                  <BillingToggle cycle={cycle} setCycle={setCycle} />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
                {plans.map((plan) => (
                  <PlanCard key={plan.key} plan={plan} cycle={cycle} />
                ))}
              </div>

              <div className="mt-10 lg:mt-14">
                <h3 className="mb-4 text-lg font-bold text-gray-900 lg:mb-5 lg:text-xl">
                  Compare Plans
                </h3>
                <CompareTable plans={plans} cycle={cycle} />
              </div>
            </div>
          </section>
        )}

        {activeTab !== "pricing" && (
          <div className="flex h-64 items-center justify-center px-4 text-center text-gray-400">
            "{tabs.find((t) => t.key === activeTab)?.label}" content goes here.
          </div>
        )}
      </main>
    </div>
  );
}