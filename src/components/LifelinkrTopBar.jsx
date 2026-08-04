import { Search, Bell, Globe, ChevronDown, List } from "lucide-react";

const NAVY = "#1B2559";
const BLUE = "#2E5AF0";


export default function LifelinkrTopBar() {
  return (
    <header className="flex flex-wrap items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:gap-4 sm:px-6 sticky top-0 z-30">
      {/* Sidebar toggle */}
      <button
        className="shrink-0 text-slate-500 hover:text-slate-700"
        aria-label="Toggle sidebar"
      >
        <List className="h-5 w-5" />
      </button>

      {/* Search */}
      <div className="order-3 w-full flex-1 sm:order-none sm:w-auto">
        <div className="flex w-full items-center gap-2 rounded-lg bg-slate-100 px-3.5 py-2.5 sm:max-w-md">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            placeholder="Search by name, phone, email, UHID..."
            className="w-full bg-transparent text-[13.5px] text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <span className="hidden shrink-0 text-[12px] font-medium text-slate-400 sm:block">
            ⌘ K
          </span>
        </div>
      </div>

      {/* Right actions */}
      <div className="ml-auto flex items-center gap-4 sm:gap-5">
        {/* Notifications */}
        <button
          className="relative text-slate-500 hover:text-slate-700"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span
            className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
            style={{ backgroundColor: BLUE }}
          >
            2
          </span>
        </button>

        {/* Language */}
        <button className="hidden items-center gap-1 text-[13px] font-medium text-slate-500 hover:text-slate-700 sm:flex">
          <Globe className="h-[18px] w-[18px]" />
          EN
          <ChevronDown className="h-3.5 w-3.5" />
        </button>

        {/* User */}
        <div className="flex items-center gap-2">
          <div className="hidden text-right leading-tight sm:block">
            <div
              className="text-[13.5px] font-semibold"
              style={{ color: NAVY }}
            >
              Vivek
            </div>
            <div className="text-[11px] text-slate-400">Connector</div>
          </div>
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
            style={{ backgroundColor: BLUE }}
          >
            V
          </div>
        </div>
      </div>
    </header>
  );
}
