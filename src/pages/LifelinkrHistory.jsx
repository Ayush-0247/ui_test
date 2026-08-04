import { useState } from "react";
import {
  ChevronDown, Filter, MoreVertical,
  Calendar, Phone, MessageCircle, StickyNote, FileText, CheckCircle2, Pencil,
} from "lucide-react";
import LifelinkrPageLayout from "../components/LifelinkrPageLayout";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import LifelinkrTabNav from "../components/LifelinkrTabNav";
import LifelinkrRightSidebar from "../components/LifelinkrRightSidebar";
import Steps from "../components/Steps";

/* ─── data ──────────────────────────────────────────────────── */

const tagStyles = {
  System:      "bg-gray-100 text-gray-600",
  Call:        "bg-emerald-50 text-emerald-700",
  WhatsApp:    "bg-emerald-50 text-emerald-700",
  Manual:      "bg-purple-50 text-purple-700",
  Appointment: "bg-amber-50 text-amber-700",
  Upload:      "bg-gray-100 text-gray-600",
  Task:        "bg-gray-100 text-gray-600",
};

const historyRows = [
  { date: "30 Jul 2025", time: "10:30 AM", activity: "Stage Changed",           icon: Calendar,        details: 'Lead stage changed from "Query" to "Contacted"',                          by: "Vivek", byRole: "(Connector)",               tag: "System",      avatarBg: "bg-blue-600" },
  { date: "30 Jul 2025", time: "10:30 AM", activity: "Call Logged",              icon: Phone,           details: "Initial call made to the lead. Discussed IVF treatment and next steps.",  by: "Vivek", byRole: "(Connector)",               tag: "Call",        avatarBg: "bg-blue-600" },
  { date: "30 Jul 2025", time: "10:45 AM", activity: "WhatsApp Message",         icon: MessageCircle,   details: "Brochure and price list shared with lead.",                               by: "Vivek", byRole: "(Connector)",               tag: "WhatsApp",    avatarBg: "bg-blue-600" },
  { date: "30 Jul 2025", time: "11:02 AM", activity: "Note Added",               icon: StickyNote,      details: "Lead is interested in IVF. Prefers evening appointments.",                by: "Vivek", byRole: "(Connector)",               tag: "Manual",      avatarBg: "bg-blue-600" },
  { date: "30 Jul 2025", time: "04:00 PM", activity: "Next Follow-up Set",       icon: Calendar,        details: "Follow-up call scheduled for 02 Aug 2025 at 11:00 AM",                   by: "Vivek", byRole: "(Connector)",               tag: "Manual",      avatarBg: "bg-blue-600" },
  { date: "02 Aug 2025", time: "10:15 AM", activity: "Lead Information Updated", icon: Pencil,          details: 'Updated lead value to "High"',                                           by: "Dr. Mehta", byRole: "(Fertility Specialist)", tag: "Manual",      avatarBg: "bg-purple-500" },
  { date: "02 Aug 2025", time: "11:00 AM", activity: "Appointment Scheduled",    icon: Calendar,        details: "Appointment scheduled for 08 Aug 2025 at 02:00 PM with Dr. Mehta",        by: "Dr. Mehta", byRole: "(Fertility Specialist)", tag: "Appointment", avatarBg: "bg-purple-500" },
  { date: "02 Aug 2025", time: "11:05 AM", activity: "Document Uploaded",        icon: FileText,        details: "Lab test report uploaded by lead.",                                       by: "Vivek", byRole: "(Connector)",               tag: "Upload",      avatarBg: "bg-blue-600" },
  { date: "02 Aug 2025", time: "02:00 PM", activity: "Task Created",             icon: CheckCircle2,    details: 'Task "Prepare treatment plan" created and assigned to Dr. Mehta.',        by: "Dr. Mehta", byRole: "(Fertility Specialist)", tag: "Task",        avatarBg: "bg-purple-500" },
];

function TagBadge({ tag }) {
  return (
    <span className={`inline-block rounded px-2 py-0.5 text-[11px] font-semibold ${tagStyles[tag] ?? "bg-gray-100 text-gray-600"}`}>
      {tag}
    </span>
  );
}

/* ─── component ─────────────────────────────────────────────── */

export default function LifelinkrHistory() {
  const [activeTab, setActiveTab] = useState("History");

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

                {/* History content */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h2 className="text-[15px] font-semibold text-gray-900">History</h2>
                      <p className="text-[13px] text-gray-500 mt-0.5">
                        Complete activity history and changes for this lead.
                      </p>
                    </div>
                    <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                      <Filter size={13} /> Filter
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-100">
                          {["Date & Time", "Activity", "Details", "By", "Source / Type", ""].map((h, i) => (
                            <th key={i} className="pb-3 pr-4 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {historyRows.map((row, i) => {
                          const Icon = row.icon;
                          return (
                            <tr key={i} className="border-t border-gray-100 align-top">
                              <td className="py-3 pr-4 text-[12px] text-gray-500 whitespace-nowrap">
                                <div>{row.date}</div>
                                <div className="text-gray-400">{row.time}</div>
                              </td>
                              <td className="py-3 pr-4">
                                <span className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-900 whitespace-nowrap">
                                  <Icon size={13} className="text-blue-500 shrink-0" />
                                  {row.activity}
                                </span>
                              </td>
                              <td className="py-3 pr-4 text-[13px] text-gray-500 max-w-[260px]">
                                {row.details}
                              </td>
                              <td className="py-3 pr-4 whitespace-nowrap">
                                <div className="flex items-center gap-1.5">
                                  <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white shrink-0 ${row.avatarBg}`}>
                                    {row.by.charAt(0)}
                                  </span>
                                  <div>
                                    <div className="text-[13px] font-medium text-gray-800">{row.by}</div>
                                    <div className="text-[11px] text-gray-400">{row.byRole}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 pr-4"><TagBadge tag={row.tag} /></td>
                              <td className="py-3 text-gray-400">
                                <MoreVertical size={15} />
                              </td>
                            </tr>
                          );
                        })}
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