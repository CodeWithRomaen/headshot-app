import { finalCta, pricing } from "@/lib/landing-content"
import { CtaButton, Display, Eyebrow, Section } from "./primitives"

function Check({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`mt-1 size-3.5 shrink-0 ${dark ? "text-canvas/70" : "text-ink"}`}
    >
      <path
        d="M3 8.5l3.5 3.5L13 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Pricing() {
  return (
    <Section id="pricing" tone="alt">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <Eyebrow className="mb-5">{pricing.eyebrow}</Eyebrow>
        <Display size="lg" className="mb-5">
          {pricing.headline}
        </Display>
        <p className="text-lg leading-relaxed text-pretty text-ink-muted">
          {pricing.body}
        </p>
      </div>

      <div className="grid items-start gap-6 md:grid-cols-3">
        {pricing.tiers.map((tier) => {
          const dark = tier.featured
          return (
            <div
              key={tier.name}
              className={
                dark
                  ? "relative rounded-2xl bg-ink p-8 text-canvas shadow-lg md:-translate-y-3"
                  : "rounded-2xl border border-ink-line bg-canvas p-8"
              }
            >
              {dark ? (
                <span className="absolute top-8 right-8 eyebrow text-canvas/60">
                  Most popular
                </span>
              ) : null}

              <p className={dark ? "mb-1 text-canvas" : "mb-1 text-ink"}>
                {tier.name}
              </p>
              <p className="mb-6 eyebrow">{tier.credits}</p>

              <div className="mb-1 flex items-baseline gap-2">
                <Display
                  size="md"
                  className={dark ? "text-left text-canvas" : "text-left"}
                >
                  {tier.price}
                </Display>
                <span
                  className={
                    dark ? "text-sm text-canvas/60" : "text-sm text-ink-faint"
                  }
                >
                  one time
                </span>
              </div>
              <p
                className={
                  dark
                    ? "mb-8 text-sm text-canvas/70"
                    : "mb-8 text-sm text-ink-muted"
                }
              >
                {tier.unit}
              </p>

              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Check dark={dark} />
                    <span
                      className={
                        dark
                          ? "text-sm leading-relaxed text-canvas/85"
                          : "text-sm leading-relaxed text-ink-muted"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <CtaButton
                href="/signin"
                variant={dark ? "solid" : "outline"}
                className={
                  dark
                    ? "w-full bg-canvas text-ink hover:bg-canvas/90"
                    : "w-full"
                }
              >
                Get started
              </CtaButton>
            </div>
          )
        })}
      </div>

      <p className="mt-10 text-center text-sm text-ink-faint">
        {pricing.footnote}
      </p>
    </Section>
  )
}

function FinalCta() {
  return (
    <Section tone="canvas" className="py-32 md:py-40">
      <div className="mx-auto max-w-2xl text-center">
        <Display size="lg" className="mb-6">
          {finalCta.headline}
        </Display>
        <p className="mb-10 text-lg leading-relaxed text-pretty text-ink-muted">
          {finalCta.body}
        </p>
        <CtaButton href="/signin" size="lg">
          {finalCta.cta}
        </CtaButton>
        <p className="mt-5 text-sm text-ink-faint">{finalCta.footnote}</p>
      </div>
    </Section>
  )
}

export { FinalCta, Pricing }
