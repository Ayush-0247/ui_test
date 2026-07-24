import TopTabs from "../components/TopTabs";
import ProfileSidebar from "../components/ProfileSidebar";
import {
  User,
  Info,
  Star,
  CheckCircle2,
  Mail,
  Link2,
  MessageSquare,
  Clock,
  Sparkles,
  Globe,
  Trophy,
  Lightbulb,
} from "lucide-react";
/* -------------------------------------------------------------------------
 * DESIGN TOKENS
 * Centralising these means a re-theme only touches this block.
 * ---------------------------------------------------------------------- */
const tokens = {
  purple: "text-violet-700",
  purpleBg: "bg-violet-50",
  purpleBorder: "border-violet-100",
  purpleSolid: "bg-violet-600",
  gradient: "bg-gradient-to-r from-violet-600 to-violet-700",
  green: "text-emerald-600",
  greenBg: "bg-emerald-50",
  textPrimary: "text-gray-900",
  textSecondary: "text-gray-500",
  border: "border-gray-100",
};

/* -------------------------------------------------------------------------
 * PRIMITIVES
 * ---------------------------------------------------------------------- */

/** Generic elevated card shell used by every panel on the page. */
function Card({ title, icon, tint = false, action, className = "", children }) {
  return (
    <div
      className={`rounded-2xl border ${tokens.border} ${
        tint ? tokens.purpleBg : "bg-white"
      } p-3 shadow-sm ${className}`}
    >
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h3
              className={`flex items-center gap-1.5 text-[15px] font-semibold ${tokens.purple}`}
            >
              {title}
              {icon}
            </h3>
          )}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

/** Small rounded pill used for skill tags, brand-category chips, status badges. */
function Pill({ children, tone = "purple", size = "md", className = "" }) {
  const tones = {
    purple: "bg-violet-50 text-violet-700",
    green: "bg-emerald-50 text-emerald-600",
    outline: "bg-white text-gray-600 border border-gray-200",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-3 py-1 text-[12px]",
    lg: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-md font-medium ${tones[tone]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
}

/** Outline / solid button, reused for every CTA on the page. */
function Button({
  children,
  variant = "outline",
  icon,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition";
  const variants = {
    outline: "border border-gray-200 text-gray-700 hover:bg-gray-50 bg-white",
    solid: `${tokens.gradient} text-white shadow-sm hover:opacity-95`,
    ghost: "text-gray-600 hover:bg-gray-50",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  );
}

/** Circular SVG progress ring — used for the 86% availability score. */
function ProgressRing({ value, size = 120, stroke = 9, label, sublabel }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#F1EEFE"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#7C3AED"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-2xl font-bold text-[#7C3AED]">{label}</span>
        {sublabel && (
          <span className="mt-1 text-xs font-medium text-emerald-600">
            {sublabel}
          </span>
        )}
      </div>
    </div>
  );
}

/** Row with a leading icon, a label, and a trailing value/badge — used across
 *  Outreach Readiness, Contact Methods, and stat rows. */
function InfoRow({ icon, label, right, sub }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg font-extrabold text-violet-700">
          {icon}
        </span>
        <div>
          <p className="text-sm font-bold text-gray-900">{label}</p>
          {sub && <p className="text-xs text-gray-900">{sub}</p>}
        </div>
      </div>
      {right}
    </div>
  );
}

/** Checklist line with a green check icon + label, optional right-hand value. */
function CheckRow({ label, right, boldRight = false }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-2.5">
        <CheckCircle2 size={17} className="text-emerald-500" />
        <span className="text-sm font-bold text-gray-700">{label}</span>
      </div>
      {right && (
        <span
          className={`text-sm ${boldRight ? "font-semibold text-violet-700" : "font-medium text-emerald-600"}`}
        >
          {right}
        </span>
      )}
    </div>
  );
}

/** 5-star rating row used in Collaboration Preferences. */
function StarRating({ label, value, icon }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center gap-2">
        <span className="text-violet-500">{icon}</span>
        <span className="text-xs font-bold text-gray-700">{label}</span>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < Math.round(value)
                ? "fill-violet-500 text-violet-500"
                : "fill-gray-200 text-gray-200"
            }
          />
        ))}
      </div>
    </div>
  );
}

/** Contact-method row with icon, title, subtitle, availability badge & CTA. */
function ContactMethodRow({ icon, title, subtitle, badge }) {
  return (
    <div className="flex items-center justify-between py-2 px-0 border rounded-xl border-gray-200 mb-2">
      <div className="flex items-center gap-3">
        <span className="flex ml-2 items-center justify-center rounded-lg  text-violet-600">
          {icon}
        </span>
        <div>
          <p className="text-sm font-bold text-gray-900">{title}</p>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {badge && (
          <Pill className="mr-2" tone="green" size="sm">
            {badge}
          </Pill>
        )}
      </div>
    </div>
  );
}

