import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 pt-12 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.png"
                alt="Flox Labs"
                width={26}
                height={26}
                className="rounded"
              />
              <span className="font-semibold text-[15px]">Flox Labs</span>
            </div>
            <p className="text-[13.5px] text-neutral-500 leading-relaxed mt-3 max-w-[260px]">
              An innovation platform connecting technology with the UN
              Sustainable Development Goals.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-neutral-400 mb-3">
              Platform
            </h4>
            <Link href="/explore" className="block text-[13.5px] text-neutral-500 hover:text-neutral-900 mb-2 transition-colors">
              Explore
            </Link>
            <Link href="/members" className="block text-[13.5px] text-neutral-500 hover:text-neutral-900 mb-2 transition-colors">
              Members
            </Link>
            <Link href="/magazine" className="block text-[13.5px] text-neutral-500 hover:text-neutral-900 mb-2 transition-colors">
              Magazine
            </Link>
            <Link href="/camps" className="block text-[13.5px] text-neutral-500 hover:text-neutral-900 mb-2 transition-colors">
              Camps
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-neutral-400 mb-3">
              Company
            </h4>
            <span className="block text-[13.5px] text-neutral-400 mb-2">About</span>
            <span className="block text-[13.5px] text-neutral-400 mb-2">Contact</span>
            <span className="block text-[13.5px] text-neutral-400 mb-2">Careers</span>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-neutral-400 mb-3">
              Legal
            </h4>
            <span className="block text-[13.5px] text-neutral-400 mb-2">Privacy</span>
            <span className="block text-[13.5px] text-neutral-400 mb-2">Terms</span>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-neutral-100 flex flex-col sm:flex-row justify-between text-[12px] text-neutral-400 gap-2">
          <span>&copy; 2026 Flox Labs. All rights reserved.</span>
          <span>Built with purpose.</span>
        </div>
      </div>
    </footer>
  )
}
