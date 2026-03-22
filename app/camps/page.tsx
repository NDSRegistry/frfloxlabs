import { camps, getSdg } from "@/lib/data"
import SectionHeader from "@/components/SectionHeader"

export default function CampsPage() {
  return (
    <div className="page-in py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="Events"
          title="Labs & Camps"
          subtitle="Workshops, hackathons, and innovation camps."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7 stagger-grid">
          {camps.map((camp) => {
            const pct = Math.round(
              (camp.registered / camp.totalSpots) * 100
            )
            const full = camp.registered >= camp.totalSpots

            return (
              <div
                key={camp.id}
                className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-md hover:border-neutral-300 transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-1.5 text-neutral-400 text-[13px]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <rect x="2" y="3" width="12" height="11" rx="1.5" />
                      <line x1="2" y1="7" x2="14" y2="7" />
                      <line x1="5" y1="1" x2="5" y2="4" />
                      <line x1="11" y1="1" x2="11" y2="4" />
                    </svg>
                    {camp.dateRange}
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-[2px] rounded-full ${
                      full
                        ? "bg-red-50 text-red-500"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {full ? "Full" : "Open"}
                  </span>
                </div>

                <h3 className="text-[18px] font-semibold tracking-tight mt-3">
                  {camp.title}
                </h3>

                <p className="text-[13.5px] text-neutral-500 leading-relaxed mt-1.5">
                  {camp.description}
                </p>

                {/* SDG tags */}
                <div className="flex gap-1 flex-wrap mt-3">
                  {camp.sdgIds.map((id) => {
                    const s = getSdg(id)
                    if (!s) return null
                    return (
                      <span
                        key={id}
                        className="px-1.5 py-[1px] rounded text-white text-[10px] font-medium"
                        style={{ background: s.color }}
                      >
                        {s.id}. {s.name}
                      </span>
                    )
                  })}
                </div>

                {/* Meta */}
                <div className="flex justify-between text-[12px] text-neutral-400 mt-4">
                  <span>{camp.location}</span>
                  <span>
                    {camp.registered}/{camp.totalSpots} registered
                  </span>
                </div>

                {/* Progress bar */}
                <div className="h-[3px] bg-neutral-100 rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-neutral-900 rounded-full transition-all"
                    style={{ width: `${Math.min(pct, 100)}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
