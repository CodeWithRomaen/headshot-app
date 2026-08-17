import Image from "next/image"

import { cn } from "@/lib/utils"

/** Small mono, uppercase, wide-tracked label that opens most sections. */
function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>
}

/**
 * Serif display type. The reference sets tracking tighter as size grows, so
 * each scale carries its own tracking and leading rather than inheriting.
 */
function Display({
  as: Tag = "h2",
  size = "md",
  children,
  className,
}: {
  as?: "h1" | "h2" | "h3" | "p"
  size?: "xl" | "lg" | "md" | "sm"
  children: React.ReactNode
  className?: string
}) {
  return (
    <Tag
      className={cn(
        "font-display font-normal text-balance text-ink",
        size === "xl" &&
          "text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em]",
        size === "lg" &&
          "text-[clamp(2.125rem,5vw,3.5rem)] leading-[1.02] tracking-[-0.025em]",
        size === "md" &&
          "text-[clamp(1.875rem,3.5vw,2.75rem)] leading-[1.15] tracking-[-0.02em]",
        size === "sm" &&
          "text-[clamp(1.375rem,2.5vw,2.25rem)] leading-[1.25] tracking-[-0.02em]",
        className
      )}
    >
      {children}
    </Tag>
  )
}

/** Pill CTA. Solid ink by default, outlined as the quieter variant. */
function CtaButton({
  href = "#",
  variant = "solid",
  size = "md",
  children,
  className,
}: {
  href?: string
  variant?: "solid" | "outline"
  size?: "md" | "lg"
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold",
        "transition-transform duration-200 ease-out hover:-translate-y-0.5",
        "focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:outline-none",
        size === "md" && "px-7 py-3.5",
        size === "lg" && "px-8 py-4 text-base",
        variant === "solid" && "bg-ink text-canvas hover:bg-ink/90",
        variant === "outline" &&
          "border border-ink/15 bg-transparent text-ink hover:border-ink/40",
        className
      )}
    >
      {children}
    </a>
  )
}

function Section({
  id,
  tone = "canvas",
  className,
  children,
}: {
  id?: string
  tone?: "canvas" | "alt" | "pure" | "ink"
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-24 md:py-32",
        tone === "canvas" && "bg-canvas",
        tone === "alt" && "bg-canvas-alt",
        tone === "pure" && "bg-canvas-pure",
        tone === "ink" && "bg-ink",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}

/**
 * A before/after portrait pair.
 *
 * The "before" frame is deliberately muted so the pair reads at a glance.
 * Both images are stock portraits standing in for real output.
 */
function BeforeAfter({
  before,
  after,
  alt,
  className,
  rounded = "rounded-xl",
}: {
  before: string
  after: string
  alt: string
  className?: string
  rounded?: string
}) {
  return (
    <div className={cn("grid grid-cols-2 gap-2", className)}>
      <figure className="relative">
        <div
          className={cn(
            "relative aspect-4/5 overflow-hidden bg-canvas-alt",
            rounded
          )}
        >
          <Image
            src={before}
            alt={`${alt}, before`}
            fill
            sizes="(max-width: 768px) 45vw, 240px"
            className="object-cover brightness-[0.97] contrast-[0.92] saturate-[0.55]"
          />
        </div>
        <figcaption className="mt-2 eyebrow">Before</figcaption>
      </figure>
      <figure className="relative">
        <div
          className={cn(
            "relative aspect-4/5 overflow-hidden bg-canvas-alt",
            rounded
          )}
        >
          <Image
            src={after}
            alt={`${alt}, after`}
            fill
            sizes="(max-width: 768px) 45vw, 240px"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 eyebrow text-ink">After</figcaption>
      </figure>
    </div>
  )
}

export { BeforeAfter, CtaButton, Display, Eyebrow, Section }
