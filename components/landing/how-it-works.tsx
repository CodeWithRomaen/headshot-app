import { backdrop, framing, mood, steps, wardrobe } from "@/lib/landing-content"
import { Display, Eyebrow, Section } from "./primitives"

/** The mock control panel shown alongside step 02. */
function LookControls() {
  const groups = [
    { label: "Wardrobe", options: wardrobe },
    { label: "Framing", options: framing },
    { label: "Mood", options: mood },
    { label: "Backdrop", options: backdrop },
  ]

  return (
    <div className="rounded-xl border border-ink-line bg-canvas p-5">
      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-2 eyebrow">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.options.map((option, index) => (
                <span
                  key={option}
                  className={
                    index === 0
                      ? "rounded-full bg-ink px-3 py-1 text-xs font-medium text-canvas"
                      : "rounded-full border border-ink-line px-3 py-1 text-xs text-ink-muted"
                  }
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between border-t border-ink-line pt-4">
        <span className="eyebrow">Ready</span>
        <span className="font-mono text-xs text-ink">4 / 4</span>
      </div>
    </div>
  )
}

function HowItWorks() {
  return (
    <Section id="how-it-works" tone="pure">
      <div className="mb-14 max-w-2xl">
        <Eyebrow className="mb-5">Three steps. Sixty seconds.</Eyebrow>
        <Display size="lg" className="text-left">
          Your best version, ready before the coffee is.
        </Display>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.number} className="border-t border-ink-line pt-6">
            <p className="mb-4 eyebrow">Step {step.number}</p>
            <Display size="sm" className="mb-3 text-left">
              {step.title}
            </Display>
            <p className="leading-relaxed text-pretty text-ink-muted">
              {step.body}
            </p>

            {index === 1 ? (
              <div className="mt-6">
                <LookControls />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Section>
  )
}

export { HowItWorks }
