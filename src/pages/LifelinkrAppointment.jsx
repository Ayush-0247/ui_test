import { useState } from "react";
import {
  ChevronDown, Filter, MoreVertical, CalendarDays, MapPin, User, Plus,
} from "lucide-react";
import LifelinkrPageLayout from "../components/LifelinkrPageLayout";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import LifelinkrTabNav from "../components/LifelinkrTabNav";
import LifelinkrRightSidebar from "../components/LifelinkrRightSidebar";
import Steps from "../components/Steps";

/* ─── data ──────────────────────────────────────────────────── */

const statusStyles = {
  Completed: "bg-green-50 border border-green-100 text-green-700",
  Scheduled: "bg-blue-50 border border-blue-100 text-blue-700",
  Upcoming:  "bg-purple-50 border border-purple-100 text-purple-700",
};

const appointments = [
  { date: "30 Jul 2025", time: "10:30 AM", type: "Initial Consultation", typeSub: "First discussion and assessment", with: "Dr. Mehta", withRole: "(Fertility Specialist)", location: "Lifelinkr Clinic", locationSub: "Chandigarh", status: "Completed", reminder: "--" },
  { date: "02 Aug 2025", time: "11:00 AM", type: "Doctor Consultation", typeSub: "Treatment discussion", with: "Dr. Mehta", withRole: "(Fertility Specialist)", location: "Lifelinkr Clinic", locationSub: "Chandigarh", status: "Scheduled", reminder: "1 day before" },
  { date: "08 Aug 2025", time: "02:00 PM", type: "Lab Tests", typeSub: "Recommended tests", with: "Lab Team", withRole: "", location: "Lifelinkr Lab", locationSub: "Chandigarh", status: "Scheduled", reminder: "1 day before" },
  { date: "15 Aug 2025", time: "04:00 PM", type: "Treatment Plan Discussion", typeSub: "Review test results", with: "Dr. Mehta", withRole: "(Fertility Specialist)", location: "Lifelinkr Clinic", locationSub: "Chandigarh", status: "Upcoming", reminder: "2 days before" },
  { date: "20 Aug 2025", time: "10:00 AM", type: "Follow-up", typeSub: "Progress evaluation", with: "Dr. Mehta", withRole: "(Fertility Specialist)", location: "Lifelinkr Clinic", locationSub: "Chandigarh", status: "Upcoming", reminder: "2 days before" },
];

function StatusBadge({ value }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold whitespace-nowrap ${statusStyles[value] ?? "bg-gray-50 text-gray-600 border border-gray-200"}`}>
      {value}
    </span>
  );
}

/* ─── component ─────────────────────────────────────────────── */

export default function LifelinkrAppointment() {
  const [activeTab, setActiveTab] = useState("Appointments");

  return (
    <LifelinkrPageLayout>
      <LifelinkrTopBar />
      <div className="flex">
        <LifelinkrAsidebar />
        <main className="flex-1 min-w-0">
          <LifelinkrLeadHeader />
          <div className="p-4 sm:p-5 lg:p-6">
            <div className="flex flex-col xl:flex-row gap-5">
              {/* ── left column ── */}
              <div className="flex-1 min-w-0 space-y-5">
                <Steps />
                <LifelinkrTabNav activeTab={activeTab} onTabChange={setActiveTab} />

                {/* Appointments content */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h2 className="text-[15px] font-semibold text-gray-900">Appointments</h2>
                      <p className="text-[13px] text-gray-500 mt-0.5">
                        All scheduled appointments and visits for this lead.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2 text-[13px] font-semibold text-blue-600 hover:bg-blue-100 transition-colors">
                        <Plus size={13} /> Schedule Appointment
                      </button>
                      <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                        <Filter size={13} /> Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="pb-3 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide pr-4">Date &amp; Time</th>
                          <th className="pb-3 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide pr-4">Appointment Type</th>
                          <th className="pb-3 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide pr-4">With</th>
                          <th className="pb-3 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide pr-4">Location</th>
                          <th className="pb-3 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide pr-4">Status</th>
                          <th className="pb-3 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide pr-4">Reminder</th>
                          <th className="pb-3 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide w-8"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointments.map((row, i) => (
                          <tr key={i} className="border-t border-gray-100 align-top">
                            <td className="py-3 pr-4">
                              <div className="flex items-start gap-2">
                                <CalendarDays size={14} className="text-gray-400 mt-0.5 shrink-0" />
                                <div>
                                  <div className="text-[13px] font-medium text-gray-800 whitespace-nowrap">{row.date}</div>
                                  <div className="text-[12px] text-gray-400">{row.time}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 pr-4">
                              <div className="text-[13px] font-medium text-gray-800">{row.type}</div>
                              <div className="text-[12px] text-gray-400">{row.typeSub}</div>
                            </td>
                            <td className="py-3 pr-4 whitespace-nowrap">
                              <div className="flex items-center gap-1.5">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-gray-400 shrink-0">
                                  <User size={11} />
                                </span>
                                <div>
                                  <div className="text-[13px] font-medium text-gray-800">{row.with}</div>
                                  {row.withRole && <div className="text-[12px] text-gray-400">{row.withRole}</div>}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 pr-4 whitespace-nowrap">
                              <div className="flex items-start gap-1.5">
                                <MapPin size={13} className="text-gray-400 mt-0.5 shrink-0" />
                                <div>
                                  <div className="text-[13px] font-medium text-gray-800">{row.location}</div>
                                  <div className="text-[12px] text-gray-400">{row.locationSub}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 pr-4"><StatusBadge value={row.status} /></td>
                            <td className="py-3 pr-4 text-[13px] text-gray-500 whitespace-nowrap">{row.reminder}</td>
                            <td className="py-3 text-gray-400">
                              <MoreVertical size={15} />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5 flex justify-center">
                    <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      Load More <ChevronDown size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* ── right sidebar ── */}
              <LifelinkrRightSidebar />
            </div>
          </div>
        </main>
      </div>
    </LifelinkrPageLayout>
  );
}
