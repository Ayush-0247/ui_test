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
  Bell,
  LifeBuoy,
  MessageSquare,
  ChevronsRight,
} from "lucide-react";

import userAvatar from "../assets/yoga.jpg";

export default function SidebarNav() {
  const mainNavItems = [
    { icon: Megaphone, label: "Campaigns" },
    { icon: ListChecks, label: "List & Collections" },
    { icon: Send, label: "Messages/Outreach" },
    { icon: Users, label: "Team Members" },
    { icon: CircleDollarSign, label: "Subscriptions" },
    { icon: ShoppingBag, label: "Shopify" },
    { icon: SlidersHorizontal, label: "Tools" },
    { icon: Settings, label: "Brand Settings" },
  ];

  return (
    <aside className="sticky left-0 top-0 z-40 flex h-screen w-[72px] shrink-0 flex-col items-center bg-[#111827] py-5">
      <div className="flex w-full flex-1 flex-col items-center overflow-hidden">
        <div className="flex w-full shrink-0 flex-col items-center">
          <Layers className="h-7 w-7 text-[#5B3DF5] drop-shadow-md" />

          <button className="mt-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#7C3AED] shadow-lg shadow-[#7C3AED]/20 transition-all hover:bg-[#6D28D9]">
            <Search className="h-[18px] w-[18px] text-white" />
          </button>
        </div>

        <nav className="mt-8 flex w-full flex-1 flex-col items-center overflow-y-auto scrollbar-hide">
          <div className="flex w-full flex-col items-center space-y-6">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="flex items-center justify-center text-[#C7C9D9] transition hover:text-white"
                  title={item.label}
                >
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex w-full flex-col items-center space-y-6 pb-4">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#C7C9D9] transition hover:text-white"
              title="Notifications"
            >
              <Bell className="h-[16px] w-[16px]" strokeWidth={2} />
            </button>
            <button
              className="flex items-center justify-center text-[#C7C9D9] transition hover:text-white"
              title="Support"
            >
              <LifeBuoy className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>
            <button
              className="flex items-center justify-center text-[#C7C9D9] transition hover:text-white"
              title="Feedback"
            >
              <MessageSquare className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>
          </div>
        </nav>
      </div>

      <div className="mt-2 flex w-full shrink-0 flex-col items-center">
        <button className="absolute right-[-14px] top-[85%] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#111827] bg-[#7C3AED] shadow-md transition-colors hover:bg-[#6D28D9]">
          <ChevronsRight className="h-4 w-4 text-white" />
        </button>

        <button className="mt-3 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full transition hover:opacity-80">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="h-full w-full bg-gray-500 object-cover"
          />
        </button>
      </div>
    </aside>
  );
}
