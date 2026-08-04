import { useState } from "react";
import Steps from "../components/Steps";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import {
  ChevronDown,
  PhoneCall,
  Send,
  StickyNote,
  FileText,
  CheckCircle2,
  Plus,
  CalendarPlus,
  CheckSquare,
  MessageCircle,
} from "lucide-react";

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

const timelineEvents = [
  {
    icon: PhoneCall,
    iconBg: "bg-blue-600",
    title: "Call Made",
    desc: "Initial call made to the lead.",
    time: "30 Jul 2025, 10:30 AM",
    by: "by Vivek (Connector)",
  },
  {
    icon: Send,
    iconBg: "bg-green-500",
    title: "WhatsApp Message",
    desc: "Brochure and price list sent.",
    time: "30 Jul 2025, 10:45 AM",
    by: "by Vivek (Connector)",
  },
  {
    icon: StickyNote,
    iconBg: "bg-blue-600",
    title: "Note Added",
    desc: "Basic details collected. Interested in IVF.",
    time: "30 Jul 2025, 11:15 AM",
    by: "by Vivek (Connector)",
  },
  {
    icon: FileText,
    iconBg: "bg-indigo-500",
    title: "Task Created",
    desc: "Reminder to follow up after 2 days.",
    time: "30 Jul 2025, 11:20 AM",
    by: "by Vivek (Connector)",
  },
  {
    icon: CheckCircle2,
    iconBg: "bg-green-500",
    title: "Stage Changed",
    desc: "Lead moved from Query to Contacted.",
    time: "30 Jul 2025, 11:25 AM",
    by: "by System",
  },
];

function QuickActionButton({ icon: Icon, label }) {
  return (
    <button className="w-full flex items-center justify-between border border-blue-100 bg-blue-50/60 hover:bg-blue-50 text-blue-600 text-[13px] font-medium rounded-lg px-3 py-2.5 transition-colors">
      <span>{label}</span>
      <Icon size={15} />
    </button>
  );
}

export default function LeadDetailDashboard() {
  const [activeTab, setActiveTab] = useState("Timeline");

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-gray-800 font-sans">
      {/* Global Top Navbar */}
      <LifelinkrTopBar />

      <div className="flex">
        {/* Global Sidebar */}
        <LifelinkrAsidebar />

        {/* Main content */}
        <main className="flex-1 min-w-0 p-3 sm:p-4 lg:p-5">
          {/* Global Lead Header */}
          <LifelinkrLeadHeader />

          <div className="flex flex-col xl:flex-row gap-4 mt-4">
            {/* Left / center column */}
            <div className="flex-1 min-w-0 space-y-4">
              {/* Lead journey */}
              <Steps />

              {/* Tabs + timeline */}
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
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-[14px] font-semibold text-gray-900">
                      Lead Timeline
                    </div>
                    <button className="flex items-center gap-1 text-[12.5px] text-gray-500 border border-gray-200 rounded-lg px-2.5 py-1.5">
                      All Events
                      <ChevronDown size={13} />
                    </button>
                  </div>
                  <div className="text-[12.5px] text-gray-400 mb-5">
                    A chronological timeline of all activities and interactions.
                  </div>

                  <div className="relative">
                    <div className="absolute left-[15px] top-2 bottom-6 w-px bg-gray-100" />
                    <div className="space-y-6">
                      {timelineEvents.map((ev, idx) => {
                        const Icon = ev.icon;
                        return (
                          <div key={idx} className="flex gap-3 relative">
                            <div
                              className={[
                                "w-8 h-8 rounded-full flex items-center justify-center text-white shrink-0 z-10",
                                ev.iconBg,
                              ].join(" ")}
                            >
                              <Icon size={15} />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5">
                              <div className="min-w-0">
                                <div className="text-[13.5px] font-medium text-gray-900">
                                  {ev.title}
                                </div>
                                <div className="text-[12.5px] text-gray-500">{ev.desc}</div>
                              </div>
                              <div className="text-[11.5px] text-gray-400 sm:text-right shrink-0 whitespace-nowrap">
                                <div>{ev.time}</div>
                                <div>{ev.by}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
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
                    <dd className="text-orange-600 bg-orange-50 border border-orange-100 rounded-full px-2.5 py-0.5 text-[11px] font-medium">
                      Contacted
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
                    <dd className="text-blue-600 font-medium">Today, 04:00 PM</dd>
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
                    <span className="text-gray-800 font-medium">in 15m before</span>
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
                  <QuickActionButton icon={Plus} label="Add Note" />
                  <QuickActionButton icon={CalendarPlus} label="Schedule Appointment" />
                  <QuickActionButton icon={CheckSquare} label="Add Task" />
                  <QuickActionButton icon={MessageCircle} label="Send WhatsApp" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
