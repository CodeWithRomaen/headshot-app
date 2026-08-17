import { compare, verdict } from "@/lib/landing-content"
import { CtaButton, Display, Eyebrow, Section } from "./primitives"

function Compare() {
  return (
    <Section id="compare" tone="alt">
      <div className="mb-14 max-w-2xl">
        <Eyebrow className="mb-5">{compare.eyebrow}</Eyebrow>
        <Display size="lg" className="mb-5 text-left">
          {compare.headline}
        </Display>
        <p className="text-lg leading-relaxed text-pretty text-ink-muted">
          {compare.body}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* The studio column, deliberately the plainer of the two. */}
        <div className="rounded-2xl border border-ink-line bg-canvas p-8">
          <p className="mb-1 text-sm text-ink-muted">The studio shoot</p>
          <Display size="md" className="mb-8 text-left text-ink-muted">
            $350+
          </Display>
          <dl className="space-y-5">
            {compare.rows.map((row) => (
              <div key={row.label} className="border-t border-ink-line pt-4">
                <dt className="mb-1 eyebrow">{row.label}</dt>
                <dd className="text-ink-muted">{row.studio}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative rounded-2xl bg-ink p-8 text-canvas">
          <span className="absolute top-8 right-8 eyebrow text-canvas/60">
            Best value
          </span>
          <p className="mb-1 text-sm text-canvas/70">The sixty-second shoot</p>
          <Display size="md" className="mb-8 text-left text-canvas">
            $10
          </Display>
          <dl className="space-y-5">
            {compare.rows.map((row) => (
              <div key={row.label} className="border-t border-canvas/15 pt-4">
                <dt className="mb-1 eyebrow text-canvas/50">{row.label}</dt>
                <dd className="text-canvas">{row.ours}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8">
            <CtaButton
              href="/signin"
              className="w-full bg-canvas text-ink hover:bg-canvas/90"
            >
              Try it now
            </CtaButton>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-ink-faint">
        Professional results without the professional invoice.
      </p>
    </Section>
  )
}

function Verdict() {
  return (
    <Section tone="canvas" className="py-32 md:py-40">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <Eyebrow className="mb-5">{verdict.eyebrow}</Eyebrow>
        <Display size="lg" className="mb-5">
          {verdict.headline}
        </Display>
        <p className="text-lg leading-relaxed text-pretty text-ink-muted">
          {verdict.body}
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-dashed border-ink-line p-8 text-center">
          <p className="mb-6 eyebrow">{verdict.before.label}</p>
          <ul className="space-y-3">
            {verdict.before.lines.map((line) => (
              <li key={line} className="text-lg text-ink-faint">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <span className="text-center font-display text-2xl text-ink-faint italic">
          or
        </span>

        <div className="rounded-2xl border border-ink bg-canvas-pure p-8 text-center shadow-sm">
          <p className="mb-6 eyebrow text-ink">{verdict.after.label}</p>
          <ul className="space-y-3">
            {verdict.after.lines.map((line) => (
              <li key={line} className="text-lg font-medium text-ink">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Display size="md" className="mb-8">
          Decide which one shows up.
        </Display>
        <CtaButton href="/signin" size="lg">
          {verdict.cta}
        </CtaButton>
        <p className="mt-5 text-sm text-ink-faint">{verdict.footnote}</p>
      </div>
    </Section>
  )
}

export { Compare, Verdict }
