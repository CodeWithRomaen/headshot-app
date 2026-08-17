import { Compare, Verdict } from "@/components/landing/compare"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { FinalCta, Pricing } from "@/components/landing/pricing"
import { Showcase } from "@/components/landing/showcase"
import { SiteFooter, SiteHeader } from "@/components/landing/site-chrome"
import { Testimonials } from "@/components/landing/testimonials"

export default function Page() {
  return (
    <div data-surface="marketing" className="min-h-svh bg-canvas">
      <SiteHeader />
      <main>
        <Hero />
        <Showcase />
        <HowItWorks />
        <Compare />
        <Verdict />
        <Testimonials />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  )
}
