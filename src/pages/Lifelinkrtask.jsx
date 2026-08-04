import { useState } from "react";
import {
  ChevronDown, Filter, Plus, MoreVertical,
  ClipboardCheck, Circle, CheckCircle2, AlertCircle, ClipboardEdit,
  CalendarClock, Upload,
} from "lucide-react";
import LifelinkrPageLayout from "../components/LifelinkrPageLayout";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import LifelinkrTabNav from "../components/LifelinkrTabNav";
import LifelinkrRightSidebar from "../components/LifelinkrRightSidebar";
import Steps from "../components/Steps";

/* ─── data ──────────────────────────────────────────────────── */

const taskStats = [
  { icon: ClipboardCheck, label: "Total Tasks",  value: 8, bg: "bg-blue-50",   fg: "text-blue-600" },
  { icon: Circle,         label: "To Do",         value: 3, bg: "bg-blue-50",   fg: "text-blue-500" },
  { icon: ClipboardEdit,  label: "In Progress",   value: 2, bg: "bg-amber-50",  fg: "text-amber-500" },
  { icon: CheckCircle2,   label: "Completed",     value: 2, bg: "bg-green-50",  fg: "text-green-600" },
  { icon: AlertCircle,    label: "Overdue",        value: 1, bg: "bg-red-50",    fg: "text-red-500" },
];

const priorityStyles = { High: "bg-red-50 text-red-500", Medium: "bg-amber-50 text-amber-600", Low: "bg-green-50 text-green-600" };
const statusStyles = { "To Do": "bg-blue-50 text-blue-500", "In Progress": "bg-amber-50 text-amber-600", Completed: "bg-green-50 text-green-600" };

const tasksData = [
  { name: "Call for follow-up",        desc: "Follow up call to discuss treatment options.",   assignee: { initials: "V", name: "Vivek", role: "(Connector)" },                      due: "30 Jul 2025", time: "04:00 PM", overdue: true,  priority: "High",   status: "To Do",      checked: false },
  { name: "Share IVF brochure",        desc: "Send brochure and price list over WhatsApp.",    assignee: { initials: "V", name: "Vivek", role: "(Connector)" },                      due: "31 Jul 2025", time: "11:00 AM", overdue: false, priority: "Medium", status: "To Do",      checked: false },
  { name: "Prepare treatment plan",    desc: "Create a personalized treatment plan.",          assignee: { initials: "DM", name: "Dr. Mehta", role: "(Fertility Specialist)" },      due: "02 Aug 2025", time: "10:30 AM", overdue: false, priority: "High",   status: "In Progress",checked: false },
  { name: "Verify insurance details",  desc: "Check and verify insurance coverage.",           assignee: { initials: null, name: "Lab Team", role: null },                           due: "02 Aug 2025", time: "02:00 PM", overdue: false, priority: "Low",    status: "In Progress",checked: false },
  { name: "Collect initial documents", desc: "Aadhaar, reports and previous medical history.",assignee: { initials: "V", name: "Vivek", role: "(Connector)" },                      due: "29 Jul 2025", time: "01:00 PM", overdue: false, priority: "Medium", status: "Completed",  checked: true },
  { name: "Welcome message",           desc: "Send welcome message and thank you note.",       assignee: { initials: "V", name: "Vivek", role: "(Connector)" },                      due: "29 Jul 2025", time: "11:30 AM", overdue: false, priority: "Low",    status: "Completed",  checked: true },
  { name: "Schedule baseline scan",    desc: "Book baseline scan with Dr. Mehta.",             assignee: { initials: "V", name: "Vivek", role: "(Connector)" },                      due: "05 Aug 2025", time: "10:00 AM", overdue: false, priority: "High",   status: "To Do",      checked: false },
  { name: "Payment follow-up",         desc: "Follow up on the advance payment.",              assignee: { initials: "V", name: "Vivek", role: "(Connector)" },                      due: "06 Aug 2025", time: "04:00 PM", overdue: false, priority: "Medium", status: "To Do",      checked: false },
];

/* ─── component ─────────────────────────────────────────────── */

export default function LifelinkrTask() {
  const [activeTab, setActiveTab] = useState("Tasks");

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

                {/* Tasks content */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h2 className="text-[15px] font-semibold text-gray-900">Tasks</h2>
                      <p className="text-[13px] text-gray-500 mt-0.5">
                        All tasks and to-dos related to this lead.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50">
                        All Tasks <ChevronDown size={13} />
                      </button>
                      <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50">
                        <Filter size={13} /> Filter
                      </button>
                      <button className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-[13px] font-semibold text-blue-600 hover:bg-blue-100 transition-colors">
                        <Plus size={13} /> Add Task
                      </button>
                    </div>
                  </div>

                  {/* Stat cards */}
                  <div className="mb-5 grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {taskStats.map(({ icon: Icon, label, value, bg, fg }) => (
                      <div key={label} className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                        <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${bg}`}>
                          <Icon size={16} className={fg} />
                        </div>
                        <div>
                          <div className="text-[11.5px] text-gray-400">{label}</div>
                          <div className="text-[16px] font-bold text-gray-900">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="pb-3 w-8"></th>
                          {["Task Name", "Description", "Assigned To", "Due Date", "Priority", "Status", ""].map((h, i) => (
                            <th key={i} className="pb-3 pr-4 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tasksData.map((t) => (
                          <tr key={t.name} className="border-t border-gray-100 align-top">
                            <td className="py-3">
                              <span className={`flex h-4 w-4 items-center justify-center rounded ${t.checked ? "bg-green-500" : "border border-gray-300"}`}>
                                {t.checked && <span className="text-[10px] text-white font-bold">✓</span>}
                              </span>
                            </td>
                            <td className={`py-3 pr-4 text-[13px] font-semibold ${t.checked ? "text-gray-400 line-through" : "text-gray-900"}`}>
                              {t.name}
                            </td>
                            <td className="py-3 pr-4 text-[13px] text-gray-500">{t.desc}</td>
                            <td className="py-3 pr-4">
                              <div className="flex items-center gap-1.5">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white shrink-0">
                                  {t.assignee.initials ?? "?"}
                                </span>
                                <div>
                                  <div className="text-[13px] font-medium text-gray-800 whitespace-nowrap">{t.assignee.name}</div>
                                  {t.assignee.role && <div className="text-[11px] text-gray-400">{t.assignee.role}</div>}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 pr-4">
                              <div className="flex items-center gap-1.5 text-[13px] font-medium text-gray-800 whitespace-nowrap">
                                {t.due}
                                {t.overdue && (
                                  <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-semibold text-red-500">Overdue</span>
                                )}
                              </div>
                              <div className="text-[12px] text-gray-400">{t.time}</div>
                            </td>
                            <td className="py-3 pr-4">
                              <span className={`inline-block rounded px-2.5 py-0.5 text-[11.5px] font-semibold ${priorityStyles[t.priority]}`}>
                                {t.priority}
                              </span>
                            </td>
                            <td className="py-3 pr-4">
                              <span className={`inline-block rounded px-2.5 py-0.5 text-[11.5px] font-semibold ${statusStyles[t.status]}`}>
                                {t.status}
                              </span>
                            </td>
                            <td className="py-3 text-gray-400"><MoreVertical size={15} /></td>
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