/** Numbered ranking row used for Best Partnership Categories. */
function RankRow({ rank, label, match }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-200  text-xs font-semibold text-violet-700">
          {rank}
        </span>
        <span className="text-xs font-bold text-gray-800">{label}</span>
      </div>
      <span className="text-xs font-semibold text-violet-700">{match}</span>
    </div>
  );
}

function ContactAvailabilityCard() {
  return (
    <Card
      title="Contact Availability"
      icon={<Info size={14} className="text-gray-600 font-medium" />}
    >
      <div className="flex items-center gap-6">
        <ProgressRing value={86} label="86%" sublabel="High Availability" />
        <p className="text-sm leading-relaxed text-gray-500">
          Isabella is highly accessible for brand collaborations and responds
          consistently to partnership opportunities.
        </p>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-md bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-600">
        <CheckCircle2 size={16} />
        Typically responds within 48 hours
      </div>
    </Card>
  );
}

function OutreachReadinessCard() {
  return (
    <Card
      title="Outreach Readiness"
      icon={<Info size={14} className="text-gray-600 font-medium" />}
    >
      <div className="divide-y divide-gray-50">
        <InfoRow
          icon={<Mail size={16} />}
          label="Email"
          right={<Pill tone="green">Available</Pill>}
        />
        <InfoRow
          icon={<Link2 size={16} />}
          label="Profile Links"
          right={
            <span className="text-sm font-medium text-gray-900">
              4 Connected
            </span>
          }
        />
        <InfoRow
          icon={<MessageSquare size={16} />}
          label="Response Likelihood"
          right={<Pill tone="green">Very High</Pill>}
        />
      </div>
    </Card>
  );
}

function BestTimeCard() {
  return (
    <Card tint className="flex flex-col justify-center">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg  text-violet-600">
          <Clock size={16} />
        </span>
        <div>
          <p className="text-xs font-semibold text-violet-900">
            Best Time to Reach Out
          </p>
          <p className="mt-1 text-xs font-bold text-zinc-600">
            Tuesday – Thursday
          </p>
          <p className="text-xs text-zinc-600 font-bold">
            9:00 AM – 12:00 PM PST
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
        <Sparkles size={14} className="mt-0.5 shrink-0 text-violet-500" />
        <p>
          <span className="font-semibold text-violet-600">Tip:</span>
          <span className="text-xs">
            {" "}
            Send personalized pitches during mid-morning for best results.
          </span>
        </p>
      </div>
    </Card>
  );
}

