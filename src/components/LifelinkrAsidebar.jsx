import { useState } from "react";
import {
  Search,
  LayoutGrid,
  Building2,
  ShieldCheck,
  Atom,
  Archive,
  ClipboardCheck,
  Database,
  IndianRupee,
  ChartBarIncreasing,
  ChevronUp,
  ChevronDown,
  CornerDownRight,
  Trash,
  Repeat2,
  Coins,
  ChartNoAxesCombined,
  Briefcase,
  Users,
  Aperture,
  ChevronLeft,
  ChevronsRight,
  List,
  User,
  Menu as MenuIcon,
} from "lucide-react";

// import LifrLinkrLogo from "../assets/lifelinkr_logo.jpg";
import LifrLinkrLogo from "../assets/lifelinkr_logo2.png";
const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&display=swap');`;

const NAVY = "#1B2559"; // primary text/icon color
const BLUE = "#2E5AF0"; // accent / active color
const LAVENDER = "#EEF1FE"; // active-group background

const menuItems = [
  { label: "Dashboard", icon: LayoutGrid },
  { label: "Clinics", icon: Building2 },
  { label: "Patient Management", icon: ShieldCheck },
  { label: "Embryology Lab", icon: Atom },
  { label: "Inventory Master", icon: Archive },
  { label: "Inventory", icon: ClipboardCheck },
  { label: "Cryo Storage", icon: Database },
  { label: "Billing", icon: IndianRupee },
];

const leadSubItems = [
  { label: "All Leads", icon: CornerDownRight, active: true },
  { label: "Registration Targets", icon: CornerDownRight },
  { label: "Trash", icon: Trash },
  { label: "Import / Export", icon: Repeat2 },
];

const bottomItems = [
  { label: "Financial Counselling", icon: Coins },
  { label: "Communication", icon: ChartNoAxesCombined },
  { label: "CRM", icon: Briefcase },
  { label: "User Management", icon: Users },
  { label: "Art Bank Management", icon: Aperture },
  { label: "Insights", icon: ChartNoAxesCombined },
];

