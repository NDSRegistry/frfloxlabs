export default function SectionHeader({
  label,
  title,
  subtitle,
}: {
  label?: string
  title: string
  subtitle?: string
}) {
  return (
    <div>
      {label && (
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-400 mb-3">
          {label}
        </p>
      )}
      <h1 className="font-display text-4xl tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[15px] text-neutral-500 mt-2 leading-relaxed max-w-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}