function CollaborationPreferencesCard() {
  const collabTypes = [
    { label: "Sponsored Content", value: 5, icon: <CheckCircle2 size={14} /> },
    {
      label: "Affiliate Marketing",
      value: 4,
      icon: <CheckCircle2 size={14} />,
    },
    { label: "Product Seeding", value: 3.5, icon: <CheckCircle2 size={14} /> },
  ];
  const brandCategories = [
    "Fashion",
    "Beauty",
    "Wellness",
    "Travel",
    "Lifestyle",
    "Skincare",
    "Health & Fitness",
    "Sustainable Living",
  ];
  const prefers = [
    "Values-driven & authentic brands",
    "High-quality, aesthetic products",
    "Long-term partnerships",
    "Creative freedom in content",
  ];

  return (
    <Card
      title="Collaboration Preferences"
      icon={<Info size={12} className="text-gray-300" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-3">
        {/* Mobile: Bottom border & padding. Desktop: Right border & padding */}
        <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-2">
          <p className="mb-2 md:mb-1 text-[10px] md:text-[8px] uppercase tracking-wide font-bold text-violet-600">
            Preferred Collaboration Types
          </p>
          <div className="space-y-1.5 md:space-y-0">
            {collabTypes.map((c) => (
              <StarRating
                key={c.label}
                label={c.label}
                value={c.value}
                icon={c.icon}
              />
            ))}
          </div>
        </div>

        {/* Mobile: Bottom border & padding. Desktop: Right border & padding */}
        <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-2">
          <p className="mb-2 md:mb-1 text-[10px] uppercase tracking-wide font-bold text-violet-600">
            Top Brand Categories
          </p>
          <div className="flex flex-wrap gap-1.5">
            {brandCategories.map((c) => (
              <Pill key={c} tone="purple">
                {c}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 md:mb-1 text-[10px] uppercase tracking-wide font-bold text-violet-600">
            Brand She Prefers
          </p>
          <div className="space-y-1.5 md:space-y-0.5">
            {prefers.map((p) => (
              <CheckRow key={p} label={p} />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ContactMethodsCard() {
  return (
    <Card title="Contact Methods">
      <div className=" rounded-md">
        <ContactMethodRow
          icon={<Mail size={14} />}
          title="Email"
          subtitle="hello@isabellamartinez.com"
          badge="Available"
          cta="Copy"
        />
        <ContactMethodRow
          icon={<User size={14} />}
          title="Instagram DM"
          subtitle="@isabellamarts"
          badge="Available"
          cta="Open"
        />
        <ContactMethodRow
          icon={<User size={14} />}
          title="Management"
          subtitle="Sun & Co. Management · team@sunandco.com"
          cta="View"
        />
        <ContactMethodRow
          icon={<Globe size={14} />}
          title="Website"
          subtitle="www.isabellamartinez.com"
          cta="Visit"
        />
      </div>
    </Card>
  );
}

function CampaignFitChecklistCard() {
  const items = [
    { label: "Audience alignment", value: "Excellent" },
    { label: "Brand values match", value: "Excellent" },
    { label: "Content style fit", value: "Excellent" },
    { label: "Engagement quality", value: "Excellent" },
    { label: "Previous brand collaborations", value: "Strong" },
  ];
  return (
    <Card
      title="Campaign Fit Checklist"
      icon={<Info size={14} className="text-gray-300 font-bold" />}
    >
      <div className="divide-y divide-gray-50">
        {items.map((i) => (
          <CheckRow key={i.label} label={i.label} right={i.value} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
        <span className="flex min-w-0 items-center gap-2 whitespace-nowrap text-xs font-semibold text-gray-900">
          <Star size={15} className="shrink-0 fill-amber-400 text-amber-400" />
          Overall Campaign Fit
        </span>

        <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-violet-700">
          Excellent Match
        </span>
      </div>
    </Card>
  );
}

function AIOutreachRecommendationCard() {
  return (
    <Card
      tint
      title="AI Outreach Recommendation"
      icon={<Info size={14} className="text-gray-300" />}
    >
      {/* Mobile: 1 Column | Desktop: 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-violet-700">
            <Sparkles size={14} /> Suggested Pitch Angle
          </p>
          <div className="rounded-md bg-violet-100 p-4 text-xs leading-relaxed text-black shadow-sm">
            "Focus on a lifestyle storytelling approach that highlights
            authenticity, wellness, and everyday elegance. Emphasize shared
            values around quality, sustainability, and empowerment."
          </div>

          <span className="mt-3 inline-flex items-center rounded-full bg-[#F3E8FF] px-3 py-1 text-[13px] font-medium leading-none text-[#4C1D95]">
            Tone: Warm, Personal, Value-Aligned
          </span>
        </div>

        <div>
          <p className="mb-1 flex items-center gap-1.5 text-sm font-semibold text-violet-700">
            <Trophy size={14} /> Best Partnership Categories
          </p>
          <div className="rounded-xl py-2 md:p-4">
            <RankRow rank={1} label="Fashion & Apparel" match="92% Match" />
            <RankRow rank={2} label="Beauty & Skincare" match="90% Match" />
            <RankRow rank={3} label="Wellness & Health" match="88% Match" />
          </div>
        </div>

        {/* Mobile: Stack vertically | Desktop: Side-by-side spanning both columns */}
        <div className="md:col-span-2 mt-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 rounded-xl bg-[#F3E8FF] px-4 py-3">
          <p className="flex items-center gap-2 text-sm text-gray-700">
            <Lightbulb size={14} className="shrink-0 text-violet-500" />
            <span>
              <span className="font-semibold text-violet-700">AI Tip:</span>{" "}
              Reference her recent posts about self-care and travel for a more
              personalized approach.
            </span>
          </p>
          <Button
            variant="solid"
            icon={<Sparkles size={13} />}
            className="w-full md:w-auto shrink-0 justify-center whitespace-nowrap !px-3 !py-2 text-xs"
          >
            Generate Pitch Ideas
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen xl:h-screen bg-white text-[#1F2937] flex flex-col xl:flex-row overflow-x-hidden xl:overflow-hidden">
      <ProfileSidebar />

      <main className="flex-1 min-w-0 flex flex-col border-t xl:border-t-0 xl:border-l border-[#ECECEC] bg-white">
        {/* Fixed Top Tabs */}
        <div className="sticky top-0 z-30 bg-white border-b border-[#ECECEC] p-2">
          <TopTabs activeTab="/contact" />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 xl:overflow-y-auto">
          <div className="space-y-4 p-1">
            {/* Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-13 gap-2">
              <div className="lg:col-span-5">
                <ContactAvailabilityCard />
              </div>

              <div className="lg:col-span-4">
                <OutreachReadinessCard />
              </div>

              <div className="lg:col-span-4">
                <BestTimeCard />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
              <div className="lg:col-span-8">
                <CollaborationPreferencesCard />
              </div>

              <div className="lg:col-span-4">
                <ContactMethodsCard />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              <div className="lg:col-span-4">
                <CampaignFitChecklistCard />
              </div>

              <div className="lg:col-span-8">
                <AIOutreachRecommendationCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
