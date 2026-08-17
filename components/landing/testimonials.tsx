import { testimonials } from "@/lib/landing-content"
import { BeforeAfter, Display, Eyebrow, Section } from "./primitives"

function Stars() {
  return (
    <div className="flex gap-0.5 text-ink" aria-label="Five out of five">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true" className="text-xs">
          ★
        </span>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <Section tone="pure" className="py-32 md:py-40">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <Eyebrow className="mb-5">What changed for them</Eyebrow>
        <Display size="md">
          &ldquo;I changed one photo. A week later the recruiters found
          me.&rdquo;
        </Display>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col rounded-2xl border border-ink-line bg-canvas p-7"
          >
            <BeforeAfter
              before={item.before}
              after={item.after}
              alt={item.name}
              className="mb-6 max-w-[240px]"
              rounded="rounded-lg"
            />

            <Stars />

            <blockquote className="mt-4 flex-1 leading-relaxed text-pretty text-ink">
              &ldquo;{item.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-line pt-5">
              <span className="flex size-9 items-center justify-center rounded-full bg-ink text-xs font-semibold text-canvas">
                {item.initials}
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">
                  {item.name}
                </span>
                <span className="block text-sm text-ink-muted">
                  {item.title}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

export { Testimonials }
