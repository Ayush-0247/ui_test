const TABS = [
  "Overview",
  "Timeline",
  "Interactions",
  "Appointments",
  "Notes",
  "Documents",
  "Tasks",
  "History",
];

export default function LifelinkrTabNav({ activeTab, onTabChange }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="flex items-center overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange?.(tab)}
            className={[
              "px-4 py-3.5 text-[13px] whitespace-nowrap border-b-2 -mb-px transition-colors shrink-0",
              activeTab === tab
                ? "border-blue-600 text-blue-600 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-700 font-medium",
            ].join(" ")}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
