"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/members", label: "Members" },
  { href: "/magazine", label: "Magazine" },
  { href: "/camps", label: "Camps" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200 h-[60px]">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.png"
              alt="Flox Labs"
              width={30}
              height={30}
              className="rounded"
            />
            <span className="font-semibold text-[15px] tracking-tight">
              Flox Labs
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-[13.5px] rounded-md transition-colors ${
                  pathname === l.href
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center px-4 py-[7px] text-[13px] font-medium bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer">
              Sign In
            </span>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="5" x2="17" y2="17" />
                  <line x1="17" y1="5" x2="5" y2="17" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 p-6 drop-in border-t border-neutral-200">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-[15px] ${
                  pathname === l.href
                    ? "text-neutral-900 font-medium"
                    : "text-neutral-500"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <span className="inline-flex items-center px-5 py-2.5 text-[14px] font-medium bg-neutral-900 text-white rounded-lg cursor-pointer">
                Sign In
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
