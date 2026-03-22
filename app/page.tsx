import Link from "next/link"
import { projects, members, camps, sdgs } from "@/lib/data"
import ProjectCard from "@/components/ProjectCard"

export default function HomePage() {
  const featured = projects.slice(0, 3)
  const coveredSdgIds = [...new Set(projects.flatMap((p) => p.sdgIds))]

  return (
    <div className="page-in">
      {/* ── Hero ── */}
      <section className="pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-4">
            Innovation Platform
          </p>
          <h1 className="font-display text-[clamp(38px,5.5vw,64px)] leading-[1.05] tracking-tight max-w-[680px]">
            Where ideas become
            <br />
            <em>global impact.</em>
          </h1>
          <p className="text-[17px] text-neutral-500 leading-relaxed max-w-[460px] mt-5">
            Flox Labs connects creators, engineers, and thinkers to build
            projects aligned with the UN Sustainable Development Goals.
          </p>
          <div className="flex gap-3 mt-8 flex-wrap">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[14px] font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Explore Projects
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9,4 13,8 9,12" />
              </svg>
            </Link>
            <Link
              href="/members"
              className="inline-flex items-center px-6 py-2.5 text-[14px] font-medium bg-white text-neutral-900 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Meet the Team
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-14 pt-8 border-t border-neutral-200 flex-wrap">
            {[
              { num: projects.length, label: "Active Projects" },
              { num: members.length, label: "Lab Members" },
              { num: coveredSdgIds.length, label: "SDGs Covered" },
              { num: camps.length, label: "Upcoming Camps" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-[32px] tracking-tight">
                  {s.num}
                </div>
                <div className="text-[13px] text-neutral-400 mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-14 border-t border-neutral-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-end mb-7">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-3">
                Featured
              </p>
              <h2 className="font-display text-[36px] tracking-tight">
                Latest Projects
              </h2>
            </div>
            <Link
              href="/explore"
              className="text-[13px] text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors"
            >
              View all
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9,4 13,8 9,12" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger-grid">
            {featured.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Framework ── */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-[540px] mx-auto">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-3">
              Our Framework
            </p>
            <h2 className="font-display text-[28px] tracking-tight">
              Build. Measure. Impact.
            </h2>
            <p className="text-[15px] text-neutral-500 mt-3 leading-relaxed max-w-[440px] mx-auto">
              Every project on Flox Labs is tied to at least one UN Sustainable
              Development Goal, ensuring real-world relevance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 stagger-grid">
            {[
              {
                num: "01",
                title: "Ideate",
                desc: "Identify a problem tied to global sustainability challenges and design a solution.",
              },
              {
                num: "02",
                title: "Build",
                desc: "Prototype, test, and iterate using the tools and community at Flox Labs.",
              },
              {
                num: "03",
                title: "Scale",
                desc: "Connect with mentors, camps, and partners to bring your project to real communities.",
              },
            ].map((s) => (
              <div key={s.num} className="p-6">
                <span className="font-display text-[32px] text-neutral-300">
                  {s.num}
                </span>
                <h3 className="text-[16px] font-semibold mt-2">{s.title}</h3>
                <p className="text-[14px] text-neutral-500 leading-relaxed mt-1.5">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SDGs ── */}
      <section className="py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-3">
            Sustainability
          </p>
          <h2 className="font-display text-[36px] tracking-tight mb-6">
            SDGs We Cover
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {sdgs.map((s) => {
              const count = projects.filter((p) =>
                p.sdgIds.includes(s.id)
              ).length
              return (
                <div
                  key={s.id}
                  className="px-3 py-1.5 rounded-md text-[12.5px] font-medium border transition-colors"
                  style={{
                    borderColor: count > 0 ? s.color + "30" : "#f0f0f0",
                    background: count > 0 ? s.color + "10" : "#fafafa",
                    color: count > 0 ? s.color : "#999",
                  }}
                >
                  {s.id}. {s.name}{" "}
                  {count > 0 && (
                    <span className="opacity-60">({count})</span>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
