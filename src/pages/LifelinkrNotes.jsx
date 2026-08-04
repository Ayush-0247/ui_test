import { useState } from "react";
import {
  Search,
  Bell,
  Globe,
  ChevronDown,
  ArrowLeft,
  Phone,
  Mail,
  Pencil,
  Plus,
  MoreVertical,
  CalendarDays,
  CheckSquare,
  ChevronsRight,
  CheckCircle2,
  List,
} from "lucide-react";

import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import Steps from "../components/Steps";
const NAVY = "#1B2559";
const BLUE = "#2E5AF0";

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2c-5.514 0-9.99 4.476-9.99 9.99 0 1.76.464 3.483 1.345 5.003L2 22l5.126-1.345a9.958 9.958 0 004.913 1.28h.004c5.514 0 9.99-4.476 9.99-9.99C22.033 6.476 17.557 2 12.04 2zm0 18.19h-.003a8.19 8.19 0 01-4.174-1.14l-.3-.178-3.043.799.812-2.968-.195-.305a8.185 8.185 0 01-1.257-4.404c0-4.53 3.687-8.217 8.223-8.217 2.197 0 4.26.856 5.815 2.412a8.163 8.163 0 012.408 5.813c0 4.53-3.688 8.188-8.286 8.188z" />
    </svg>
  );
}



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

const notes = [
  {
    title: "Initial discussion summary",
    body: "Spoke with Inderjeet. Interested in IVF. Basic details collected.",
    by: "Vivek (Connector)",
    date: "30 Jul 2025, 07:45 AM",
    tag: "Important",
    tagClasses: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    title: "Financial discussion",
    body: "Discussed approx. budget range \u20b92 - \u20b93 Lakh. Looking for EMI options.",
    by: "Vivek (Connector)",
    date: "30 Jul 2025, 11:20 AM",
    tag: "Financial",
    tagClasses: "bg-blue-100 text-blue-600",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Preferred doctor",
    body: "Lead prefers appointment with Dr. Mehta (Fertility Specialist).",
    by: "Vivek (Connector)",
    date: "30 Jul 2025, 02:15 PM",
    tag: "Preference",
    tagClasses: "bg-green-100 text-green-700",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Follow-up reminder",
    body: "Requested to share test reports. Will follow up tomorrow.",
    by: "Vivek (Connector)",
    date: "30 Jul 2025, 04:00 PM",
    tag: "Reminder",
    tagClasses: "bg-indigo-100 text-indigo-600",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
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
      <path d="M9 13h4" />
      <path d="M9 17h2.5" />
    </svg>
  );
}

function TopBar() {
  return (
    <header className="flex flex-wrap items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:gap-4 sm:px-6">
      {/* Sidebar toggle — wire this to your global sidebar's open/collapse handler */}
      <button
        className="shrink-0 text-slate-500 hover:text-slate-700"
        aria-label="Toggle sidebar"
      >
        <List className="h-5 w-5" />
      </button>

      <div className="order-3 w-full flex-1 sm:order-none sm:w-auto">
        <div className="flex w-full items-center gap-2 rounded-lg bg-slate-100 px-3.5 py-2.5 sm:max-w-md">
          <Search className="h-4 w-4 shrink-0 text-slate-400" />
          <input
            placeholder="Search by name, phone, email, UHID..."
            className="w-full bg-transparent text-[13.5px] text-slate-600 placeholder:text-slate-400 focus:outline-none"
          />
          <span className="hidden shrink-0 text-[12px] font-medium text-slate-400 sm:block">
            ⌘ K
          </span>
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4 sm:gap-5">
        <button
          className="relative text-slate-500 hover:text-slate-700"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span
            className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
            style={{ backgroundColor: BLUE }}
          >
            2
          </span>
        </button>
        <button className="hidden items-center gap-1 text-[13px] font-medium text-slate-500 hover:text-slate-700 sm:flex">
          <Globe className="h-[18px] w-[18px]" />
          EN
          <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="hidden text-right leading-tight sm:block">
            <div
              className="text-[13.5px] font-semibold"
              style={{ color: NAVY }}
            >
              Vivek
            </div>
            <div className="text-[11px] text-slate-400">Connector</div>
          </div>
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
            style={{ backgroundColor: BLUE }}
          >
            V
          </div>
        </div>
      </div>
    </header>
  );
}

