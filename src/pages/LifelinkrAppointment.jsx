import { useState } from "react";
import {
  ChevronDown,
  MoreVertical,
  Filter,
  CheckSquare,
  Plus,
  CalendarPlus,
  CalendarDays,
  MapPin,
  User,
  MessageCircle,
} from "lucide-react";
import Steps from "../components/Steps";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";

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

  return (
    <div className="min-h-screen bg-[#f4f5f7] text-gray-800 font-sans">
      <div className="flex flex-col">
        {/* Top Navbar */}
        <LifelinkrTopBar />

        <div className="flex">
          {/* Sidebar */}
          <LifelinkrAsidebar />

          {/* Main content */}
          <main className="flex-1 min-w-0 p-3 sm:p-4 lg:p-5">
            {/* Lead header */}
            <LifelinkrLeadHeader />

            <div className="flex flex-col xl:flex-row gap-4 mt-4">
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
                            <th className="font-medium px-1 pb-2.5">Date &amp; Time</th>
                            <th className="font-medium px-1 pb-2.5">Appointment Type</th>
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
                                    <div className="text-gray-800">{row.date}</div>
                                    <div className="text-gray-400 text-[12px]">{row.time}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="px-1 py-3 max-w-[200px]">
                                <div className="text-gray-800">{row.type}</div>
                                <div className="text-gray-400 text-[12px]">{row.typeSub}</div>
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
                                    <div className="text-gray-700">{row.withName}</div>
                                    {row.withRole && (
                                      <div className="text-gray-400 text-[11px]">{row.withRole}</div>
                                    )}
                                  </div>
                                </div>
                              </td>
                              <td className="px-1 py-3 whitespace-nowrap">
                                <div className="flex items-start gap-1.5">
                                  <MapPin size={13} className="text-gray-400 mt-0.5 shrink-0" />
                                  <div className="leading-tight">
                                    <div className="text-gray-700">{row.location}</div>
                                    <div className="text-gray-400 text-[12px]">{row.locationSub}</div>
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
                    <QuickActionButton icon={CalendarPlus} label="Schedule Appointment" />
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
    </div>
  );
}
