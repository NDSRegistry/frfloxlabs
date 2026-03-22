"use client"

import { useState } from "react"
import { projects, sdgs } from "@/lib/data"
import ProjectCard from "@/components/ProjectCard"
import SectionHeader from "@/components/SectionHeader"

export default function ExplorePage() {
  const [search, setSearch] = useState("")
  const [sdgFilter, setSdgFilter] = useState<number | null>(null)
  const [statusFilter, setStatusFilter] = useState("")

  const filtered = projects.filter((p) => {
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
    const matchSdg = !sdgFilter || p.sdgIds.includes(sdgFilter)
    const matchStatus = !statusFilter || p.status === statusFilter
    return matchSearch && matchSdg && matchStatus
  })

  return (
    <div className="page-in py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="Projects"
          title="Explore"
          subtitle="Browse all projects built by our lab community."
        />

        {/* Filters */}
        <div className="flex gap-3 mt-6 flex-wrap">
          <div className="relative flex-1 min-w-[220px]">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="7" cy="7" r="4" />
              <line x1="10" y1="10" x2="14" y2="14" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-9 pr-3 py-2.5 text-[14px] border border-neutral-200 rounded-lg outline-none focus:border-neutral-400 transition-colors"
            />
          </div>
          <select
            value={sdgFilter ?? ""}
            onChange={(e) =>
              setSdgFilter(e.target.value ? Number(e.target.value) : null)
            }
            className="px-3 py-2.5 text-[14px] border border-neutral-200 rounded-lg outline-none focus:border-neutral-400 bg-white min-w-[150px]"
          >
            <option value="">All SDGs</option>
            {sdgs.map((s) => (
              <option key={s.id} value={s.id}>
                {s.id}. {s.name}
              </option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2.5 text-[14px] border border-neutral-200 rounded-lg outline-none focus:border-neutral-400 bg-white min-w-[130px]"
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="In Development">In Development</option>
          </select>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 stagger-grid">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 mt-7 bg-neutral-50 rounded-xl border border-neutral-100">
            <svg
              className="mx-auto text-neutral-300 mb-3"
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="7" cy="7" r="4" />
              <line x1="10" y1="10" x2="14" y2="14" />
            </svg>
            <p className="text-sm text-neutral-500">
              No projects match your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
