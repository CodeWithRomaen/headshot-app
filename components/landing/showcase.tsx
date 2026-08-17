import { showcase } from "@/lib/landing-content"
import { BeforeAfter, CtaButton, Display, Eyebrow, Section } from "./primitives"

function Showcase() {
  return (
    <Section id="examples" tone="pure">
      <div className="mb-14 max-w-2xl">
        <Eyebrow className="mb-5">Real selfies, real results</Eyebrow>
        <Display size="lg" className="mb-5 text-left">
          Don&apos;t take our word for it. Look at both.
        </Display>
        <p className="text-lg leading-relaxed text-pretty text-ink-muted">
          Every frame on the right started as one ordinary phone photo on the
          left.
        </p>
      </div>

      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {showcase.map((item) => (
          <article key={item.name}>
            <BeforeAfter
              before={item.before}
              after={item.after}
              alt={item.name}
            />
            <div className="mt-4 border-t border-ink-line pt-4">
              <p className="font-medium text-ink">{item.name}</p>
              <p className="text-sm text-ink-muted">{item.role}</p>
              <p className="mt-2 eyebrow">{item.style}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <CtaButton href="/signin" size="lg">
          Create my headshot
        </CtaButton>
      </div>
    </Section>
  )
}

export { Showcase }