function SidebarContent({ collapsed, setCollapsed }) {
  const [activeTab, setActiveTab] = useState("menu");
  const [leadOpen, setLeadOpen] = useState(true);

  const itemBase =
    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13.5px] font-semibold transition-colors";

  return (
    <div
      className="flex h-full flex-col bg-white"
      style={{
        fontFamily: "'Baloo 2', ui-rounded, system-ui, sans-serif",
        color: NAVY,
      }}
    >
      <style>{FONT_IMPORT}</style>

      {/* Logo */}
      <div className="flex items-center gap-2 px-5 pt-1 pb-1 ">
        <img src={LifrLinkrLogo} className="w-40 " />
      </div>
      <div className="border-b border-slate-100" />

      {!collapsed && (
        <>
          {/* Search */}
          <div className="px-4 pt-4 pb-3">
            <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3.5 py-2.5">
              <Search
                className="h-4 w-4 shrink-0 text-slate-400"
                strokeWidth={2.5}
              />
              <span className="flex-1 text-[13.5px] font-medium text-slate-400">
                Search
              </span>
              <span className="text-[12px] font-semibold text-slate-400">
                ⌘ K
              </span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-slate-100 px-4">
            <button
              onClick={() => setActiveTab("menu")}
              className={`flex items-center gap-1.5 border-b-[3px] pb-2.5 text-[13px] font-bold tracking-wide transition-colors ${
                activeTab === "menu"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-400 hover:text-slate-500"
              }`}
              style={activeTab === "menu" ? { color: BLUE } : undefined}
            >
              <List className="h-4 w-4" strokeWidth={2.5} />
              MENU
            </button>
            <button
              onClick={() => setActiveTab("account")}
              className={`flex items-center gap-1.5 border-b-[3px] pb-2.5 text-[13px] font-bold tracking-wide transition-colors ${
                activeTab === "account"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-400 hover:text-slate-500"
              }`}
            >
              <User className="h-4 w-4" strokeWidth={2.5} />
              ACCOUNT
            </button>
          </div>
        </>
      )}

      {/* Scrollable nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-3">
        {activeTab === "menu" ? (
          <>
            <ul className="space-y-1">
              {menuItems.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <button
                    className={`${itemBase} hover:bg-slate-50 ${collapsed ? "justify-center px-0" : ""}`}
                    title={collapsed ? label : undefined}
                  >
                    <Icon
                      className="h-[18px] w-[18px] shrink-0"
                      style={{ color: NAVY }}
                      strokeWidth={2}
                    />
                    {!collapsed && <span className="truncate">{label}</span>}
                  </button>
                </li>
              ))}

              {/* Lead Management (expandable, active group) */}
              <li
                className="relative mt-1 overflow-hidden rounded-2xl"
                style={{ backgroundColor: LAVENDER }}
              >
                <span
                  className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
                  style={{ backgroundColor: BLUE }}
                />
                <button
                  onClick={() => setLeadOpen((o) => !o)}
                  className={`${itemBase} ${collapsed ? "justify-center px-0" : "pl-4"}`}
                  style={{ color: BLUE }}
                  title={collapsed ? "Lead Management" : undefined}
                >
                  <ChartBarIncreasing
                    className="h-[18px] w-[18px] shrink-0"
                    strokeWidth={2.2}
                  />
                  {!collapsed && (
                    <>
                      <span className="flex-1 truncate">Lead Management</span>
                      {leadOpen ? (
                        <ChevronUp
                          className="h-4 w-4 shrink-0"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <ChevronDown
                          className="h-4 w-4 shrink-0"
                          strokeWidth={2.5}
                        />
                      )}
                    </>
                  )}
                </button>

                {!collapsed && leadOpen && (
                  <ul className="space-y-0.5 px-1.5 pb-1.5">
                    {leadSubItems.map(({ label, icon: Icon, active }) => (
                      <li key={label}>
                        <button
                          className={`flex w-full items-center gap-2.5 rounded-xl py-2.5 pl-6 pr-3 text-left text-[13px] font-semibold ${
                            active ? "" : "hover:bg-white/60"
                          }`}
                          style={{
                            backgroundColor: active ? "#E1E7FE" : "transparent",
                            color: active ? BLUE : "#5B6785",
                          }}
                        >
                          <Icon
                            className="h-[15px] w-[15px] shrink-0"
                            strokeWidth={2.3}
                          />
                          <span className="truncate">{label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>

            <div className="my-3 border-t border-slate-100" />

            <ul className="space-y-1">
              {bottomItems.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <button
                    className={`${itemBase} hover:bg-slate-50 ${collapsed ? "justify-center px-0" : ""}`}
                    title={collapsed ? label : undefined}
                  >
                    <Icon
                      className="h-[18px] w-[18px] shrink-0"
                      style={{ color: NAVY }}
                      strokeWidth={2}
                    />
                    {!collapsed && <span className="truncate">{label}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          !collapsed && (
            <div className="px-2 py-6 text-center text-[13px] font-medium text-slate-400">
              Account settings go here
            </div>
          )
        )}
      </nav>

      {/* Collapse footer */}
      <div className="p-3">
        <button
          onClick={() => setCollapsed && setCollapsed((c) => !c)}
          className={`flex w-full items-center rounded-full px-4 py-2.5 text-[13.5px] font-semibold transition-colors ${
            collapsed ? "justify-center" : "justify-between"
          }`}
          style={{ backgroundColor: LAVENDER, color: NAVY }}
        >
          {!collapsed && (
            <span className="flex items-center gap-1.5">
              <ChevronLeft className="h-4 w-4" strokeWidth={2.5} />
              Collapse
            </span>
          )}
          <ChevronsRight className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

export default function LifelinkrSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <span
            className="text-[16px] font-extrabold tracking-tight"
            style={{
              fontFamily: "'Baloo 2', ui-rounded, system-ui, sans-serif",
            }}
          >
            <span style={{ color: NAVY }}>LIFE</span>
            <span style={{ color: BLUE }}>LINKR</span>
          </span>
        </div>
        <button
          onClick={() => setMobileOpen(true)}
          className="rounded-md border border-slate-200 p-2 text-slate-600"
          aria-label="Open menu"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full w-[280px] max-w-[85vw] border-r border-slate-200 bg-white shadow-xl">
            <SidebarContent
              collapsed={false}
              setCollapsed={() => {}}
              onCloseMobile={() => setMobileOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Desktop layout */}
      <div className="hidden md:flex">
        <aside
          className={`sticky top-0 h-screen shrink-0 border-r border-slate-200 transition-all duration-200 ${
            collapsed ? "w-[76px]" : "w-[264px]"
          }`}
        >
          <SidebarContent collapsed={collapsed} setCollapsed={setCollapsed} />
        </aside>
      </div>
    </div>
  );
}
