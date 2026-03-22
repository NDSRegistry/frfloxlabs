"use client"

import { useState } from "react"
import { posts } from "@/lib/data"
import SectionHeader from "@/components/SectionHeader"

const TAG_COLORS: Record<string, string> = {
  Announcement: "text-blue-600",
  "Project Spotlight": "text-emerald-600",
  Events: "text-orange-600",
  Research: "text-violet-600",
}

export default function MagazinePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = posts.find((p) => p.id === selectedId)

  // Full post view
  if (selected) {
    return (
      <div className="page-in py-12">
        <div className="max-w-[680px] mx-auto px-6">
          <button
            onClick={() => setSelectedId(null)}
            className="text-[13px] text-neutral-500 hover:text-neutral-900 mb-6 flex items-center gap-1 transition-colors"
          >
            &larr; Back to Magazine
          </button>

          <span
            className={`text-[11px] font-semibold uppercase tracking-wider ${
              TAG_COLORS[selected.tag] || "text-neutral-400"
            }`}
          >
            {selected.tag}
          </span>

          <h1 className="font-display text-[32px] tracking-tight mt-2 leading-tight">
            {selected.title}
          </h1>

          <div className="flex items-center gap-3 mt-4 pb-6 border-b border-neutral-100">
            <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-[10px] font-semibold text-neutral-500">
              {selected.authorName
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <span className="text-[14px]">{selected.authorName}</span>
            <span className="text-[13px] text-neutral-400">
              {new Date(selected.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="mt-7 text-[16px] leading-[1.75] text-neutral-700 whitespace-pre-line">
            {selected.content}
          </div>
        </div>
      </div>
    )
  }

  // List view
  return (
    <div className="page-in py-12">
      <div className="max-w-[720px] mx-auto px-6">
        <SectionHeader
          label="Stories"
          title="Magazine"
          subtitle="Updates, project spotlights, and news from the lab."
        />

        <div className="bg-white border border-neutral-200 rounded-xl mt-7 overflow-hidden">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedId(post.id)}
              className="px-7 py-6 border-b border-neutral-100 last:border-b-0 cursor-pointer hover:bg-neutral-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <span
                  className={`text-[11px] font-semibold uppercase tracking-wider ${
                    TAG_COLORS[post.tag] || "text-neutral-400"
                  }`}
                >
                  {post.tag}
                </span>
                <span className="text-[12.5px] text-neutral-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>

              <h2 className="text-[18px] font-semibold tracking-tight mt-2 leading-snug">
                {post.title}
              </h2>

              <p className="text-[14px] text-neutral-500 leading-relaxed mt-1.5 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 mt-3">
                <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center text-[9px] font-semibold text-neutral-500">
                  {post.authorName
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <span className="text-[12.5px] text-neutral-500">
                  {post.authorName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
