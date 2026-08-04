import {

  Search,

  Bell,
  Globe,
  ChevronDown,
  ArrowLeft,
  Phone,
  MessageCircle,
  Mail,
  Pencil,
  CheckSquare,
  Upload,
  ChevronRight,
  Filter,
  Plus,
  ClipboardCheck,
  Circle,
  CheckCircle2,
  AlertCircle,
  MoreVertical,
  CalendarClock,
  ClipboardEdit,
  Send,
} from "lucide-react";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";

import Steps from "../components/Steps";


const tabs = [
  "Overview",
  "Timeline",
  "Interactions",
  "Appointments",
  "Notes",
  "Documents",
  "Tasks",
  "History",
];

const taskStats = [
  { icon: ClipboardCheck, label: "Total Tasks", value: 8, bg: "bg-blue-50", fg: "text-blue-600" },
  { icon: Circle, label: "To Do", value: 3, bg: "bg-blue-50", fg: "text-blue-500" },
  { icon: ClipboardEdit, label: "In Progress", value: 2, bg: "bg-amber-50", fg: "text-amber-500" },
  { icon: CheckCircle2, label: "Completed", value: 2, bg: "bg-green-50", fg: "text-green-600" },
  { icon: AlertCircle, label: "Overdue", value: 1, bg: "bg-red-50", fg: "text-red-500" },
];

function AssigneeBadge({ initials, name, role }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">
        {initials}
      </span>
      <div className="leading-tight">
        <div className="text-[13px] text-gray-800">{name}</div>
        {role && <div className="text-[11px] text-gray-400">{role}</div>}
      </div>
    </div>
  );
}

function PriorityPill({ level }) {
  const styles = {
    High: "bg-red-50 text-red-500",
    Medium: "bg-amber-50 text-amber-600",
    Low: "bg-green-50 text-green-600",
  };
  return (
    <span className={`inline-block rounded px-2.5 py-1 text-[11px] font-medium ${styles[level]}`}>
      {level}
    </span>
  );
}

