import {
  Layers,
  Search,
  Megaphone,
  ListChecks,
  Send,
  Users,
  CircleDollarSign,
  ShoppingBag,
  SlidersHorizontal,
  Settings,
  ChevronRight,
  ChevronsLeft,
  Bell,
  LifeBuoy,
  MessageSquare,
} from "lucide-react";

import userAvatar from "../assets/yoga.jpg";

function NavItem({ icon: Icon, label, hasChevron }) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-[13px] font-semibold text-[#C7C9D9] transition hover:bg-white/5 hover:text-white">
      <span className="flex items-center gap-3">
        <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
        {label}
      </span>
      {hasChevron && <ChevronRight className="h-4 w-4 text-[#7A7D91]" />}
    </button>
  );
}

export default function SidebarNav() {
  const mainNavItems = [
    { icon: Megaphone, label: "Campaigns" },
    { icon: ListChecks, label: "List & Collections" },
    { icon: Send, label: "Messages/Outreach", hasChevron: true },
    { icon: Users, label: "Team Members" },
    { icon: CircleDollarSign, label: "Subscriptions", hasChevron: true },
    { icon: ShoppingBag, label: "Shopify" },
    { icon: SlidersHorizontal, label: "Tools", hasChevron: true },
    { icon: Settings, label: "Brand Settings" },
  ];

  const quickAccessItems = [
    { icon: Bell, label: "Notifications" },
    { icon: LifeBuoy, label: "Support" },
    { icon: MessageSquare, label: "Feedback" },
  ];

  return (
    <aside className="relative flex h-screen w-[250px] shrink-0 flex-col bg-[#111827] px-3 py-5">
      <div className="flex flex-1 flex-col overflow-hidden">
        <div className="shrink-0 px-1">
          <div className="flex items-center gap-3">
            <Layers className="h-8 w-8 text-[#5B3DF5] drop-shadow-md" />
            <div>
              <p className="text-[18px] font-bold tracking-wide text-white">
                KALO IQ
              </p>
              <p className="text-[9px] font-semibold tracking-wider text-[#d946ef]">
                KPI Analytics & Layered Outreach
              </p>
            </div>
          </div>

          <button className="mt-6 flex w-full items-center justify-between rounded-lg border border-white/10 bg-[#1F2937] px-2.5 py-2">
            <span className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-[#aedcbf] text-xs font-bold text-[#111827]">
                A
              </span>
              <span className="text-[13px] font-semibold text-white">
                Ayush Raj's Brand
              </span>
            </span>
            <ChevronRight className="h-4 w-4 text-[#7A7D91]" />
          </button>

          <button className="mt-3 flex w-full items-center gap-2.5 rounded-lg bg-[#7C3AED] px-3 py-2.5 shadow-lg shadow-[#7C3AED]/20 transition-all hover:bg-[#6D28D9]">
            <Search className="h-[16px] w-[16px] text-white" />
            <span className="text-[13px] font-semibold text-white">
              Discover Influencers
            </span>
          </button>
        </div>

        <nav className="mt-4 flex-1 space-y-0.5 overflow-y-auto px-1 scrollbar-hide">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
          
          <div className="mt-5 pb-2">
            <p className="mb-2 px-2 text-[10px] font-bold tracking-wider text-[#6B6D80]">
              QUICK ACCESS
            </p>
            <div className="space-y-0.5">
              {quickAccessItems.map((item) => (
                <NavItem key={item.label} {...item} />
              ))}
            </div>
          </div>
        </nav>
      </div>

      <div className="mt-2 shrink-0 px-1">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#4C1D95] to-[#2E1065] p-3">
          <p className="text-[14px] font-bold text-white">Go Premium</p>
          <p className="mt-1 text-[11px] leading-relaxed text-white/80">
            More searches. Advanced Filters. More campaigns. Plus dedicated support when you need it.
          </p>
          <button className="mt-3 w-full rounded-lg bg-[#4C1D95] border border-[#7C3AED]/50 py-1.5 text-[12px] font-bold text-white transition hover:bg-[#5B21B6]">
            UPGRADE
          </button>
        </div>

        <button className="absolute right-[-14px] top-[85%] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#7C3AED] shadow-md border-2 border-[#111827]">
          <ChevronsLeft className="h-4 w-4 text-white" />
        </button>

        <button className="mt-3 flex w-full items-center justify-between rounded-lg bg-[#1F2937] px-2.5 py-2 hover:bg-[#374151] transition">
          <span className="flex items-center gap-2.5">
            <img
              src={userAvatar}
              alt="Ayush Raj"
              className="h-8 w-8 rounded-full bg-gray-500 object-cover"
            />
            <span className="text-left w-28">
              <span className="block text-[13px] font-bold text-white truncate">
                Ayush Raj
              </span>
              <span className="block truncate text-[11px] text-[#8C8EA0]">
                rishischnabel@gmail...
              </span>
            </span>
          </span>
          <ChevronRight className="h-4 w-4 shrink-0 text-[#7A7D91]" />
        </button>
      </div>
    </aside>
  );
}