import { useState } from "react";
import {
  PhoneCall, Send, StickyNote, FileText, CheckCircle2, ChevronDown,
} from "lucide-react";
import LifelinkrPageLayout from "../components/LifelinkrPageLayout";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import LifelinkrTabNav from "../components/LifelinkrTabNav";
import LifelinkrRightSidebar from "../components/LifelinkrRightSidebar";
import Steps from "../components/Steps";

/* ─── data ──────────────────────────────────────────────────── */

const timelineEvents = [
  { icon: PhoneCall,    iconBg: "bg-blue-600",   title: "Call Made",       desc: "Initial call made to the lead.",                 time: "30 Jul 2025, 10:30 AM", by: "by Vivek (Connector)" },
  { icon: Send,         iconBg: "bg-green-500",   title: "WhatsApp Message",desc: "Brochure and price list sent.",                  time: "30 Jul 2025, 10:45 AM", by: "by Vivek (Connector)" },
  { icon: StickyNote,   iconBg: "bg-blue-600",    title: "Note Added",      desc: "Basic details collected. Interested in IVF.",    time: "30 Jul 2025, 11:15 AM", by: "by Vivek (Connector)" },
  { icon: FileText,     iconBg: "bg-indigo-500",  title: "Task Created",    desc: "Reminder to follow up after 2 days.",            time: "30 Jul 2025, 11:20 AM", by: "by Vivek (Connector)" },
  { icon: CheckCircle2, iconBg: "bg-green-500",   title: "Stage Changed",   desc: "Lead moved from Query to Contacted.",            time: "30 Jul 2025, 11:25 AM", by: "by System" },
];

/* ─── component ─────────────────────────────────────────────── */

export default function LifrlinkrTimeline() {
  const [activeTab, setActiveTab] = useState("Timeline");

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

                {/* Timeline content */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-[15px] font-semibold text-gray-900">Lead Timeline</h2>
                    <button className="flex items-center gap-1 rounded-lg border border-gray-200 px-3 py-1.5 text-[13px] font-medium text-gray-600 hover:bg-gray-50">
                      All Events <ChevronDown size={13} />
                    </button>
                  </div>
                  <p className="text-[13px] text-gray-500 mb-6">
                    A chronological timeline of all activities and interactions.
                  </p>

                  <div className="relative">
                    <div className="absolute left-[15px] top-2 bottom-6 w-px bg-gray-100" />
                    <div className="space-y-6">
                      {timelineEvents.map((ev, i) => {
                        const Icon = ev.icon;
                        return (
                          <div key={i} className="flex gap-4 relative">
                            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white z-10 ${ev.iconBg}`}>
                              <Icon size={14} />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                              <div>
                                <div className="text-[13.5px] font-semibold text-gray-900">{ev.title}</div>
                                <div className="text-[13px] text-gray-500">{ev.desc}</div>
                              </div>
                              <div className="text-[12px] text-gray-400 sm:text-right shrink-0 whitespace-nowrap">
                                <div>{ev.time}</div>
                                <div>{ev.by}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
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
