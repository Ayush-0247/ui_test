import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import { NAV_TABS_CLOSE, TabBar } from "../components/CreatorHeaderLayout";
import Steps from "../components/Steps";
import {
  ChevronDown,
  Check,
  ArrowLeftRight,
  ChevronRight,
  CheckCircle2,
  StickyNote,
  CalendarPlus,
  ClipboardCheck,
  Calendar,
  RotateCcw,
  Phone,
  MessageCircle,
  Mail,
} from "lucide-react";

/* ---------------------------------------------------------------- */
/* Small building blocks                                             */
/* ---------------------------------------------------------------- */

function Avatar({
  initials,
  size = 44,
  bg = "bg-blue-100",
  text = "text-blue-600",
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-full font-semibold ${bg} ${text}`}
      style={{ width: size, height: size, fontSize: size * 0.36 }}
    >
      {initials}
    </div>
  );
}

function Card({ title, action, children, className = "" }) {
  return (
    <div
      className={`bg-white border border-slate-200 rounded-xl p-5 ${className}`}
    >
      {title && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[14px] font-semibold text-slate-800">{title}</h3>
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-[7px] text-[13px]">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-700 font-medium text-right">{value}</span>
    </div>
  );
}

function QualRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-[7px] text-[13px]">
      <span className="flex items-center gap-2 text-slate-500">
        <span className="flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100">
          <Check size={11} className="text-emerald-600" strokeWidth={3} />
        </span>
        {label}
      </span>
      <span className="text-slate-700 font-medium text-right">{value}</span>
    </div>
  );
}

function SummaryRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-2 text-[13px]">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-700 font-medium text-right">{value}</span>
    </div>
  );
}

function QuickAction({ icon: Icon, label }) {
  return (
    <button className="w-full flex items-center justify-between px-4 py-2.5 rounded-lg border border-slate-200 text-[13px] font-medium text-slate-700 hover:bg-slate-50">
      <span className="flex items-center gap-2.5">
        <Icon size={15} className="text-slate-400" />
        {label}
      </span>
      <ChevronRight size={14} className="text-slate-300" />
    </button>
  );
}

/* ---------------------------------------------------------------- */
/* Activity timeline                                                 */
/* ---------------------------------------------------------------- */

const timelineItems = [
  {
    icon: Phone,
    color: "bg-blue-500",
    time: "30 JUL 2026   07:26 AM",
    title: "Call Made",
    badge: "02m 34s",
    desc: "Called by Vivek",
  },
  {
    icon: MessageCircle,
    color: "bg-emerald-500",
    time: "30 JUL 2026   07:35 AM",
    title: "WhatsApp Message",
    desc: "Brochure and price list sent",
  },
  {
    icon: StickyNote,
    color: "bg-slate-400",
    time: "30 JUL 2026   07:45 AM",
    title: "Note Added",
    desc: "Basic details collected. Interested in IVF.",
  },
  {
    icon: ArrowLeftRight,
    color: "bg-indigo-400",
    time: "30 JUL 2026   07:45 AM",
    title: "Stage Changed",
    desc: null,
    stageChange: { from: "Query", to: "Contacted" },
  },
];

function TimelineEntry({ item, isLast }) {
  const Icon = item.icon;
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div
          className={`flex items-center justify-center rounded-full ${item.color} text-white shrink-0`}
          style={{ width: 26, height: 26 }}
        >
          <Icon size={13} />
        </div>
        {!isLast && <div className="w-px flex-1 bg-slate-200 my-1" />}
      </div>
      <div className={`pb-5 ${isLast ? "pb-0" : ""}`}>
        <div className="text-[11px] text-slate-400 mb-0.5">{item.time}</div>
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold text-slate-800">
            {item.title}
          </span>
          {item.badge && (
            <span className="text-[10.5px] font-medium text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded">
              {item.badge}
            </span>
          )}
        </div>
        {item.desc && (
          <div className="text-[12.5px] text-slate-500 mt-0.5">{item.desc}</div>
        )}
        {item.stageChange && (
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-[11.5px] text-slate-500 mt-0.5">
              {item.desc}
            </span>
            <span className="flex items-center gap-1.5 text-[11.5px]">
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium">
                {item.stageChange.from}
              </span>
              <ArrowLeftRight size={10} className="text-slate-300" />
              <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md font-medium">
                {item.stageChange.to}
              </span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Main component                                                    */
/* ---------------------------------------------------------------- */

export default function LifelinkrLeadDetail() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-purple-100 selection:text-purple-700">
      {/* Global Top Bar */}
      <LifelinkrTopBar />

      <div className="flex">
        {/* Global Sidebar */}
        <LifelinkrAsidebar />

        {/* Main Dashboard Content */}
        <main className="flex-1 min-w-0 overflow-y-auto pb-16 pb-3">
          <div className="px-4 py-5 sm:px-6 lg:px-8 space-y-5">
            {/* Global Lead Header */}
            <LifelinkrLeadHeader />

            {/* Body grid: left content + right sidebar */}
            <div
              className="grid gap-5"
              style={{ gridTemplateColumns: "1fr 300px" }}
            >
              {/* LEFT column */}
              <div className="min-w-0 space-y-5">
                {/* Lead Journey */}
                <Steps />
                {/* Tabs */}
                <TabBar tabs={NAV_TABS_CLOSE} activeTab="overview" />

                {/* Cards grid */}
                <div className="grid grid-cols-3 gap-5 items-start">
                  <Card
                    title="Lead Information"
                    action={
                      <button className="text-[12.5px] text-blue-600 font-medium border border-slate-200 rounded-md px-2.5 py-1">
                        Edit
                      </button>
                    }
                  >
                    <InfoRow label="Age / Gender" value="34 Y / Male" />
                    <InfoRow label="Marital Status" value="Married" />
                    <InfoRow label="Trying Since" value="3 Years" />
                    <InfoRow label="Wife Age" value="31 Years" />
                    <InfoRow label="Location" value="Chandigarh" />
                    <InfoRow label="Primary Concern" value="Not Conceiving" />
                    <InfoRow label="Preferred Language" value="Hindi" />
                    <InfoRow
                      label="Enquiry Date"
                      value="30 Jul, 2026 at 07:26 AM"
                    />
                  </Card>

                  <Card
                    title="Qualification Details"
                    action={
                      <button className="text-[12.5px] text-blue-600 font-medium border border-slate-200 rounded-md px-2.5 py-1">
                        Edit
                      </button>
                    }
                  >
                    <QualRow label="Previously tried IVF?" value="No" />
                    <QualRow label="Any children?" value="No" />
                    <QualRow label="Treatment type interested in?" value="IVF" />
                    <QualRow label="Budget range?" value="₹2 - ₹3 Lakh" />
                    <QualRow label="Preferred Doctor?" value="Dr. Mehta" />
                    <QualRow label="Preferred Time?" value="Evening" />
                    <QualRow
                      label="How did you hear about us?"
                      value="Google Ads"
                    />
                  </Card>

                  <Card
                    title="Activity Timeline"
                    action={
                      <span className="text-[12.5px] text-blue-600 font-medium cursor-pointer">
                        View all
                      </span>
                    }
                    className="row-span-2"
                  >
                    {timelineItems.map((item, i) => (
                      <TimelineEntry
                        key={i}
                        item={item}
                        isLast={i === timelineItems.length - 1}
                      />
                    ))}
                  </Card>

                  <Card title="Latest Notes">
                    <div className="bg-amber-50 rounded-lg p-3 text-[13px] text-slate-700 leading-relaxed">
                      Spoke with Inderjeet. Basic details collected. Interested in
                      IVF. Asked for cost estimate and success rate.
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Avatar
                        initials="V"
                        size={22}
                        bg="bg-blue-600"
                        text="text-white"
                      />
                      <span className="text-[12px] text-slate-500">
                        Vivek &nbsp;·&nbsp; 30 Jul, 2026 at 07:45 AM
                      </span>
                    </div>
                  </Card>

                  <Card title="Next Follow-up">
                    <div className="flex items-center gap-2 text-orange-500 font-semibold text-[13.5px]">
                      <Calendar size={15} />
                      Call Today at 04:00 PM
                    </div>
                    <div className="text-[12.5px] text-slate-400 mt-1">
                      30 Jul, 2026 &nbsp;·&nbsp; 04:00 PM
                    </div>
                    <button className="flex items-center gap-1.5 border border-blue-200 text-blue-600 text-[12.5px] font-medium rounded-lg px-3 py-1.5 mt-4">
                      <RotateCcw size={13} />
                      Reschedule
                    </button>
                  </Card>
                </div>
              </div>

              {/* RIGHT sidebar */}
              <div className="space-y-5">
                <Card title="Lead Summary">
                  <SummaryRow
                    label="Current Stage"
                    value={
                      <span className="text-[11.5px] font-medium bg-orange-50 text-orange-500 px-2.5 py-0.5 rounded-full">
                        Contacted
                      </span>
                    }
                  />
                  <SummaryRow
                    label="Assigned To"
                    value={
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px]">
                          V
                        </span>
                        Vivek
                      </span>
                    }
                  />
                  <SummaryRow
                    label="Lead Score"
                    value={<span className="text-slate-400">—</span>}
                  />
                  <SummaryRow
                    label="Lead Value"
                    value={
                      <span className="text-[11.5px] font-medium bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full">
                        High
                      </span>
                    }
                  />
                  <SummaryRow
                    label="First Enquiry"
                    value={
                      <span className="font-medium text-slate-700">30 Jul, 2026</span>
                    }
                  />
                  <SummaryRow
                    label="Last Contacted"
                    value={
                      <span className="font-medium text-slate-700">30 Jul, 2026</span>
                    }
                  />
                  <SummaryRow
                    label="Next Follow-up"
                    value={
                      <span className="font-medium text-red-500">Today, 04:00 PM</span>
                    }
                  />
                </Card>

                <Card title="Next Action">
                  <div className="flex items-center gap-2 text-orange-500 font-semibold text-[14px]">
                    <Calendar size={15} />
                    Call Today at 04:00 PM
                  </div>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-slate-400">Assigned To</span>
                      <span className="flex items-center gap-1.5 font-medium text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px]">
                          V
                        </span>
                        Vivek
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[13px]">
                      <span className="text-slate-400">Reminder</span>
                      <span className="font-medium text-slate-700">15 mins before</span>
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 border border-blue-200 text-blue-600 font-medium text-[13px] rounded-lg py-2 mt-4">
                    <CheckCircle2 size={15} />
                    Mark as Completed
                  </button>
                </Card>

                <Card title="Quick Actions">
                  <div className="space-y-2">
                    <QuickAction icon={ArrowLeftRight} label="Move Stage" />
                    <QuickAction icon={StickyNote} label="Add Note" />
                    <QuickAction icon={CalendarPlus} label="Schedule Appointment" />
                    <QuickAction icon={ClipboardCheck} label="Add Task" />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
