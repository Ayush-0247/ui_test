
import img1 from "../assets/img1.png";
import {
  BadgeCheck,
  MapPin,
  Send,
  Download,
  Star,
  Users,
  TrendingUp,
  Heart,
  Info,
  X,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ShoppingBag,
  LayoutGrid,
  MessageSquareText,
  UserSquare2,
  Mail,
} from "lucide-react";

const Pill = ({ children, className = "" }) => (
  <span
    className={`px-3 py-1.5 rounded-full text-xs font-medium bg-[#F3F0FF] text-[#5B3DF5] ${className}`}
  >
    {children}
  </span>
);

const InfoLabel = ({ title }) => (
  <div className="flex items-center gap-1.5">
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <Info className="w-3.5 h-3.5 text-gray-300" />
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 ${className}`}
  >
    {children}
  </div>
);

// const SidebarButton = ({ icon: Icon, label, variant = "outline" }) => {
//   const base =
//     "w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors";
//   const variants = {
//     solid: "bg-[#5B3DF5] text-white hover:bg-[#4c30e0]",
//     outline: "bg-white text-gray-600 border border-[#E5E7EB] hover:bg-gray-50",
//   };
//   return (
//     <button className={`${base} ${variants[variant]}`}>
//       <Icon className="w-4 h-4" strokeWidth={2} />
//       {label}
//     </button>
//   );
// };

// const StatItem = ({ icon: Icon, value, label }) => (
//   <div className="flex flex-col items-center gap-1 flex-1">
//     <Icon className="w-4 h-4 text-gray-400 mb-0.5" strokeWidth={2} />
//     <span className="text-lg font-bold text-gray-900 leading-none">
//       {value}
//     </span>
//     <span className="text-xs text-gray-400">{label}</span>
//   </div>
// );

const NavItem = ({ icon: Icon, label, active }) => (
  <div
    className={`flex items-center gap-2 pb-4 pt-1 cursor-pointer border-b-2 ${
      active
        ? "border-[#5B3DF5] text-[#5B3DF5] font-semibold"
        : "border-transparent text-gray-500 font-medium hover:text-gray-700"
    }`}
  >
    <Icon className="w-4 h-4" strokeWidth={2} />
    <span className="text-sm">{label}</span>
  </div>
);

const MatchProgressBar = ({ label, value }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-700">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}%</span>
    </div>
    <div className="w-full h-2 rounded-full bg-[#F3F0FF] overflow-hidden">
      <div
        className="h-full rounded-full bg-[#5B3DF5]"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

const CreatorAvatar = ({ src, size = "w-16 h-16", rank }) => (
  <div className={`relative ${size} shrink-0`}>
    <img src={src} alt="" className="w-full h-full rounded-full object-cover" />
    {rank && (
      <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#5B3DF5] text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
        {rank}
      </span>
    )}
  </div>
);

const BestMatchStat = ({ icon: Icon, value, label }) => (
  <div className="flex items-center gap-1.5 text-sm text-gray-500">
    <Icon className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
    <span className="font-semibold text-gray-900">{value}</span>
    <span>{label}</span>
  </div>
);

const SimilarCreatorCard = ({
  rank,
  img,
  name,
  handle,
  match,
  followers,
  engagement,
}) => (
  <div className="flex-1 min-w-[220px] border border-[#E5E7EB] rounded-xl p-4">
    <div className="flex items-center gap-3 mb-3">
      <CreatorAvatar src={img} size="w-11 h-11" rank={rank} />
      <div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-900">{name}</span>
          <BadgeCheck
            className="w-3.5 h-3.5 text-[#5B3DF5] fill-[#5B3DF5]"
            stroke="white"
            strokeWidth={2}
          />
        </div>
        <span className="text-xs text-gray-400">@{handle}</span>
      </div>
    </div>
    <p className="text-sm font-semibold text-emerald-500 mb-1">
      {match}% Match
    </p>
    <p className="text-xs text-gray-500">{followers} Followers</p>
    <p className="text-xs text-gray-500">{engagement} Engagement</p>
  </div>
);

const ComparisonTableRow = ({
  rank,
  img,
  name,
  handle,
  match,
  followers,
  engagement,
  audienceFit,
  contentFit,
  brandFit,
  isFirst,
}) => (
  <tr className="border-t border-[#F1F2F6]">
    <td className="py-3 pr-4 text-sm text-gray-400">{rank}</td>
    <td className="py-3 pr-4">
      <div className="flex items-center gap-2.5">
        <img src={img} alt="" className="w-8 h-8 rounded-full object-cover" />
        <div>
          <p className="text-sm font-medium text-gray-900 leading-tight">
            {name}
          </p>
          <p className="text-xs text-gray-400 leading-tight">@{handle}</p>
        </div>
      </div>
    </td>
    <td
      className={`py-3 pr-4 text-sm font-semibold ${isFirst ? "text-emerald-500" : "text-emerald-500"}`}
    >
      {match}%
    </td>
    <td className="py-3 pr-4 text-sm text-gray-700">{followers}</td>
    <td className="py-3 pr-4 text-sm text-gray-700">{engagement}</td>
    <td className="py-3 pr-4 text-sm text-gray-700">{audienceFit}%</td>
    <td className="py-3 pr-4 text-sm text-gray-700">{contentFit}%</td>
    <td className="py-3 pr-4 text-sm text-gray-700">{brandFit}%</td>
  </tr>
);

const RecommendationItem = ({ icon: Icon, title, subtitle }) => (
  <div className="flex items-start gap-3">
    <div className="w-8 h-8 rounded-full bg-[#EDE9FE] flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-[#5B3DF5]" strokeWidth={2} />
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-900 leading-tight">
        {title}
      </p>
      <p className="text-xs text-gray-500 leading-tight mt-0.5">{subtitle}</p>
    </div>
  </div>
);

const navItems = [
  { icon: ShoppingBag, label: "Statistics & Media" },
  { icon: LayoutGrid, label: "Stories & Hashtags" },
  { icon: UserSquare2, label: "Audience Insights" },
  { icon: Users, label: "Lookalike Creator", active: true },
  { icon: MessageSquareText, label: "Contact Info" },
];

const similarCreators = [
  {
    rank: 2,
    img: img1,
    name: "Emma Chen",
    handle: "emmachen",
    match: 92,
    followers: "812K",
    engagement: "5.98%",
  },
  {
    rank: 3,
    img: img1,
    name: "Ava Thompson",
    handle: "avathompson",
    match: 91,
    followers: "745K",
    engagement: "6.21%",
  },
  {
    rank: 4,
    img: img1,
    name: "Mia Williams",
    handle: "miawilliams",
    match: 89,
    followers: "678K",
    engagement: "5.74%",
  },
  {
    rank: 5,
    img: img1,
    name: "Lily Patel",
    handle: "lilypatel",
    match: 88,
    followers: "634K",
    engagement: "5.66%",
  },
];

const comparisonRows = [
  {
    rank: 1,
    img: img1,
    name: "Sofia Rodriguez",
    handle: "sofiarodriguez",
    match: 94,
    followers: "892K",
    engagement: "6.12%",
    audienceFit: 96,
    contentFit: 92,
    brandFit: 94,
    isFirst: true,
  },
  {
    rank: 2,
    img: img1,
    name: "Emma Chen",
    handle: "emmachen",
    match: 92,
    followers: "812K",
    engagement: "5.98%",
    audienceFit: 93,
    contentFit: 90,
    brandFit: 92,
  },
  {
    rank: 3,
    img: img1,
    name: "Ava Thompson",
    handle: "avathompson",
    match: 91,
    followers: "745K",
    engagement: "6.21%",
    audienceFit: 92,
    contentFit: 89,
    brandFit: 91,
  },
  {
    rank: 4,
    img: img1,
    name: "Mia Williams",
    handle: "miawilliams",
    match: 89,
    followers: "678K",
    engagement: "5.74%",
    audienceFit: 90,
    contentFit: 87,
    brandFit: 89,
  },
  {
    rank: 5,
    img: img1,
    name: "Lily Patel",
    handle: "lilypatel",
    match: 88,
    followers: "634K",
    engagement: "5.66%",
    audienceFit: 89,
    contentFit: 86,
    brandFit: 88,
  },
];

const matchBreakdown = [
  { label: "Audience Fit", value: 96 },
  { label: "Content Similarity", value: 92 },
  { label: "Interest Alignment", value: 93 },
  { label: "Brand Affinity", value: 94 },
];

const keyRecommendations = [
  {
    icon: CheckCircle2,
    title: "High Audience Overlap",
    subtitle: "92% audience demographic similarity",
  },
  {
    icon: TrendingUp,
    title: "Content Alignment",
    subtitle: "Similar themes, style & engagement",
  },
  {
    icon: Star,
    title: "Proven Brand Partnerships",
    subtitle: "Worked with 23 similar brands",
  },
  {
    icon: Heart,
    title: "Engagement Quality",
    subtitle: "Authentic audience with high interactions",
  },
];

export default function LookalikeCreator() {
  return (
    <div className="min-h-screen bg-[#F8F9FC] p-6 font-[Inter]">
      <div className="flex gap-6 max-w-[1600px] mx-auto">
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

        <main className="flex-1 min-w-0">
          <div className="flex items-center justify-between border-b border-[#E5E7EB] bg-white rounded-t-2xl px-6 pt-2">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </div>
            <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mb-4 hover:bg-gray-200">
              <X className="w-4 h-4 text-gray-500" strokeWidth={2} />
            </button>
          </div>

          <div className="flex flex-col gap-6 mt-6">
            <Card className="bg-[#F6F4FF] border-[#EDE9FE] flex items-center justify-between gap-6">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-5 h-5 text-[#5B3DF5]" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-bold text-gray-900">
                    AI Matching Engine
                  </h3>
                  <Info className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-1 max-w-2xl">
                  Our AI analyzes audience demographics, content themes,
                  engagement patterns, and brand alignment to find your perfect
                  creator match.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="bg-white rounded-xl px-6 py-3 text-center border border-[#E5E7EB]">
                  <p className="text-base font-bold text-[#5B3DF5]">1.2M+</p>
                  <p className="text-xs text-gray-500">Creators Analyzed</p>
                </div>
                <div className="bg-white rounded-xl px-6 py-3 text-center border border-[#E5E7EB]">
                  <p className="text-base font-bold text-[#5B3DF5]">94%</p>
                  <p className="text-xs text-gray-500">Match Accuracy</p>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-3 gap-6">
              <Card className="col-span-2">
                <InfoLabel title="Best Match Creator" />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-4">
                    <CreatorAvatar src={img1} size="w-16 h-16" rank={1} />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-bold text-gray-900">
                          Sofia Rodriguez
                        </span>
                        <BadgeCheck
                          className="w-4 h-4 text-[#5B3DF5] fill-[#5B3DF5]"
                          stroke="white"
                          strokeWidth={2}
                        />
                      </div>
                      <p className="text-sm text-gray-400">@sofiarodriguez</p>
                      <div className="flex items-center gap-1 text-sm text-gray-400 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                        <span>Los Angeles, CA, USA</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <Pill>Fashion</Pill>
                        <Pill>Beauty</Pill>
                        <Pill>Lifestyle</Pill>
                        <Pill>Wellness</Pill>
                        <Pill>Travel</Pill>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <BestMatchStat icon={Users} value="892K" label="Followers" />
                  <BestMatchStat
                    icon={TrendingUp}
                    value="6.12%"
                    label="Engagement"
                  />
                  <BestMatchStat
                    icon={Heart}
                    value="58.7K"
                    label="Avg. Likes"
                  />
                </div>
              </Card>

              <Card className="flex flex-col items-center justify-center gap-3">
                <div className="relative w-28 h-28">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full -rotate-90"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="#F3F0FF"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="44"
                      fill="none"
                      stroke="#5B3DF5"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 44}`}
                      strokeDashoffset={`${2 * Math.PI * 44 * (1 - 0.94)}`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-bold text-[#5B3DF5]">
                      94%
                    </span>
                    <span className="text-[10px] text-gray-400">
                      Match Score
                    </span>
                  </div>
                </div>
                <span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full">
                  Excellent Match
                </span>
                <button className="w-full border border-[#E5E7EB] rounded-lg py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  View Profile
                </button>
              </Card>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <Card className="col-span-2">
                <div className="flex items-center justify-between">
                  <InfoLabel title="Similar Creators" />
                  <button className="text-sm font-medium text-[#5B3DF5] flex items-center gap-1">
                    View All Creators
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </button>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 hover:bg-gray-200">
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                  </button>
                  <div className="flex gap-4 overflow-hidden flex-1">
                    {similarCreators.map((c) => (
                      <SimilarCreatorCard key={c.handle} {...c} />
                    ))}
                  </div>
                  <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 hover:bg-gray-200">
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </Card>

              <Card>
                <InfoLabel title="Match Breakdown" />
                <div className="flex flex-col gap-4 mt-5">
                  {matchBreakdown.map((m) => (
                    <MatchProgressBar key={m.label} {...m} />
                  ))}
                </div>
              </Card>
            </div>

            <Card>
              <InfoLabel title="Creator Comparison Snapshot" />
              <div className="overflow-x-auto mt-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-400">
                      <th className="font-medium pb-2 pr-4"></th>
                      <th className="font-medium pb-2 pr-4">Creator</th>
                      <th className="font-medium pb-2 pr-4">Match Score</th>
                      <th className="font-medium pb-2 pr-4">Followers</th>
                      <th className="font-medium pb-2 pr-4">Engagement</th>
                      <th className="font-medium pb-2 pr-4">Audience Fit</th>
                      <th className="font-medium pb-2 pr-4">Content Fit</th>
                      <th className="font-medium pb-2 pr-4">Brand Fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <ComparisonTableRow key={row.handle} {...row} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center mt-5">
                <button className="border border-[#E5E7EB] rounded-lg px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View Full Comparison
                </button>
              </div>
            </Card>

            <Card className="bg-white">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#5B3DF5]" strokeWidth={2} />
                <h3 className="text-sm font-semibold text-gray-900">
                  AI Recommendation
                </h3>
                <Info className="w-3.5 h-3.5 text-gray-300" />
              </div>

              <div className="bg-[#F6F4FF] rounded-xl p-4 mt-4 flex items-start gap-3">
                <Sparkles
                  className="w-4 h-4 text-[#5B3DF5] mt-0.5 shrink-0"
                  strokeWidth={2}
                />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Sofia Rodriguez is your top match!
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">
                    She has a highly aligned audience, creates similar content,
                    and shows strong brand affinity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-5">
                {keyRecommendations.map((r) => (
                  <RecommendationItem key={r.title} {...r} />
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-[#5B3DF5] text-white rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#4c30e0]">
                  <Star className="w-4 h-4" strokeWidth={2} />
                  Add to Shortlist
                </button>
                <button className="flex-1 border border-[#E5E7EB] rounded-xl py-3 text-sm font-medium text-gray-600 flex items-center justify-center gap-2 hover:bg-gray-50">
                  <Mail className="w-4 h-4" strokeWidth={2} />
                  View Outreach Info
                </button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
