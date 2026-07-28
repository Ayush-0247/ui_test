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
} from "../components/CreatorHeaderLayout";

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
  tabs = NAV_TABS_CLOSE,
  plans = PLANS,
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