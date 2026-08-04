import { useState } from "react";
import {
  ChevronDown, MoreVertical, Filter, UploadCloud, Download, Search,
  UserCircle2, FileText, FileSpreadsheet, Image as ImageIcon, File,
} from "lucide-react";
import LifelinkrPageLayout from "../components/LifelinkrPageLayout";
import LifelinkrAsidebar from "../components/LifelinkrAsidebar";
import LifelinkrTopBar from "../components/LifelinkrTopBar";
import LifelinkrLeadHeader from "../components/LifelinkrLeadHeader";
import LifelinkrTabNav from "../components/LifelinkrTabNav";
import LifelinkrRightSidebar from "../components/LifelinkrRightSidebar";
import Steps from "../components/Steps";

/* ─── data ──────────────────────────────────────────────────── */

const documents = [
  { name: "Initial Consultation Report.pdf", desc: "Consultation summary and recommendations", type: "PDF", typeCls: "bg-red-50 text-red-500", iconBg: "bg-red-50", iconColor: "text-red-500", Icon: FileText, by: "Vivek", byTag: "(Connector)", date: "30 Jul 2025", time: "10:30 AM", size: "1.24 MB", cat: "Consultation", catCls: "bg-blue-50 text-blue-600" },
  { name: "Treatment Cost Estimate.xlsx", desc: "Estimated cost breakdown", type: "XLSX", typeCls: "bg-green-50 text-green-700", iconBg: "bg-green-50", iconColor: "text-green-600", Icon: FileSpreadsheet, by: "Vivek", byTag: "(Connector)", date: "30 Jul 2025", time: "11:15 AM", size: "342 KB", cat: "Financial", catCls: "bg-emerald-50 text-emerald-700" },
  { name: "Lab Test Report.pdf", desc: "Blood test and hormone profile", type: "PDF", typeCls: "bg-red-50 text-red-500", iconBg: "bg-red-50", iconColor: "text-red-500", Icon: FileText, by: "Dr. Mehta", byTag: "(Fertility Specialist)", avatar: "DM", date: "02 Aug 2025", time: "11:00 AM", size: "2.18 MB", cat: "Medical", catCls: "bg-purple-50 text-purple-600" },
  { name: "Insurance Card.jpg", desc: "Health insurance document", type: "JPG", typeCls: "bg-blue-50 text-blue-500", iconBg: "bg-blue-50", iconColor: "text-blue-500", Icon: ImageIcon, by: "Vivek", byTag: "(Connector)", date: "02 Aug 2025", time: "11:05 AM", size: "512 KB", cat: "Insurance", catCls: "bg-amber-50 text-amber-600" },
  { name: "Treatment Plan.pdf", desc: "Proposed treatment plan and timeline", type: "PDF", typeCls: "bg-red-50 text-red-500", iconBg: "bg-red-50", iconColor: "text-red-500", Icon: FileText, by: "Dr. Mehta", byTag: "(Fertility Specialist)", avatar: "DM", date: "08 Aug 2025", time: "02:20 PM", size: "1.76 MB", cat: "Treatment Plan", catCls: "bg-indigo-50 text-indigo-600" },
  { name: "Consent Form.docx", desc: "Patient consent form", type: "DOCX", typeCls: "bg-sky-50 text-sky-600", iconBg: "bg-sky-50", iconColor: "text-sky-600", Icon: File, by: "Lab Team", byTag: "", noAvatar: true, date: "15 Aug 2025", time: "04:30 PM", size: "89 KB", cat: "Legal", catCls: "bg-gray-100 text-gray-600" },
];

/* ─── component ─────────────────────────────────────────────── */

export default function LifelinkrDocument() {
  const [activeTab, setActiveTab] = useState("Documents");

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

                {/* Documents content */}
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h2 className="text-[15px] font-semibold text-gray-900">Documents</h2>
                      <p className="text-[13px] text-gray-500 mt-0.5">
                        All documents and files uploaded or shared for this lead.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2">
                        <Search size={13} className="text-gray-400" />
                        <span className="text-[13px] text-gray-400">Search documents...</span>
                      </div>
                      <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3.5 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                        <Filter size={13} /> Filter
                      </button>
                      <button className="flex items-center gap-1.5 rounded-lg border border-blue-200 bg-blue-50 px-3.5 py-2 text-[13px] font-semibold text-blue-600 hover:bg-blue-100 transition-colors">
                        <UploadCloud size={13} /> Upload Document
                      </button>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-gray-100">
                          {["Document Name", "Type", "Uploaded By", "Uploaded On", "Size", "Category", "Actions"].map((h) => (
                            <th key={h} className="pb-3 pr-4 text-[11.5px] font-semibold text-gray-400 uppercase tracking-wide">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {documents.map((doc) => (
                          <tr key={doc.name} className="border-t border-gray-100 align-top">
                            <td className="py-3 pr-4">
                              <div className="flex items-center gap-3">
                                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${doc.iconBg}`}>
                                  <doc.Icon size={16} className={doc.iconColor} />
                                </div>
                                <div>
                                  <div className="text-[13px] font-medium text-gray-800">{doc.name}</div>
                                  <div className="text-[12px] text-gray-400">{doc.desc}</div>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 pr-4">
                              <span className={`inline-block rounded px-2 py-0.5 text-[11px] font-semibold ${doc.typeCls}`}>
                                {doc.type}
                              </span>
                            </td>
                            <td className="py-3 pr-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                {doc.noAvatar ? (
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                                    <UserCircle2 size={14} className="text-gray-400" />
                                  </div>
                                ) : (
                                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                                    {doc.avatar || "V"}
                                  </div>
                                )}
                                <div>
                                  <div className="text-[13px] font-medium text-gray-800">{doc.by}</div>
                                  {doc.byTag && <div className="text-[12px] text-gray-400">{doc.byTag}</div>}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 pr-4">
                              <div className="text-[13px] font-medium text-gray-800">{doc.date}</div>
                              <div className="text-[12px] text-gray-400">{doc.time}</div>
                            </td>
                            <td className="py-3 pr-4 text-[13px] text-gray-600">{doc.size}</td>
                            <td className="py-3 pr-4">
                              <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11.5px] font-semibold ${doc.catCls}`}>
                                {doc.cat}
                              </span>
                            </td>
                            <td className="py-3">
                              <div className="flex items-center gap-3 text-gray-400">
                                <Download size={15} className="cursor-pointer hover:text-gray-600" />
                                <MoreVertical size={15} className="cursor-pointer hover:text-gray-600" />
                              </div>
                            </td>
                          </tr>
                        ))}
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