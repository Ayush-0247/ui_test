import {
  CheckCircle2,
  StickyNote,
  CalendarPlus,
  CheckSquare,
  MessageCircle,
  UploadCloud,
  ChevronRight,
} from "lucide-react";


function SidebarCard({ title, children }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">
      <h3 className="text-[14px] font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
}

function SummaryRow({ label, children }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-[13px] text-gray-500">{label}</span>
      <div className="text-[13px]">{children}</div>
    </div>
  );
}


function LeadSummaryCard() {
  return (
    <SidebarCard title="Lead Summary">
      <SummaryRow label="Current Stage">
        <span className="rounded-full bg-orange-50 border border-orange-100 px-2.5 py-0.5 text-[11px] font-semibold text-orange-600">
          Contacted
        </span>
      </SummaryRow>
      <SummaryRow label="Assigned To">
        <span className="flex items-center gap-1.5 font-semibold text-gray-800">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
            V
          </span>
          Vivek
        </span>
      </SummaryRow>
      <SummaryRow label="Lead Score">
        <span className="text-gray-400">--</span>
      </SummaryRow>
      <SummaryRow label="Lead Value">
        <span className="rounded-full bg-green-50 border border-green-100 px-2.5 py-0.5 text-[11px] font-semibold text-green-700">
          High
        </span>
      </SummaryRow>
      <SummaryRow label="First Enquiry">
        <span className="font-semibold text-gray-800">30 Jul, 2025</span>
      </SummaryRow>
      <SummaryRow label="Last Contacted">
        <span className="font-semibold text-gray-800">30 Jul, 2025</span>
      </SummaryRow>
      <SummaryRow label="Next Follow-up">
        <span className="font-semibold text-red-500">Today, 04:00 PM</span>
      </SummaryRow>
    </SidebarCard>
  );
}

/* ─── Next Action card ───────────────────────────────────────── */

function NextActionCard() {
  return (
    <SidebarCard title="Next Action">
      <p className="text-[14px] font-bold text-red-500 mb-4">
        Call Today at 04:00 PM
      </p>
      <div className="space-y-2.5 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-gray-500">Assigned To</span>
          <span className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-800">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] font-bold text-white">
              V
            </span>
            Vivek
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-gray-500">Reminder</span>
          <span className="text-[13px] font-semibold text-gray-800">
            in 15m before
          </span>
        </div>
      </div>
      <button className="w-full flex items-center justify-center gap-2 border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-600 text-[13px] font-semibold rounded-lg py-2.5 transition-colors">
        <CheckCircle2 size={14} />
        Mark as Completed
      </button>
    </SidebarCard>
  );
}

/* ─── Quick Actions card ─────────────────────────────────────── */

export const DEFAULT_QUICK_ACTIONS = [
  { label: "Add Note", icon: StickyNote },
  { label: "Schedule Appointment", icon: CalendarPlus },
  { label: "Add Task", icon: CheckSquare },
  { label: "Send WhatsApp", icon: MessageCircle },
  { label: "Upload Document", icon: UploadCloud },
];

function QuickActionsCard({ actions = DEFAULT_QUICK_ACTIONS }) {
  return (
    <SidebarCard title="Quick Actions">
      <div className="space-y-2">
        {actions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-blue-600 text-[13px] font-semibold rounded-lg px-4 py-2.5 transition-colors"
          >
            <span>{label}</span>
            <Icon size={14} />
          </button>
        ))}
      </div>
    </SidebarCard>
  );
}

/* ─── Default export: full right sidebar ─────────────────────── */

/**
 * Props:
 *  - quickActions: optional array of { label, icon } to override default actions
 */
export default function LifelinkrRightSidebar({ quickActions }) {
  return (
    <div className="w-full xl:w-[300px] shrink-0 space-y-4">
      <LeadSummaryCard />
      <NextActionCard />
      <QuickActionsCard actions={quickActions} />
    </div>
  );
}
