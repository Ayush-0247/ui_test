import {
  ChevronDown,
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  Pencil,
  Calendar,
  StickyNote,
  FileText,
  ClipboardList,
  History as HistoryIcon,
  LayoutGrid,
  Filter,
  MoreVertical,
  CheckCircle2,
  CalendarPlus,
  ListPlus,
  Send,
  UploadCloud,
} from "lucide-react";
import Steps from "../components/Steps";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";

const tabs = [
  { label: "Overview", icon: LayoutGrid },
  { label: "Timeline", icon: Calendar },
  { label: "Interactions", icon: MessageCircle },
  { label: "Appointments", icon: Calendar },
  { label: "Notes", icon: StickyNote },
  { label: "Documents", icon: FileText },
  { label: "Tasks", icon: ClipboardList },
  { label: "History", icon: HistoryIcon, active: true },
];

const historyRows = [
  {
    date: "30 Jul 2025",
    time: "10:30 AM",
    activity: "Stage Changed",
    icon: Calendar,
    details: 'Lead stage changed from "Query" to "Contacted"',
    by: "Vivek",
    byRole: "(Connector)",
    tag: "System",
    tagColor: "bg-gray-100 text-gray-600",
  },
  {
    date: "30 Jul 2025",
    time: "10:30 AM",
    activity: "Call Logged",
    icon: Phone,
    details: "Initial call made to the lead. Discussed IVF treatment and next steps.",
    by: "Vivek",
    byRole: "(Connector)",
    tag: "Call",
    tagColor: "bg-emerald-50 text-emerald-700",
  },
  {
    date: "30 Jul 2025",
    time: "10:45 AM",
    activity: "WhatsApp Message",
    icon: MessageCircle,
    details: "Brochure and price list shared with lead.",
    by: "Vivek",
    byRole: "(Connector)",
    tag: "WhatsApp",
    tagColor: "bg-emerald-50 text-emerald-700",
  },
  {
    date: "30 Jul 2025",
    time: "11:02 AM",
    activity: "Note Added",
    icon: StickyNote,
    details: "Lead is interested in IVF. Prefers evening appointments.",
    by: "Vivek",
    byRole: "(Connector)",
    tag: "Manual",
    tagColor: "bg-purple-50 text-purple-700",
  },
  {
    date: "30 Jul 2025",
    time: "04:00 PM",
    activity: "Next Follow-up Set",
    icon: Calendar,
    details: "Follow-up call scheduled for 02 Aug 2025 at 11:00 AM",
    by: "Vivek",
    byRole: "(Connector)",
    tag: "Manual",
    tagColor: "bg-purple-50 text-purple-700",
  },
  {
    date: "02 Aug 2025",
    time: "10:15 AM",
    activity: "Lead Information Updated",
    icon: Pencil,
    details: 'Updated lead value to "High"',
    by: "Dr. Mehta",
    byRole: "(Fertility Specialist)",
    tag: "Manual",
    tagColor: "bg-purple-50 text-purple-700",
    avatarColor: "bg-purple-500",
  },
  {
    date: "02 Aug 2025",
    time: "11:00 AM",
    activity: "Appointment Scheduled",
    icon: Calendar,
    details: "Appointment scheduled for 08 Aug 2025 at 02:00 PM with Dr. Mehta",
    by: "Dr. Mehta",
    byRole: "(Fertility Specialist)",
    tag: "Appointment",
    tagColor: "bg-amber-50 text-amber-700",
    avatarColor: "bg-purple-500",
  },
  {
    date: "02 Aug 2025",
    time: "11:05 AM",
    activity: "Document Uploaded",
    icon: FileText,
    details: "Lab test report uploaded by lead.",
    by: "Vivek",
    byRole: "(Connector)",
    tag: "Upload",
    tagColor: "bg-gray-100 text-gray-600",
  },
  {
    date: "02 Aug 2025",
    time: "02:00 PM",
    activity: "Task Created",
    icon: CheckCircle2,
    details: 'Task "Prepare treatment plan" created and assigned to Dr. Mehta.',
    by: "Dr. Mehta",
    byRole: "(Fertility Specialist)",
    tag: "Task",
    tagColor: "bg-gray-100 text-gray-600",
    avatarColor: "bg-purple-500",
  },
];

function SummaryRow({ label, children }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-sm text-gray-800">{children}</span>
    </div>
  );
}

