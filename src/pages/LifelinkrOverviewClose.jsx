import { useState } from "react";
import {
  Phone, ArrowLeftRight, StickyNote, CalendarPlus, ClipboardCheck,
  CheckCircle2, Calendar, RotateCcw, ChevronRight, Check,
  PhoneCall, Send, FileText,
} from "lucide-react";
import LifelinkrPageLayout from "../components/LifelinkrPageLayout";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import LifelinkrTabNav from "../components/LifelinkrTabNav";
import LifelinkrRightSidebar from "../components/LifelinkrRightSidebar";
import Steps from "../components/Steps";

/* ─── helpers ───────────────────────────────────────────────── */

function InfoCard({ title, action, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[14px] font-semibold text-gray-900">{title}</h3>
        {action}
      </div>
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 text-[13px]">
      <span className="text-gray-500">{label}</span>
      <span className="font-medium text-gray-800 text-right">{value}</span>
    </div>
  );
}

function QualRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0 text-[13px]">
      <span className="flex items-center gap-2 text-gray-500">
        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-100">
          <Check size={10} className="text-green-600" strokeWidth={3} />
        </span>
        {label}
      </span>
      <span className="font-medium text-gray-800 text-right">{value}</span>
    </div>
  );
}

function EditBtn() {
  return (
    <button className="text-[12px] font-semibold text-blue-600 border border-gray-200 rounded-lg px-2.5 py-1 hover:bg-gray-50">
      Edit
    </button>
  );
}

/* ─── timeline ──────────────────────────────────────────────── */

const timelineItems = [
  { icon: PhoneCall,     color: "bg-blue-500",  time: "30 JUL 2026  07:26 AM", title: "Call Made",     badge: "02m 34s", desc: "Called by Vivek" },
  { icon: Send,          color: "bg-green-500", time: "30 JUL 2026  07:35 AM", title: "WhatsApp Message", desc: "Brochure and price list sent" },
  { icon: StickyNote,    color: "bg-gray-400",  time: "30 JUL 2026  07:45 AM", title: "Note Added",    desc: "Basic details collected. Interested in IVF." },
  { icon: ArrowLeftRight,color: "bg-indigo-400",time: "30 JUL 2026  07:45 AM", title: "Stage Changed", stageFrom: "Query", stageTo: "Contacted" },
];

function TimelineEntry({ item, isLast }) {
  const Icon = item.icon;
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className={`flex h-7 w-7 items-center justify-center rounded-full text-white shrink-0 ${item.color}`}>
          <Icon size={12} />
        </div>
        {!isLast && <div className="w-px flex-1 bg-gray-100 my-1" />}
      </div>
      <div className={`${isLast ? "pb-0" : "pb-4"}`}>
        <div className="text-[11px] text-gray-400 mb-0.5">{item.time}</div>
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-gray-900">{item.title}</span>
          {item.badge && (
            <span className="text-[10.5px] font-semibold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded">
              {item.badge}
            </span>
          )}
        </div>
        {item.desc && <div className="text-[12.5px] text-gray-500 mt-0.5">{item.desc}</div>}
        {item.stageFrom && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-[11.5px] font-medium">{item.stageFrom}</span>
            <ArrowLeftRight size={10} className="text-gray-300" />
            <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[11.5px] font-medium">{item.stageTo}</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── component ─────────────────────────────────────────────── */

const overviewQuickActions = [
  { label: "Move Stage",            icon: ArrowLeftRight },
  { label: "Add Note",              icon: StickyNote },
  { label: "Schedule Appointment",  icon: CalendarPlus },
  { label: "Add Task",              icon: ClipboardCheck },
];

export default function LifelinkrOverviewClose() {
  const [activeTab, setActiveTab] = useState("Overview");

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

                {/* Overview grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  <InfoCard title="Lead Information" action={<EditBtn />}>
                    <InfoRow label="Age / Gender"       value="34 Y / Male" />
                    <InfoRow label="Marital Status"     value="Married" />
                    <InfoRow label="Trying Since"       value="3 Years" />
                    <InfoRow label="Wife Age"           value="31 Years" />
                    <InfoRow label="Location"           value="Chandigarh" />
                    <InfoRow label="Primary Concern"    value="Not Conceiving" />
                    <InfoRow label="Preferred Language" value="Hindi" />
                    <InfoRow label="Enquiry Date"       value="30 Jul, 2026 at 07:26 AM" />
                  </InfoCard>

                  <InfoCard title="Qualification Details" action={<EditBtn />}>
                    <QualRow label="Previously tried IVF?"         value="No" />
                    <QualRow label="Any children?"                 value="No" />
                    <QualRow label="Treatment type interested in?" value="IVF" />
                    <QualRow label="Budget range?"                 value="₹2 – ₹3 Lakh" />
                    <QualRow label="Preferred Doctor?"             value="Dr. Mehta" />
                    <QualRow label="Preferred Time?"               value="Evening" />
                    <QualRow label="How did you hear about us?"    value="Google Ads" />
                  </InfoCard>

                  <InfoCard
                    title="Activity Timeline"
                    action={<span className="text-[12.5px] font-semibold text-blue-600 cursor-pointer">View all</span>}
                  >
                    {timelineItems.map((item, i) => (
                      <TimelineEntry key={i} item={item} isLast={i === timelineItems.length - 1} />
                    ))}
                  </InfoCard>

                  <InfoCard title="Latest Notes">
                    <div className="rounded-xl bg-amber-50 border border-amber-100 p-4 text-[13px] text-gray-700 leading-relaxed">
                      Spoke with Inderjeet. Basic details collected. Interested in IVF. Asked for cost estimate and success rate.
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">V</span>
                      <span className="text-[12px] text-gray-400">Vivek · 30 Jul, 2026 at 07:45 AM</span>
                    </div>
                  </InfoCard>

                  <InfoCard title="Next Follow-up">
                    <div className="flex items-center gap-2 text-orange-500 font-semibold text-[13.5px]">
                      <Calendar size={15} /> Call Today at 04:00 PM
                    </div>
                    <div className="text-[12.5px] text-gray-400 mt-1">30 Jul, 2026 · 04:00 PM</div>
                    <button className="flex items-center gap-1.5 border border-blue-200 bg-blue-50 text-blue-600 text-[13px] font-semibold rounded-lg px-3 py-1.5 mt-4 hover:bg-blue-100 transition-colors">
                      <RotateCcw size={13} /> Reschedule
                    </button>
                  </InfoCard>
                </div>
              </div>

              {/* ── right sidebar (with custom quick actions for Overview) ── */}
              <LifelinkrRightSidebar quickActions={overviewQuickActions} />
            </div>
          </div>
        </main>
      </div>
    </LifelinkrPageLayout>
  );
}
