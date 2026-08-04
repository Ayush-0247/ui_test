import React from "react";
import {
  ChevronDown,
  ChevronRight,
  Filter,
  UploadCloud,
  Download,
  MoreVertical,
  CheckSquare,
  Send,
  FileUp,
  FileText,
  FileSpreadsheet,
  Image as ImageIcon,
  File,
  Search,
  UserCircle2,
} from "lucide-react";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import Steps from "../components/Steps";

/* ---------- Tabs ---------- */

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

function Tabs({ active }) {
  return (
    <div className="flex items-center gap-6 border-b border-gray-200 mb-5 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`text-[13.5px] pb-3 whitespace-nowrap ${
            tab === active
              ? "text-blue-600 font-semibold border-b-2 border-blue-600"
              : "text-gray-500 font-medium"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

/* ---------- Documents table ---------- */

const documents = [
  {
    name: "Initial Consultation Report.pdf",
    desc: "Consultation summary and recommendations",
    type: "PDF",
    typeColor: "bg-red-50 text-red-500",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    Icon: FileText,
    by: "Vivek",
    byTag: "(Connector)",
    date: "30 Jul 2025",
    time: "10:30 AM",
    size: "1.24 MB",
    category: "Consultation",
    catColor: "bg-blue-50 text-blue-600",
  },
  {
    name: "Treatment Cost Estimate.xlsx",
    desc: "Estimated cost breakdown",
    type: "XLSX",
    typeColor: "bg-green-50 text-green-600",
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
    Icon: FileSpreadsheet,
    by: "Vivek",
    byTag: "(Connector)",
    date: "30 Jul 2025",
    time: "11:15 AM",
    size: "342 KB",
    category: "Financial",
    catColor: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Lab Test Report.pdf",
    desc: "Blood test and hormone profile",
    type: "PDF",
    typeColor: "bg-red-50 text-red-500",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    Icon: FileText,
    by: "Dr. Mehta",
    byTag: "(Fertility Specialist)",
    avatar: "DM",
    date: "02 Aug 2025",
    time: "11:00 AM",
    size: "2.18 MB",
    category: "Medical",
    catColor: "bg-purple-50 text-purple-600",
  },
  {
    name: "Insurance Card.jpg",
    desc: "Health insurance document",
    type: "JPG",
    typeColor: "bg-blue-50 text-blue-500",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    Icon: ImageIcon,
    by: "Vivek",
    byTag: "(Connector)",
    date: "02 Aug 2025",
    time: "11:05 AM",
    size: "512 KB",
    category: "Insurance",
    catColor: "bg-amber-50 text-amber-600",
  },
  {
    name: "Treatment Plan.pdf",
    desc: "Proposed treatment plan and timeline",
    type: "PDF",
    typeColor: "bg-red-50 text-red-500",
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
    Icon: FileText,
    by: "Dr. Mehta",
    byTag: "(Fertility Specialist)",
    avatar: "DM",
    date: "08 Aug 2025",
    time: "02:20 PM",
    size: "1.76 MB",
    category: "Treatment Plan",
    catColor: "bg-indigo-50 text-indigo-600",
  },
  {
    name: "Consent Form.docx",
    desc: "Patient consent form",
    type: "DOCX",
    typeColor: "bg-sky-50 text-sky-600",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-600",
    Icon: File,
    by: "Lab Team",
    byTag: "",
    avatarIcon: true,
    date: "15 Aug 2025",
    time: "04:30 PM",
    size: "89 KB",
    category: "Legal",
    catColor: "bg-gray-100 text-gray-600",
  },
];

function DocumentsPanel() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-[16px] font-bold text-gray-900">Documents</h3>
          <p className="text-[13px] text-gray-500 mt-0.5">
            All documents and files uploaded or shared for this lead.
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 w-56">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[13px] text-gray-400">Search documents...</span>
          </div>
          <button className="flex items-center gap-1.5 border border-gray-200 text-gray-700 text-[13px] font-medium px-3.5 py-2 rounded-lg">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
          <button className="flex items-center gap-1.5 bg-blue-600 text-white text-[13px] font-medium px-3.5 py-2 rounded-lg">
            <UploadCloud className="w-3.5 h-3.5" />
            Upload Document
          </button>
        </div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-[12px] text-gray-400 font-semibold border-b border-gray-100">
            <th className="py-2.5 font-semibold">Document Name</th>
            <th className="py-2.5 font-semibold">Type</th>
            <th className="py-2.5 font-semibold">Uploaded By</th>
            <th className="py-2.5 font-semibold">Uploaded On</th>
            <th className="py-2.5 font-semibold">Size</th>
            <th className="py-2.5 font-semibold">Category</th>
            <th className="py-2.5 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.name} className="border-b border-gray-50">
              <td className="py-3.5 pr-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${doc.iconBg}`}
                  >
                    <doc.Icon className={`w-4 h-4 ${doc.iconColor}`} />
                  </div>
                  <div>
                    <div className="text-[13.5px] font-medium text-gray-800">{doc.name}</div>
                    <div className="text-[12px] text-gray-400">{doc.desc}</div>
                  </div>
                </div>
              </td>
              <td className="py-3.5 pr-4">
                <span className={`text-[11px] font-semibold px-2 py-1 rounded ${doc.typeColor}`}>
                  {doc.type}
                </span>
              </td>
              <td className="py-3.5 pr-4">
                <div className="flex items-center gap-2">
                  {doc.avatarIcon ? (
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <UserCircle2 className="w-4 h-4 text-gray-400" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-semibold">
                      {doc.avatar || "V"}
                    </div>
                  )}
                  <div className="leading-tight">
                    <div className="text-[13px] text-gray-700">{doc.by}</div>
                    {doc.byTag && (
                      <div className="text-[11px] text-gray-400">{doc.byTag}</div>
                    )}
                  </div>
                </div>
              </td>
              <td className="py-3.5 pr-4">
                <div className="text-[13px] text-gray-700">{doc.date}</div>
                <div className="text-[11px] text-gray-400">{doc.time}</div>
              </td>
              <td className="py-3.5 pr-4 text-[13px] text-gray-600">{doc.size}</td>
              <td className="py-3.5 pr-4">
                <span className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${doc.catColor}`}>
                  {doc.category}
                </span>
              </td>
              <td className="py-3.5">
                <div className="flex items-center gap-3 text-gray-400">
                  <Download className="w-4 h-4 cursor-pointer hover:text-gray-600" />
                  <MoreVertical className="w-4 h-4 cursor-pointer hover:text-gray-600" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center mt-5">
        <button className="flex items-center gap-1.5 border border-gray-200 text-gray-600 text-[13px] font-medium px-4 py-2 rounded-lg">
          Load More
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- Right sidebar ---------- */

function SummaryRow({ label, children }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-[13px] text-gray-400">{label}</span>
      <span className="text-[13px] font-medium text-gray-800">{children}</span>
    </div>
  );
}

function LeadSummary() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-5">
      <h3 className="text-[15px] font-bold text-gray-900 mb-2">Lead Summary</h3>
      <div className="divide-y divide-gray-50">
        <SummaryRow label="Current Stage">
          <span className="bg-blue-50 text-blue-600 text-[11px] font-semibold px-2.5 py-1 rounded-full">
            Contacted
          </span>
        </SummaryRow>
        <SummaryRow label="Assigned To">
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-semibold">
              V
            </span>
            Vivek
          </span>
        </SummaryRow>
        <SummaryRow label="Lead Score">--</SummaryRow>
        <SummaryRow label="Lead Value">
          <span className="bg-green-50 text-green-600 text-[11px] font-semibold px-2.5 py-1 rounded-full">
            High
          </span>
        </SummaryRow>
        <SummaryRow label="First Enquiry">30 Jul, 2025</SummaryRow>
        <SummaryRow label="Last Contacted">30 Jul, 2025</SummaryRow>
        <SummaryRow label="Next Follow-up">
          <span className="text-red-500 font-semibold">Today, 04:00 PM</span>
        </SummaryRow>
      </div>
    </div>
  );
}

function NextAction() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-5">
      <h3 className="text-[15px] font-bold text-gray-900 mb-3">Next Action</h3>
      <div className="text-[14px] font-semibold text-red-500 mb-3">
        Call Today at 04:00 PM
      </div>
      <div className="flex items-center justify-between py-1.5">
        <span className="text-[13px] text-gray-400">Assigned To</span>
        <span className="flex items-center gap-1.5 text-[13px] font-medium text-gray-800">
          <span className="w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-semibold">
            V
          </span>
          Vivek
        </span>
      </div>
      <div className="flex items-center justify-between py-1.5 mb-4">
        <span className="text-[13px] text-gray-400">Reminder</span>
        <span className="text-[13px] font-medium text-gray-800">in 15m before</span>
      </div>
      <button className="w-full flex items-center justify-center gap-2 border border-blue-200 text-blue-600 text-[13.5px] font-semibold py-2.5 rounded-lg hover:bg-blue-50">
        <CheckSquare className="w-4 h-4" />
        Mark as Completed
      </button>
    </div>
  );
}

function QuickActionBtn({ icon: Icon, label }) {
  return (
    <button className="w-full flex items-center justify-between border border-blue-100 bg-blue-50/40 text-blue-600 text-[13.5px] font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-50">
      {label}
      <Icon className="w-4 h-4" />
    </button>
  );
}

function QuickActions() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5">
      <h3 className="text-[15px] font-bold text-gray-900 mb-3">Quick Actions</h3>
      <div className="space-y-2">
        <QuickActionBtn icon={ChevronRight} label="Add Note" />
        <QuickActionBtn icon={FileUp} label="Schedule Appointment" />
        <QuickActionBtn icon={CheckSquare} label="Add Task" />
        <QuickActionBtn icon={Send} label="Send WhatsApp" />
        <QuickActionBtn icon={UploadCloud} label="Upload Document" />
      </div>
    </div>
  );
}

/* ---------- App ---------- */

export default function LifelinkrLeadDetail() {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen font-sans text-gray-900">
      {/* Global Top Bar */}
      <LifelinkrTopBar />

      <div className="flex flex-1 min-h-0">
        {/* Global Sidebar */}
        <LifelinkrAsidebar />

        <div className="flex-1 min-w-0">
          <div className="p-6">
            {/* Global Lead Header */}
            <LifelinkrLeadHeader />

            <div className="grid grid-cols-[1fr_320px] gap-5 items-start mt-5">
              <div className="min-w-0">
                {/* Steps (global) */}
                <Steps />
                <div className="mt-5">
                  <Tabs active="Documents" />
                  <DocumentsPanel />
                </div>
              </div>
              <div>
                <LeadSummary />
                <NextAction />
                <QuickActions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}