function QuickAction({ icon: Icon, label, color }) {
  return (
    <button
      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium border ${color}`}
    >
      <span className="flex items-center gap-2">
        <Icon size={16} />
        {label}
      </span>
    </button>
  );
}

export default function LeadHistoryPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col text-[13px]">
      {/* Global Top Bar */}
      <LifelinkrTopBar />

      <div className="flex flex-1 min-h-0">
        {/* Global Sidebar */}
        <LifelinkrAsidebar />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Global Lead Header */}
          <LifelinkrLeadHeader />

          <div className="grid grid-cols-[1fr_300px] gap-5 mt-5">
            {/* Left column */}
            <div>
              {/* Lead journey (Steps) */}
              <Steps />

              {/* Tabs */}
              <div className="flex items-center gap-6 border-b border-gray-200 mb-4 overflow-x-auto mt-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    className={`pb-2.5 text-[13px] font-medium whitespace-nowrap border-b-2 ${
                      tab.active
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* History card */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-gray-800">History</p>
                </div>
                <p className="text-gray-400 text-[12px] mb-4">
                  Complete activity history and changes for this lead.
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-gray-400">
                    <Filter size={14} />
                    <span className="text-[13px]">Search history...</span>
                  </div>
                  <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-3 py-1.5 text-[13px] font-medium text-gray-600">
                    <Filter size={14} /> Filter
                  </button>
                </div>

                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-[11px] uppercase tracking-wide text-gray-400 border-b border-gray-100">
                      <th className="font-medium py-2 pr-3 w-[110px]">Date &amp; Time</th>
                      <th className="font-medium py-2 pr-3 w-[180px]">Activity</th>
                      <th className="font-medium py-2 pr-3">Details</th>
                      <th className="font-medium py-2 pr-3 w-[130px]">By</th>
                      <th className="font-medium py-2 pr-3 w-[110px]">Source / Type</th>
                      <th className="font-medium py-2 w-[24px]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyRows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-50 align-top last:border-0"
                      >
                        <td className="py-3 pr-3 text-gray-500 text-[12px] whitespace-nowrap">
                          {row.date}
                          <br />
                          {row.time}
                        </td>
                        <td className="py-3 pr-3">
                          <span className="flex items-center gap-1.5 font-medium text-gray-800 text-[13px]">
                            <row.icon size={13} className="text-blue-500 shrink-0" />
                            {row.activity}
                          </span>
                        </td>
                        <td className="py-3 pr-3 text-gray-500 text-[12px] max-w-[260px]">
                          {row.details}
                        </td>
                        <td className="py-3 pr-3">
                          <span className="flex items-center gap-1.5">
                            <span
                              className={`w-5 h-5 rounded-full text-white text-[10px] font-semibold flex items-center justify-center shrink-0 ${
                                row.avatarColor || "bg-blue-500"
                              }`}
                            >
                              {row.by.charAt(0)}
                            </span>
                            <span className="text-[12px]">
                              {row.by}
                              <br />
                              <span className="text-gray-400 text-[11px]">{row.byRole}</span>
                            </span>
                          </span>
                        </td>
                        <td className="py-3 pr-3">
                          <span
                            className={`text-[11px] font-medium px-2 py-0.5 rounded ${row.tagColor}`}
                          >
                            {row.tag}
                          </span>
                        </td>
                        <td className="py-3 text-gray-300">
                          <MoreVertical size={15} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex justify-center mt-4">
                  <button className="flex items-center gap-1.5 border border-gray-200 rounded-lg px-4 py-1.5 text-[13px] font-medium text-gray-600">
                    Load More <ChevronDown size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              {/* Lead summary */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-medium text-gray-800 mb-1">Lead Summary</p>
                <div className="divide-y divide-gray-50">
                  <SummaryRow label="Current Stage">
                    <span className="bg-orange-100 text-orange-600 text-[11px] font-medium px-2 py-0.5 rounded-full">
                      Contacted
                    </span>
                  </SummaryRow>
                  <SummaryRow label="Assigned To">
                    <span className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center">
                        V
                      </span>
                      Vivek
                    </span>
                  </SummaryRow>
                  <SummaryRow label="Lead Score">--</SummaryRow>
                  <SummaryRow label="Lead Value">
                    <span className="bg-green-100 text-green-700 text-[11px] font-medium px-2 py-0.5 rounded-full">
                      High
                    </span>
                  </SummaryRow>
                  <SummaryRow label="First Enquiry">30 Jul, 2025</SummaryRow>
                  <SummaryRow label="Last Contacted">30 Jul, 2025</SummaryRow>
                  <SummaryRow label="Next Follow-up">
                    <span className="text-red-500 font-medium">Today, 04:00 PM</span>
                  </SummaryRow>
                </div>
              </div>

              {/* Next action */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-medium text-gray-800 mb-2">Next Action</p>
                <p className="text-red-500 font-medium text-[13px] mb-3">
                  Call Today at 04:00 PM
                </p>
                <SummaryRow label="Assigned To">
                  <span className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center">
                      V
                    </span>
                    Vivek
                  </span>
                </SummaryRow>
                <SummaryRow label="Reminder">in 15m before</SummaryRow>
                <button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 mt-3 text-[13px] font-medium text-gray-700">
                  <CheckCircle2 size={15} /> Mark as Completed
                </button>
              </div>

              {/* Quick actions */}
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <p className="font-medium text-gray-800 mb-3">Quick Actions</p>
                <div className="space-y-2">
                  <QuickAction
                    icon={StickyNote}
                    label="Add Note"
                    color="border-blue-100 bg-blue-50 text-blue-600"
                  />
                  <QuickAction
                    icon={CalendarPlus}
                    label="Schedule Appointment"
                    color="border-blue-100 bg-blue-50 text-blue-600"
                  />
                  <QuickAction
                    icon={ListPlus}
                    label="Add Task"
                    color="border-blue-100 bg-blue-50 text-blue-600"
                  />
                  <QuickAction
                    icon={Send}
                    label="Send WhatsApp"
                    color="border-blue-100 bg-blue-50 text-blue-600"
                  />
                  <QuickAction
                    icon={UploadCloud}
                    label="Upload Document"
                    color="border-blue-100 bg-blue-50 text-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}