interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-8 max-w-4xl">
      {eyebrow && <p className="text-xs font-medium uppercase tracking-[0.16em] text-md-primary">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold text-md-onSurface md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-md-onSurfaceVariant">{description}</p>}
    </div>
  )
}
