import Image from "next/image"

import { hero, showcase } from "@/lib/landing-content"
import { CtaButton, Display, Eyebrow } from "./primitives"

/** The four portraits fanned out beside the headline. */
const strip = showcase.slice(0, 4)

function Hero() {
  return (
    <section className="overflow-hidden bg-canvas px-6 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Eyebrow className="mb-6">{hero.eyebrow}</Eyebrow>

            <Display as="h1" size="xl" className="mb-7 text-left">
              {hero.headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Display>

            <p className="mb-9 max-w-lg text-lg leading-relaxed text-pretty text-ink-muted">
              {hero.body}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <CtaButton href="/signin" size="lg">
                {hero.cta}
                <span aria-hidden="true">→</span>
              </CtaButton>
              <p className="text-sm text-ink-faint">{hero.proof}</p>
            </div>
          </div>

          {/* Staggered portrait strip — every other frame drops down. */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-3">
            {strip.map((item, index) => (
              <div
                key={item.name}
                className={index % 2 === 1 ? "sm:translate-y-8" : undefined}
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-canvas-alt">
                  <Image
                    src={item.after}
                    alt={`Headshot in the ${item.style} style`}
                    fill
                    sizes="(max-width: 640px) 45vw, 160px"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
                <p className="mt-2 truncate eyebrow">{item.style}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }
