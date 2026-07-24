import {
  Send,
  Download,
  MapPin,
  Star,
  TrendingUp,
  Heart,
  Users,
} from "lucide-react";

import img2 from "../assets/img2.png";

function ProfileSidebar() {
  return (
    <aside className="w-full xl:w-[260px] shrink-0 bg-white rounded-md border border-[#ECECEC] p-5 flex flex-col shadow-sm xl:self-stretch">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={img2}
            alt="Isabella Martinez"
            className="w-[140px] h-[140px] rounded-full object-cover"
          />
          <div className="absolute bottom-1 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-[#0095F6] text-white ring-2 ring-white shadow-sm">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
        </div>

        <h2 className="text-base font-bold text-[#1F2937] mt-3">
          Isabella Martinez
        </h2>
        <p className="text-xs text-[#6B7280] mt-0.5">@isabellamarts</p>

        <div className="flex items-center gap-1 text-[#6B7280] text-xs mt-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#6B7280]" />
          <span>Los Angeles, CA, USA</span>
        </div>

        <div className="flex flex-wrap justify-center gap-1.5 mt-3">
          {["Lifestyle", "Fashion", "Travel"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F5F3FF] px-2.5 py-0.5 text-[10px] font-bold text-[#6348e6]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-1.5 mt-1.5">
          {["Wellness", "Beauty"].map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md border border-[#E5E7EB] bg-[#F5F3FF] px-2.5 py-0.5 text-[10px] font-bold text-[#6348e6]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="w-full flex flex-col sm:flex-row xl:flex-col gap-2 mt-5">
          <button className="w-full flex items-center justify-center gap-2 bg-[#5B3DF5] text-white text-xs font-semibold rounded-xl py-2.5 shadow-sm transition hover:opacity-95 cursor-pointer">
            <Send className="w-3.5 h-3.5" />
            Create Campaign
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] text-[#1F2937] text-xs font-bold rounded-xl py-2.5 transition hover:bg-[#FAFAFC] cursor-pointer">
            <Download className="w-4 h-4 text-[#6B7280]" />
            Download Media Kit
          </button>
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-[#E5E7EB] text-[#1F2937] text-xs font-bold rounded-xl py-2.5 transition hover:bg-[#FAFAFC] cursor-pointer">
            <Star className="w-4 h-4 text-[#6B7280]" />
            Add to Favorites
          </button>
        </div>
      </div>
      <div className="w-full xl:mt-auto mt-6 pt-4 ">
        <div className="flex items-center justify-between">
          <div className="w-full flex items-center justify-between mt-5 pt-4 border-t border-[#E5E7EB]">
            <div className="flex flex-col items-center gap-0.5">
              <Users className="w-5 h-5 text-[#5B3DF5]" />
              <span className="text-sm font-bold text-[#1F2937]">892K</span>
              <span className="text-[10px] text-[#6B7280]">Followers</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <TrendingUp className="w-5 h-5 text-[#5B3DF5]" />
              <span className="text-sm font-bold text-[#1F2937]">6.38%</span>
              <span className="text-[10px] text-[#6B7280]">Engagement</span>
            </div>
            <div className="flex flex-col items-center gap-0.5">
              <Heart className="w-5 h-5 text-[#5B3DF5]" />
              <span className="text-sm font-bold text-[#1F2937]">57.2K</span>
              <span className="text-[10px] text-[#6B7280]">Avg. Likes</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ProfileSidebar;