function StatusPill({ status }) {
  const styles = {
    "To Do": "bg-blue-50 text-blue-500",
    "In Progress": "bg-amber-50 text-amber-600",
    Completed: "bg-green-50 text-green-600",
  };
  return (
    <span className={`inline-block rounded px-2.5 py-1 text-[11px] font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}

const tasksData = [
  {
    name: "Call for follow-up",
    desc: "Follow up call to discuss treatment options.",
    assignee: { initials: "V", name: "Vivek", role: "(Connector)" },
    due: "30 Jul 2025",
    time: "04:00 PM",
    overdue: true,
    priority: "High",
    status: "To Do",
    checked: false,
  },
  {
    name: "Share IVF brochure",
    desc: "Send brochure and price list over WhatsApp.",
    assignee: { initials: "V", name: "Vivek", role: "(Connector)" },
    due: "31 Jul 2025",
    time: "11:00 AM",
    priority: "Medium",
    status: "To Do",
    checked: false,
  },
  {
    name: "Prepare treatment plan",
    desc: "Create a personalized treatment plan.",
    assignee: { initials: "DM", name: "Dr. Mehta", role: "(Fertility Specialist)" },
    due: "02 Aug 2025",
    time: "10:30 AM",
    priority: "High",
    status: "In Progress",
    checked: false,
  },
  {
    name: "Verify insurance details",
    desc: "Check and verify insurance coverage.",
    assignee: { initials: null, name: "Lab Team", role: null },
    due: "02 Aug 2025",
    time: "02:00 PM",
    priority: "Low",
    status: "In Progress",
    checked: false,
  },
  {
    name: "Collect initial documents",
    desc: "Aadhaar, reports and previous medical history.",
    assignee: { initials: "V", name: "Vivek", role: "(Connector)" },
    due: "29 Jul 2025",
    time: "01:00 PM",
    priority: "Medium",
    status: "Completed",
    checked: true,
  },
  {
    name: "Welcome message",
    desc: "Send welcome message and thank you note.",
    assignee: { initials: "V", name: "Vivek", role: "(Connector)" },
    due: "29 Jul 2025",
    time: "11:30 AM",
    priority: "Low",
    status: "Completed",
    checked: true,
  },
  {
    name: "Schedule baseline scan",
    desc: "Book baseline scan with Dr. Mehta.",
    assignee: { initials: "V", name: "Vivek", role: "(Connector)" },
    due: "05 Aug 2025",
    time: "10:00 AM",
    priority: "High",
    status: "To Do",
    checked: false,
  },
  {
    name: "Payment follow-up",
    desc: "Follow up on the advance payment.",
    assignee: { initials: "V", name: "Vivek", role: "(Connector)" },
    due: "06 Aug 2025",
    time: "04:00 PM",
    priority: "Medium",
    status: "To Do",
    checked: false,
  },
];

export default function LifelinkrLeadUI() {
  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui" }}>
      {/* Sidebar */}
     <LifelinkrAsidebar />

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex items-center gap-4 border-b border-gray-200 bg-white px-6 py-3">
          <div className="flex flex-1 max-w-xl items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-400">
            <Search className="h-4 w-4" />
            <span className="flex-1">Search by name, phone, email, UHID...</span>
            <span className="rounded border border-gray-200 px-1.5 py-0.5 text-[10px] text-gray-400">⌘K</span>
          </div>
          <div className="ml-auto flex items-center gap-5">
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-500" />
              <span className="absolute -right-1.5 -top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-blue-600 text-[8px] text-white">2</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <Globe className="h-4.5 w-4.5" />
              <span className="text-xs font-medium">EN</span>
              <ChevronDown className="h-3 w-3" />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right leading-tight">
                <div className="text-[13px] font-semibold text-gray-800">Vivek</div>
                <div className="text-[11px] text-gray-400">Connector</div>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                V
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-6 py-5">
          <button className="mb-3 flex items-center gap-1.5 text-sm font-medium text-blue-600">
            <ArrowLeft className="h-4 w-4" /> Back to All Leads
          </button>

          {/* Lead header */}
          <div className="mb-4 flex items-start justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-lg font-semibold text-blue-600">
                IS
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-xl font-bold text-gray-900">Inderjeet Singh</h1>
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500">
                    Contacted
                  </span>
                </div>
                <div className="mt-1 text-[13px] text-gray-400">
                  L-1012 &nbsp;•&nbsp; UHID: UH-25-000123 &nbsp;•&nbsp; Source: Google Ads
                </div>
                <div className="mt-2 flex items-center gap-5 text-[13px] text-gray-600">
                  <span className="flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-blue-500" /> +91 98765 43210
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="h-3.5 w-3.5 text-green-500" /> WhatsApp
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-blue-400" /> inderjeet.singh@example.com
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-700">
                <Phone className="h-3.5 w-3.5 text-gray-500" /> Call
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-700">
                <MessageCircle className="h-3.5 w-3.5 text-gray-500" /> WhatsApp
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-700">
                <Mail className="h-3.5 w-3.5 text-gray-500" /> Email
              </button>
              <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-700">
                <Pencil className="h-3.5 w-3.5 text-gray-500" /> Edit
              </button>
              <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[13px] font-medium text-white">
                More <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="flex gap-5">
            {/* Left column */}
            <div className="flex-1 min-w-0">
              {/* Lead Journey */}
             <Steps />

              {/* Tabs */}
              <div className="mb-5 flex items-center gap-6 border-b border-gray-200 bg-white px-1 rounded-t-xl">
                {tabs.map((t) => (
                  <button
                    key={t}
                    className={`border-b-2 px-1 py-3 text-[13.5px] font-medium ${
                      t === "Tasks"
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Tasks card */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-[15px] font-semibold text-gray-800">Tasks</h3>
                    <p className="text-[13px] text-gray-400">All tasks and to-dos related to this lead.</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-[13px] text-gray-600">
                      All Tasks <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                    <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-[13px] text-gray-600">
                      <Filter className="h-3.5 w-3.5" /> Filter
                    </button>
                    <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-[13px] font-medium text-white">
                      <Plus className="h-3.5 w-3.5" /> Add Task
                    </button>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="mb-5 grid grid-cols-5 gap-3">
                  {taskStats.map(({ icon: Icon, label, value, bg, fg }) => (
                    <div key={label} className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-3.5 py-3">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-md ${bg}`}>
                        <Icon className={`h-4 w-4 ${fg}`} />
                      </div>
                      <div>
                        <div className="text-[12px] text-gray-400">{label}</div>
                        <div className="text-[16px] font-bold text-gray-800">{value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[13px]">
                    <thead>
                      <tr className="border-b border-gray-100 text-[12px] text-gray-400">
                        <th className="w-8 py-2.5 font-medium"></th>
                        <th className="py-2.5 font-medium">Task Name</th>
                        <th className="py-2.5 font-medium">Description</th>
                        <th className="py-2.5 font-medium">Assigned To</th>
                        <th className="py-2.5 font-medium">Due Date</th>
                        <th className="py-2.5 font-medium">Priority</th>
                        <th className="py-2.5 font-medium">Status</th>
                        <th className="py-2.5 pr-1 text-right font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasksData.map((t) => (
                        <tr key={t.name} className="border-b border-gray-50">
                          <td className="py-3">
                            <span
                              className={`flex h-4 w-4 items-center justify-center rounded ${
                                t.checked ? "bg-green-600" : "border border-gray-300"
                              }`}
                            >
                              {t.checked && <span className="text-[10px] leading-none text-white">✓</span>}
                            </span>
                          </td>
                          <td className={`py-3 pr-2 font-medium ${t.checked ? "text-gray-400 line-through" : "text-gray-800"}`}>
                            {t.name}
                          </td>
                          <td className="py-3 pr-2 text-gray-500">{t.desc}</td>
                          <td className="py-3 pr-2">
                            <AssigneeBadge initials={t.assignee.initials} name={t.assignee.name} role={t.assignee.role} />
                          </td>
                          <td className="py-3 pr-2">
                            <div className="flex items-center gap-1.5 whitespace-nowrap text-gray-700">
                              {t.due}
                              {t.overdue && (
                                <span className="rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-500">
                                  Overdue
                                </span>
                              )}
                            </div>
                            <div className="text-[11.5px] text-gray-400">{t.time}</div>
                          </td>
                          <td className="py-3 pr-2">
                            <PriorityPill level={t.priority} />
                          </td>
                          <td className="py-3 pr-2">
                            <StatusPill status={t.status} />
                          </td>
                          <td className="py-3 text-right">
                            <MoreVertical className="ml-auto h-4 w-4 text-gray-400" />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex justify-center">
                  <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-4 py-2 text-[13px] font-medium text-gray-600">
                    Load More <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="w-[280px] shrink-0 space-y-5">
              {/* Lead Summary */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="mb-3 text-[14px] font-semibold text-gray-800">Lead Summary</h3>
                <div className="space-y-2.5 text-[13px]">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Current Stage</span>
                    <span className="rounded bg-orange-50 px-2 py-0.5 text-[11px] font-semibold text-orange-500">Contacted</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Assigned To</span>
                    <span className="flex items-center gap-1.5 font-medium text-gray-700">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">V</span>
                      Vivek
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Lead Score</span>
                    <span className="text-gray-500">--</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Lead Value</span>
                    <span className="rounded bg-green-50 px-2 py-0.5 text-[11px] font-semibold text-green-600">High</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">First Enquiry</span>
                    <span className="text-gray-700">30 Jul, 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Last Contacted</span>
                    <span className="text-gray-700">30 Jul, 2025</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Next Follow-up</span>
                    <span className="font-semibold text-red-500">Today, 04:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Next Action */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="mb-3 text-[14px] font-semibold text-gray-800">Next Action</h3>
                <div className="mb-3 flex items-center gap-2 text-[13.5px] font-semibold text-red-500">
                  <CalendarClock className="h-4 w-4" /> Call Today at 04:00 PM
                </div>
                <div className="space-y-2.5 text-[13px]">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Assigned To</span>
                    <span className="flex items-center gap-1.5 font-medium text-gray-700">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">V</span>
                      Vivek
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Reminder</span>
                    <span className="text-gray-700">in 15m before</span>
                  </div>
                </div>
                <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 py-2 text-[13px] font-semibold text-blue-600">
                  <CheckSquare className="h-3.5 w-3.5" /> Mark as Completed
                </button>
              </div>

              {/* Quick Actions */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <h3 className="mb-3 text-[14px] font-semibold text-gray-800">Quick Actions</h3>
                <div className="space-y-2">
                  {[
                    { label: "Add Note", icon: ChevronRight },
                    { label: "Schedule Appointment", icon: CalendarClock },
                    { label: "Add Task", icon: CheckSquare },
                    { label: "Send WhatsApp", icon: Send },
                    { label: "Upload Document", icon: Upload },
                  ].map(({ label, icon: Icon }) => (
                    <button
                      key={label}
                      className="flex w-full items-center justify-between rounded-lg bg-blue-50 px-3.5 py-2.5 text-[13px] font-semibold text-blue-600"
                    >
                      {label}
                      <Icon className="h-3.5 w-3.5" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}