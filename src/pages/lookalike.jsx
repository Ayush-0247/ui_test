import img1 from "../assets/img1.png";
import ProfileSidebar from "../components/ProfileSidebar";
import TopTabs from "../components/TopTabs";
import {
  BadgeCheck,
  MapPin,
  Star,
  Users,
  TrendingUp,
  Heart,
  Info,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Mail,
} from "lucide-react";

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

const InfoLabel = ({ title }) => (
  <div className="flex items-center gap-1.5">
    <h3 className="text-lg font-bold text-violet-700">{title}</h3>
    <Info className="w-3.5 h-3.5 text-gray-300" />
  </div>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-4 sm:p-6 ${className}`}
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

// const NavItem = ({ icon: Icon, label, active }) => (
//   <div
//     className={`flex items-center gap-2 pb-4 pt-1 cursor-pointer border-b-2 ${
//       active
//         ? "border-[#5B3DF5] text-[#5B3DF5] font-semibold"
//         : "border-transparent text-gray-500 font-medium hover:text-gray-700"
//     }`}
//   >
//     <Icon className="w-4 h-4" strokeWidth={2} />
//     <span className="text-sm">{label}</span>
//   </div>
// );

const MatchProgressBar = ({ label, value }) => (
  <div>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-700">{label}</span>
      <span className="text-sm font-semibold text-gray-900">{value}%</span>
    </div>
    <div className="w-full h-2 rounded-full bg-[#F3F0FF] overflow-hidden">
      <div
        className="h-1.5 rounded-full bg-[#5B3DF5]"
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
    <Icon className="w-4 h-4 text-violet-700 " strokeWidth={2} />
    <span className="font-semibold text-gray-900">{value}</span>
    <span className="text-sm text-gray-500 whitespace-nowrap">
      {" "}
      {/* Add whitespace-nowrap here */}
      {label}
    </span>
  </div>
);
// Inside your BestMatchStat component definition

const SimilarCreatorCard = ({
  rank,
  img,
  name,
  handle,
  match,
  followers,
  engagement,
}) => {
  return (
    <div className="relative w-[260px] sm:w-[290px] h-[140px] shrink-0 rounded-2xl border border-[#E5E7EB] bg-white px-2 py-2">
      <div className="flex items-center h-full gap-2">
        {/* Avatar */}
        <div className="">
          <img
            src={img}
            alt={name}
            className="w-30 h-30 rounded-full object-cover"
          />

          {/* Rank */}
          <div className="absolute top-5 left-2 w-7 h-7 rounded-full bg-[#5B3DF5] border-[3px] border-white flex items-center justify-center text-white text-sm font-bold">
            {rank}
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1">
            <span className="text-[16px] leading-none font-semibold text-[#111827]">
              {name}
            </span>

            <BadgeCheck
              className="w-4 h-4 fill-[#1D9BF0] text-[#1D9BF0]"
              stroke="white"
              strokeWidth={2}
            />
          </div>

          <span className="mt-1 text-[15px] leading-none text-[#6B7280]">
            @{handle}
          </span>

          <span className="mt-3 text-[14px] font-semibold leading-none text-[#22C55E]">
            {match}% Match
          </span>

          <span className="mt-2 text-[14px] leading-none text-[#374151]">
            <span className="font-semibold">{followers}</span> Followers
          </span>

          <span className="mt-2 text-[14px] leading-none text-[#374151]">
            <span className="font-semibold">{engagement}</span> Engagement
          </span>
        </div>
      </div>
    </div>
  );
};

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
    <td className="py-1 pr-1 text-sm text-gray-700">{rank}</td>
    <td className="py-3 pr-4">
      <div className="flex items-center gap-2.5">
        <img src={img} alt="" className="w-14 h-10 rounded-full object-cover" />
        <div>
          <p className="text-sm font-bold text-gray-900 leading-tight">
            {name}
          </p>
          <p className="text-xs text-gray-400 leading-tight">@{handle}</p>
        </div>
      </div>
    </td>
    <td
      className={`py-3 pr-4 text-sm font-bold ${isFirst ? "text-emerald-500" : "text-emerald-500"}`}
    >
      {match}%
    </td>
    <td className="py-3 font-bold pr-4 text-sm text-gray-700">{followers}</td>
    <td className="py-3 font-bold pr-4 text-sm text-gray-700">{engagement}</td>
    <td className="py-3 font-bold pr-4 text-sm text-gray-700">
      {audienceFit}%
    </td>
    <td className="py-3 font-bold pr-4 text-sm text-gray-700">{contentFit}%</td>
    <td className="py-3 font-bold pr-4 text-sm text-gray-700">{brandFit}%</td>
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

// const NavItem = ({ label, icon, active }) => (
//   <div className="relative flex items-center gap-2 pb-4 pt-1 cursor-pointer">
//     <span className={active ? "text-[#5B3DF5]" : "text-gray-400"}>{icon}</span>
//     <span
//       className={
//         active
//           ? "text-[13px] font-semibold text-[#5B3DF5]"
//           : "text-[13px] font-medium text-gray-500"
//       }
//     >
//       {label}
//     </span>
//     {active && (
//       <span className="absolute left-0 right-0 -bottom-[1px] h-[2.5px] bg-[#5B3DF5] rounded-full" />
//     )}
//   </div>
// );

const similarCreators = [
  {
    rank: 1,
    img: img1,
    name: "Emma Chen",
    handle: "emmachen",
    match: 92,
    followers: "812K",
    engagement: "5.98%",
  },
  {
    rank: 2,
    img: img1,
    name: "Ava Thompson",
    handle: "avathompson",
    match: 91,
    followers: "745K",
    engagement: "6.21%",
  },
  {
    rank: 3,
    img: img1,
    name: "Mia Williams",
    handle: "miawilliams",
    match: 89,
    followers: "678K",
    engagement: "5.74%",
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
    <div className="min-h-screen bg-white text-[#1F2937] flex flex-col xl:flex-row overflow-x-hidden xl:h-screen xl:overflow-hidden">
      <ProfileSidebar />

      <main className="flex-1 border-t xl:border-t-0 xl:border-l border-[#ECECEC] bg-white flex flex-col min-w-0">

        <div className="sticky top-0 z-30 bg-white border-b border-[#ECECEC] p-2">
         
       <TopTabs activeTab="/lookalike" />
          
        </div>
          <div className="flex-1 xl:overflow-y-auto">
            <div className="p-4 sm:p-6 pt-4 space-y-3.5">
              <div className="flex flex-col gap-6 mt-2 px-2 sm:px-0">
                <Card className="!bg-[#F9F4FF] shadow-none border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Sparkles
                      className="w-5 h-5 text-[#5B3DF5]"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold text-violet-600">
                        AI Matching Engine
                      </h3>
                      <Info className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-500 mt-1 max-w-2xl">
                      Our AI analyzes audience demographics, content themes,
                      engagement patterns, and brand alignment to find your
                      perfect creator match.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                    <div className="bg-white rounded-xl px-6 py-3 text-center border border-[#E5E7EB] flex-1 sm:flex-none">
                      <p className="text-base font-bold text-[#5B3DF5]">
                        1.2M+
                      </p>
                      <p className="text-xs text-gray-500">Creators Analyzed</p>
                    </div>
                    <div className="bg-white rounded-xl px-6 py-3 text-center border border-[#E5E7EB] flex-1 sm:flex-none">
                      <p className="text-base font-bold text-[#5B3DF5]">94%</p>
                      <p className="text-xs text-gray-500">Match Accuracy</p>
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <Card className="lg:col-span-2 flex flex-col rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 shadow-sm">
                    <div className="flex sm:hidden flex-col w-full relative">
                      <InfoLabel title="Best Match Creator" />

                      <div className="flex flex-row items-center justify-between gap-2 w-full mt-4 mb-4">
                        <CreatorAvatar
                          src={img1}
                          size="w-32 h-28 shrink-0"
                          rank={1}
                        />

                        <div
                          className="flex flex-row items-center gap-2 overflow-x-auto shrink-0"
                          style={{ scrollbarWidth: "none" }}
                        >
                          <div className="flex items-center justify-center w-15 h-15 rounded-full border-[6px] border-[#5B3DF5] bg-white shrink-0">
                            <span className="text-[13px] font-bold text-[#5B3DF5]">
                              94%
                            </span>
                          </div>

                          <span className="shrink-0 rounded-md bg-emerald-50 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wide text-emerald-600">
                            Excellent
                          </span>

                          <button className="shrink-0 rounded-lg border border-[#E9D5FF] px-3 py-1.5 text-[10px] font-semibold text-[#5B3DF5] transition-colors hover:bg-purple-50">
                            View Profile
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <div className="flex items-center gap-1.5">
                          <span className="text-lg font-bold text-gray-900">
                            Sofia Rodriguez
                          </span>
                          <BadgeCheck
                            className="h-5 w-5 fill-[#5B3DF5] text-[#5B3DF5]"
                            stroke="white"
                            strokeWidth={2}
                          />
                        </div>
                        <p className="text-[13px] text-gray-500 mb-2">
                          @sofiarodriguez
                        </p>
                        <div className="flex items-center gap-1.5 text-[13px] text-gray-500 mb-3">
                          <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                          <span>Los Angeles, CA, USA</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-5">
                          <Pill>Fashion</Pill>
                          <Pill>Beauty</Pill>
                          <Pill>Lifestyle</Pill>
                          <Pill>Wellness</Pill>
                          <Pill>Travel</Pill>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 w-full pt-4 border-t border-gray-100">
                        <BestMatchStat
                          icon={Users}
                          value="892K"
                          label="Followers"
                        />
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
                    </div>

                    <div className="hidden sm:flex flex-row items-stretch gap-6 w-full">
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <InfoLabel title="Best Match Creator" />
                          <div className="mt-5 flex items-start gap-4">
                            <CreatorAvatar
                              src={img1}
                              size="w-28 h-28 sm:w-40 sm:h-40"
                              rank={1}
                            />
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xl font-bold text-gray-900">
                                  Sofia Rodriguez
                                </span>
                                <BadgeCheck
                                  className="h-5 w-5 fill-[#5B3DF5] text-[#5B3DF5]"
                                  stroke="white"
                                  strokeWidth={2}
                                />
                              </div>
                              <p className="text-[13px] text-gray-500">
                                @sofiarodriguez
                              </p>
                              <div className="mt-1.5 flex items-center gap-1.5 text-[13px] text-gray-500">
                                <MapPin
                                  className="h-3.5 w-3.5"
                                  strokeWidth={2}
                                />
                                <span>Los Angeles, CA, USA</span>
                              </div>
                              <div className="mt-3 flex flex-wrap gap-2">
                                <Pill>Fashion</Pill>
                                <Pill>Beauty</Pill>
                                <Pill>Lifestyle</Pill>
                                <Pill>Wellness</Pill>
                                <Pill>Travel</Pill>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 flex items-center gap-1 flex-wrap">
                          <BestMatchStat
                            icon={Users}
                            value="892K"
                            label="Followers"
                          />
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
                      </div>

                      <div className="flex shrink-0 flex-col items-center justify-between border-l border-transparent pl-2">
                        <div className="flex flex-col items-center">
                          <div className="relative h-28 w-28">
                            <svg
                              viewBox="0 0 100 100"
                              className="h-full w-full -rotate-90"
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
                            <div className="absolute inset-0 flex flex-col items-center justify-center pt-1">
                              <span className="text-2xl font-bold text-[#5B3DF5]">
                                94%
                              </span>
                              <span className="text-[10px] font-medium text-emerald-500">
                                Match Score
                              </span>
                            </div>
                          </div>
                          <span className="mt-3 rounded-md bg-emerald-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-emerald-600">
                            Excellent Match
                          </span>
                          <button className="mt-2 w-full rounded-lg border border-[#E9D5FF] px-4 py-2 text-sm font-semibold text-[#5B3DF5] transition-colors hover:bg-purple-50">
                            View Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="lg:col-span-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                    <InfoLabel title="Match Breakdown" />
                    <div className="flex flex-col gap-5 mt-6">
                      {matchBreakdown.map((m) => (
                        <MatchProgressBar key={m.label} {...m} />
                      ))}
                    </div>
                  </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                  <Card className="lg:col-span-3">
                    <div className="flex items-center justify-between">
                      <InfoLabel title="Similar Creators" />
                      <button className="text-sm font-medium text-[#5B3DF5] flex items-center gap-1 shrink-0">
                        <span className="hidden sm:inline">
                          View All Creators
                        </span>
                        <span className="sm:hidden">View All</span>
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 m-0 p-0 mt-1">
                      {/* <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 hover:bg-gray-200">
                    <ChevronLeft className="w-4 h-4 text-gray-500" />
                  </button> */}
                      <div className="flex gap-2 flex-1 overflow-x-auto no-scrollbar">
                        {similarCreators.map((c) => (
                          <SimilarCreatorCard key={c.handle} {...c} />
                        ))}
                      </div>
                      {/* <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 hover:bg-gray-200">
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </button> */}
                    </div>
                  </Card>
                </div>

                <Card>
                  <InfoLabel title="Creator Comparison Snapshot" />
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full min-w-[640px]">
                      <thead>
                        <tr className="text-left text-xs text-gray-600">
                          <th className="font-extrabold pb-2 pr-4"></th>
                          <th className="font-extrabold pb-2 pr-4">Creator</th>
                          <th className="font-extrabold pb-2 pr-4">
                            Match Score
                          </th>
                          <th className="font-extrabold pb-2 pr-4">
                            Followers
                          </th>
                          <th className="font-extrabold pb-2 pr-4">
                            Engagement
                          </th>
                          <th className="font-extrabold pb-2 pr-4">
                            Audience Fit
                          </th>
                          <th className="font-extrabold pb-2 pr-4">
                            Content Fit
                          </th>
                          <th className="font-extrabold pb-2 pr-4">
                            Brand Fit
                          </th>
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
                    <button className="border border-violet-700 rounded-lg px-12 py-2.5 text-sm font-bold text-violet-700 hover:bg-gray-50">
                      View Full Comparison
                    </button>
                  </div>
                </Card>

                <Card className="bg-white">
                  <div className="flex items-center gap-1.5">
                    <Sparkles
                      className="w-6 h-6 text-[#5B3DF5]"
                      strokeWidth={2}
                    />
                    <h3 className="text-lg font-bold text-violet-700">
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
                      <p className="text-md font-bold text-violet-700">
                        Sofia Rodriguez is your top match!
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5">
                        She has a highly aligned audience, creates similar
                        content, and shows strong brand affinity.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 mt-5">
                    {keyRecommendations.map((r) => (
                      <RecommendationItem key={r.title} {...r} />
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-6">
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
            </div>
          </div>
        </main>
      </div>
    
  );
}
