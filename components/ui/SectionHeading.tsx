import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  label?: string
  title: string
  highlight?: string
  description?: string
  centered?: boolean
  light?: boolean
  className?: string
}

export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  centered = true,
  light = false,
  className = '',
}: SectionHeadingProps) {
  const titleParts = highlight ? title.split(highlight) : [title]

  return (
    <div className={cn('mb-12', centered && 'text-center', className)}>
      {label && (
        <span className={cn(
          'inline-block text-xs font-bold tracking-[0.2em] uppercase mb-3 px-3 py-1 rounded-full',
          light
            ? 'text-sky-200 bg-white/10'
            : 'text-[var(--sky-dark)] bg-[var(--sky-light)]/30'
        )}>
          {label}
        </span>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
        light ? 'text-white' : 'text-[var(--navy)]'
      )}>
        {titleParts[0]}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
        {titleParts[1]}
      </h2>
      {description && (
        <p className={cn(
          'mt-4 text-base md:text-lg max-w-2xl leading-relaxed',
          centered && 'mx-auto',
          light ? 'text-sky-100/80' : 'text-[var(--text-secondary)]'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
