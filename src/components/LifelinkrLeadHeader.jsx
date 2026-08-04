import {
  ArrowLeft,
  Phone,
  Mail,
  Pencil,
  ChevronDown,
} from "lucide-react";

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


export default function LifelinkrLeadHeader({ onBack }) {
  return (
    <div className="border-b border-slate-100 bg-white px-4 pb-5 pt-4 sm:px-6">
      {/* Back link */}
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); onBack?.(); }}
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
              <span className="flex items-center gap-1.5" style={{ color: NAVY }}>
                <Phone className="h-3.5 w-3.5" style={{ color: BLUE }} />
                +91 98765 43210
              </span>
              <span className="flex items-center gap-1.5" style={{ color: NAVY }}>
                <WhatsAppIcon className="h-3.5 w-3.5 text-green-500" />
                WhatsApp
              </span>
              <span className="flex items-center gap-1.5" style={{ color: NAVY }}>
                <Mail className="h-3.5 w-3.5" style={{ color: BLUE }} />
                inderjeet.singh@example.com
              </span>
            </div>
          </div>
        </div>

        {/* Right: action buttons */}
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
