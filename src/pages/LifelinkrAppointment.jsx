import  { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  Globe,
  ChevronDown,
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  Pencil,
  LayoutDashboard,
  Users,
  ClipboardList,
  FlaskConical,
  Package,
  Archive,
  Receipt,
  Target,
  ListChecks,
  FileInput,
  HandCoins,
  MessagesSquare,
  Contact,
  UserCog,
  Landmark,
  BarChart3,
  ChevronLeft,
  MoreVertical,
  Filter,
  CheckSquare,
  Plus,
  CalendarPlus,
  CalendarDays,
  MapPin,
  User,
} from "lucide-react";
import Steps from "../components/steps";
const sidebarSections = [
  {
    items: [{ label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    items: [
      { label: "Clients", icon: Users },
      { label: "Patient Management", icon: ClipboardList },
      { label: "Embryology Lab", icon: FlaskConical },
      { label: "Inventory Master", icon: Package },
      { label: "Inventory", icon: Package },
      { label: "Cryo Storage", icon: Archive },
      { label: "Billing", icon: Receipt },
    ],
  },
  {
    heading: "Lead Management",
    items: [
      { label: "All Leads", icon: Target, sub: true, active: true },
      { label: "Registration Targets", icon: Target, sub: true },
      { label: "Task", icon: ListChecks, sub: true },
      { label: "Import / Export", icon: FileInput, sub: true },
    ],
  },
  {
    items: [
      { label: "Financial Counselling", icon: HandCoins },
      { label: "Communication", icon: MessagesSquare },
      { label: "CRM", icon: Contact },
      { label: "User Management", icon: UserCog },
      { label: "Ref Bank Management", icon: Landmark },
      { label: "Insights", icon: BarChart3 },
    ],
  },
];



const tabs = [
  "Overview",
  "Timeline",
  "Interactions",
  "Appointments",
  "Notes",
  "Documents",
  "Tasks",
  "History",
];

const statusStyles = {
  Completed: "bg-green-50 text-green-700 border-green-100",
  Scheduled: "bg-blue-50 text-blue-700 border-blue-100",
  Upcoming: "bg-purple-50 text-purple-700 border-purple-100",
};

const appointments = [
  {
    date: "30 Jul 2025",
    time: "10:30 AM",
    type: "Initial Consultation",
    typeSub: "First discussion and assessment",
    withName: "Dr. Mehta",
    withRole: "(Fertility Specialist)",
    withPerson: true,
    location: "Lifelinkr Clinic",
    locationSub: "Chandigarh",
    status: "Completed",
    reminder: "--",
  },
  {
    date: "02 Aug 2025",
    time: "11:00 AM",
    type: "Doctor Consultation",
    typeSub: "Treatment discussion",
    withName: "Dr. Mehta",
    withRole: "(Fertility Specialist)",
    withPerson: true,
    location: "Lifelinkr Clinic",
    locationSub: "Chandigarh",
    status: "Scheduled",
    reminder: "1 day before",
  },
  {
    date: "08 Aug 2025",
    time: "02:00 PM",
    type: "Lab Tests",
    typeSub: "Recommended tests",
    withName: "Lab Team",
    withRole: "",
    withPerson: false,
    location: "Lifelinkr Lab",
    locationSub: "Chandigarh",
    status: "Scheduled",
    reminder: "1 day before",
  },
  {
    date: "15 Aug 2025",
    time: "04:00 PM",
    type: "Treatment Plan Discussion",
    typeSub: "Review test results",
    withName: "Dr. Mehta",
    withRole: "(Fertility Specialist)",
    withPerson: true,
    location: "Lifelinkr Clinic",
    locationSub: "Chandigarh",
    status: "Upcoming",
    reminder: "2 days before",
  },
  {
    date: "20 Aug 2025",
    time: "10:00 AM",
    type: "Follow-up",
    typeSub: "Progress evaluation",
    withName: "Dr. Mehta",
    withRole: "(Fertility Specialist)",
    withPerson: true,
    location: "Lifelinkr Clinic",
    locationSub: "Chandigarh",
    status: "Upcoming",
    reminder: "2 days before",
  },
];



function SidebarItem({ item }) {
  const Icon = item.icon;
  return (
    <button
      className={[
        "w-full flex items-center gap-2.5 rounded-lg text-[13px] transition-colors",
        item.sub ? "pl-8 pr-2 py-1.5" : "px-2.5 py-1.5",
        item.active
          ? "bg-blue-50 text-blue-600 font-medium"
          : "text-gray-600 hover:bg-gray-50",
      ].join(" ")}
    >
      <Icon
        size={16}
        className={item.active ? "text-blue-600" : "text-gray-400"}
      />
      <span className="truncate">{item.label}</span>
    </button>
  );
}

function QuickActionButton({ icon: Icon, label, iconColor }) {
  return (
    <button className="w-full flex items-center justify-between border border-blue-100 bg-blue-50/60 hover:bg-blue-50 text-blue-600 text-[13px] font-medium rounded-lg px-3 py-2.5 transition-colors">
      <span>{label}</span>
      <Icon size={15} className={iconColor} />
    </button>
  );
}

function StatusBadge({ value }) {
  const cls = statusStyles[value] || "bg-gray-50 text-gray-600 border-gray-200";
  return (
    <span
      className={[
        "text-[11px] font-medium border rounded-full px-2.5 py-0.5 whitespace-nowrap",
        cls,
      ].join(" ")}
    >
      {value}
    </span>
  );
}

export default function LeadAppointmentsDashboard() {
  const [activeTab, setActiveTab] = useState("Appointments");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-gray-800 font-sans">
      {/* Top Navbar */}
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-5 sticky top-0 z-30">
        <div className="flex items-center gap-3 lg:gap-4 min-w-0">
          <button
            className="lg:hidden text-gray-500"
            onClick={() => setMobileNavOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={22} />
          </button>
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-white rounded-sm" />
            </div>
            <span className="font-semibold text-[15px] text-gray-900 hidden sm:inline">
              LIFELINKR
            </span>
          </div>
          <button className="hidden lg:flex text-gray-400">
            <Menu size={18} />
          </button>
          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-56 lg:w-72">
            <Search size={15} className="text-gray-400 shrink-0" />
            <span className="text-[13px] text-gray-400 ml-2 truncate">
              Search by name, phone, email, UHID...
            </span>
            <span className="ml-auto text-[11px] text-gray-400 border border-gray-300 rounded px-1.5 py-0.5 shrink-0">
              ⌘ K
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 lg:gap-4 shrink-0">
          <button className="relative text-gray-500 hidden sm:block">
            <Bell size={19} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center">
              9
            </span>
          </button>
          <button className="hidden sm:flex items-center gap-1 text-gray-500 text-[13px]">
            <Globe size={16} />
            <span>EN</span>
            <ChevronDown size={13} />
          </button>
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block leading-tight">
              <div className="text-[13px] font-medium text-gray-900">Vivek</div>
              <div className="text-[11px] text-gray-400">Connector</div>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-[12px] font-semibold">
              V
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={[
            "w-60 shrink-0 bg-white border-r border-gray-200 flex flex-col",
            "fixed lg:sticky top-16 left-0 h-[calc(100vh-64px)] z-20 transition-transform duration-200",
            mobileNavOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0",
          ].join(" ")}
        >
          <div className="p-3">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 mb-3">
              <Search size={14} className="text-gray-400" />
              <span className="text-[13px] text-gray-400 ml-2">Search</span>
              <span className="ml-auto text-[11px] text-gray-400">⌘ K</span>
            </div>
            <div className="flex border-b border-gray-100">
              <button className="flex items-center gap-1.5 px-1 pb-2 text-[12.5px] font-semibold text-blue-600 border-b-2 border-blue-600 -mb-px">
                <ListChecks size={13} />
                MENU
              </button>
              <button className="flex items-center gap-1.5 px-3 pb-2 text-[12.5px] font-medium text-gray-400">
                <Contact size={13} />
                ACCOUNT
              </button>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto px-3 space-y-4 pb-3 pt-1">
            {sidebarSections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <div className="px-2.5 py-1.5 mb-1 text-blue-600 font-semibold text-[13px]">
                    {section.heading}
                  </div>
                )}
                <div
                  className={[
                    "space-y-0.5",
                    section.heading ? "bg-blue-50/60 rounded-lg py-1" : "",
                  ].join(" ")}
                >
                  {section.items.map((item) => (
                    <SidebarItem key={item.label} item={item} />
                  ))}
                </div>
                {i < sidebarSections.length - 1 && (
                  <div className="h-px bg-gray-100 mt-3" />
                )}
              </div>
            ))}
          </nav>
          <div className="p-3 border-t border-gray-100">
            <button className="w-full flex items-center justify-center gap-2 text-[12.5px] text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-lg py-2">
              <ChevronLeft size={14} />
              Collapse
            </button>
          </div>
        </aside>

        {mobileNavOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-10 lg:hidden"
            onClick={() => setMobileNavOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 p-3 sm:p-4 lg:p-5">
          <button className="flex items-center gap-1.5 text-[13px] text-gray-500 mb-3">
            <ArrowLeft size={15} />
            Back to All Leads
          </button>

          {/* Lead header card */}
          <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 mb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-[15px] font-semibold shrink-0">
                  IS
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h1 className="text-[17px] font-semibold text-gray-900">
                      Inderjeet Singh
                    </h1>
                    <span className="text-[11px] font-medium text-orange-600 bg-orange-50 border border-orange-100 rounded-full px-2.5 py-0.5">
                      Contacted
                    </span>
                  </div>
                  <div className="text-[12.5px] text-gray-400 mt-0.5">
                    L-1012 &nbsp;·&nbsp; UHID: UH-25-000123 &nbsp;·&nbsp;
                    Source: Google Ads
                  </div>
                  <div className="flex items-center gap-4 mt-1.5 text-[12.5px] text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Phone size={13} className="text-gray-400" />
                      +91 98765 43210
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={13} className="text-green-500" />
                      WhatsApp
                    </span>
                    <span className="flex items-center gap-1.5 truncate">
                      <Mail size={13} className="text-gray-400" />
                      inderjeet.singh@example.com
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap shrink-0">
                <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50">
                  <Phone size={14} />
                  Call
                </button>
                <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50">
                  <MessageCircle size={14} className="text-green-500" />
                  WhatsApp
                </button>
                <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50">
                  <Mail size={14} />
                  Email
                </button>
                <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-2 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50">
                  <Pencil size={14} />
                  Edit
                </button>
                <button className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-3.5 py-2 text-[12.5px] font-medium">
                  More
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row gap-4">
            {/* Left / center column */}
            <div className="flex-1 min-w-0 space-y-4">
              {/* Lead journey */}
              <Steps />

              {/* Tabs + appointments table */}
              <div className="bg-white border border-gray-200 rounded-xl">
                <div className="flex items-center gap-1 px-3 sm:px-5 border-b border-gray-200 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={[
                        "px-2.5 sm:px-3 py-3 text-[13px] whitespace-nowrap border-b-2 -mb-px transition-colors",
                        activeTab === tab
                          ? "border-blue-600 text-blue-600 font-medium"
                          : "border-transparent text-gray-500 hover:text-gray-700",
                      ].join(" ")}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-1">
                    <div>
                      <div className="text-[14px] font-semibold text-gray-900">
                        Appointments
                      </div>
                      <div className="text-[12.5px] text-gray-400">
                        All scheduled appointments and visits for this lead.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="flex items-center gap-1.5 text-[12.5px] text-blue-600 border border-blue-200 rounded-lg px-2.5 py-1.5">
                        <Plus size={13} />
                        Schedule Appointment
                      </button>
                      <button className="flex items-center gap-1.5 text-[12.5px] text-gray-600 border border-gray-200 rounded-lg px-2.5 py-1.5">
                        <Filter size={13} />
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto mt-4 -mx-1">
                    <table className="w-full min-w-[760px] text-left border-collapse">
                      <thead>
                        <tr className="text-[11.5px] text-gray-400 uppercase tracking-wide">
                          <th className="font-medium px-1 pb-2.5">
                            Date & Time
                          </th>
                          <th className="font-medium px-1 pb-2.5">
                            Appointment Type
                          </th>
                          <th className="font-medium px-1 pb-2.5">With</th>
                          <th className="font-medium px-1 pb-2.5">Location</th>
                          <th className="font-medium px-1 pb-2.5">Status</th>
                          <th className="font-medium px-1 pb-2.5">Reminder</th>
                          <th className="font-medium px-1 pb-2.5">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((row, idx) => (
                          <tr
                            key={idx}
                            className="border-t border-gray-100 align-top text-[12.5px]"
                          >
                            <td className="px-1 py-3">
                              <div className="flex items-start gap-2">
                                <CalendarDays
                                  size={14}
                                  className="text-gray-400 mt-0.5 shrink-0"
                                />
                                <div className="leading-tight whitespace-nowrap">
                                  <div className="text-gray-800">
                                    {row.date}
                                  </div>
                                  <div className="text-gray-400 text-[12px]">
                                    {row.time}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-1 py-3 max-w-[200px]">
                              <div className="text-gray-800">{row.type}</div>
                              <div className="text-gray-400 text-[12px]">
                                {row.typeSub}
                              </div>
                            </td>
                            <td className="px-1 py-3 whitespace-nowrap">
                              <div className="flex items-center gap-1.5">
                                {row.withPerson ? (
                                  <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shrink-0">
                                    <User size={11} />
                                  </span>
                                ) : (
                                  <span className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0">
                                    <User size={11} />
                                  </span>
                                )}
                                <div className="leading-tight">
                                  <div className="text-gray-700">
                                    {row.withName}
                                  </div>
                                  {row.withRole && (
                                    <div className="text-gray-400 text-[11px]">
                                      {row.withRole}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </td>
                            <td className="px-1 py-3 whitespace-nowrap">
                              <div className="flex items-start gap-1.5">
                                <MapPin
                                  size={13}
                                  className="text-gray-400 mt-0.5 shrink-0"
                                />
                                <div className="leading-tight">
                                  <div className="text-gray-700">
                                    {row.location}
                                  </div>
                                  <div className="text-gray-400 text-[12px]">
                                    {row.locationSub}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-1 py-3">
                              <StatusBadge value={row.status} />
                            </td>
                            <td className="px-1 py-3 text-gray-500 whitespace-nowrap">
                              {row.reminder}
                            </td>
                            <td className="px-1 py-3 text-gray-400">
                              <button aria-label="More options">
                                <MoreVertical size={15} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex justify-center mt-6">
                    <button className="flex items-center gap-1 text-[12.5px] text-blue-600 border border-gray-200 rounded-lg px-4 py-2">
                      Load More
                      <ChevronDown size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="w-full xl:w-[300px] shrink-0 space-y-4">
              {/* Lead Summary */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5">
                <div className="text-[14px] font-semibold text-gray-900 mb-3.5">
                  Lead Summary
                </div>
                <dl className="space-y-3 text-[12.5px]">
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500">Current Stage</dt>
                    <dd className="text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-0.5 text-[11px] font-medium">
                      Appointment
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500">Assigned To</dt>
                    <dd className="flex items-center gap-1.5 text-gray-800 font-medium">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center">
                        V
                      </span>
                      Vivek
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500">Lead Score</dt>
                    <dd className="text-gray-400">--</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500">Lead Value</dt>
                    <dd className="text-green-700 bg-green-50 border border-green-100 rounded-full px-2.5 py-0.5 text-[11px] font-medium">
                      High
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500">First Enquiry</dt>
                    <dd className="text-gray-800 font-medium">30 Jul, 2025</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500">Last Contacted</dt>
                    <dd className="text-gray-800 font-medium">30 Jul, 2025</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-gray-500">Next Follow-up</dt>
                    <dd className="text-blue-600 font-medium">
                      Today, 04:00 PM
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Next Action */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5">
                <div className="text-[14px] font-semibold text-gray-900 mb-3">
                  Next Action
                </div>
                <div className="text-[13px] font-medium text-red-500 mb-3">
                  Call Today at 04:00 PM
                </div>
                <div className="space-y-2 text-[12.5px] mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Assigned To</span>
                    <span className="flex items-center gap-1.5 text-gray-800 font-medium">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center">
                        V
                      </span>
                      Vivek
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Reminder</span>
                    <span className="text-gray-800 font-medium">
                      in 15m before
                    </span>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-1.5 border border-gray-200 rounded-lg py-2 text-[12.5px] font-medium text-gray-700 hover:bg-gray-50">
                  <CheckSquare size={14} className="text-blue-600" />
                  Mark as Completed
                </button>
              </div>

              {/* Quick actions */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5">
                <div className="text-[14px] font-semibold text-gray-900 mb-3">
                  Quick Actions
                </div>
                <div className="space-y-2">
                  <QuickActionButton
                    icon={CalendarPlus}
                    label="Schedule Appointment"
                  />
                  <QuickActionButton icon={Plus} label="Add Note" />
                  <QuickActionButton icon={CheckSquare} label="Add Task" />
                  <QuickActionButton
                    icon={MessageCircle}
                    label="Send WhatsApp"
                    iconColor="text-green-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
