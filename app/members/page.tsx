import { getMembersByRole } from "@/lib/data"
import MemberCard from "@/components/MemberCard"
import SectionHeader from "@/components/SectionHeader"

export default function MembersPage() {
  const groups = getMembersByRole()

  return (
    <div className="page-in py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="Community"
          title="Lab Members"
          subtitle="The people behind the projects."
        />

        {groups.map((group) => (
          <div key={group.role} className="mt-10">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-[18px] font-semibold tracking-tight">
                {group.role}s
              </h2>
              <span className="text-[12px] text-neutral-400 bg-neutral-50 px-2 py-0.5 rounded">
                {group.members.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-grid">
              {group.members.map((m) => (
                <MemberCard key={m.id} member={m} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
