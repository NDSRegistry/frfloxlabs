import { type Project, getProjectSdgs } from "@/lib/data"

function SDGDot({ color, name }: { color: string; name: string }) {
  return (
    <span
      className="inline-flex items-center px-1.5 py-[1px] rounded text-white text-[10px] font-medium leading-tight"
      style={{ background: color }}
    >
      {name}
    </span>
  )
}

export default function ProjectCard({ project }: { project: Project }) {
  const sdgList = getProjectSdgs(project)
  const primary = sdgList[0]?.color || "#e5e5e5"
  const secondary = sdgList[1]?.color || primary

  return (
    <div className="group bg-white border border-neutral-200 rounded-xl overflow-hidden transition-all hover:shadow-md hover:border-neutral-300">
      {/* Visual header */}
      <div className="h-[140px] bg-neutral-50 relative overflow-hidden flex items-center justify-center">
        <svg
          className="absolute inset-0 opacity-25"
          width="100%"
          height="100%"
          viewBox="0 0 400 140"
          preserveAspectRatio="none"
        >
          <circle cx="320" cy="20" r="90" fill={primary} opacity="0.08" />
          <circle cx="60" cy="120" r="70" fill={secondary} opacity="0.06" />
          <rect
            width="400"
            height="140"
            fill="url(#g)"
            opacity="0.05"
          />
        </svg>
        <span className="font-display text-3xl text-neutral-300 relative z-10 group-hover:text-neutral-400 transition-colors">
          {project.title.charAt(0)}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-[15px] font-semibold tracking-tight leading-snug">
            {project.title}
          </h3>
          <span
            className={`shrink-0 text-[10px] font-semibold uppercase tracking-wider px-2 py-[2px] rounded-full ${
              project.status === "Active"
                ? "bg-emerald-50 text-emerald-600"
                : project.status === "In Development"
                ? "bg-blue-50 text-blue-600"
                : "bg-neutral-100 text-neutral-500"
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-[13px] text-neutral-500 leading-relaxed mt-1.5 line-clamp-2">
          {project.description}
        </p>

        {/* SDGs */}
        <div className="flex gap-1 flex-wrap mt-3">
          {sdgList.map((s) => (
            <SDGDot key={s.id} color={s.color} name={`${s.id}. ${s.name}`} />
          ))}
        </div>

        {/* Creator */}
        <div className="flex items-center gap-2 mt-3.5 pt-3.5 border-t border-neutral-100">
          <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] font-semibold text-neutral-500">
            {project.creatorName
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </div>
          <span className="text-[12.5px] text-neutral-500">
            {project.creatorName}
          </span>
        </div>
      </div>
    </div>
  )
}