function ActionButton({ icon: Icon, iconClass, children }) {
  return (
    <button
      className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-[13px] font-semibold hover:bg-slate-50"
      style={{ color: NAVY }}
    >
      <Icon className={`h-4 w-4 ${iconClass}`} />
      {children}
    </button>
  );
}

function LeadHeader() {
  return (
    <div className="border-b border-slate-100 bg-white px-4 pb-5 pt-4 sm:px-6">
      <a
        href="#"
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold"
        style={{ color: BLUE }}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to All Leads
      </a>

      <div className="mt-4 flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
        <div className="flex items-start gap-4">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-[20px] font-bold"
            style={{ backgroundColor: "#EAF0FF", color: BLUE }}
          >
            IS
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2.5">
              <h1 className="text-[20px] font-bold" style={{ color: NAVY }}>
                Inderjeet Singh
              </h1>
              <span className="rounded-full bg-orange-100 px-3 py-1 text-[11.5px] font-semibold text-orange-600">
                Contacted
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-slate-500">
              <span>L-1012</span>
              <span>•</span>
              <span>UHID: UH-25-000123</span>
              <span>•</span>
              <span>Source: Google Ads</span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px]">
              <span
                className="flex items-center gap-1.5"
                style={{ color: NAVY }}
              >
                <Phone className="h-3.5 w-3.5" style={{ color: BLUE }} />
                +91 98765 43210
              </span>
              <span
                className="flex items-center gap-1.5"
                style={{ color: NAVY }}
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-green-500" />
                WhatsApp
              </span>
              <span
                className="flex items-center gap-1.5"
                style={{ color: NAVY }}
              >
                <Mail className="h-3.5 w-3.5" style={{ color: BLUE }} />
                inderjeet.singh@example.com
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <ActionButton icon={Phone} iconClass="text-blue-600">
            Call
          </ActionButton>
          <ActionButton icon={WhatsAppIcon} iconClass="text-green-500">
            WhatsApp
          </ActionButton>
          <ActionButton icon={Mail} iconClass="text-blue-600">
            Email
          </ActionButton>
          <ActionButton icon={Pencil} iconClass="text-blue-600">
            Edit
          </ActionButton>
          <button
            className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-[13px] font-semibold text-white"
            style={{ backgroundColor: BLUE }}
          >
            More
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}



function Tabs({ active, setActive }) {
  return (
    <div className="overflow-x-auto border-b border-slate-200">
      <div className="flex min-w-max items-center gap-6 px-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`whitespace-nowrap border-b-2 py-3 text-[13.5px] font-semibold transition-colors ${
              active === t
                ? "border-blue-600"
                : "border-transparent hover:text-slate-700"
            }`}
            style={{ color: active === t ? BLUE : NAVY }}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}

function NotesSection() {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-[16px] font-bold" style={{ color: NAVY }}>
            Notes
          </h2>
          <p className="text-[13px] text-slate-500">
            All notes and observations added for this lead.
          </p>
        </div>
        <button
          className="flex items-center gap-1.5 rounded-lg border px-4 py-2 text-[13px] font-semibold"
          style={{ borderColor: "#C7D4FE", color: BLUE }}
        >
          <Plus className="h-4 w-4" />
          Add Note
        </button>
      </div>

      <div className="mt-4 space-y-3">
        {notes.map((note) => (
          <div
            key={note.title}
            className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-start"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${note.iconBg}`}
            >
              <NoteIcon className={`h-5 w-5 ${note.iconColor}`} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold" style={{ color: NAVY }}>
                {note.title}
              </div>
              <p className="mt-0.5 text-[13.5px] text-slate-600">{note.body}</p>
              <p className="mt-1.5 text-[12px] text-slate-400">
                Added by {note.by} • {note.date}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
              <span
                className={`rounded-full px-3 py-1 text-[11.5px] font-semibold ${note.tagClasses}`}
              >
                {note.tag}
              </span>
              <button
                className="text-slate-400 hover:text-slate-600"
                aria-label="More options"
              >
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <button
          className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-5 py-2 text-[13px] font-semibold"
          style={{ color: NAVY }}
        >
          Load More
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function SummaryRow({ label, children }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-[13px] text-slate-500">{label}</span>
      <div className="text-[13px]">{children}</div>
    </div>
  );
}

function LeadSummaryCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-[14.5px] font-bold" style={{ color: NAVY }}>
        Lead Summary
      </h3>
      <div className="mt-1 divide-y divide-slate-100">
        <SummaryRow label="Current Stage">
          <span className="rounded-full bg-orange-100 px-3 py-1 text-[11.5px] font-semibold text-orange-600">
            Contacted
          </span>
        </SummaryRow>
        <SummaryRow label="Assigned To">
          <span
            className="flex items-center gap-1.5 font-semibold"
            style={{ color: NAVY }}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: BLUE }}
            >
              V
            </span>
            Vivek
          </span>
        </SummaryRow>
        <SummaryRow label="Lead Score">
          <span className="text-slate-400">--</span>
        </SummaryRow>
        <SummaryRow label="Lead Value">
          <span className="rounded-full bg-green-100 px-3 py-1 text-[11.5px] font-semibold text-green-700">
            High
          </span>
        </SummaryRow>
        <SummaryRow label="First Enquiry">
          <span className="font-semibold" style={{ color: NAVY }}>
            30 Jul, 2025
          </span>
        </SummaryRow>
        <SummaryRow label="Last Contacted">
          <span className="font-semibold" style={{ color: NAVY }}>
            30 Jul, 2025
          </span>
        </SummaryRow>
        <SummaryRow label="Next Follow-up">
          <span className="font-semibold text-red-500">Today, 04:00 PM</span>
        </SummaryRow>
      </div>
    </div>
  );
}

function NextActionCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-[14.5px] font-bold" style={{ color: NAVY }}>
        Next Action
      </h3>
      <p className="mt-3 text-[15px] font-bold text-red-500">
        Call Today at 04:00 PM
      </p>

      <div className="mt-3 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-slate-500">Assigned To</span>
          <span
            className="flex items-center gap-1.5 font-semibold"
            style={{ color: NAVY }}
          >
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ backgroundColor: BLUE }}
            >
              V
            </span>
            Vivek
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[13px] text-slate-500">Reminder</span>
          <span className="font-semibold" style={{ color: NAVY }}>
            in 15m before
          </span>
        </div>
      </div>

      <button
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border py-2.5 text-[13.5px] font-semibold"
        style={{ borderColor: "#C7D4FE", color: BLUE }}
      >
        <CheckCircle2 className="h-4 w-4" />
        Mark as Completed
      </button>
    </div>
  );
}

function QuickActionsCard() {
  const actions = [
    { label: "Add Note", icon: ChevronsRight, iconClass: "" },
    { label: "Schedule Appointment", icon: CalendarDays, iconClass: "" },
    { label: "Add Task", icon: CheckSquare, iconClass: "" },
    { label: "Send WhatsApp", icon: WhatsAppIcon, iconClass: "text-green-500" },
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h3 className="text-[14.5px] font-bold" style={{ color: NAVY }}>
        Quick Actions
      </h3>
      <div className="mt-3 space-y-2.5">
        {actions.map(({ label, icon: Icon, iconClass }) => (
          <button
            key={label}
            className="flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-[13.5px] font-semibold"
            style={{ borderColor: "#C7D4FE", color: BLUE }}
          >
            {label}
            <Icon
              className={`h-4 w-4 ${iconClass}`}
              style={!iconClass ? { color: BLUE } : undefined}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function LeadDetailPage() {
  const [activeTab, setActiveTab] = useState("Notes");

  return (
    <div
      className="min-h-screen bg-slate-50"
      style={{
        fontFamily: "'Baloo 2', ui-rounded, system-ui, sans-serif",
      }}
    >
      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <LifelinkrAsidebar />

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <TopBar />

          <LeadHeader />

          <div className="mx-auto max-w-[1600px] px-4 py-5 sm:px-6">
            <div className="flex flex-col gap-5 lg:flex-row">
              {/* Left Section */}
              <div className="flex-1 space-y-5 min-w-0">
                <Steps />

                <Tabs active={activeTab} setActive={setActiveTab} />

                {activeTab === "Notes" ? (
                  <NotesSection />
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-400">
                    {activeTab} tab content goes here.
                  </div>
                )}
              </div>

              {/* Right Section */}
              <div className="w-full lg:w-[320px] shrink-0 space-y-5">
                <LeadSummaryCard />
                <NextActionCard />
                <QuickActionsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
