
import { Check } from "lucide-react";

const leadJourneyData = {
  currentStageId: 2,
  stages: [
    { id: 1, label: "Query", date: "29 Jul", status: "completed" },
    { id: 2, label: "Contacted", date: "30 Jul", status: "current" },
    { id: 3, label: "IVF Relevant", date: null, status: "upcoming" },
    { id: 4, label: "Follow Up", date: null, status: "upcoming" },
    { id: 5, label: "Agree to Visit", date: null, status: "upcoming" },
    { id: 6, label: "Appointment", date: null, status: "upcoming" },
    { id: 7, label: "Visited", date: null, status: "upcoming" },
    { id: 8, label: "Registered", date: null, status: "upcoming" },
    { id: 9, label: "Lost", date: null, status: "upcoming" },
  ],
};

export default function LeadJourney({ data = leadJourneyData }) {
  const { stages } = data;

  const completedCount = stages.filter(
    (s) => s.status === "completed" || s.status === "current"
  ).length;
  
  const totalCount = stages.length;
  const percentComplete = Math.round((completedCount / totalCount) * 100);

  // Find the furthest stage that is 'current' or 'completed' to draw the blue line
  const activeIndex = stages.findLastIndex(
    (s) => s.status === "completed" || s.status === "current"
  );
  
  // Calculate the progress width for the background stepper line
  const lineProgressPercentage =
    stages.length > 1 ? (Math.max(0, activeIndex) / (stages.length - 1)) * 100 : 0;

  return (
    <div className="w-full mt-5 rounded-[14px] border border-gray-100 bg-white py-2.5 px-6 shadow-sm font-sans">
      <h2 className="text-[14px] font-bold text-slate-800 mb-4">
        Lead Journey
      </h2>

      {/* Stepper Section */}
      <div className="relative w-full mb-10 px-2">
        {/* Continuous Track Line (Background & Filled) */}
        <div className="absolute top-1/2 left-0 w-full px-5 -translate-y-1/2 z-0">
          <div className="relative w-full h-[2px] bg-gray-100">
            <div
              className="absolute left-0 top-0 h-full bg-blue-600 transition-all duration-500 ease-in-out"
              style={{ width: `${lineProgressPercentage}%` }}
            />
          </div>
        </div>

        {/* Nodes */}
        <div className="relative flex justify-between items-center w-full z-10">
          {stages.map((stage) => {
            const isCompleted = stage.status === "completed";
            const isCurrent = stage.status === "current";

            return (
              <div key={stage.id} className="relative flex flex-col items-center">
                {/* Stage Circle */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold z-10 relative transition-colors
                    ${
                      isCompleted || isCurrent
                        ? "bg-blue-600 text-white"
                        : "bg-white border-[1.5px] border-gray-200 text-slate-500"
                    }
                  `}
                >
                  {isCompleted ? (
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  ) : (
                    stage.id
                  )}
                </div>

                {/* Labels (Absolutely positioned so they don't break the flex container's vertical centering) */}
                <div className="absolute top-8.5 left-1/2 -translate-x-1/2 flex flex-col items-center w-20">
                  <span
                    className={`text-[11px] whitespace-nowrap ${
                      isCompleted || isCurrent
                        ? "font-bold text-slate-800"
                        : "font-medium text-slate-500"
                    }`}
                  >
                    {stage.label}
                  </span>
                  <span className="text-[10px] font-medium text-slate-400 mt-0.5">
                    {stage.date || "\u00A0"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="flex items-center mt-4 pt-2.5 border-t border-gray-50">
        <span className="text-xs font-bold text-slate-800 whitespace-nowrap pr-2">
          Journey Progress
        </span>
        
        <div className="w-48 h-[4px] rounded-full bg-gray-100 overflow-hidden mx-4 shrink-0">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${percentComplete}%` }}
          />
        </div>
        
        <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
          Completed: {completedCount} / {totalCount} stages
        </span>
        
        {/* Flexible spacer to push the percentage to the right */}
        <div className="flex-1" />
        
        <span className="text-xs font-bold text-[#64748b] whitespace-nowrap">
          {percentComplete}% Complete
        </span>
      </div>
    </div>
  );
}