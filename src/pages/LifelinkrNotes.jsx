import { useState } from "react";
import { Plus, MoreVertical, ChevronDown } from "lucide-react";
import LifelinkrPageLayout from "../components/LifelinkrPageLayout";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import LifelinkrTabNav from "../components/LifelinkrTabNav";
import LifelinkrRightSidebar from "../components/LifelinkrRightSidebar";
import Steps from "../components/Steps";

/* ─── data ──────────────────────────────────────────────────── */

const notes = [
  {
    title: "Initial discussion summary",
    body: "Spoke with Inderjeet. Interested in IVF. Basic details collected.",
    by: "Vivek (Connector)",
    date: "30 Jul 2025, 07:45 AM",
    tag: "Important",
    tagCls: "bg-amber-50 border border-amber-100 text-amber-700",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
  },
  {
    title: "Financial discussion",
    body: "Discussed approx. budget range ₹2–₹3 Lakh. Looking for EMI options.",
    by: "Vivek (Connector)",
    date: "30 Jul 2025, 11:20 AM",
    tag: "Financial",
    tagCls: "bg-blue-50 border border-blue-100 text-blue-600",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    title: "Preferred doctor",
    body: "Lead prefers appointment with Dr. Mehta (Fertility Specialist).",
    by: "Vivek (Connector)",
    date: "30 Jul 2025, 02:15 PM",
    tag: "Preference",
    tagCls: "bg-green-50 border border-green-100 text-green-700",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Follow-up reminder",
    body: "Requested to share test reports. Will follow up tomorrow.",
    by: "Vivek (Connector)",
    date: "30 Jul 2025, 04:00 PM",
    tag: "Reminder",
    tagCls: "bg-indigo-50 border border-indigo-100 text-indigo-600",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
  },
];

function NoteIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V9z" />
      <path d="M14 3v6h6" />
      <path d="M9 13h4M9 17h2.5" />
    </svg>
  );
}

/* ─── component ─────────────────────────────────────────────── */

export default function LifelinkrNotes() {
  const [activeTab, setActiveTab] = useState("Notes");

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

                {/* Notes content */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h2 className="text-[15px] font-semibold text-gray-900">Notes</h2>
                      <p className="text-[13px] text-gray-500 mt-0.5">
                        All notes and observations added for this lead.
                      </p>
                    </div>
                    <button className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-[13px] font-semibold text-blue-600 hover:bg-blue-100 transition-colors">
                      <Plus size={14} /> Add Note
                    </button>
                  </div>

                  <div className="space-y-3">
                    {notes.map((note) => (
                      <div
                        key={note.title}
                        className="flex flex-col sm:flex-row sm:items-start gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4"
                      >
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${note.iconBg}`}
                        >
                          <NoteIcon className={`h-5 w-5 ${note.iconColor}`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[13.5px] font-semibold text-gray-900">
                            {note.title}
                          </div>
                          <p className="mt-0.5 text-[13px] text-gray-600">{note.body}</p>
                          <p className="mt-1.5 text-[12px] text-gray-400">
                            Added by {note.by} • {note.date}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                          <span className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold border ${note.tagCls}`}>
                            {note.tag}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical size={15} />
                          </button>
                        </div>
                      </div>
                    ))}
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
