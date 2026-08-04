import { useState } from "react";
import {
  ChevronDown, Filter, MoreVertical,
  PhoneCall, Send, Mail, StickyNote, CheckSquare,
} from "lucide-react";
import LifelinkrPageLayout from "../components/LifelinkrPageLayout";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import LifelinkrTabNav from "../components/LifelinkrTabNav";
import LifelinkrRightSidebar from "../components/LifelinkrRightSidebar";
import Steps from "../components/Steps";

/* ─── data ──────────────────────────────────────────────────── */

const outcomeStyles = {
  Positive:    "bg-green-50 border border-green-100 text-green-700",
  Delivered:   "bg-green-50 border border-green-100 text-green-700",
  Opened:      "bg-green-50 border border-green-100 text-green-700",
  Information: "bg-blue-50 border border-blue-100 text-blue-700",
  Scheduled:   "bg-purple-50 border border-purple-100 text-purple-700",
};

const iconBgMap = {
  PhoneCall:    "bg-blue-600",
  Send:         "bg-green-500",
  Mail:         "bg-blue-600",
  StickyNote:   "bg-amber-500",
  CheckSquare:  "bg-green-500",
};

const interactions = [
  { icon: PhoneCall,   iconBg: "bg-blue-600", type: "Call",      details: "Initial call made to the lead.",                           sub: "Discussed about IVF treatment and next steps.",         by: "Vivek", bySub: "(Connector)", date: "30 Jul 2025", time: "10:30 AM", outcome: "Positive",    next: "Send brochure" },
  { icon: Send,        iconBg: "bg-green-500", type: "WhatsApp",  details: "Brochure and price list sent.",                            sub: "Shared details of packages and success rate.",          by: "Vivek", bySub: "(Connector)", date: "30 Jul 2025", time: "10:45 AM", outcome: "Delivered",   next: "Follow up tomorrow" },
  { icon: Mail,        iconBg: "bg-blue-600",  type: "Email",     details: "Detailed treatment plan and cost estimate emailed",        sub: "as requested by the lead.",                             by: "Vivek", bySub: "(Connector)", date: "30 Jul 2025", time: "11:02 AM", outcome: "Opened",      next: "Await response" },
  { icon: StickyNote,  iconBg: "bg-amber-500", type: "Note",      details: "Lead is interested in IVF with donor program.",            sub: "Wants to discuss with spouse.",                          by: "Vivek", bySub: "(Connector)", date: "30 Jul 2025", time: "11:15 AM", outcome: "Information", next: "Call tomorrow" },
  { icon: PhoneCall,   iconBg: "bg-blue-600",  type: "Call",      details: "Follow up call. Answered queries about success rate,",    sub: "process and hospital visit.",                           by: "Vivek", bySub: "(Connector)", date: "30 Jul 2025", time: "04:00 PM", outcome: "Positive",    next: "Schedule appointment" },
  { icon: CheckSquare, iconBg: "bg-green-500", type: "Task",      details: "Appointment scheduled for clinic visit with Dr. Mehta",   sub: "on 02 Aug 2025 at 11:00 AM.",                           by: "System", bySub: "",           date: "30 Jul 2025", time: "04:05 PM", outcome: "Scheduled",   next: "Reminder before visit" },
];

function OutcomeBadge({ value }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold whitespace-nowrap ${outcomeStyles[value] ?? "bg-gray-50 text-gray-600 border border-gray-200"}`}>
      {value}
    </span>
  );
}

/* ─── component ─────────────────────────────────────────────── */

export default function LifelinkrInteraction() {
  const [activeTab, setActiveTab] = useState("Interactions");

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

                {/* Interactions content */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h2 className="text-[15px] font-semibold text-gray-900">Interactions</h2>
                      <p className="text-[13px] text-gray-500 mt-0.5">
                        All communication and interactions with this lead.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50">
                        All Types <ChevronDown size={13} />
                      </button>
                      <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50">
                        <Filter size={13} /> Filter
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-100">
                          {["Type", "Interaction Details", "By", "Date & Time", "Outcome", "Next Step", ""].map((h, i) => (
                            <th key={i} className="pb-3 pr-4 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {interactions.map((row, i) => {
                          const Icon = row.icon;
                          return (
                            <tr key={i} className="border-t border-gray-100 align-top">
                              <td className="py-3 pr-4">
                                <div className="flex items-center gap-2 whitespace-nowrap">
                                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-white shrink-0 ${row.iconBg}`}>
                                    <Icon size={12} />
                                  </span>
                                  <span className="text-[13px] font-semibold text-gray-800">{row.type}</span>
                                </div>
                              </td>
                              <td className="py-3 pr-4 max-w-[220px]">
                                <div className="text-[13px] font-medium text-gray-800">{row.details}</div>
                                <div className="text-[12px] text-gray-400">{row.sub}</div>
                              </td>
                              <td className="py-3 pr-4 whitespace-nowrap">
                                <div className="flex items-center gap-1.5">
                                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white shrink-0">
                                    V
                                  </span>
                                  <div>
                                    <div className="text-[13px] font-medium text-gray-800">{row.by}</div>
                                    {row.bySub && <div className="text-[12px] text-gray-400">{row.bySub}</div>}
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 pr-4 whitespace-nowrap">
                                <div className="text-[13px] font-medium text-gray-800">{row.date}</div>
                                <div className="text-[12px] text-gray-400">{row.time}</div>
                              </td>
                              <td className="py-3 pr-4"><OutcomeBadge value={row.outcome} /></td>
                              <td className="py-3 pr-4 text-[13px] text-gray-500 whitespace-nowrap">{row.next}</td>
                              <td className="py-3 text-gray-400"><MoreVertical size={15} /></td>
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
