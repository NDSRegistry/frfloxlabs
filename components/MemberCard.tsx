import { type Member, ROLE_COLORS } from "@/lib/data"

export default function MemberCard({ member }: { member: Member }) {
  const color = ROLE_COLORS[member.role] || "#666"

  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-5 flex gap-4 items-start hover:shadow-md hover:border-neutral-300 transition-all">
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-[15px] font-semibold shrink-0"
        style={{ background: color + "12", color }}
      >
        {member.initials}
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold leading-snug">
          {member.name}
        </h3>

        {/* Role tag */}
        <span
          className="inline-flex items-center mt-1 px-2 py-[2px] text-[11px] font-medium rounded border"
          style={{
            borderColor: color + "25",
            background: color + "08",
            color,
          }}
        >
          {member.role}
        </span>

        {member.bio && (
          <p className="text-[13px] text-neutral-500 leading-relaxed mt-2 line-clamp-2">
            {member.bio}
          </p>
        )}

        <p className="text-[11.5px] text-neutral-400 mt-2">
          {member.projectCount} project{member.projectCount !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  )
}
