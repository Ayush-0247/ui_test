import {
  BarChart3,
  Layers,
  Users,
  UserPlus,
  User,
  X,
  Info,
  Send,
  TrendingUp,
  Download,
  Star,
  MapPin,
  CheckCircle2,
  Mail,
  Link2,
  MessageSquare,
  Clock,
  Heart,
  Sparkles,
  Globe,
  Trophy,
  Lightbulb,
} from "lucide-react";
import img1 from "../assets/img2.png";
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
      } p-6 shadow-sm ${className}`}
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
function Pill({ children, tone = "purple", className = "" }) {
  const tones = {
    purple: "bg-violet-50 text-violet-700",
    green: "bg-emerald-50 text-emerald-600",
    outline: "bg-white text-gray-600 border border-gray-200",
  };
  return (
    <span
     className={`inline-flex items-center whitespace-nowrap rounded-md px-3 py-1 text-[12px] font-medium ${tones[tone]} ${className}`}
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
        <span className="text-sm text-gray-700">{label}</span>
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
        <span className="text-sm text-gray-700">{label}</span>
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
function ContactMethodRow({ icon, title, subtitle, badge, cta }) {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
          {icon}
        </span>
        <div>
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-400">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {badge && <Pill tone="green">{badge}</Pill>}
        <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
          {cta}
        </button>
      </div>
    </div>
  );
}

/** Numbered ranking row used for Best Partnership Categories. */
function RankRow({ rank, label, match }) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center gap-3">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
          {rank}
        </span>
        <span className="text-sm text-gray-800">{label}</span>
      </div>
      <span className="text-sm font-semibold text-violet-700">{match}</span>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * TOP NAV TABS
 * ---------------------------------------------------------------------- */
function TopTabs() {
  const tabs = [
    { label: "Statistics & Media", icon: <BarChart3 size={16} /> },
    { label: "Stories & Hashtags", icon: <Layers size={16} /> },
    { label: "Audience Insights", icon: <Users size={16} /> },
    { label: "Lookalike Creator", icon: <UserPlus size={16} /> },
    { label: "Contact Info", icon: <User size={16} />, active: true },
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

/* -------------------------------------------------------------------------
 * LEFT PROFILE SIDEBAR
 * ---------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------
 * RIGHT-SIDE PANEL SECTIONS
 * ---------------------------------------------------------------------- */

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
          <p className="mt-1 text-xs font-bold text-zinc-600">Tuesday – Thursday</p>
          <p className="text-xs text-zinc-600 font-bold">9:00 AM – 12:00 PM PST</p>
        </div>
      </div>
      <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
        <Sparkles size={14} className="mt-0.5 shrink-0 text-violet-500" />
        <p>
          <span className="font-semibold text-violet-600">Tip:</span >
          <span className="text-xs"> Send
          personalized pitches during mid-morning for best results.</span>
          
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
  <div className="grid grid-cols-3 gap-6">
    <div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
        Preferred Collaboration Types
      </p>
      {collabTypes.map((c) => (
        <StarRating
          key={c.label}
          label={c.label}
          value={c.value}
          icon={c.icon}
        />
      ))}
    </div>

    <div>
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
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
      <p className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
        Brand She Prefers
      </p>
      <div className="space-y-0.5">
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
      <div className="divide-y divide-gray-50">
        <ContactMethodRow
          icon={<Mail size={16} />}
          title="Email"
          subtitle="hello@isabellamartinez.com"
          badge="Available"
          cta="Copy"
        />
        <ContactMethodRow
          icon={<User size={16} />}
          title="Instagram DM"
          subtitle="@isabellamarts"
          badge="Available"
          cta="Open"
        />
        <ContactMethodRow
          icon={<User size={16} />}
          title="Management"
          subtitle="Sun & Co. Management · team@sunandco.com"
          cta="View"
        />
        <ContactMethodRow
          icon={<Globe size={16} />}
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
      icon={<Info size={14} className="text-gray-300" />}
    >
      <div className="divide-y divide-gray-50">
        {items.map((i) => (
          <CheckRow key={i.label} label={i.label} right={i.value} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="flex items-center gap-2 text-sm font-semibold text-gray-900">
          <Star size={15} className="fill-amber-400 text-amber-400" />
          Overall Campaign Fit
        </span>
        <span className="text-sm font-semibold text-violet-700">
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
      <div className="grid grid-cols-2 gap-8">
        <div>
          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-violet-700">
            <Sparkles size={14} /> Suggested Pitch Angle
          </p>
          <div className="rounded-xl bg-white p-4 text-sm leading-relaxed text-gray-600 shadow-sm">
            "Focus on a lifestyle storytelling approach that highlights
            authenticity, wellness, and everyday elegance. Emphasize shared
            values around quality, sustainability, and empowerment."
          </div>
          <Pill tone="purple" className="mt-3">
            Tone: Warm, Personal, Value-Aligned
          </Pill>
          <div className="mt-4 flex items-start justify-between gap-3 rounded-xl bg-white/60 p-3">
            <p className="flex items-start gap-2 text-xs text-gray-500">
              <Lightbulb
                size={14}
                className="mt-0.5 shrink-0 text-violet-500"
              />
              <span>
                <span className="font-semibold text-gray-700">AI Tip:</span>{" "}
                Reference her recent posts about self-care and travel for a more
                personalized approach.
              </span>
            </p>
            <Button
              variant="solid"
              icon={<Sparkles size={13} />}
              className="shrink-0 whitespace-nowrap !px-3 !py-2 text-xs"
            >
              Generate Pitch Ideas
            </Button>
          </div>
        </div>

        <div>
          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-violet-700">
            <Trophy size={14} /> Best Partnership Categories
          </p>
          <div className="rounded-xl bg-white p-4 shadow-sm">
            <RankRow rank={1} label="Fashion & Apparel" match="92% Match" />
            <RankRow rank={2} label="Beauty & Skincare" match="90% Match" />
            <RankRow rank={3} label="Wellness & Health" match="88% Match" />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-[#F8F9FC] p-0 font-sans"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="mx-auto flex max-w-[1580px] overflow-hidden rounded-none border border-gray-100 bg-white shadow-sm">
        <ProfileSidebar />

        <div className="flex-1">
          <TopTabs />

          <div className="space-y-4 p-3">
          
            <div className="grid grid-cols-13 gap-3">
              <div className="col-span-5">
                <ContactAvailabilityCard />
              </div>
              <div className="col-span-4">
                <OutreachReadinessCard />
              </div>
              <div className="col-span-4">
                <BestTimeCard />
              </div>
            </div>

            {/* Row 2 — collaboration preferences + contact methods */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8">
                <CollaborationPreferencesCard />
              </div>
              <div className="col-span-4">
                <ContactMethodsCard />
              </div>
            </div>

            {/* Row 3 — campaign fit checklist + AI outreach recommendation */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-4">
                <CampaignFitChecklistCard />
              </div>
              <div className="col-span-8">
                <AIOutreachRecommendationCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
