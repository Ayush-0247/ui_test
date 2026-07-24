import TopTabs from "../components/TopTabs";
import ProfileSidebar from "../components/ProfileSidebar";

import { Info, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import usa from "../assets/usa.png";
import uk from "../assets/uk.png";
import canada from "../assets/canada.png";
import aus from "../assets/aus.png";
import phili from "../assets/phili.png";
const DonutChart = ({
  percentage,
  size = 120,
  strokeWidth = 12,
  color = "#5B3DF5",
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#F3F0FF"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

const GenderDonut = ({ size = 130, strokeWidth = 14 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const femaleOffset = circumference - 0.85 * circumference;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#38BDF8"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#5B3DF5"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={femaleOffset}
        strokeLinecap="round"
      />
    </svg>
  );
};

const CardHeader = ({ title, icon }) => (
  <div className="flex items-center gap-2 mb-5">
    {icon}
    <h3 className="text-[15px] font-semibold text-[#5B3DF5]">{title}</h3>
    <Info className="w-3.5 h-3.5 text-gray-400" />
  </div>
);

const ProgressBar = ({ percent, max = 100 }) => (
  <div className="h-1.5 w-full rounded-full bg-[#EEEBFA] overflow-hidden">
    <div
      className="h-full rounded-full bg-[#5B3DF5]"
      style={{ width: `${(percent / max) * 100}%` }}
    />
  </div>
);

const ageData = [
  { range: "13-17", percent: 4 },
  { range: "18-24", percent: 28 },
  { range: "25-34", percent: 42 },
  { range: "35-44", percent: 18 },
  { range: "45-54", percent: 6 },
  { range: "55+", percent: 2 },
];

const countryData = [
  { name: "United States", percent: "34.7%", flag: usa },
  { name: "Canada", percent: "8.9%", flag: canada },
  { name: "United Kingdom", percent: "7.2%", flag: uk },
  { name: "Australia", percent: "5.8%", flag: aus },
  { name: "Philippines", percent: "4.3%", flag: phili },
];

const languageData = [
  { name: "English", percent: "72.1%" },
  { name: "Spanish", percent: "12.6%" },
  { name: "Portuguese", percent: "4.8%" },
  { name: "French", percent: "3.2%" },
  { name: "German", percent: "2.1%" },
];

const interestData = [
  { name: "Fashion", percent: 76 },
  { name: "Beauty", percent: 72 },
  { name: "Travel", percent: 62 },
  { name: "Wellness", percent: 58 },
  { name: "Lifestyle", percent: 55 },
  { name: "Health & Fitness", percent: 46 },
];

const recommendations = [
  {
    title: "Continue creating fashion and beauty content",
    subtitle: "Your audience shows strong preference and high engagement.",
  },
  {
    title: "Expand travel content and destination guides",
    subtitle: "Travel interest is high and growing within your audience.",
  },
  {
    title: "Leverage short-form video content",
    subtitle: "Reels and TikTok-style content perform best with this audience.",
  },
];

const strengths = [
  "Highly engaged audience with 6.38% engagement rate",
  "Strong audience loyalty and repeat interactions",
  "Large concentration of 18-34 age group",
  "Global reach with top markets in US, CA, UK, AU",
  "High authenticity with low fake follower percentage",
];

export default function AudienceInsights() {
  return (
    <div className="min-h-screen xl:h-screen bg-[#F8F9FC] overflow-x-hidden xl:overflow-hidden">
      <div className="flex flex-col xl:flex-row h-full  max-w-[1580px] mx-auto">
        <ProfileSidebar />

       <main className="flex-1 border-t xl:border-t-0 xl:border-l border-[#ECECEC] bg-white flex flex-col min-w-0">
     
           <div className="sticky top-0 z-30 bg-white border-b border-[#ECECEC] p-2">
         
        <TopTabs activeTab="/audience-insight" />
          
        </div>

          {/* Only this scrolls on desktop */}
          <div className="flex-1 p-3 sm:p-4 xl:p-5 space-y-4 xl:overflow-y-auto">
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-0 px-3 lg:px-0">
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-6">
                  <CardHeader title="Audience Quality Score" />
                  <div className="flex items-center gap-5 flex-wrap sm:flex-nowrap">
                    <div className="relative shrink-0">
                      <DonutChart percentage={92} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">
                          92
                        </span>
                        <span className="text-[11px] text-gray-400">/100</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-green-600 font-semibold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        Excellent
                      </div>
                      <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                        This audience is highly engaged, active, and shows
                        strong interest in relevant content.
                      </p>{" "}
                      <span className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-bold mt-4 leading-none text-[#5B3DF5]">
                        Top 8% of creators
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-6">
                  <CardHeader title="Audience Authenticity" />

                  <div className="flex items-center gap-5 flex-wrap sm:flex-nowrap">
                    <div className="relative shrink-0">
                      <DonutChart percentage={91} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">
                          91
                        </span>
                        <span className="text-[11px] text-gray-400">/100</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5 text-green-600 font-semibold text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        Highly Authentic
                      </div>

                      <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                        Low fake follower rate with genuine interactions and
                        real audience behavior.
                      </p>
                      <span className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-bold mt-4 leading-none text-[#5B3DF5]">
                        Estimated Fake Followers: 3.2%
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-6">
                  <CardHeader title="Gender Split" />

                  <div className="flex items-center justify-between gap-5">
                    <GenderDonut />

                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#5B3DF5]" />
                        <div>
                          <div className="text-base font-bold text-gray-900">
                            85%
                          </div>
                          <div className="text-xs text-gray-400">Female</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#38BDF8]" />
                        <div>
                          <div className="text-base font-bold text-gray-900">
                            15%
                          </div>
                          <div className="text-xs text-gray-400">Male</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-3 px-3 lg:px-0">
                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-6">
                  <CardHeader title="Age Distribution" />

                  <div className="flex flex-col gap-4">
                    {ageData.map((item) => (
                      <div key={item.range} className="flex items-center gap-3">
                        <span className="w-10 shrink-0 text-xs font-bold text-zinc-900">
                          {item.range}
                        </span>

                        <div className="flex-1">
                          <ProgressBar percent={item.percent} max={42} />
                        </div>

                        <span className="w-8 shrink-0 text-right text-xs font-bold text-zinc-900">
                          {item.percent}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-6">
                  <CardHeader title="Top Countries" />

                  <div className="flex flex-col gap-4">
                    {countryData.map((c) => (
                      <div
                        key={c.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2.5">
                          <img
                            src={c.flag}
                            alt={c.name}
                            className="h-5 w-5 rounded-sm object-cover"
                          />
                          <span className="text-sm font-bold text-zinc-900">
                            {c.name}
                          </span>
                        </div>

                        <span className="text-xs font-bold text-zinc-900">
                          {c.percent}
                        </span>
                      </div>
                    ))}
                  </div>

                  <span className="mt-4 inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-medium leading-none text-[#5B3DF5]">
                    View More
                  </span>
                </div>

                <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-6">
                  <CardHeader title="Audience Languages" />

                  <div className="flex flex-col gap-4">
                    {languageData.map((l) => (
                      <div
                        key={l.name}
                        className="flex items-center justify-between"
                      >
                        <span className="text-xs font-bold text-zinc-900">
                          {l.name}
                        </span>

                        <span className="text-xs font-bold text-zinc-900">
                          {l.percent}
                        </span>
                      </div>
                    ))}
                  </div>

                  <span className="mt-4 inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-medium leading-none text-[#5B3DF5]">
                    View More
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-3 mb-6 px-3 lg:px-0">
                <div className="lg:col-span-1 bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-6">
                  <CardHeader title="Audience Interests" />

                  <div className="flex flex-col gap-4">
                    {interestData.map((item) => (
                      <div key={item.name}>
                        <div className="mb-1.5 flex items-center justify-between">
                          <span className="text-sm font-bold text-zinc-900">
                            {item.name}
                          </span>

                          <span className="text-sm font-bold text-zinc-900">
                            {item.percent}%
                          </span>
                        </div>

                        <ProgressBar percent={item.percent} />
                      </div>
                    ))}
                  </div>

                  <span className="mt-4 inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F9F4FF] px-2.5 py-1 text-[11px] font-medium leading-none text-[#5B3DF5]">
                    View More
                  </span>
                </div>

                <div className="lg:col-span-2 bg-white rounded-3xl border border-[#E5E7EB] shadow-sm p-4 sm:p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-5">
                    <Sparkles className="w-4 h-4 text-[#5B3DF5]" />
                    <h3 className="text-[15px] font-bold text-[#462fba]">
                      AI Audience Intelligence
                    </h3>
                    <Info className="w-3.5 h-3.5 text-gray-400" />
                  </div>

                  <div className="bg-[#F3F0FF] rounded-2xl px-4 sm:px-6 py-4 text-center mb-6">
                    <p className="text-sm text-[#5B3DF5]  border-[#5B3DF5] font-extrabold">
                      Your audience is young, female-dominant, and highly
                      engaged in lifestyle, beauty, and travel content. They
                      value authenticity, inspiration, and practical
                      recommendations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 flex-1">
                    <div>
                      <h4 className="text-sm font-extrabold text-[#462fba] mb-4">
                        Key Recommendations
                      </h4>
                      <div className="flex flex-col gap-4">
                        {recommendations.map((r) => (
                          <div key={r.title} className="flex items-start gap-3">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#F3F0FF] flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#5B3DF5]" />
                            </span>
                            <div>
                              <p className="text-sm font-bold text-gray-900">
                                {r.title}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                {r.subtitle}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-extrabold text-[#462fba] mb-4">
                        Audience Strengths
                      </h4>
                      <div className="flex flex-col gap-3.5">
                        {strengths.map((s) => (
                          <div key={s} className="flex items-start gap-3">
                            <span className="mt-0.5 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                            </span>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              {s}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 self-start flex items-center gap-2 bg-[#5B3DF5] text-white text-sm font-semibold rounded-xl px-5 py-3">
                    <ChevronRight className="w-4 h-4" />
                    View Full Audience Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
