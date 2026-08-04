import { useState } from "react";
import Steps from "../components/Steps";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import {
  ChevronDown,
  PhoneCall,
  Send,
  Mail,
  StickyNote,
  MoreVertical,
  Filter,
  CheckSquare,
  Plus,
  CalendarPlus,
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

const outcomeStyles = {
  Positive: "bg-green-50 text-green-700 border-green-100",
  Delivered: "bg-green-50 text-green-700 border-green-100",
  Opened: "bg-green-50 text-green-700 border-green-100",
  Information: "bg-blue-50 text-blue-700 border-blue-100",
  Scheduled: "bg-purple-50 text-purple-700 border-purple-100",
};

const interactions = [
  {
    icon: PhoneCall,
    iconBg: "bg-blue-600",
    type: "Call",
    details: "Initial call made to the lead.",
    sub: "Discussed about IVF treatment and next steps.",
    by: "Vivek",
    bySub: "(Connector)",
    date: "30 Jul 2025",
    time: "10:30 AM",
    outcome: "Positive",
    next: "Send brochure",
  },
  {
    icon: Send,
    iconBg: "bg-green-500",
    type: "WhatsApp",
    details: "Brochure and price list sent.",
    sub: "Shared details of packages and success rate.",
    by: "Vivek",
    bySub: "(Connector)",
    date: "30 Jul 2025",
    time: "10:45 AM",
    outcome: "Delivered",
    next: "Follow up tomorrow",
  },
  {
    icon: Mail,
    iconBg: "bg-blue-600",
    type: "Email",
    details: "Detailed treatment plan and cost estimate emailed",
    sub: "as requested by the lead.",
    by: "Vivek",
    bySub: "(Connector)",
    date: "30 Jul 2025",
    time: "11:02 AM",
    outcome: "Opened",
    next: "Await response",
  },
  {
    icon: StickyNote,
    iconBg: "bg-amber-500",
    type: "Note",
    details: "Lead is interested in IVF with donor program.",
    sub: "Wants to discuss with spouse.",
    by: "Vivek",
    bySub: "(Connector)",
    date: "30 Jul 2025",
    time: "11:15 AM",
    outcome: "Information",
    next: "Call tomorrow",
  },
  {
    icon: PhoneCall,
    iconBg: "bg-blue-600",
    type: "Call",
    details: "Follow up call. Answered queries about success rate,",
    sub: "process and hospital visit.",
    by: "Vivek",
    bySub: "(Connector)",
    date: "30 Jul 2025",
    time: "04:00 PM",
    outcome: "Positive",
    next: "Schedule appointment",
  },
  {
    icon: CheckSquare,
    iconBg: "bg-green-500",
    type: "Task",
    details: "Appointment scheduled for clinic visit with Dr. Mehta",
    sub: "on 02 Aug 2025 at 11:00 AM.",
    by: "System",
    bySub: "",
    date: "30 Jul 2025",
    time: "04:05 PM",
    outcome: "Scheduled",
    next: "Reminder before visit",
  },
];

function QuickActionButton({ icon: Icon, label, iconColor }) {
  return (
    <button className="w-full flex items-center justify-between border border-blue-100 bg-blue-50/60 hover:bg-blue-50 text-blue-600 text-[13px] font-medium rounded-lg px-3 py-2.5 transition-colors">
      <span>{label}</span>
      <Icon size={15} className={iconColor} />
    </button>
  );
}

function OutcomeBadge({ value }) {
  const cls = outcomeStyles[value] || "bg-gray-50 text-gray-600 border-gray-200";
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

export default function LeadInteractionsDashboard() {
  const [activeTab, setActiveTab] = useState("Interactions");

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

              {/* Tabs + interactions table */}
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
                        Interactions
                      </div>
                      <div className="text-[12.5px] text-gray-400">
                        All communication and interactions with this lead.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="flex items-center gap-1 text-[12.5px] text-gray-600 border border-gray-200 rounded-lg px-2.5 py-1.5">
                        All Types
                        <ChevronDown size={13} />
                      </button>
                      <button className="flex items-center gap-1.5 text-[12.5px] text-gray-600 border border-gray-200 rounded-lg px-2.5 py-1.5">
                        <Filter size={13} />
                        Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto mt-4 -mx-1">
                    <table className="w-full min-w-[720px] text-left border-collapse">
                      <thead>
                        <tr className="text-[11.5px] text-gray-400 uppercase tracking-wide">
                          <th className="font-medium px-1 pb-2.5">Type</th>
                          <th className="font-medium px-1 pb-2.5">Interaction Details</th>
                          <th className="font-medium px-1 pb-2.5">By</th>
                          <th className="font-medium px-1 pb-2.5">Date &amp; Time</th>
                          <th className="font-medium px-1 pb-2.5">Outcome</th>
                          <th className="font-medium px-1 pb-2.5">Next Step</th>
                          <th className="font-medium px-1 pb-2.5 w-8"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {interactions.map((row, idx) => {
                          const Icon = row.icon;
                          return (
                            <tr
                              key={idx}
                              className="border-t border-gray-100 align-top text-[12.5px]"
                            >
                              <td className="px-1 py-3">
                                <div className="flex items-center gap-2">
                                  <span
                                    className={[
                                      "w-6 h-6 rounded-full flex items-center justify-center text-white shrink-0",
                                      row.iconBg,
                                    ].join(" ")}
                                  >
                                    <Icon size={12} />
                                  </span>
                                  <span className="text-gray-700 font-medium whitespace-nowrap">
                                    {row.type}
                                  </span>
                                </div>
                              </td>
                              <td className="px-1 py-3 max-w-[220px]">
                                <div className="text-gray-800">{row.details}</div>
                                <div className="text-gray-400 text-[12px]">{row.sub}</div>
                              </td>
                              <td className="px-1 py-3 whitespace-nowrap">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[8.5px] flex items-center justify-center shrink-0">
                                    V
                                  </span>
                                  <div className="leading-tight">
                                    <div className="text-gray-700">{row.by}</div>
                                    {row.bySub && (
                                      <div className="text-gray-400 text-[11px]">{row.bySub}</div>
                                    )}
                                  </div>
                                </div>
                              </td>
                              <td className="px-1 py-3 whitespace-nowrap text-gray-500">
                                <div>{row.date}</div>
                                <div className="text-gray-400 text-[12px]">{row.time}</div>
                              </td>
                              <td className="px-1 py-3">
                                <OutcomeBadge value={row.outcome} />
                              </td>
                              <td className="px-1 py-3 text-gray-500 whitespace-nowrap">
                                {row.next}
                              </td>
                              <td className="px-1 py-3 text-gray-400">
                                <button aria-label="More options">
                                  <MoreVertical size={15} />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
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
